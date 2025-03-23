import Foundation
import EventKit
import React

@objc(CalendarModule)
class CalendarModule: NSObject {

  @objc func addEvent(_ title: String, 
                      description: String,
                      successCallback: @escaping RCTResponseSenderBlock, 
                      errorCallback: @escaping RCTResponseSenderBlock) {
    
    let eventStore = EKEventStore()
    
    eventStore.requestAccess(to: .event) { (granted, error) in
      if granted {
        let start = Date()
        let end = start.addingTimeInterval(3600)

        let startTimestamp = start.timeIntervalSince1970
        let endTimestamp = end.timeIntervalSince1970

        let startDate = Date(timeIntervalSince1970: startTimestamp)
        let endDate = Date(timeIntervalSince1970: endTimestamp)
        
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
        errorCallback([ "Permission denied for using calendar" ])
      }
    }
  }
}
