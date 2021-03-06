// docs/.vuepress/config.js

module.exports = {
    // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
    // port: '22335',  // 生成网页端口（本地调试使用）
    title: "Danta's Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: "总有一个人要赢 为什么不能是我", // meta 中的描述文字，用于SEO
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
      [
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no",
        },
      ], //在移动端，搜索框在获得焦点时会放大
    ],
  
    theme: "reco", //选择主题‘reco’
    themeConfig: {
      type: "blog", //选择类型博客
      fullscreen: true,
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "分类", // 默认 “分类”
        },
        tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: "标签", // 默认 “标签”
        },
      },
      nav: [
        //导航栏设置
        { text: "主页", link: "/", icon: "reco-home" },
        { text: "时间线", link: "/timeline/", icon: "reco-date" },
        // { text: "订阅", link: "https://tsanfer.xyz/rss.xml", icon: "reco-rss" },
        {
          text: "联系",
          icon: "reco-message",
          items: [
            {
              text: "GitHub",
              link: "https://github.com/Tsanfer",
              icon: "reco-github",
            },
            {
              text: "CSDN",
              link: "https://blog.csdn.net/qq_27961843/",
              icon: "reco-csdn",
            },
            {
              text: "BiliBili",
              link: "https://space.bilibili.com/12167681",
              icon: "reco-bilibili",
            },
            {
              text: "QQ",
              link:
                "tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=1124851454",
              icon: "reco-qq",
            },
            {
              text: "Twitter",
              link: "https://twitter.com/a1124851454",
              icon: "reco-twitter",
            },
            {
              text: "Gmail",
              link: "mailto:a1124851454@gmail.com",
              icon: "reco-mail",
            },
            {
              text: "个人网盘",
              link: "http://clouddisk.tsanfer.xyz:8080",
              icon: "reco-account",
            },
          ],
        },
      ],
      sidebar: "auto", //在所有页面中启用自动生成侧栏
    //   record: "蜀ICP备20005033号-1",
    //   recordLink: "https://icp.chinaz.com/tsanfer.xyz",
    //   cyberSecurityRecord: "川公网安备 51110202000301号",
      cyberSecurityLink:
        "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51110202000301",
      startYear: "2020", // 项目开始时间，只填写年份
      lastUpdated: "最后更新时间", // string | boolean
      author: "Woaichidanta丶",
      authorAvatar: "/avatar.png", //作者头像
      mode: "light", //默认显示白天模式
      // 评论设置
      valineConfig: {
        appId: process.env.LEANCLOUD_APP_ID,
        appKey: process.env.LEANCLOUD_APP_KEY,
      },
    },
  
    markdown: {
      lineNumbers: true, //代码显示行号
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
  
    // 插件
    plugins: [
      [
        "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
        {
          audios: [
            {
              name: "Faster Than Light",
              artist: "Andreas Waldetoft / Mia Stegmar",
              url:
                "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
              cover:
                "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
            },
            {
              name: "Dawn",
              artist: "DDRKirby(ISQ)",
              url:
                "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
              cover:
                "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
            },
            {
              name: "TRON Legacy (End Titles)",
              artist: "Daft Punk",
              url:
                "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3",
              cover:
                "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
            },
            {
              name: "Reconfig",
              artist: "Shortwire",
              url:
                "https://cdn-image.tsanfer.xyz/music/Reconfig%20-%20Shortwire.mp3",
              cover:
                "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
            },
            {
              name: "Broken Boy",
              artist: "Tonspender",
              url:
                "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
              cover:
                "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
            },
            {
              name: "Forever",
              artist: "PIKASONIC",
              url: "https://cdn-image.tsanfer.xyz/music/forever%20mst.mp3",
              cover:
                "https://p1.music.126.net/LjXufn3OaIgf8OwaEP_xcQ==/109951164419438501.jpg",
            },
            {
              name: "Life Of Sin Pt. 4",
              artist: "MitiS",
              url:
                "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3",
              cover:
                "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
            },
            {
              name: "Sea Of Voices (RAC Mix)",
              artist: "Porter Robinson",
              url:
                "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
              cover:
                "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
            },
            {
              name: "New Lipstick",
              artist: "The Kissaway Trail",
              url:
                "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac",
              cover:
                "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
            },
          ],
        },
      ],
      [
        "social-share", //分享插件
        {
          networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
          email: "a1124851454@gmail.com", //email地址
          twitterUser: "a1124851454", //Twitter账号
        },
      ],
      [
        "@vuepress-reco/vuepress-plugin-rss", //RSS插件
        {
          site_url: "https://tsanfer.xyz", //网站地址
          copyright: "Tsanfer", //版权署名
        },
      ],
      ["flowchart"], // 支持流程图
      ["vuepress-plugin-smooth-scroll"], // 平滑滚动
      ["@vuepress/nprogress"], // 加载进度条
      ["reading-progress"], // 阅读进度条
      ["vuepress-plugin-code-copy", true], //一键复制代码插件
    ],
  };
  