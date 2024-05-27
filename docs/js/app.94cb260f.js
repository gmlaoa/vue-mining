(function(){"use strict";var t={8504:function(t,e,s){var i=s(8649),a=s(3165),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("a",{staticClass:"github-corner",attrs:{href:"https://github.com/setube/vue-mining","aria-label":"View source on GitHub"}},[e("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0","z-index":"2"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),e("div",{staticClass:"card_top_userinfo_body clearfix"},[e("div",{staticClass:"fl"},[e("img",{staticClass:"top_info_avatar_pic",attrs:{src:t.avatar},on:{click:t.showdialog}})]),e("div",{staticClass:"fl"},[e("span",[t._v("我 ")]),e("span",{staticClass:"top_info_star"},[t._v("★")]),e("span",[t._v(t._s(t.star))])])]),e("div",{staticClass:"common_body"},[e("h5",{staticClass:"common_title"},[t._v("Vue 挖矿小游戏")]),e("h6",{staticClass:"common_title_tips"},[t._v("当前挖矿分数: "+t._s(t.score)+" | 目前你已挖完矿区"+t._s(t.mapnum)+"次")]),e("div",{staticClass:"card_box"},t._l(t.grid,(function(s,i){return e("div",{key:i,staticClass:"card_item",on:{click:function(e){return t.dig(s)},contextmenu:[function(e){return e.preventDefault(),t.flag(s)},function(e){return t.flag(s)}]}},["success"===s.type||"error"===s.type?e("div",{class:["card_bg","open",s.type]},[e("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[e("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"desc"},[t._v("挖取这座矿区你获得了"+t._s(s.score)+"分")]),e("div",{staticClass:"desc"},[t._v(t._s("success"===s.type?"恭喜你挖到了宝贵的星星矿石":s.mines?"探测器检测到周围有"+s.mines+"座星星矿":"探测器未检测到周围有星星矿"))])]),e("div",["error"===s.type?e("span",[t._v(t._s(s.mines))]):e("span",[t._v("★")]),e("img",{staticClass:"avatar",attrs:{src:t.avatar}})])])],1):e("div",{class:["card_bg","map-"+t.frequency]})])})),0),e("div",{staticClass:"card_demining_tool_body"},[e("div",{staticClass:"demin_tool_hooper hooper"},[e("div",{staticClass:"hooper-list"},[e("ul",{staticClass:"hooper-track"},[e("li",{staticClass:"hooper-slide"},[e("div",{staticClass:"demin_tool_hooper_item_body clearfix"},t._l(t.pickaxes,(function(s,i){return e("div",{key:i,staticClass:"card_pickaxe_body",on:{click:function(e){return t.clickPickaxe(i)}}},[e("el-popover",{attrs:{placement:"top-start",title:s.name,width:"200",trigger:"hover",content:s.desc}},[e("div",{class:["card_pickaxe_ico",{active:t.pickaxe===i}],attrs:{slot:"reference"},slot:"reference"},[e("img",{attrs:{src:s.icon}})]),e("div",{staticClass:"card_demining_time_body",attrs:{slot:"reference"},slot:"reference"},[t.cd[i].click?e("span",[t._v("完成！")]):e("span",[e("el-statistic",{attrs:{format:"mm:ss",value:t.cd[i].time,"time-indices":""},on:{finish:function(e){return t.pickaxeFinish(i)}}})],1)])])],1)})),0)])]),e("div",{staticClass:"hooper-next",on:{click:t.next}},[e("svg",{attrs:{viewBox:"0 0 24 24",width:"24px",height:"24px"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}})])])])])])]),e("div",{staticClass:"bg_1"}),e("div",{staticClass:"bg_2"}),e("el-dialog",{staticClass:"dialog",attrs:{title:"我的信息",visible:t.dialogVisible,width:"95%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",{staticClass:"top_info_more_body"},[e("div",{staticClass:"top_moreinfo_avatar_pic_body set_pointer"},[e("img",{staticClass:"top_moreinfo_avatar_pic",attrs:{src:t.avatar}})]),e("div",{staticClass:"top_moreinfo_name"},[t._v("我")]),e("div",{staticClass:"top_moreinfo_body clearfix"},[e("div",{staticClass:"top_moreinfo_box"},[e("div",{staticClass:"top_moreinfo_label"},[t._v("星星："+t._s(t.star))])]),e("div",{staticClass:"top_moreinfo_box"},[e("div",{staticClass:"top_moreinfo_label"},[t._v("等级："+t._s(t.mapnum))])])])]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"upload"},[e("el-upload",{staticClass:"item",attrs:{action:"#","http-request":t.httpRequest,"show-file-list":!1,accept:"image/*"}},[e("el-button",{attrs:{type:"primary"}},[t._v("修改头像")])],1),e("el-upload",{staticClass:"item",attrs:{action:"#","http-request":t.importdata,"show-file-list":!1,accept:"application/json"}},[e("el-button",{attrs:{type:"info"}},[t._v("导入")])],1),e("el-button",{staticClass:"item",attrs:{type:"warning"},on:{click:t.exportdata}},[t._v("导出")]),e("el-button",{staticClass:"item",attrs:{type:"danger"},on:{click:t.clear}},[t._v("清空")])],1)])]),e("el-dialog",{attrs:{title:"数据清空提示",visible:t.clearshow,width:"30%"},on:{"update:visible":function(e){t.clearshow=e}}},[e("span",[t._v("清空数据属于危险操作, 请问是否要清空数据?")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.clear}},[t._v("取消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.cleardata}},[t._v("确定")])],1)]),e("el-dialog",{attrs:{title:"游戏作弊",visible:t.nextshow,width:"35%","before-close":t.next},on:{"update:visible":function(e){t.nextshow=e}}},[e("div",{staticClass:"dialog-footer"},[e("el-button",{on:{click:function(e){return t.cheating(0)}}},[t._v("铁镐冷却")]),e("el-button",{attrs:{type:"info"},on:{click:function(e){return t.cheating(1)}}},[t._v("银稿冷却")]),e("el-button",{attrs:{type:"warning"},on:{click:function(e){return t.cheating(2)}}},[t._v("金稿冷却")])],1)]),e("el-dialog",{attrs:{title:"你成功打开了秘笈！",visible:t.cheatsshow,width:"30%","before-close":t.cheats},on:{"update:visible":function(e){t.cheatsshow=e}}},[e("span",[t._v("通往哲♂学♂之路啊，我命令你开启吧！")]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"success"},on:{click:t.digAllMines}},[t._v("开启！")])],1)])],1)},o=[],n=(s(381),s(5194),s(7092),s(8925),s(1796),s(1467),s(2064),s(2114),s(726),s(2765),s(3312),s(1093)),c={data(){return{cd:[],grid:[],star:0,mines:30,score:0,avatar:"",mapnum:0,pickaxe:0,pickaxes:[{name:"铁镐",desc:"一把简单的镐，十分钟就能做出来，但是能成功挖出来的星星矿和宝石并不多！",icon:s(5107)},{name:"银稿",desc:"银质的镐，制作需要半小时，挖出来的星星矿和宝石至少比铁镐多！",icon:s(9882)},{name:"金稿",desc:"制作工艺非常难的镐，制作需要一小时，金镐能最大程度减少挖掘对星星矿和宝石造成的破坏，所以挖出来的星星矿和宝石的产量非常高！",icon:s(574)},{name:"保罗炸弹",desc:"感受保罗的愤怒吧！能一次性轰开3×3片矿区！",icon:s(8248)}],nextshow:!1,clearshow:!1,frequency:0,cheatsshow:!1,minePositions:[],dialogVisible:!1,currentTimeStamp:0}},created(){this.initGrid(),this.userinfo(),this.checkInput(),console.log("%c You have successfully unlocked the manual! To the path of philosophy, I command you to open! \n                Up, Up, Down, Down, Left, Left, Right, Right, B, A, B, A                      \n                         https://github.com/setube/vue-mining                                 ","background: #E72264; padding:5px 0; color: #FFFFFF;")},methods:{cheats(){this.cheatsshow=!this.cheatsshow},cheating(t){this.cd[t].time=0,this.cd[t].click=!0,this.$store.commit("setCd",this.cd)},next(){this.nextshow=!this.nextshow},importdata(t){const e=t.file,s=new FileReader;s.onload=t=>{try{const e=JSON.parse(t.target.result);this.$store.commit("setCd",e.cd),this.$store.commit("setStar",e.star),this.$store.commit("setGrid",e.grid),this.$store.commit("setScore",e.score),this.$store.commit("setMapnum",e.mapnum),this.$store.commit("setAvatar",e.avatar),this.$store.commit("setFrequency",e.frequency),location.reload()}catch(e){n.Message.error("数据导入失败, 错误信息:"+e)}},s.readAsText(e)},exportdata(){const t=new Blob([localStorage.getItem("vuex")],{type:"application/json;charset=utf-8"}),e=URL.createObjectURL(t),s=document.createElement("a");s.href=e,s.download="挖矿小游戏导出的数据.json",document.body.appendChild(s),s.click(),document.body.removeChild(s)},clear(){this.clearshow=!this.clearshow},cleardata(){localStorage.removeItem("vuex"),location.reload()},userinfo(){this.cd=this.$store.state.cd,this.star=this.$store.state.star,this.score=this.$store.state.score,this.avatar=this.$store.state.avatar,this.mapnum=this.$store.state.mapnum,this.frequency=this.$store.state.frequency,this.currentTimeStamp=(new Date).getTime()},httpRequest(t){const e=this,s=new FileReader,i=t.file;s.onloadend=t=>{try{const s=new Image;s.onload=()=>{const t=100,i=s.width/s.height,a=t/i,r=document.createElement("canvas"),o=r.getContext("2d");r.width=t,r.height=a,o.drawImage(s,0,0,t,a);const n=r.toDataURL("image/jpeg");e.avatar=n,this.$store.commit("setAvatar",n)},s.src=t.target.result,(0,n.Message)({message:"头像修改成功~",type:"success"})}catch(s){n.Message.error("头像修改失败, 错误信息:"+s)}},s.readAsDataURL(i)},showdialog(){this.dialogVisible=!this.dialogVisible},pickaxeFinish(t){this.cd[t].click=!0,this.$store.commit("setCd",this.cd)},clickPickaxe(t){this.pickaxe=t},initGrid(){if(this.$store.state.grid.length){this.grid=this.$store.state.grid;const t=this.grid.every((t=>!t.mined||t.flagged));if(t){this.grid=[];for(let t=0;t<225;t++)this.grid.push({id:t,type:"",mined:!1,flagged:!1,score:0,mines:0});this.placeMines()}}else{for(let t=0;t<225;t++)this.grid.push({id:t,type:"",mined:!1,flagged:!1,score:0,mines:0});this.placeMines()}this.$store.commit("setGrid",this.grid)},placeMines(){let t=new Set;while(t.size<this.mines){let e=Math.floor(Math.random()*this.grid.length);t.has(e)||(t.add(e),this.grid[e].mined=!0,this.minePositions.push(e))}},alculateSurroundingStars(t,e,s){const i=Math.floor(e/s),a=e%s,r=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];let o=0;for(const[n,c]of r){const e=i+n,r=a+c;if(e>=0&&e<s&&r>=0&&r<s){const i=e*s+r,a=t[i];a.mined&&o++}}return o},digAllMines(){for(let t=0;t<this.grid.length;t++){const e=this.grid[t];e.mined&&!e.flagged&&(this.star++,e.type="success",e.mined=!1)}this.cd.forEach((t=>{t.time=0,t.click=!0})),this.cheatsshow=!1,this.$store.commit("setCd",this.cd),this.$store.commit("setStar",this.star)},checkInput(){const t=[38,38,40,40,37,37,39,39,66,65,66,65];let e=new Array(t.length).fill(0);const s=1;document.onkeydown=i=>{let a=e.lastIndexOf(s);a=-1===a?0:a+1,a>t.length&&(this.cheatsshow=!0),i.keyCode===t[a]?a+1===e.length?(this.cheatsshow=!0,e=new Array(t.length).fill(0)):e[a]=s:e=new Array(t.length).fill(0)}},dig(t){if(!t.flagged&&this.cd[this.pickaxe].click){let e,s;switch(3===this.pickaxe&&this.revealAdjacent3x3(this.grid,t.id,15),t.mined?(this.star++,t.type="success",this.$store.commit("setStar",this.star)):t.type="error",t.mines=this.alculateSurroundingStars(this.grid,t.id,15),(0,n.Message)({message:"success"==t.type?"恭喜你，挖到了宝贵的星星矿石，"+(t.mines?"同时探测器检测到周围有"+t.mines+"座星星矿":"探测器未检测到周围有星星矿"):"你没有挖到星星矿石，"+(t.mines?"同时探测器检测到周围有"+t.mines+"座星星矿":"探测器未检测到周围有星星矿"),type:"success"}),this.pickaxe){case 0:e=1,s=6e5;break;case 1:e=2,s=18e5;break;case 2:e=3,s=36e5;break;default:e=1,s=72e5}t.score+=e,t.flagged=!0,this.score+=t.score,this.cd[this.pickaxe].time=this.currentTimeStamp+s,this.cd[this.pickaxe].click=!1,this.$store.commit("setCd",this.cd),this.$store.commit("setGrid",this.grid),this.$store.commit("setScore",this.score),this.checkAllCleared()}},revealAdjacent3x3(t,e,s){const i=Math.floor(e/s),a=e%s,r=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[o,n]of r){const e=i+o,r=a+n;if(e>=0&&e<s&&r>=0&&r<s){const i=e*s+r,a=t[i];a.flagged||a.mined?a.mined&&!a.flagged&&(this.star++,a.type="success",this.$store.commit("setStar",this.star)):(this.score+=a.score,a.type="error",a.mines=this.alculateSurroundingStars(this.grid,i,15),a.flagged=!0),this.score++,this.$store.commit("setGrid",this.grid),this.$store.commit("setScore",this.score)}}},flag(t){t.flagged=!t.flagged},checkAllCleared(){const t=this.grid.every((t=>""!==t.type)),e=this.grid.every((t=>!t.mined||t.flagged));(e||t)&&((0,n.Message)({message:`恭喜你，所有${e?"矿石":"矿区"}都已被挖完！`,type:"success"}),this.initGrid(),this.mapnum++,this.frequency++,17===this.frequency&&(this.frequency=0),this.$store.commit("setMapnum",this.mapnum),this.$store.commit("setFrequency",this.frequency))}}},l=c,A=s(4034),d=(0,A.A)(l,r,o,!1,null,"9cab8472",null),h=d.exports,u=s(7110);i["default"].use(a.Ay);var m=new a.Ay.Store({state:{cd:[{time:0,click:!0},{time:0,click:!0},{time:0,click:!0},{time:0,click:!0}],grid:[],star:0,score:0,avatar:s(5536),mapnum:0,frequency:1},mutations:{setCd(t,e){t.cd=e},setStar(t,e){t.star=e},setGrid(t,e){t.grid=e},setScore(t,e){t.score=e},setAvatar(t,e){t.avatar=e},setMapnum(t,e){t.mapnum=e},setFrequency(t,e){t.frequency=e}},plugins:[(0,u.A)({storage:window.localStorage,reducer(t){return{cd:t.cd,star:t.star,grid:t.grid,score:t.score,avatar:t.avatar,mapnum:t.mapnum,frequency:t.frequency}}})]});i["default"].use(a.Ay).use(n.Statistic).use(n.Popover).use(n.Tooltip).use(n.Dialog).use(n.Button).use(n.Upload),i["default"].config.productionTip=!1,new i["default"]({store:m,render:t=>t(h)}).$mount("#app")},5536:function(t){t.exports="data:image/png;base64,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"},5107:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURQAAACoqKj5ScmiMljQ+TigYGbW2u3NBREJCQl5eXlkzNZFRVaNjaIOHDIsAAAC7SURBVFjDY2AgE2hpaf3HhhnoBQbMATCL7IKKUHBGzzQwNrHzQ8EwfRoSkv+R8dB1AK4oQHfI1m27wRjmkGJHFzAePg7A5SAnJycwjouLA2N0h9A8cQ6YA0ZDApa4Io1NwRjdIejZdPg4AGbxxMBQMEbPZriyKdWK7gFzAMwiYgsYdIcMXQcQCvLh6wCYRYuTM8CY3EqFYp/T3QGkJjaalXB0d8Coz2GVyoD5nO4OGPX5yPM5zbpMQ80BAG0SBYOGfU/SAAAAAElFTkSuQmCC"},9882:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAABHAAAaJCggJiqQBwdTPgs9SEnYDQ1LVl95XBJkc36TfR52hZB6jJCJmaSrtrf/+bX2+frE9rB6AAAAAXRSTlMAQObYZgAAAIpJREFUeNrF0cEWhCAIBVCSgbIy8/9/NonFVKfg2CzmbbnviApwStgDz3FACKWkGq4B+NS0Aj0i55RKYe77rmsHipiVPK7qAAAih5iAKMZpUvIOxLiuRLKqXPfm2R2AOI5EAoS0A8R5Rjx+XRtAXJbvWMmlbwJZ7zy+2d8Av/eHwemb4N99AebYBxvK5Agtgpe2gQAAAABJRU5ErkJggg=="},574:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAAmGwMgJiorHwOTfR7/+bXLs0lPOwp5XBJkc35HAACQBwdLVl/YDQ12hZCJmaTrPDMAAAAAAXRSTlMAQObYZgAAAHxJREFUeNqF0VEVwCAIBVAqUIEKVLACFahgBSusghWssAqrsAqbO/6453TvwwP3gD8QtTAzvYLAFgLHDgeoKx4sOc+hUiqW1lCObHEJnlPgBciuqt4JgmxSX52DnE9PajOQS1qh9A3txy4IvwNxhwGEaHAzBHY86gDQD3ADREYtscPoUN8AAAAASUVORK5CYII="},8248:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACEFBMVEUAAACidyKtcCYyMjL///9VRUP8j436hH2WAlCoQ4Dqc1nnWVj+/f31c5L/lov9d3bcXD79kpD7ko+2Uo/yi4n8kof8jIH4dHaZNXLYTlncPlfpV1bXUTzv1Nb0bI/ThIX+joP9fnzhSXz7e3v5eHnoP3jtZXHmYnHeUFfqQVbIK0PNTDmEPjG8LxbDMALpwL7cnqDXJZ/0eJXyqJL1cJHwZo//mI7zjov7g4v7iYrnlon6h4X4ioL7iYDvbnnocnX0b3XQdXP7ZnLwXW7RYGvXWGj1ZWXOZV7jV17hU17qUFvZSlvlRFnIXFjmU1jpSFbHOVbZR1TRVE7ZN07NP0rNPkrWaUjbYka2J0XINUTOP0LEQDnKRjM9NzFcOi1INSxYQSv68fD58O/u2d7z29vrycnrxsbmurnltLTpsK7ha6jnhqfpp5/ojZ3/ppfZlpfblZPldpLYkZH5r5D4l4/roI7tho3ViYveU4vpgorqmInxa4j5pof3eIXPKYXsW4LzgoDze4DtdoDnen/fPn/qeX7ljnzSfHvwdXvukXjzYXb9f3XvaXPkXm7hWm7Ob2v2XWvRbGrWcmTXcFn4iVfWYVfkTlfXVFTmYVPePlHycVDlU0/pT07QXUyaDUzgaUnqZknkZUKSDkGlJjyqWjvXRTjtbjd9TDJEPjGlazAyMjBnPi9SMixROyvQPx3HNglP9JMtAAAAA3RSTlMAOhdcDJ9gAAABw0lEQVQ4y2LAAKysKFxSFbCCpGmpgJkZqICZmaACRiZc0sLCnJycEhLMsTgUrIIrwK6fY3Fdi5KSkqHhonnY3LFiZaSknAkvL6+JnGQkFgXMAT6mRkJsICAkaKHqzIwuj6GAGU1eSsqeVw4sL2hpKcirKoWigpljqVZ9tXVjs0iJuXmplSiftV1EBAczkgKXNPmsiqYOV/s8EZGJbSKVhY7piS7ICgBz5WFhSSnKzi0rNjbOyWxPBXJ5atci5JcHA0WAIEm+06pflgUMeCbEM8MVxPnrQ0QLRG0mJUOYGU7MCAXxXhpgfQaiZnx87mCm/lxkBcxeGhqOBvm+rSAFNVXu5fK+4VNmrUZSoCkpqe4grqKoras730ZBTEy819vbHykkmP08PPrUlZUVY/R0FzYoiCmoqXt6aiJ7c2poKDu7rRhQgV64nbKKCjt7SMh0ZAUcQUFABez82uvXCfTwi4uzs2tpTWZGjYuZXOxABW7cAmr87Ox+05ZgxNZskAIZkIJuh67gGcyY8c3FFSUtw80tEygdxsUFksdMclHSAhAFHCjyCJdyLFgWHS2gOYcDGtOYZiTE6ejorEnAnXWYQQBNGgDPEVcXdcJWwQAAAABJRU5ErkJggg=="}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,i,a,r){if(!i){var o=1/0;for(A=0;A<t.length;A++){i=t[A][0],a=t[A][1],r=t[A][2];for(var n=!0,c=0;c<i.length;c++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[c])}))?i.splice(c--,1):(n=!1,r<o&&(o=r));if(n){t.splice(A--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var A=t.length;A>0&&t[A-1][2]>r;A--)t[A]=t[A-1];t[A]=[i,a,r]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,r,o=i[0],n=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(c)var A=c(s)}for(e&&e(i);l<o.length;l++)r=o[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(A)},i=self["webpackChunkvue_mining"]=self["webpackChunkvue_mining"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(8504)}));i=s.O(i)})();