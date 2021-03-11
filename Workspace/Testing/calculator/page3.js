const webdriver = require('selenium-webdriver')
const sleep = require('sleep')

async function testAdd() {
  const browser = new webdriver.Builder().forBrowser('chrome').build()

  await browser.get('file:///home/sunbeam/dac/DevOps/Devops-module/Classwork/Testing/calculator/calci.html')

  sleep.sleep(2)

  // find the input for value1 and enter value 10
  const inputValue1 = await browser.findElement(webdriver.By.id('value1'))
  await inputValue1.sendKeys('10')

  sleep.sleep(2)

  // find the input for value2 and enter value 20
  const inputValue2 = await browser.findElement(webdriver.By.id('value2'))
  await inputValue2.sendKeys('20')

  sleep.sleep(2)

  // find the button to add the values
  const buttonAdd = await browser.findElement(webdriver.By.id('buttonAdd'))

  // click the button
  await buttonAdd.click()

  sleep.sleep(2)
 // find the result input
 const inputResult = await browser.findElement(webdriver.By.id('result'))

 // find the addition of two numbers
 const addition = await inputResult.getAttribute('value')
 if (addition == 30) {
   console.log('test case passes')
 } else {
   console.log('test case does not pass')
 }
  browser.close()
}

testAdd()

            
