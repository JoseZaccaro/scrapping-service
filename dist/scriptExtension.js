/* eslint-disable no-undef */
document.getElementById('candidates').addEventListener('click', async () => {
    const keyword = document.getElementById('keyword').value;

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update(
        tab.id,
        { url: `https://www.linkedin.com/search/results/people/?keywords=${keyword.trim() || 'fullstack'}` }
    );
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['./scripts/scrapping.candidates.js']
    });

});

document.getElementById('profile').addEventListener('click', async () => {

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['./scripts/scrapping.profile.js']
    });

});
