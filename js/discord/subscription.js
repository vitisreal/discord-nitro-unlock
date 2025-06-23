const url = $request.url;

if (url.includes('/billing/subscriptions')) {
    try {
        const nitroSub = {
            "id": "fake_sub_123456789",
            "type": 1, // 1 = Nitro Classic, 2 = Nitro
            "valid": true,
            "payment_source_id": "fake_payment_123",
            "payment_gateway": 1, // PayPal
            "status": 1, // Active
            "current_period_start": new Date().toISOString(),
            "current_period_end": new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
            "plan": {
                "id": "511651865731366923",
                "name": "Discord Nitro",
                "price": 999,
                "currency": "usd",
                "interval": 1 // Monthly
            }
        };
        
        $done({ body: JSON.stringify([nitroSub]) });
    } catch (error) {
        console.log(`Error processing subscription.js: ${error}`);
        $done({});
    }
} else {
    $done({});
}
