import axios from 'axios';
import { $, $$ } from '../utils/selectors';
// import { waitForElement } from './../utils/waitForElement';
import { selectors } from './scrapper.config';
const { main } = selectors;

function getCookies() {
    const cookies = {};
    document.cookie.split(';').forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = value.replace(/"/g, '');
    });
    return cookies;
}

async function scrapProfile() {
    // const contactInfoE = await waitForElement(main.contactInfoA);
    // contactInfoE.click();

    const { JSESSIONID } = getCookies();

    const profileName = document.URL.replace('https://www.linkedin.com/in', '');
    const response = await axios.get(`https://www.linkedin.com/voyager/api/identity/profiles${profileName}profileContactInfo`, {
        headers: {
            'csrf-token': JSESSIONID
        }
    });

    const arrayExperience = [];
    $$(main.generalContainer('experience')).forEach(e => {
        arrayExperience.push($('span[aria-hidden="true"]', e).textContent);
    });

    // eslint-disable-next-line no-undef
    const port = chrome.runtime.connect({ name: 'scrappProfileServiceResponse' });
    port.postMessage({
        contactInfo: response.data,
        experience: arrayExperience
    });
}

scrapProfile();