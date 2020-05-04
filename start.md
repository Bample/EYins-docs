当前文档描述的是主题的0.13版本
# 配置项
请使用 Notepad++，VSCode等编辑器打开主题配置文件。对于 Windows 用户，**不建议**使用自带记事本打开配置文件，既不方便,也会带来不可预料的编码错误。

## 其它
favicon:图片路径

``favicon: /favicon.ico``

说明:设置您博客页面标题处的头像(支持外链)

## 插件管理
fancybox:是否开启

``fancybox: true``

说明:设置您是否开启fancybox

## 导航栏
导航栏内容:导向路径

```
menu:
  home: /
  archive: /archives
  category: /categories
  tags: /tags
  about: /about
  RSS: /atom.xml
```

说明:设置导航栏内容与导航栏导向的路径

## 网站标志和页脚
logo:你的昵称

``logo: LiangYin``

说明:显示在博客顶部导航栏左侧的昵称(手机端显示在中部)

banner:图片路径

``banner: img/background.jpg``

说明:显示在PC端博客页面顶部的背景图片,支持外链(手机端不显示)

quote:字符串

``quote: "长风破浪会有时，直挂云帆济沧海。——李白"``

说明:显示在博客页面底部的句子

### Post_Copyright
copyright:版权信息

``copyright: "<p style='padding:none'>本文作者 LiangYin</p><p style='padding:none'>除非特殊标明,未经作者允许严禁转载!</p>"``

说明:显示在文章底部的版权信息,为空则不显示(支持HTML语法)

end:字符串

``end: the end``

说明:显示在版权信息下的结尾标识

## 社交网络
社交媒体名称:链接

```
social:
  zhihu: 
  weibo: 
  stackflow:
  github: https://github.com/LiangYin233
```

说明:显示在页面底部的社交媒体信息,现仅支持上述内容。

## 第三方服务设置
### 评论系统
valine评论系统

```
valine:
  comment_name: 评论 # your comment area title 评论标题
  enable: true # if you want use valine, please set this value to true 启用valine
  app_id: # your leancloud appId
  app_key: # your leancloud appKey
  placeholder: 来留言呀~ # Comment Box placeholder 占位符
```
请到[Valine官方网站](https://valine.js.org)获取如何使用它

disqus评论系统

``disqus_shortname:``

请在disqus官网获取你的shortname

### 第三方统计/收录服务
```
  baidu:  # Your APPID
  tencent: # Your APPID
  google: # Your ID
  baidu_sitemap: true # Not "empty" means active.
```
暂时仅支持上述服务商,百度站点地图提交不启用为"空"即可。