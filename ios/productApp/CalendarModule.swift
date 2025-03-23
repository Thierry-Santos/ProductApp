import Foundation
import EventKit
import React

@objc(CalendarModule)
class CalendarModule: NSObject {
  
  // Método para adicionar um evento ao calendário
  @objc func addEvent(_ title: String, 
                      description: String, 
                      startDate: String, 
                      endDate: String, 
                      successCallback: @escaping RCTResponseSenderBlock, 
                      errorCallback: @escaping RCTResponseSenderBlock) {
    
    // Solicitar acesso ao calendário
    let eventStore = EKEventStore()
    
    eventStore.requestAccess(to: .event) { (granted, error) in
      if granted {
        // Converter as strings de data em objetos Date
        if let start = Double(startDate), let end = Double(endDate) {
          let startDate = Date(timeIntervalSince1970: start)
          let endDate = Date(timeIntervalSince1970: end)
          
          // Criar o evento
          let event = EKEvent(eventStore: eventStore)
          event.title = title
          event.notes = description
          event.startDate = startDate
          event.endDate = endDate
          event.calendar = eventStore.defaultCalendarForNewEvents
          
          do {
            try eventStore.save(event, span: .thisEvent)
            successCallback([ "Evento adicionado com sucesso" ])
          } catch {
            errorCallback([ "Erro ao salvar evento: \(error.localizedDescription)" ])
          }
        } else {
          errorCallback([ "Data inválida" ])
        }
      } else {
        errorCallback([ "Permissão negada para acessar o calendário" ])
      }
    }
  }
}
