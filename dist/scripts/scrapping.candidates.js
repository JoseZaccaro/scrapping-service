(() => {
  // src/utils/selectors.js
  var $ = (selector, node = document) => node.querySelector(selector);
  var $$ = (selector, node = document) => [...node.querySelectorAll(selector)];

  // src/scripts/scrapping.candidates.js
  var mainUl = $("main ul");
  var candidatesUrls = [];
  $$("li .mb1 a", mainUl).forEach((anchor) => {
    candidatesUrls.push(anchor.href.split("?")[0]);
  });
  console.log(candidatesUrls);
  var port = chrome.runtime.connect({ name: "scrappCandidatesResponse" });
  port.postMessage({
    profileUrls: candidatesUrls
  });
})();
