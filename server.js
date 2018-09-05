const puppeteer = require('puppeteer');
const fs = require('fs');
//利用puppeteer实现登录功能(以非无界面（non headless）模式启动)
async function run() {
  const browser = await puppeteer.launch({
    //配置 chromium路径
    executablePath: './chromium/chrome.exe',
    headless: false 
  });
  var page = await browser.newPage();
  await page.goto('https://passport.douyu.com/h5/loginActivity');
  let USERNAME_SELECTOR = '#js-app-content > div.login-wrap > div:nth-child(1)';
  const AREA_LIST = '#js-app-content > div.login-wrap > div:nth-child(1) > div.select-box.js-select-wrap > ul > li';
  const AREA_NAME = '#js-app-content > div.login-wrap > div:nth-child(1) > div.select-box.js-select-wrap > ul > li > span.area-name.js-area-name';
  const AREA_CODE = '#js-app-content > div.login-wrap > div:nth-child(1) > div.select-box.js-select-wrap > ul > li > span.area-code.js-area-code';

  await setTimeout(async ()=>{
    //保存截图以备数据出错
    // await page.screenshot({
    //   path: './hjm100.png'
    // })
    await page.click(USERNAME_SELECTOR); //点击输入框
    //  外层标签  指定元素标签1 指定元素标签2
    const area = await page.evaluate((wrapEle, goalEle1, goalEle2) => {
      return Array.prototype.slice.apply(document.querySelectorAll(wrapEle))
        .map($userListItem => {
          const name = $userListItem.querySelector(goalEle1).innerText;
          const code = $userListItem.querySelector(goalEle2).innerText;
          return {
              name,
              code,
          };
        })
    }, AREA_LIST, AREA_NAME, AREA_CODE);
    await browser.close();
    //直接输出json文件
    fs.writeFile('./data/areaList.json', 
      JSON.stringify({areaList: area})
    );
  },3000);
}

run()
