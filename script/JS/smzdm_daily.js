/*
    https://github.com/blackmatrix7/ios_rule_script/blob/master/script/smzdm/smzdm_daily.js
    https://user-api.smzdm.com/checkin
*/

const $ = new Env("什么值得买");
$.KEY_ck = 'cfg_smzdm_ck'
$.KEY_name = 'cfg_smzdm_name'
$.clickFavArticleMaxTimes = 7; // 好文收藏次数

// md5
!function(n){function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16){i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h)}return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8){r+=String.fromCharCode(n[t>>5]>>>t%32&255)}return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1){r[t]=0}var e=8*n.length;for(t=0;t<e;t+=8){r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32}return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1){u[r]=909522486^o[r],c[r]=1549556828^o[r]}return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1){t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t)}return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);

function randomStr(len = 18) {
  let char = "0123456789";
  let str = "";
  for (let i = 0; i < len; i++) {
    str += char.charAt(Math.floor(Math.random() * char.length));
  }
  return str;
}

// 获取用户信息
function getWebUserInfo() {
    let userInfo = {
      smzdm_id: null, // 什么值得买Id
      nick_name: null, // 昵称
      avatar: null, // 头像链接
      has_checkin: null, // 是否签到
      daily_checkin_num: null, // 连续签到天数
      unread_msg: null, // 未读消息
      level: null, // 旧版等级
      vip: null, // 新版VIP等级
      exp: null, // 旧版经验
      point: null, // 积分
      gold: null, // 金币
      silver: null, // 碎银子
      prestige: null, // 威望
      user_point_list: [], // 近期经验变动情况
      blackroom_desc: "",
      blackroom_level: "",
    };
    return new Promise(async (resolve) => {
      // 获取旧版用户信息
      await $.http
        .get({
          url: `https://zhiyou.smzdm.com/user/info/jsonp_get_current?with_avatar_ornament=1&callback=jQuery112403507528653716241_${new Date().getTime()}&_=${new Date().getTime()}`,
          headers: {
            Accept:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9",
            Connection: "keep-alive",
            Host: "zhiyou.smzdm.com",
            Referer: "https://zhiyou.smzdm.com/user/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
            Cookie: $.cookie
          },
        })
        .then((resp) => {
          let obj = JSON.parse(/\((.*)\)/.exec(resp.body)[1]);
          if (obj["smzdm_id"] !== 0) {
            userInfo.smzdm_id = obj["smzdm_id"];
            userInfo.nick_name = obj["nickname"]; // 昵称
            userInfo.avatar = `https:${obj["avatar"]}`; // 头像链接
            userInfo.has_checkin = obj["checkin"]["has_checkin"]; // 是否签到
            userInfo.daily_checkin_num = obj["checkin"]["daily_checkin_num"]; // 连续签到天数
            userInfo.unread_msg = obj["unread"]["notice"]["num"]; // 未读消息数
            userInfo.level = obj["level"]; // 旧版等级
            userInfo.vip = obj["vip_level"]; // 新版VIP等级
            userInfo.blackroom_desc = obj["blackroom_desc"]; // 小黑屋描述
            userInfo.blackroom_desc = obj["blackroom_level"]; // 小黑屋等级
            // userInfo.exp = obj['exp'] // 旧版经验
            // userInfo.point = obj['point'] // 积分
            // userInfo.gold = obj['gold'] // 金币
            // userInfo.silver = obj['silver'] // 碎银子
          } else {
            $.warn(
              `获取用户信息异常，Cookie过期或接口变化：${JSON.stringify(obj)}`
            );
          }
        })
        .catch((err) => {
          $.error(`获取用户信息异常，${err}`);
        });
      // 获取新版用户信息
      await $.http
        .get({
          url: "https://zhiyou.smzdm.com/user/exp/",
          headers: {
            'User-Agent': 'smzdm 10.4.20 rv:134.2 (iPhone 11; iOS 15.5; zh_CN)/iphone_smzdmapp/10.4.20',
            Cookie: $.cookie
          }
        })
        .then((resp) => {
          const data = resp.body;
          // 获取用户名
          userInfo.nick_name = data
            .match(
              /info-stuff-nickname.*zhiyou\.smzdm\.com\/user[^<]*>([^<]*)</
            )[1]
            .trim();
          // 获取近期经验变动情况
          const pointTimeList = data.match(
            /<div class="scoreLeft">(.*)<\/div>/gi
          );
          const pointDetailList = data.match(
            /<div class=['"]scoreRight ellipsis['"]>(.*)<\/div>/gi
          );
          const minLength =
            pointTimeList.length > pointDetailList.length
              ? pointDetailList.length
              : pointTimeList.length;
          let userPointList = [];
          for (let i = 0; i < minLength; i++) {
            userPointList.push({
              time: pointTimeList[i].match(
                /\<div class=['"]scoreLeft['"]\>(.*)\<\/div\>/
              )[1],
              detail: pointDetailList[i].match(
                /\<div class=['"]scoreRight ellipsis['"]\>(.*)\<\/div\>/
              )[1],
            });
          }
          userInfo.user_point_list = userPointList;
          // 获取用户资源
          const assetsNumList = data.match(/assets-part[^<]*>(.*)</gi);
          userInfo.point = Number(
            assetsNumList[0].match(/assets-num[^<]*>(.*)</)[1]
          ); // 积分
          userInfo.exp = Number(
            assetsNumList[2].match(/assets-num[^<]*>(.*)</)[1]
          ); // 经验
          userInfo.gold = Number(
            assetsNumList[4].match(/assets-num[^<]*>(.*)</)[1]
          ); // 金币
          userInfo.silver = Number(
            assetsNumList[6].match(/assets-num[^<]*>(.*)</)[1]
          ); // 碎银子
        })
        .catch((err) => {
          $.error(`获取新版用户信息出现异常，${err}`);
        });
      // 返回结果
      resolve(userInfo);
    });
}

function androidSignin(username) {
  return new Promise(async (resolve, reject) => {
    const smzdmToken = $.cookie.slice(5);
    const smzdmKey = 'apr1$AwP!wRRT$gJ/q.X24poeBInlUJC';
    const outcome = Math.round(new Date().getTime() / 1000).toString();
    const rawData = `f=android&sk=${username}&time=${outcome}000&token=${smzdmToken}&v=9.9.12&weixin=1&key=${smzdmKey}`;
    const sign = $.md5(rawData).toUpperCase();
    await $.http.post({
      url: "https://user-api.smzdm.com/checkin",
      headers: {
        'User-Agent': 'smzdm 10.4.20 rv:134.2 (iPhone 11; iOS 15.5; zh_CN)/iphone_smzdmapp/10.4.20',
        'Accept-Language': 'zh-Hans-CN;q=1',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'Keep-Alive',
        'request_key': randomStr(18),
        'Content-Type': 'application/x-www-form-urlencoded',
        Cookie: $.cookie
      },
      body: `sk=${username}&sign=${sign}&weixin=1&v=9.9.12&captcha=&f=android&token=${encodeURIComponent(smzdmToken)}&touchstone_event=&time=${outcome}000`,
    }).then(resp => {
      let obj = resp.body;
      if (typeof obj === "string"){
        obj = JSON.parse(obj);
      }
      if (obj["error_code"] === "0" && obj["error_msg"].indexOf("签到成功") > -1){
        $.subTitle = `签到成功`;
        $.info("Android端签到成功");
        resolve([true, "Android端签到成功"]);
      }
      else if (obj["error_code"] === "0" && obj["error_msg"] === "已签到") {
        $.subTitle = `签到重复`;
        $.info("Android端重复签到");
        resolve([true, "Android端重复签到"]);
      } else {
        $.subTitle = `签到异常`;
        $.warn(`Android端签到出现异常，接口返回数据不合法：${obj}  ${JSON.stringify(obj)}`);
        reject("Android端签到异常");
      }
    })
  });
}

// 每日抽奖
function lotteryDraw() {
  return new Promise(async (resolve, reject) => {
    let activeId = "";
    await $.http
      .get({
        url: "https://m.smzdm.com/zhuanti/life/choujiang/",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-cn",
          Connection: "keep-alive",
          Host: "m.smzdm.com",
          "User-Agent":
            "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/smzdm 9.9.6 rv:93.4 (iPhone13,4; iOS 14.5; zh_CN)/iphone_smzdmapp/9.9.6/wkwebview/jsbv_1.0.0",
          Cookie: $.cookie
        },
      })
      .then((resp) => {
        let _activeId =
          /name\s?=\s?\"lottery_activity_id\"\s+value\s?=\s?\"([a-zA-Z0-9]*)\"/.exec(
            resp.body
          );
        if (_activeId) {
          activeId = _activeId[1];
        } else {
          $.warn(`获取每日抽奖activeId失败`);
        }
      })
      .catch((err) => {
        $.error(`获取每日抽奖activeId失败，${err}`);
      });
    if (!!activeId) {
      await $.http
        .get({
          url: `https://zhiyou.smzdm.com/user/lottery/jsonp_draw?callback=jQuery34109305207178886287_${new Date().getTime()}&active_id=${activeId}&_=${new Date().getTime()}`,
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-cn",
            Connection: "keep-alive",
            Host: "zhiyou.smzdm.com",
            Referer: "https://m.smzdm.com/zhuanti/life/choujiang/",
            "User-Agent":
              "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/smzdm 9.9.0 rv:91 (iPhone 11 Pro Max; iOS 14.2; zh_CN)/iphone_smzdmapp/9.9.0/wkwebview/jsbv_1.0.0",
            Cookie: $.cookie
          },
        })
        .then((resp) => {
          let data = /\((.*)\)/.exec(resp.body);
          let obj = JSON.parse(data[1]);
          if (
            obj["error_code"] === 0 ||
            obj["error_code"] === 1 ||
            obj["error_code"] === 4
          ) {
            resolve(obj["error_msg"]);
          } else {
            $.error(`每日抽奖失败，接口响应异常：${data}`);
            resolve("每日抽奖失败，接口响应异常");
          }
        })
        .catch((err) => {
          $.error(`每日抽奖失败，${err}`);
          resolve("每日抽奖失败，接口/执行异常");
        });
    }
  });
}

