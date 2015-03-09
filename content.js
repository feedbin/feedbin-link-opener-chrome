chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request === "open-feedbin-link") {
        var link = document.getElementById("source_link");
        if (link !== null) {
            link = link.getAttribute("href");
            sendResponse(link);
        }
    }
});
