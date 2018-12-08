chrome.runtime.onMessage.addListener(request => {
    if (request.message === 'clicked_browser_action') {
        const query = prompt('Query Selector');
        if (query) {
            const elements = document.querySelectorAll(query);
            document.querySelector('body').innerHTML = '';
            elements.forEach(element => (
                document.querySelector('body').appendChild(element)
            ));
        }
    }
});
