import { expect } from 'chai';

import puppeteer from 'puppeteer';

describe('Puppeteer API', () => {
  it('get informations about browser', () => {
    return puppeteer.launch().then(async (browser) => {
      console.log(await browser.version());
      console.log(await browser.wsEndpoint());
      browser.close();
    });
  });
});
