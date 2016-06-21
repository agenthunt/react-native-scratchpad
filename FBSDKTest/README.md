**react-native-fbsdk-integration from Scratch

- Install Facebook SDK for ios from https://developers.facebook.com/docs/ios/ into ~/Documents directory.
- ```npm i react-native-fbsdk --save```
- rnpm link (If you have not installed rnpm, then ```npm i rnpm -g```)
- For the react-native-fbsdk-^0.2.1 version being currently used, if you run ```react-native run-ios``` it will complain with linking errors such as "ld: framework not found FBSDKLoginKit for architecture x86_64 Print: Entry, ":CFBundleIdentifier", Does Not Exist"
- To resolve the above error, Drag and Drop the FBSDKCoreKit.framework, FBSDKLoginKit.framework, FBSDKShareKit.framework to SevenSense project in Xcode
- Add the path ```~/Documents/FacebookSDK``` to Build Settings-> Search Paths -> Framework Search Paths in Xcode
- Make sure your  AppDelegate.m  has following code as shown

```
#import "AppDelegate.h"

#import "RCTRootView.h"


#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>


@implementation AppDelegate

.....
- (void)applicationDidBecomeActive:(UIApplication *)application {
  [FBSDKAppEvents activateApp];
}


- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                        openURL:url
                                              sourceApplication:sourceApplication
                                                     annotation:annotation];
}

@end
```


 - Include the following in Info.plist

 -In Xcode, secondary-click your project's .plist file and select Open As -> Source Code. Insert the following XML snippet into the body of your file just before the final </dict> element.

 ```
 <key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>fb{your-app-id}</string>
    </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>{your-app-id}</string>
<key>FacebookDisplayName</key>
<string>{your-app-name}</string>
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fb-messenger-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>
```
