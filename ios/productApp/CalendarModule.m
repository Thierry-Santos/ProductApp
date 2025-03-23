#import <React/RCTBridgeModule.h>
#import <EventKit/EventKit.h>

@interface RCT_EXTERN_MODULE(CalendarModule, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)title
                  description:(NSString *)description
                  startDate:(NSString *)startDate
                  endDate:(NSString *)endDate
                  successCallback:(RCTResponseSenderBlock)successCallback
                  errorCallback:(RCTResponseSenderBlock)errorCallback)

@end