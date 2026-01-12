// Get current page URL
let pageURL = window.location.href;

// Generate QR Code
new QRCode(document.getElementById("qrcode"), {
    text: pageURL,
    width: 200,
    height: 200
});
