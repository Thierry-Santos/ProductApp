import Foundation
import EventKit
import React

@objc(CalendarModule)
class CalendarModule: NSObject {

  @objc func addEvent(_ title: String, 
                      description: String, 
                      startDate: String, 
                      endDate: String, 
                      successCallback: @escaping RCTResponseSenderBlock, 
                      errorCallback: @escaping RCTResponseSenderBlock) {
    
    let eventStore = EKEventStore()
    
    eventStore.requestAccess(to: .event) { (granted, error) in
      if granted {
        if let start = Double(startDate), let end = Double(endDate) {
          let startDate = Date(timeIntervalSince1970: start)
          let endDate = Date(timeIntervalSince1970: end)
          
          let event = EKEvent(eventStore: eventStore)
          event.title = title
          event.notes = description
          event.startDate = startDate
          event.endDate = endDate
          event.calendar = eventStore.defaultCalendarForNewEvents
          
          do {
            try eventStore.save(event, span: .thisEvent)
            successCallback([ "Event created with success" ])
          } catch {
            errorCallback([ "Fail to create the event: \(error.localizedDescription)" ])
          }
        } else {
          errorCallback([ "Invalid date" ])
        }
      } else {
        errorCallback([ "Permission denied for using calendar" ])
      }
    }
  }
}
