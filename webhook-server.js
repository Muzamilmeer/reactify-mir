const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// In-memory storage for payment status (use database in production)
const paymentStatus = {};

// Webhook endpoint to receive payment status from Razorpay
app.post('/webhook/razorpay', (req, res) => {
    try {
        const { event, payload } = req.body;
        
        console.log('🔔 Webhook received:', event);
        console.log('📦 Payload:', payload);
        
        if (event === 'payment.captured') {
            // Payment successful
            const orderId = payload.payment.entity.notes?.order_id;
            
            if (orderId) {
                paymentStatus[orderId] = {
                    status: 'success',
                    transactionId: payload.payment.entity.id,
                    upiId: payload.payment.entity.vpa || 'N/A',
                    amount: payload.payment.entity.amount / 100, // Convert from paise to rupees
                    timestamp: new Date().toISOString(),
                    paymentMethod: payload.payment.entity.method
                };
                
                console.log('✅ Payment successful for order:', orderId);
            }
            
        } else if (event === 'payment.failed') {
            // Payment failed
            const orderId = payload.payment.entity.notes?.order_id;
            
            if (orderId) {
                paymentStatus[orderId] = {
                    status: 'failed',
                    timestamp: new Date().toISOString(),
                    reason: payload.payment.entity.error_description
                };
                
                console.log('❌ Payment failed for order:', orderId);
            }
        }
        
        res.status(200).json({ status: 'success' });
        
    } catch (error) {
        console.error('❌ Webhook processing error:', error);
        res.status(500).json({ error: 'Webhook processing failed' });
    }
});

// API endpoint to check payment status
app.post('/check-payment', (req, res) => {
    try {
        const { orderId } = req.body;
        
        console.log('🔍 Checking payment status for order:', orderId);
        
        const status = paymentStatus[orderId];
        
        if (status) {
            res.json({
                status: status.status,
                data: status
            });
        } else {
            res.json({
                status: 'pending',
                message: 'Payment status not found'
            });
        }
        
    } catch (error) {
        console.error('❌ Status check error:', error);
        res.status(500).json({ error: 'Status check failed' });
    }
});

// Manual payment status update (for testing)
app.post('/manual-update', (req, res) => {
    try {
        const { orderId, status, transactionId, upiId } = req.body;
        
        paymentStatus[orderId] = {
            status: status, // 'success' or 'failed'
            transactionId: transactionId || 'TEST_' + Date.now(),
            upiId: upiId || 'test@upi',
            amount: 100, // Test amount
            timestamp: new Date().toISOString(),
            paymentMethod: 'manual_test'
        };
        
        console.log('🔧 Manual status update:', orderId, status);
        
        res.json({ 
            message: 'Status updated successfully',
            orderId: orderId,
            status: status
        });
        
    } catch (error) {
        console.error('❌ Manual update error:', error);
        res.status(500).json({ error: 'Manual update failed' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        activeOrders: Object.keys(paymentStatus).length
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Webhook server running on port ${PORT}`);
    console.log(`📡 Webhook URL: http://localhost:${PORT}/webhook/razorpay`);
    console.log(`🔍 Status Check: http://localhost:${PORT}/check-payment`);
    console.log(`🔧 Manual Update: http://localhost:${PORT}/manual-update`);
});

module.exports = app;