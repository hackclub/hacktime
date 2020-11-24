import puppeteer from 'puppeteer';

export default async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://wakatime.com/${req.query.username}`);
  res.send(await page.evaluate(element => element.textContent, await page.$(".value")));
  await browser.close();
}
