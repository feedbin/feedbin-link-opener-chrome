chrome.commands.onCommand.addListener(function(command) {
    if (command === "open-feedbin-link") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, command, function(link) {
                if (typeof(link) !== "undefined") {
                    chrome.tabs.create({
                        url: link,
                        active: false
                    });
                }
            });
        });
    }
});