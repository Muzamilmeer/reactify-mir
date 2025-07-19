# 🛍️ ShopEasy Local Setup Guide

## 🔐 Why Local Authentication Doesn't Work

**WebAuthn API** (used for biometric authentication) requires:
- ✅ **HTTPS** (secure connection)
- ✅ **Secure context**
- ✅ **Valid certificate**

When you open files directly (file://), these requirements aren't met.

## 🚀 Solutions for Local Testing

### 🌐 Option 1: Use GitHub Pages (Recommended)
**Easiest way - just click and use!**

```
https://ctrlxmir.github.io/reactify-mir/
```
- ✅ Full biometric authentication
- ✅ All features working
- ✅ No setup required

### 🖥️ Option 2: Local HTTPS Server

#### **Windows Users:**
1. **Double-click** `start-server.bat`
2. **Wait** for server to start
3. **Browser opens automatically**
4. **Accept certificate warning** (click "Advanced" → "Proceed to localhost")

#### **Mac/Linux Users:**
1. **Make executable:** `chmod +x start-server.sh`
2. **Run:** `./start-server.sh`
3. **Browser opens automatically**
4. **Accept certificate warning**

#### **Manual Python Command:**
```bash
python server.py
```

### 📱 Option 3: Simple HTTP Server (Password Only)
If HTTPS server fails, use password authentication:

#### **Windows:**
```cmd
python -m http.server 8000
```

#### **Mac/Linux:**
```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000/local-test.html`

## 🔧 Requirements

### **Python Installation:**
- **Windows:** Download from [python.org](https://python.org/downloads)
- **Mac:** `brew install python3` or download from python.org
- **Linux:** `sudo apt install python3` (Ubuntu) or equivalent

### **Optional (for better HTTPS):**
```bash
pip install cryptography
```

## 📂 Files Explanation

| File | Purpose | Authentication |
|------|---------|----------------|
| `index.html` | Main app | Biometric + Password |
| `local-test.html` | Testing only | Password only |
| `server.py` | HTTPS server | Enables biometric |
| `start-server.bat` | Windows starter | Auto-setup |
| `start-server.sh` | Mac/Linux starter | Auto-setup |

## 🔒 Certificate Warning

When using local HTTPS server, browser shows "Not Secure" warning:

1. **Click "Advanced"**
2. **Click "Proceed to localhost (unsafe)"**
3. **This is normal** for self-signed certificates
4. **Your data is still encrypted**

## 🧪 Testing Steps

### **1. Test Device Capabilities:**
```
Open: local-test.html
Check: Device information section
```

### **2. Test Biometric (HTTPS only):**
```
Open: https://localhost:8443/index.html
Try: Fingerprint/Face setup
```

### **3. Test Password (Any server):**
```
Open: Any version
Try: Password setup
```

### **4. Test Lock/Unlock:**
```
Setup authentication → Lock app → Try unlock
```

## ⚡ Quick Start Commands

### **One-line server start:**
```bash
# Windows
start-server.bat

# Mac/Linux  
./start-server.sh

# Manual
python server.py
```

### **Troubleshooting:**
```bash
# Check Python
python --version

# Simple HTTP server
python -m http.server 8000

# Open test page
# http://localhost:8000/local-test.html
```

## 🔧 Common Issues & Solutions

### **"Authentication not supported"**
- ✅ **Solution:** Use HTTPS server or password mode
- ✅ **Quick fix:** Run `start-server.bat` or `start-server.sh`

### **"Python not found"**
- ✅ **Solution:** Install Python from python.org
- ✅ **Windows:** Add to PATH during installation

### **"Certificate error"**
- ✅ **Solution:** Click "Advanced" → "Proceed to localhost"
- ✅ **Alternative:** Use password mode instead

### **"Port already in use"**
- ✅ **Solution:** Change port in server.py (line 82)
- ✅ **Alternative:** Kill existing server (Ctrl+C)

## 📱 Mobile Testing

### **Android:**
1. **Connect to same WiFi**
2. **Find computer IP:** `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. **Open:** `https://YOUR_IP:8443/index.html`
4. **Accept certificate**

### **iPhone:**
1. **Same WiFi network**
2. **Use computer IP address**
3. **Safari may require certificate trust**

## 🎯 Feature Comparison

| Feature | GitHub Pages | Local HTTPS | Local HTTP |
|---------|-------------|-------------|------------|
| Biometric Auth | ✅ | ✅ | ❌ |
| Password Auth | ✅ | ✅ | ✅ |
| App Lock | ✅ | ✅ | ✅ |
| Live Chat | ✅ | ✅ | ✅ |
| All Features | ✅ | ✅ | ✅ |
| Setup Required | ❌ | ⚡ | ⚡ |

## 💡 Recommendations

1. **For Testing:** Use `local-test.html` with HTTP server
2. **For Development:** Use HTTPS server with certificate
3. **For Production:** Use GitHub Pages or deploy to HTTPS host
4. **For Mobile:** Use GitHub Pages or local HTTPS with IP

---

## 🚀 Ready to Start?

### **Easiest Way:**
```
https://ctrlxmir.github.io/reactify-mir/
```

### **Local Testing:**
```bash
# Windows
start-server.bat

# Mac/Linux
./start-server.sh
```

**Happy Shopping! 🛍️✨**