// 收藏文章
function clickFavArticle(articleId) {
  return new Promise((resolve, reject) => {
    $.http
      .post({
        url: "https://zhiyou.smzdm.com/user/favorites/ajax_favorite",
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Host: "zhiyou.smzdm.com",
          Origin: "https://post.smzdm.com",
          Referer: "https://post.smzdm.com/",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41",
          Cookie: $.cookie
        },
        body: `article_id=${articleId}&channel_id=11&client_type=PC&event_key=%E6%94%B6%E8%97%8F&otype=%E6%94%B6%E8%97%8F&aid=${articleId}&cid=11&p=2&source=%E6%97%A0&atp=76&tagID=%E6%97%A0&sourcePage=https%3A%2F%2Fpost.smzdm.com%2F&sourceMode=%E6%97%A0`,
      })
      .then((resp) => {
        const obj = JSON.parse(resp.body);
        if (obj["error_code"] === 0) {
          $.info(`好文${articleId}收藏成功`);
          resolve(true);
        } else if (obj["error_code"] === 2) {
          $.info(`好文${articleId}取消收藏成功`);
          resolve(true);
        } else {
          $.error(`好文${articleId}收藏失败，${JSON.stringify(obj)}`);
          resolve(false);
        }
      })
      .catch((err) => {
        $.error(`文章加入/取消收藏失败，${err}`);
        reject(false);
      });
  });
}

