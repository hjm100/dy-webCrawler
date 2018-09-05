# 斗鱼静态资源爬取

## 场景(以下说明均不用在商业活动，切不会爬取隐秘数据)

1. 想要模仿斗鱼UI的前期工作，首先要知道部分ui的指定数据

1. 这里使用puppeteer进行爬去并导出json文件

## 使用教程

### 安装模块:

```js
npm i --save puppeteer --ignore-scripts

//解决报错：
// ERROR: Failed to download Chromium r515411! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOA
// D" env variable to skip download.
// 因为安装puppeteer模块的时候：
// 这里会下载Chromium,官网建议是进行跳过，我们可以执行 —ignore-scripts 忽略这个js执行。
npm i

```

### 手动下载Chromium

1. 下载地址：https://download-chromium.appspot.com/ (打开蓝灯翻墙软件...)

1. 把下载刚刚下载的文件解压出来会有chrome-win32文件夹，把里面的文件拷贝到项目新建的chromium文件夹中

### npm start 启动项目

## 项目结构
```
.
├── data                            # 数据存放
│   └── areaList.json               # 登录页地区号数据
├── serve.js                        # 地区号数据获取
├── .gitignore
├── README.md                       # 项目说明文件
├── package-lock.json
└── package.json

```