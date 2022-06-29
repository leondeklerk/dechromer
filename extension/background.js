chrome.tabs.onCreated.addListener(() => {
    // Only react to browser tabs (no webview tabs e.g twitter app)
    chrome.tabs.query({ windowType: "normal" }, (tabs) => {
        tabs.forEach((tab) => {
            let isPending = tab.pendingUrl && tab.pendingUrl.match(/http/gi);
            let isRegular = tab.url && tab.url.match(/http/gi);
            if (isPending || isRegular) {
                let url = isPending ? tab.pendingUrl : tab.url;
                chrome.runtime.sendNativeMessage("com.leondeklerk.dechromer", { url: url }, (res) => {
                    if (res.success) {
                        chrome.tabs.remove(tab.id);
                    }
                });
            }
        });
    });
});
