const url = $request.url;
const isGetUser = url.includes('/users/@me');

if (isGetUser) {
    try {
        let body = JSON.parse($response.body);
        
        // Thêm thông tin Nitro
        body.premium_type = 2; // 2 = Nitro
        body.flags = 64; // Cờ Nitro
        body.banner = "6b1fddfa9d04d9c7a6a6a0c7a1c7a1c7"; // Banner tùy chỉnh
        body.banner_color = "#5865F2"; // Màu banner
        body.accent_color = 5793266; // Màu accent
        
        $done({ body: JSON.stringify(body) });
    } catch (error) {
        console.log(`Error processing nitro.js: ${error}`);
        $done({});
    }
} else {
    $done({});
}
