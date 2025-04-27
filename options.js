document.addEventListener("DOMContentLoaded", () => {
    // Load saved API key if it exists
    chrome.storage.sync.get(["geminiApiKey"], (result) => { // Ensure consistent key
        if (result.geminiApiKey) {
            document.getElementById("api-key").value = result.geminiApiKey;
        }
    });

    // Save API key when button is clicked
    document.getElementById("save-button").addEventListener("click", () => {
        const apiKey = document.getElementById("api-key").value.trim();

        if (apiKey) {
            chrome.storage.sync.set({ geminiApiKey: apiKey }, () => { // Ensure consistent key
                const successMessage = document.getElementById("success-message");
                successMessage.style.display = "block";

                // Close the tab after a short delay to show the success message
                setTimeout(() =>
                    window.close(), 1000);
            });
        }
    });
});