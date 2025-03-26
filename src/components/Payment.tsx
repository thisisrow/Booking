import React, { useState, useEffect } from 'react';

declare global {
    interface Window {
        Razorpay: any;
    }
}

const RazorpayPayment: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [paymentStatus, setPaymentStatus] = useState<string>('');
    const [razorpayLoaded, setRazorpayLoaded] = useState<boolean>(false);

    useEffect(() => {
        // Dynamically load Razorpay script
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setRazorpayLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePayment = () => {
        // Validate amount
        const parsedAmount = parseFloat(amount);
        if (!parsedAmount || parsedAmount <= 0) {
            setPaymentStatus('Please enter a valid amount');
            return;
        }

        // Ensure Razorpay is loaded
        if (!razorpayLoaded || typeof window.Razorpay === 'undefined') {
            setPaymentStatus('Razorpay is loading. Please try again.');
            return;
        }

        // Razorpay test credentials
        const RAZORPAY_KEY_ID = 'rzp_test_uupDDxDobiy5a4';

        // Create order options
        const options = {
            key: RAZORPAY_KEY_ID,
            amount: parsedAmount * 100, // Amount in paise
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            handler: function (response: any) {
                setPaymentStatus('Payment Successful!');
                console.log('Payment Details:', {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature
                });
            },
            prefill: {
                name: 'Test Customer',
                email: 'test@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Test Address'
            },
            theme: {
                color: '#4CAF50'
            }
        };

        try {
            // Create Razorpay instance and open checkout
            const rzp1 = new window.Razorpay(options);
            rzp1.open();

            rzp1.on('payment.failed', function (response: any) {
                setPaymentStatus(`Payment Failed: ${response.error.description}`);
                console.error('Payment Failed', response.error);
            });

        } catch (error: any) {
            setPaymentStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container mx-auto max-w-md p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Razorpay Payment</h2>
                <div className="space-y-4">
                    <input 
                        type="number" 
                        placeholder="Enter amount (₹)" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button 
                        onClick={handlePayment} 
                        disabled={!razorpayLoaded}
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
                    >
                        {razorpayLoaded ? 'Pay Now' : 'Loading...'}
                    </button>
                    {paymentStatus && (
                        <div 
                            className={`mt-2 text-center p-2 rounded ${
                                paymentStatus.includes('Successful') 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}
                        >
                            {paymentStatus}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RazorpayPayment;