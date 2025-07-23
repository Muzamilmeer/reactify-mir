# 🚀 Webhook Payment Verification Setup

## 📋 Overview

This system provides **real-time payment verification** using webhook integration with Razorpay. When a customer makes a payment, the system automatically detects success/failure and updates the UI accordingly.

## 🔧 Features

✅ **Real-time payment verification**
✅ **Automatic success/failure detection**  
✅ **UPI transaction ID display**
✅ **Order tracking with unique IDs**
✅ **5-minute timeout protection**
✅ **Manual retry options**

## 📡 How It Works

```
1. Customer clicks "Pay with Razorpay" 
2. System generates unique Order ID
3. Redirects to Razorpay payment page
4. Shows "Payment Processing" modal
5. Checks payment status via webhook every 5 seconds
6. Shows Success ✅ or Failed ❌ based on real payment
7. Clears cart on successful payment
```

## 🛠️ Setup Instructions

### Step 1: Deploy Webhook Server

**Option A: Deploy to Heroku (Free)**
```bash
# 1. Create new Heroku app
heroku create your-webhook-app

# 2. Upload webhook-server.js and webhook-package.json
git add webhook-server.js webhook-package.json
git commit -m "Add webhook server"
git push heroku main

# 3. Your webhook URL will be:
# https://your-webhook-app.herokuapp.com
```

**Option B: Deploy to Vercel (Free)**
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel --prod

# 3. Your webhook URL will be provided
```

**Option C: Local Testing (Development)**
```bash
# 1. Install dependencies
npm install express cors

# 2. Run server
node webhook-server.js

# 3. Use ngrok for public URL
ngrok http 3000
```

### Step 2: Update Frontend Code

Open `script.js` and update the webhook URL:

```javascript
// Find this line (around line 2087):
const webhookUrl = 'YOUR_WEBHOOK_URL_HERE';

// Replace with your actual webhook URL:
const webhookUrl = 'https://your-webhook-app.herokuapp.com';
```

### Step 3: Configure Razorpay Webhook

1. Login to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Go to **Settings → Webhooks**
3. Click **Add New Webhook**
4. Enter your webhook URL: `https://your-webhook-app.herokuapp.com/webhook/razorpay`
5. Select these events:
   - ✅ `payment.captured` 
   - ✅ `payment.failed`
6. Save webhook

## 🧪 Testing

### Manual Testing (Without Real Payment)

You can test the system manually using the `/manual-update` endpoint:

```bash
# Test successful payment
curl -X POST https://your-webhook-app.herokuapp.com/manual-update \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "ORDER_1234567890_ABC123",
    "status": "success",
    "transactionId": "txn_1234567890",
    "upiId": "customer@paytm"
  }'

# Test failed payment  
curl -X POST https://your-webhook-app.herokuapp.com/manual-update \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "ORDER_1234567890_ABC123", 
    "status": "failed"
  }'
```

### Live Testing

1. Add items to cart on your website
2. Click "Pay with Razorpay"
3. Complete real payment on Razorpay
4. Watch automatic verification in modal

## 📊 Webhook Endpoints

### `/webhook/razorpay` (POST)
Receives payment status from Razorpay automatically

### `/check-payment` (POST)
Frontend calls this to check payment status
```json
{
  "orderId": "ORDER_1234567890_ABC123"
}
```

### `/manual-update` (POST) 
For testing - manually update payment status
```json
{
  "orderId": "ORDER_1234567890_ABC123",
  "status": "success",
  "transactionId": "txn_1234567890",
  "upiId": "customer@paytm"
}
```

### `/health` (GET)
Check if webhook server is running

## 🔒 Security Notes

- Use HTTPS for webhook URLs in production
- Verify webhook signatures in production (not implemented in basic version)
- Use a database instead of in-memory storage for production
- Add rate limiting for API endpoints

## 🐛 Troubleshooting

**❌ Payment verification not working?**
- Check webhook URL in script.js
- Verify webhook is configured in Razorpay dashboard
- Check browser console for errors
- Test `/health` endpoint

**❌ Webhook server not responding?**
- Check server logs
- Verify deployment is successful
- Test with manual update endpoint

**❌ Frontend showing "pending" forever?**
- Order ID might not match
- Webhook might not be triggered
- Check network requests in browser dev tools

## 📞 Support

If you need help setting this up, you can:
1. Check the browser console for errors
2. Test the `/health` endpoint of your webhook
3. Use the manual update endpoint for testing
4. Verify Razorpay webhook configuration

---

**🎯 Once setup is complete, your website will have real-time payment verification with UPI transaction details!**