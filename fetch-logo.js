const res = await fetch('https://eyihlefuelandenergysupply.co.za/');
const text = await res.text();
const imgMatches = text.match(/<img[^>]+src="([^">]+)"[^>]*>/g);
if (imgMatches) {
    const logos = imgMatches.filter(img => img.toLowerCase().includes('logo'));
    console.log(logos);
} else {
    console.log("No images found");
}
