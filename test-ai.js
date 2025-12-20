
const apiKey = "AIzaSyDg-kZcBOTaR1f2AbdSqOpEQJ0K0CWNrtE";

async function listModels() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
            return;
        }

        console.log("Available Models:");
        if (data.models) {
            data.models.forEach(m => {
                if (m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name}`);
                }
            });
        } else {
            console.log("No models returned", data);
        }

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

listModels();
