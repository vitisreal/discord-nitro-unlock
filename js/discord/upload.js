const url = $request.url;

if (url.includes('/attachments')) {
    try {
        let body = JSON.parse($response.body);
        
        // Tăng giới hạn upload lên 100MB (Nitro)
        if (body.attachments) {
            body.attachments.forEach(attachment => {
                attachment.size_limit = 100 * 1024 * 1024; // 100MB
                attachment.width = 1024;
                attachment.height = 1024;
            });
        }
        
        $done({ body: JSON.stringify(body) });
    } catch (error) {
        console.log(`Error processing upload.js: ${error}`);
        $done({});
    }
} else {
    $done({});
}