// 收藏文章任务
function favArticles() {
  return new Promise(async (resolve, reject) => {
    let articlesId = [];
    let success = 0;
    await $.http
      .get({
        url: "https://post.smzdm.com/",
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          Host: "post.smzdm.com",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.41",
          Cookie: $.cookie
        }
      })
      .then((resp) => {
        const articleList = resp.body.match(
          /data-article=".*" data-type="zan"/gi
        );
        articleList.forEach((element) => {
          articlesId.push(
            element.match(/data-article="(.*)" data-type="zan"/)[1]
          );
        });
      })
      .catch((err) => {
        $.error(`获取待收藏的文章列表失败，${err}`);
        reject(err);
      });
    let favArticlesId = articlesId.splice(0, $.clickFavArticleMaxTimes);
    if (favArticlesId.length > 0) {
      // 加入收藏与取消收藏
      for (let articleId of favArticlesId) {
        if (await clickFavArticle(articleId) == true)
            success += 1
        await $.sleep(Math.floor(Math.random() * (1000 - 900 + 1)) + 900);
        await clickFavArticle(articleId);
        await $.sleep(Math.floor(Math.random() * (1000 - 900 + 1)) + 900);
      }
    }
    resolve(success);
  });
}

async function signDailyTasks() {
  $.cookie = $.getdata($.KEY_ck);
  if (!$.cookie || $.cookie.length === 0) {
    $.msg(
      $.name,
      "",
      "没有发现需要签到的Cookies\n请点击通知进行登录。",
      {
        "open-url":
          "https://zhiyou.smzdm.com/user/login?redirect_to=http://zhiyou.smzdm.com/user",
      }
    );
  } else {
      try {
        await androidSignin($.getdata($.KEY_name));
      } catch (err) {
          $.subTitle = `${$.name}签到失败`;
          $.log("签到Signin解析失败")
      }

      // 日常任务
      if (true) {
        const success = await favArticles();
        const msg = `每日收藏文章任务 ${success}/${$.clickFavArticleMaxTimes}`;
        $.content = msg;
        $.info(msg);
      }

      // 抽奖  抽奖活动已过期~
      if (false) {
        const msg = await lotteryDraw();
        $.content += !!$.content ? "\n" : "";
        $.content += msg;
        $.info(msg);
      }

      // 休眠
      await $.sleep(Math.floor(Math.random() * (2000 - 1300 + 1)) + 1300);

      // 获取签到后的用户信息
      const afterUserInfo = await getWebUserInfo();
    //   console.log(afterUserInfo)

      $.title = `${$.name} - ${afterUserInfo.nick_name} V${afterUserInfo.vip}`;

      // 检查是否黑号
      if (afterUserInfo.blackroom_desc) {
          $.msg(
            $.title, "",
            `⚠️账户已在小黑屋中，请谨慎使用脚本！\n小黑屋描述:${afterUserInfo.blackroom_desc}`
          );
      }

      // 记录日志
    //   let msgdata = `昵称：${afterUserInfo.nick_name}\n签到状态：${afterUserInfo.has_checkin}\n签到后等级${afterUserInfo.vip}，积分${afterUserInfo.point}，经验${afterUserInfo.exp}，金币${afterUserInfo.gold}，碎银子${afterUserInfo.silver}，未读消息${afterUserInfo.unread_msg}`;
    //   $.info(msgdata);

      // 通知
      if (afterUserInfo.exp) {
        $.content += !!$.content ? "\n" : "";
        $.content +=
          "积分" +
          afterUserInfo.point +
          " 经验" +
          afterUserInfo.exp +
          " 金币" +
          afterUserInfo.gold +
          "\n" +
          "碎银子" +
          afterUserInfo.silver +
          " 未读消息" +
          afterUserInfo.unread_msg;
      }
      $.msg($.title, $.subTitle, $.content, {
        "media-url": afterUserInfo.avatar,
      });

    }
}

