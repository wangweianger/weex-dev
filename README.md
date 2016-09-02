# weex

demo


## 如何使用

### 安装

```bash
npm install
```
### 运行

```bash

npm run server

```

### 开发
```bash

npm run dev

```

然后访问：

`http://localhost:8080/`

### native 预览

native 预览，需要安装 [weex-toolkit](http://alibaba.github.io/weex/doc/tools/cli.html) 才能使用 weex 命令；

手机上需要使用 [Weex Playground app](http://alibaba.github.io/weex/download.html) 来扫描二维码。

### 开发

开发目录：`src`

输出目录：`dist`

* `npm run devserve`: 开发时热加载并 HTML 预览： `http://localhost:8080/` （改动后自动更新，但需手动刷新浏览器）
* `npm run dev`: 监视两个 .we 文件的改动，并自动打包输出为两个 .js 文件
* `npm run build`: 将两个 .we 文件打包为两个 .js 文件



