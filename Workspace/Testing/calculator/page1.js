// load the selenium webdriver
const webdriver = require('selenium-webdriver')

function test1() {
  // open the browser
  const browser = new webdriver.Builder().forBrowser('chrome').build()

  // visit website
  browser.get('https://google.co.in')

  // close the browswer
  browser.close()
}

 test1()

function test2() {
  // open the browser
  const browser = new webdriver.Builder().forBrowser('chrome').build()

  // visit website
  browser.get('https://google.co.in')

  // close the browswer
  browser.close()
}

            