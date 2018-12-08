chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            message: 'clicked_browser_action'
        });
    });
});
