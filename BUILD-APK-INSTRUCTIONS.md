# �� ShopEasy APK Build Instructions

## 🔧 Required Files for APK with Location Permission

### 1. AndroidManifest.xml (✅ Created)
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

### 2. config.xml (✅ Created) 
Cordova configuration with geolocation plugin

### 3. Location Permission Flow (✅ Implemented)
- Runtime permission request
- Cordova plugin support
- Settings deep-link
- Fallback handling

## 🚀 APK Build Methods

### Method 1: Cordova/PhoneGap
```bash
# Install cordova
npm install -g cordova

# Create project
cordova create ShopEasy com.shopeasy.app ShopEasy

# Copy files
cp index.html platforms/android/app/src/main/assets/www/
cp *.js *.css platforms/android/app/src/main/assets/www/
cp AndroidManifest.xml platforms/android/app/src/main/AndroidManifest.xml

# Add platform & plugins
cordova platform add android
cordova plugin add cordova-plugin-geolocation
cordova plugin add cordova-plugin-android-permissions

# Build APK
cordova build android --release
```

### Method 2: Android Studio WebView Project
```xml
<!-- In AndroidManifest.xml -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

<!-- WebView activity with geolocation support -->
<activity android:name=".MainActivity">
    <!-- Geolocation configuration -->
</activity>
```

### Method 3: Online APK Builders
1. **AppsGeyser** - Add location permission in settings
2. **Appy Pie** - Enable location services
3. **BuildFire** - Configure permissions

## ⚠️ Critical Requirements

### Location Permission MUST be in manifest:
```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

### WebView geolocation enabled:
```java
webView.getSettings().setGeolocationEnabled(true);
webView.setWebChromeClient(new WebChromeClient() {
    @Override
    public void onGeolocationPermissionsShowPrompt(String origin, 
        GeolocationPermissions.Callback callback) {
        callback.invoke(origin, true, false);
    }
});
```

## 📱 Testing Checklist

1. ✅ Install APK on device
2. ✅ Go to Settings → Apps → ShopEasy  
3. ✅ Check Permissions section shows "Location"
4. ✅ Enable location permission
5. ✅ Test location request in app
6. ✅ Verify permission popup appears

## 🔧 Troubleshooting

### Permission not visible in settings:
- Check AndroidManifest.xml has location permissions
- Rebuild APK with proper manifest
- Use Android Studio to verify permissions

### Location still not working:
- Enable location services on device
- Check app has location permission granted
- Verify GPS is enabled
- Test with manual address entry

