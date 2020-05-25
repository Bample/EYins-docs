---
home: true
heroImage: 
actionText: About →
actionLink: /about/
features:
- title: 简洁至上
  details: 以 简洁 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Hexo驱动
  details: 享受高性能的 Hexo 的开发体验，在 Hexo 中使用 Markdown 组件，同时可以使用 EYins 来修改你的自定义主题。
- title: 高性能
  details: Hexo 为每个页面预渲染生成静态的 HTML，EYins在此基础上精简了逻辑，使得Hexo更顺利的工作。
footer: MIT Licensed | Copyright © 2020 YinsTeam
---
# 开始
## 安装
```bash
$ git clone https://github.com/LiangYin233/hexo-theme-EYins.git themes/EYins
```
## 安装依赖项
```bash
$ npm install --save hexo-renderer-sass
```
## 升级
```bash
$ cd themes/eyins
$ git pull
```
## 多语言

|名称|语言代码|
|:-:|-|
|简中|`zh-CN`|
|繁中|`zh-TW`|
|英语|`en`|
|其他|`default`|

## 启用主题
与所有`Hexo` 主题启用的模式一样。 当 克隆/下载 完成后，打开`站点配置`文件， 找到 `theme` 字段，并将其值更改为 `eyins`。

### 启用 EYins 主题
```yaml
theme: eyins
```
到此，EYins 主题安装完成。下一步我们将验证主题是否正确启用。在切换主题之后、验证之前， 我们最好使用 hexo clean 来清除 Hexo 的缓存。

## 验证主题
首先启动 Hexo 本地站点，并开启调试模式（即加上 --debug），整个命令是 `hexo s --debug`。 在服务启动的过程，注意观察命令行输出是否有任何异常信息，如果你碰到问题，这些信息将帮助他人更好的定位错误。 当命令行输出中提示出：
```bash
INFO  Hexo is running at http://0.0.0.0:4000/. Press Ctrl+C to stop.
```
此时即可使用浏览器访问 http://localhost:4000 ，检查站点是否正确运行。

## LICENSE
The MIT License (MIT)

Copyright (c) 2020 YinsTeam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