// Web端登录获取Cookie
async function getCookie() {
    try {
      const newCookie = $.request.headers.Cookie;
      const newcookieId = newCookie.match(/(session_id|__ckguid)=([^;.]*)/ig)[0];
  
      const oldCookie = $.getdata($.KEY_ck);
      const oldcookieId = oldCookie.match(/(session_id|__ckguid)=([^;.]*)/ig)[0];
  
      // console.log(JSON.stringify(session))
  
      if ((oldcookieId === undefined) || (oldcookieId !== newcookieId)){
        if ($.setdata(newCookie, $.KEY_ck)) {
          const uuser = await getWebUserInfo()
          $.setdata(uuser.nick_name, $.KEY_name)
          $.subt = `🎈获取Cookie成功`
          $.desc = newCookie
        } else {
          $.subt = `🎈获取Cookie失败`
        }
        $.msg($.name, $.subt, $.desc)
      }else{
        $.log("当前页面获取的Cookie与客户端存储的Cookie相同,无需更新");
        $.msg($.name, "Cookie is the latest", $.desc)
      }
    } catch (err) {
      $.msg($.name, `获取${$.name}Cookies出现异常`, err)
    }
}

!(async () => {
    const AppGetCookieRegex = /^https?:\/\/user-api\.smzdm\.com\/checkin$/;

    if ( $.isRequest && AppGetCookieRegex.test($.request.url) ) {
        await getCookie();
    } else {
        await signDailyTasks();
    }
})()
    .catch((err) => {
        $.desc = err
        $.msg($.name, $.subt, $.desc)
    })
    .finally(() => $.done());

