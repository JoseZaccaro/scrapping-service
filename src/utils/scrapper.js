const getByClass = (className) => Array.from(document.getElementsByClassName(className));
const getText = (className) => getByClass(className).textContent;

export const inject = ()=>{
    /* eslint-disable-next-line no-undef */
    chrome.runtime.sendMessage({
        id:getText(),
        marca:getText(),
        description:getText(),
        price:getText(),
        iconUrl:getByClass().src
    });
};