const url = $request.url;

if (url.includes('/voice/settings')) {
    try {
        let body = JSON.parse($response.body);
        
        // Mở khóa chất lượng stream cao
        body.quality_mode = 2; // Chất lượng cao
        body.video_quality_mode = 2; // Video 1080p
        body.bitrate = 384000; // Bitrate cao
        
        $done({ body: JSON.stringify(body) });
    } catch (error) {
        console.log(`Error processing stream.js: ${error}`);
        $done({});
    }
} else {
    $done({});
}
