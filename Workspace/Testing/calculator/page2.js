const webdriver = require('selenium-webdriver')
const sleep = require('sleep')

async function test1() {

  const browser = new webdriver.Builder().forBrowser('chrome').build()

  await browser.get('https://google.co.in')

  // document.getElementByName('q')
  const input = await browser.findElement(webdriver.By.name('q'))

  // enter airpod max
  await input.sendKeys('apple airpod max')

  // sleep for 5 seconds
  sleep.sleep(2)

  await input.sendKeys(webdriver.Key.ENTER)

  sleep.sleep(5)

  await browser.close()
}

test1()

            
