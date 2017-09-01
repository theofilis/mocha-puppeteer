import { expect } from 'chai';

const puppeteer = require('puppeteer');

describe('Hello function', () => {
  it('should return hello world', async (done) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    browser.close();
    return done(done);
  });
});
