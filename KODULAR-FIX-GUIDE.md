# 🔧 Kodular WebViewer Fixes

## Problem: Payment apps not opening from Kodular WebViewer

### Kodular WebViewer Settings:
1. Open Kodular project
2. Select WebViewer component
3. In Properties panel:
   - ✅ Enable "AllowLocationAccess" 
   - ✅ Enable "JavaScriptEnabled"
   - ✅ Enable "DomStorageEnabled"
   - ✅ Enable "FileAccess"
   - ✅ Enable "AllowFileAccessFromFileURLs"

### Add Permissions in Kodular:
1. Go to "Screen1" properties
2. Scroll to "Permissions" section
3. Add these permissions:
   - android.permission.ACCESS_FINE_LOCATION
   - android.permission.ACCESS_COARSE_LOCATION
   - android.permission.INTERNET
   - android.permission.ACCESS_NETWORK_STATE

### For Payment App Opening:
1. Add "ActivityStarter" component
2. Use JavaScript bridge to open payment apps
3. Alternative: Use Custom URLs with proper intent handling

### Alternative: Enhanced Manual Flow
- Focus on manual address entry
- Improve payment confirmation system
- Use WhatsApp integration for payment verification
