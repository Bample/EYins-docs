module.exports = {
  title: 'EYins - Docs',
  description: 'EYins主题文档',
  theme: 'reco',
  themeConfig: {
      sidebar: 'auto',
	  sidebarDepth: 5,
	  nav: [
	        { text: '主页', link: '/', icon: 'reco-home' },
			{ text: '开始', link: '/start', icon: 'reco-document' },
			{ text: 'Q&A', link: '/q&a', icon: 'reco-faq' },
	        { text: 'Demo', link: 'https://eyins-demo.netlify.app', icon: 'reco-category' },
	        // 显示下拉列表
	   //      {
	   //        text: 'Languages',
	   //        items: [
	   //          { text: '简体中文', link: '/' },
	   //          { text: '繁體中文', link: '/zh-tw/' },
				// { text: 'English', link: '/en-us/' }
	   //        ]
	   //      },
	        // 下拉列表显示分组
	   ],
	  repo: 'YinsTeam/EYins-docs', // 你的仓库
	      repoLabel: 'Github', // 导航栏上的文本
	  
	      editLinks: true,
	      // 默认为 "Edit this page"
	      editLinkText: '在Github上编辑此页',
      valineConfig: {
        appId: 'tu8tADwfmFiOgU49DQ3rtQbD-gzGzoHsz',
        appKey: 'Mxt0gn4q5BXNAt9w9lvuWrxe',
	    pageSize: 8,
        requiredFields: ['nick','mail'],
	    avatar: 'mp',
	    lang: 'zh-CN',
	    highlight: true,
	    recordIP: true,
	    placeholder: '快来评论吧~ 昵称框输入QQ号可以识别QQ头像哦~',
	    enableQQ: true,
		visitor: false,
	    emojiCDN: "https://cdn.jsdelivr.net/gh/blogimg/",
	    emojiMaps: {"bilibili_face_疑问":"emotion/bilibili/face_疑问.png","bilibili_face_再见":"emotion/bilibili/face_再见.png","bilibili_face_拥抱":"emotion/bilibili/face_拥抱.png","bilibili_face_武汉加油":"emotion/bilibili/face_武汉加油.png","bilibili_face_无奈":"emotion/bilibili/face_无奈.png","bilibili_face_微微笑":"emotion/bilibili/face_微微笑.png","bilibili_face_思考":"emotion/bilibili/face_思考.png","bilibili_face_期待":"emotion/bilibili/face_期待.png","bilibili_face_撇嘴":"emotion/bilibili/face_撇嘴.png","bilibili_face_难过":"emotion/bilibili/face_难过.png","bilibili_face_脸红":"emotion/bilibili/face_脸红.png","bilibili_face_酷":"emotion/bilibili/face_酷.png","bilibili_face_口罩":"emotion/bilibili/face_口罩.png","bilibili_face_可乐":"emotion/bilibili/face_可乐.png","bilibili_face_开心":"emotion/bilibili/face_开心.png","bilibili_face_惊呆了":"emotion/bilibili/face_惊呆了.png","bilibili_face_鸡腿":"emotion/bilibili/face_鸡腿.png","bilibili_face_肌肉":"emotion/bilibili/face_肌肉.png","bilibili_face_寒冷":"emotion/bilibili/face_寒冷.png","bilibili_face_哈欠":"emotion/bilibili/face_哈欠.png","bilibili_face_跪":"emotion/bilibili/face_跪.png","bilibili_face_奋斗":"emotion/bilibili/face_奋斗.png","bilibili_face_弹弹堂":"emotion/bilibili/face_弹弹堂.png","bilibili_face_大闹":"emotion/bilibili/face_大闹.png","bilibili_face_呲牙":"emotion/bilibili/face_呲牙.png","bilibili_face_抱拳":"emotion/bilibili/face_抱拳.png","bilibili_face_拜托":"emotion/bilibili/face_拜托.png","bilibili_face_白眼":"emotion/bilibili/face_白眼.png","bilibili_face_yes":"emotion/bilibili/face_yes.png","bilibili_face_ok":"emotion/bilibili/face_ok.png","bilibili_face_支持":"emotion/bilibili/face_支持.png","bilibili_face_阴险":"emotion/bilibili/face_阴险.png","bilibili_face_嘘声":"emotion/bilibili/face_嘘声.png","bilibili_face_笑哭":"emotion/bilibili/face_笑哭.png","bilibili_face_响指":"emotion/bilibili/face_响指.png","bilibili_face_嫌弃":"emotion/bilibili/face_嫌弃.png","bilibili_face_吓":"emotion/bilibili/face_吓.png","bilibili_face_喜极而泣":"emotion/bilibili/face_喜极而泣.png","bilibili_face_喜欢":"emotion/bilibili/face_喜欢.png","bilibili_face_捂脸":"emotion/bilibili/face_捂脸.png","bilibili_face_无语":"emotion/bilibili/face_无语.png","bilibili_face_委屈":"emotion/bilibili/face_委屈.png","bilibili_face_微笑":"emotion/bilibili/face_微笑.png","bilibili_face_吐":"emotion/bilibili/face_吐.png","bilibili_face_偷笑":"emotion/bilibili/face_偷笑.png","bilibili_face_调皮":"emotion/bilibili/face_调皮.png","bilibili_face_疼":"emotion/bilibili/face_疼.png","bilibili_face_酸了":"emotion/bilibili/face_酸了.png","bilibili_face_生气":"emotion/bilibili/face_生气.png","bilibili_face_生病":"emotion/bilibili/face_生病.png","bilibili_face_妙啊":"emotion/bilibili/face_妙啊.png","bilibili_face_灵魂出窍":"emotion/bilibili/face_灵魂出窍.png","bilibili_face_冷":"emotion/bilibili/face_冷.png","bilibili_face_抠鼻":"emotion/bilibili/face_抠鼻.png","bilibili_face_囧":"emotion/bilibili/face_囧.png","bilibili_face_惊讶":"emotion/bilibili/face_惊讶.png","bilibili_face_惊喜":"emotion/bilibili/face_惊喜.png","bilibili_face_锦鲤":"emotion/bilibili/face_锦鲤.png","bilibili_face_奸笑":"emotion/bilibili/face_奸笑.png","bilibili_face_画风突变":"emotion/bilibili/face_画风突变.png","bilibili_face_滑稽":"emotion/bilibili/face_滑稽.png","bilibili_face_黑洞":"emotion/bilibili/face_黑洞.png","bilibili_face_害羞":"emotion/bilibili/face_害羞.png","bilibili_face_尴尬":"emotion/bilibili/face_尴尬.png","bilibili_face_福到了":"emotion/bilibili/face_福到了.png","bilibili_face_福":"emotion/bilibili/face_福.png","bilibili_face_点赞":"emotion/bilibili/face_点赞.png","bilibili_face_呆":"emotion/bilibili/face_呆.png","bilibili_face_大笑":"emotion/bilibili/face_大笑.png","bilibili_face_大哭":"emotion/bilibili/face_大哭.png","bilibili_face_打call":"emotion/bilibili/face_打call.png","bilibili_face_吃瓜":"emotion/bilibili/face_吃瓜.png","bilibili_face_傲娇":"emotion/bilibili/face_傲娇.png","bilibili_face_爱心":"emotion/bilibili/face_爱心.png","bilibili_face_doge":"emotion/bilibili/face_doge.png","bilibili_face_2020":"emotion/bilibili/face_2020.png","bilibili_热词系列_知识增加":"emotion/bilibili/热词系列_知识增加.png","bilibili_热词系列_张三":"emotion/bilibili/热词系列_张三.png","bilibili_热词系列_有内味了":"emotion/bilibili/热词系列_有内味了.jpg","bilibili_热词系列_我裂开了":"emotion/bilibili/热词系列_我裂开了.png","bilibili_热词系列_我哭了":"emotion/bilibili/热词系列_我哭了.jpg","bilibili_热词系列_问号":"emotion/bilibili/热词系列_问号.png","bilibili_热词系列_危":"emotion/bilibili/热词系列_危.jpg","bilibili_热词系列_你细品":"emotion/bilibili/热词系列_你细品.jpg","bilibili_热词系列_猛男必看":"emotion/bilibili/热词系列_猛男必看.jpg","bilibili_热词系列_害":"emotion/bilibili/热词系列_害.jpg","bilibili_热词系列_咕咕":"emotion/bilibili/热词系列_咕咕.jpg","bilibili_热词系列_递话筒":"emotion/bilibili/热词系列_递话筒.png","bilibili_热词系列_标准结局":"emotion/bilibili/热词系列_标准结局.png","bilibili_热词系列_爱了爱了":"emotion/bilibili/热词系列_爱了爱了.png","bilibili_热词系列_知识盲区":"emotion/bilibili/热词系列_知识盲区.png","bilibili_热词系列_镇站之宝":"emotion/bilibili/热词系列_镇站之宝.png","bilibili_热词系列_真香":"emotion/bilibili/热词系列_真香.png","bilibili_热词系列_有生之年":"emotion/bilibili/热词系列_有生之年.png","bilibili_热词系列_爷关更":"emotion/bilibili/热词系列_爷关更.png","bilibili_热词系列_秀":"emotion/bilibili/热词系列_秀.png","bilibili_热词系列_下次一定":"emotion/bilibili/热词系列_下次一定.png","bilibili_热词系列_我太南了":"emotion/bilibili/热词系列_我太南了.png","bilibili_热词系列_我酸了":"emotion/bilibili/热词系列_我酸了.png","bilibili_热词系列_我全都要":"emotion/bilibili/热词系列_我全都要.png","bilibili_热词系列_完结撒花":"emotion/bilibili/热词系列_完结撒花.png","bilibili_热词系列_神仙UP":"emotion/bilibili/热词系列_神仙UP.png","bilibili_热词系列_三连":"emotion/bilibili/热词系列_三连.png","bilibili_热词系列_你币有了":"emotion/bilibili/热词系列_你币有了.png","bilibili_热词系列_妙啊":"emotion/bilibili/热词系列_妙啊.png","bilibili_热词系列_可以":"emotion/bilibili/热词系列_可以.png","bilibili_热词系列_高产":"emotion/bilibili/热词系列_高产.png","bilibili_热词系列_大师球":"emotion/bilibili/热词系列_大师球.png","bilibili_热词系列_打卡":"emotion/bilibili/热词系列_打卡.png","bilibili_热词系列_锤":"emotion/bilibili/热词系列_锤.png","bilibili_热词系列_吹爆":"emotion/bilibili/热词系列_吹爆.png","bilibili_热词系列_不愧是你":"emotion/bilibili/热词系列_不愧是你.png","bilibili_热词系列_奥力给":"emotion/bilibili/热词系列_奥力给.png","bilibili_热词系列_AWSL":"emotion/bilibili/热词系列_AWSL.png"}

          }
   },
   // locales: {
   //     // 键名是该语言所属的子路径
   //     // 作为特例，默认语言可以使用 '/' 作为其路径。
   //     '/': {
   //       lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
   //       title: 'EYins',
   //       description: 'EYins主题文档'
   //     },
   //     '/zh-tw/': {
   //       lang: 'zh-TW',
   //       title: 'EYins',
   //       description: 'EYins主題文檔'
   //     }
   //   }
   plugins: [
	   ['vuepress-plugin-smooth-scroll'],  // 平滑滚动
	   ['@vuepress/nprogress'],  // 加载进度条
	   ['reading-progress'],  // 阅读进度条
       ['@vuepress/medium-zoom']
	 ]
}