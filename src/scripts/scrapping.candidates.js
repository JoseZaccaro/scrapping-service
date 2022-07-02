import { $, $$ } from '../utils/selectors';

const mainUl = $('main ul');

const candidatesUrls = [];

$$('li .mb1 a', mainUl).forEach(anchor => {
    candidatesUrls.push(anchor.href.split('?')[0]);
});

// eslint-disable-next-line no-undef
const port = chrome.runtime.connect({ name: 'scrappCandidatesResponse' });
port.postMessage({
    profileUrls: candidatesUrls
});