$.sleep = function sleep(ms) {return new Promise((resolve) => setTimeout(resolve, ms));}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;"POST"===e&&(s=this.post);const i=new Promise(((e,i)=>{s.call(this,t,((t,s,o)=>{t?i(t):e(s)}))}));return t.timeout?((t,e=1e3)=>Promise.race([t,new Promise(((t,s)=>{setTimeout((()=>{s(new Error("请求超时"))}),e)}))]))(i,t.timeout):i}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.logLevels={debug:0,info:1,warn:2,error:3},this.logLevelPrefixs={debug:"[DEBUG] ",info:"[INFO] ",warn:"[WARN] ",error:"[ERROR] "},this.logLevel="info",this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null,...s){try{return JSON.stringify(t,...s)}catch{return e}}getjson(t,e){let s=e;if(this.getdata(t))try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise((e=>{this.get({url:t},((t,s,i)=>e(i)))}))}runScript(t,e){return new Promise((s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let o=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");o=o?1*o:20,o=e&&e.timeout?e.timeout:o;const[r,a]=i.split("@"),n={url:`http://${a}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:o},headers:{"X-Key":r,Accept:"*/*"},policy:"DIRECT",timeout:o};this.post(n,((t,e,i)=>s(i)))})).catch((t=>this.logErr(t)))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),o=JSON.stringify(this.data);s?this.fs.writeFileSync(t,o):i?this.fs.writeFileSync(e,o):this.fs.writeFileSync(t,o)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let o=t;for(const t of i)if(o=Object(o)[t],void 0===o)return s;return o}lodash_set(t,e,s){return Object(t)!==t||(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce(((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{}),t)[e[e.length-1]]=s),t}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),o=s?this.getval(s):"";if(o)try{const t=JSON.parse(o);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,o]=/^@(.*?)\.(.*?)$/.exec(e),r=this.getval(i),a=i?"null"===r?null:r||"{}":"{}";try{const e=JSON.parse(a);this.lodash_set(e,o,t),s=this.setval(JSON.stringify(e),i)}catch(e){const r={};this.lodash_set(r,o,t),s=this.setval(JSON.stringify(r),i)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.cookie&&void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar)))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",((t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}})).then((t=>{const{statusCode:i,statusCode:o,headers:r,rawBody:a}=t,n=s.decode(a,this.encoding);e(null,{status:i,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:i,response:o}=t;e(i,o,o&&s.decode(o.rawBody,this.encoding))}));break}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),void 0===t.followRedirect||t.followRedirect||((this.isSurge()||this.isLoon())&&(t["auto-redirect"]=!1),this.isQuanX()&&(t.opts?t.opts.redirection=!1:t.opts={redirection:!1})),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,((t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,i)}));break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then((t=>{const{statusCode:s,statusCode:i,headers:o,body:r,bodyBytes:a}=t;e(null,{status:s,statusCode:i,headers:o,body:r,bodyBytes:a},r,a)}),(t=>e(t&&t.error||"UndefinedError")));break;case"Node.js":let i=require("iconv-lite");this.initGotEnv(t);const{url:o,...r}=t;this.got[s](o,r).then((t=>{const{statusCode:s,statusCode:o,headers:r,rawBody:a}=t,n=i.decode(a,this.encoding);e(null,{status:s,statusCode:o,headers:r,rawBody:a,body:n},n)}),(t=>{const{message:s,response:o}=t;e(s,o,o&&i.decode(o.rawBody,this.encoding))}));break}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}queryStr(t){let e="";for(const s in t){let i=t[s];null!=i&&""!==i&&("object"==typeof i&&(i=JSON.stringify(i)),e+=`${s}=${i}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",i="",o={}){const r=t=>{const{$open:e,$copy:s,$media:i,$mediaMime:o}=t;switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{const r={};let a=t.openUrl||t.url||t["open-url"]||e;a&&Object.assign(r,{action:"open-url",url:a});let n=t["update-pasteboard"]||t.updatePasteboard||s;if(n&&Object.assign(r,{action:"clipboard",text:n}),i){let t,e,s;if(i.startsWith("http"))t=i;else if(i.startsWith("data:")){const[t]=i.split(";"),[,o]=i.split(",");e=o,s=t.replace("data:","")}else{e=i,s=(t=>{const e={JVBERi0:"application/pdf",R0lGODdh:"image/gif",R0lGODlh:"image/gif",iVBORw0KGgo:"image/png","/9j/":"image/jpg"};for(var s in e)if(0===t.indexOf(s))return e[s];return null})(i)}Object.assign(r,{"media-url":t,"media-base64":e,"media-base64-mime":o??s})}return Object.assign(r,{"auto-dismiss":t["auto-dismiss"],sound:t.sound}),r}case"Loon":{const s={};let o=t.openUrl||t.url||t["open-url"]||e;o&&Object.assign(s,{openUrl:o});let r=t.mediaUrl||t["media-url"];return i?.startsWith("http")&&(r=i),r&&Object.assign(s,{mediaUrl:r}),console.log(JSON.stringify(s)),s}case"Quantumult X":{const o={};let r=t["open-url"]||t.url||t.openUrl||e;r&&Object.assign(o,{"open-url":r});let a=t["media-url"]||t.mediaUrl;i?.startsWith("http")&&(a=i),a&&Object.assign(o,{"media-url":a});let n=t["update-pasteboard"]||t.updatePasteboard||s;return n&&Object.assign(o,{"update-pasteboard":n}),console.log(JSON.stringify(o)),o}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,i,r(o));break;case"Quantumult X":$notify(e,s,i,r(o));break;case"Node.js":break}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}debug(...t){this.logLevels[this.logLevel]<=this.logLevels.debug&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.debug}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}info(...t){this.logLevels[this.logLevel]<=this.logLevels.info&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.info}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}warn(...t){this.logLevels[this.logLevel]<=this.logLevels.warn&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.warn}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}error(...t){this.logLevels[this.logLevel]<=this.logLevels.error&&(t.length>0&&(this.logs=[...this.logs,...t]),console.log(`${this.logLevelPrefixs.error}${t.map((t=>t??String(t))).join(this.logSeparator)}`))}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.map((t=>t??String(t))).join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,e,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,e,void 0!==t.message?t.message:t,t.stack);break}}wait(t){return new Promise((e=>setTimeout(e,t)))}done(t={}){const e=((new Date).getTime()-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${e} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
