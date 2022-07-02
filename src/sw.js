/* eslint-disable no-undef */
chrome.runtime.onConnect.addListener(async (port) => {

    if (port.name === 'scrappProfileServiceResponse') {
        port.onMessage.addListener(message => {
            fetch('http://localhost:3000/profiles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            });
        });
    }

    if (port.name === 'scrappCandidatesResponse') {
        port.onMessage.addListener(message => {
            fetch('http://localhost:3000/candidates', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            });
        });
    }
});
