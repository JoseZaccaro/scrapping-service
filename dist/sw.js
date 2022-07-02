(() => {
  // src/sw.js
  chrome.runtime.onConnect.addListener(async (port) => {
    if (port.name === "scrappProfileService") {
      chrome.scripting.executeScript({
        target: await chrome.tabs.query({ active: true, currentWindow: true }),
        files: ["./scripts/scrapping.profile.js"]
      });
    }
    if (port.name === "scrappProfileServiceResponse") {
      port.onMessage.addListener((message) => {
        fetch("http://localhost:3000/profiles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message)
        });
      });
    }
    if (port.name === "scrappCandidatesResponse") {
      port.onMessage.addListener((message) => {
        fetch("http://localhost:3000/candidates", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message)
        });
      });
    }
  });
})();
