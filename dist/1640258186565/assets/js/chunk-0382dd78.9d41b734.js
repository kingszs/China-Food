(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0382dd78"],{2126:function(e,t,s){(t=s("24fb")(!1)).push([e.i,"#van_button[data-v-183d12ba]{margin:7px auto 7px auto;width:90%;border-radius:20px;border:0;font-size:16px}.goods-card[data-v-183d12ba]{margin:0;background-color:#fff}.van-card__title[data-v-183d12ba]{font-size:18px!important;margin-top:35px;margin-left:10px}.van-card__desc[data-v-183d12ba]{margin-left:10px}.van-card__header[data-v-183d12ba]{border-radius:10px}.van-cell-group[data-v-183d12ba]{margin-top:10px}",""]),e.exports=t},"3a12":function(e,t,s){"use strict";s("f8e8")},"59e7":function(e,t,s){"use strict";s.r(t);var a={data:function(){return{checked:!1,show:!1,pic:"8.jpg",username:"",user_id:""}},beforeCreate:function(){document.querySelector("body").setAttribute("style","background-color:#f7f8fa")},beforeDestroy:function(){document.querySelector("body").removeAttribute("style")},methods:{logOut:function(){this.show=!1,sessionStorage.removeItem("userName"),sessionStorage.removeItem("userPic"),sessionStorage.removeItem("userId"),this.$store.state.user_pic="",this.$store.state.user="",this.$store.state.user_id=""}},mounted:function(){this.$store.state.user&&(this.show=!0,this.pic=this.$store.state.user_pic,this.user_id=this.$store.state.user_id,this.username=this.$store.state.user),this.username=sessionStorage.getItem("userName"),this.username&&(this.show=!0,this.pic=sessionStorage.getItem("userPic"),this.user_id=sessionStorage.getItem("userId"))}},r=(s("3a12"),s("2877")),a=Object(r.a)(a,function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",[e("van-card",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"goods-card",staticStyle:{margin:"15px","border-radius":"10px"},attrs:{desc:"ID:"+this.user_id,title:this.username,thumb:s("3de4")("./"+t.pic)}}),e("van-card",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"goods-card",staticStyle:{margin:"15px","border-radius":"10px"},attrs:{title:"未登录",thumb:s("d3ff")}}),e("van-cell-group",{attrs:{inset:""}},[e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{title:"账号与安全",value:"内容","is-link":""}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{title:"编辑资料",value:"内容","is-link":""}})],1),e("van-cell-group",{attrs:{inset:""}},[e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{title:"隐私设置","is-link":"",value:"内容"}}),e("van-cell",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{title:"通知设置","is-link":"",value:"内容"}}),e("van-switch-cell",{attrs:{title:"深色模式"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),e("van-cell",{attrs:{title:"帮助与客服","is-link":""}}),e("van-cell",{attrs:{title:"关于美食中国","is-link":""}})],1),e("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],attrs:{type:"primary",text:"登录账号",block:"",id:"van_button",to:"/login"}}),e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{type:"danger",text:"退出登录",block:"",id:"van_button"},on:{click:t.logOut}})],1)},[],!1,null,"183d12ba",null);t.default=a.exports},f8e8:function(e,t,s){var a=s("2126");(a="string"==typeof(a=a.__esModule?a.default:a)?[[e.i,a,""]]:a).locals&&(e.exports=a.locals),(0,s("499e").default)("28cd2c16",a,!0,{sourceMap:!1,shadowMode:!1})}}]);