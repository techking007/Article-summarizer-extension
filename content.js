function getArticleText() {
    const article = document.querySelector('article');
    if (article) {
        return article.innerText;
    }

    const paragraphs = Array.from(document.querySelectorAll('p'));
    return paragraphs.map(p => p.innerText).join('\n');
}

chrome.runtime.onMessage.addListener((req, _sender, sendResponse) => {
    if (req.type === 'GetArticleText') {
        const text = getArticleText();
        sendResponse({ text });
    }
    // Indicate that you wish to send a response asynchronously
});