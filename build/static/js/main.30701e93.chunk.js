(this.webpackJsonpclickety=this.webpackJsonpclickety||[]).push([[0],{42:function(e,t,n){e.exports=n(80)},75:function(e,t){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),l=n.n(r),u=n(5),i=n(20),o=n(21),s=n(41),m=n(8),f=n(39),O=n(38),b=n.n(O)()("/"),E=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),l=Object(u.a)(r,2),i=l[0],o=l[1];return[n,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;clearTimeout(i),c(e),o(setTimeout((function(){return c(null)}),1e3*t))}]},p=function(){var e=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(e),i=Object(u.a)(l,2),o=i[0],s=i[1];Object(a.useEffect)((function(){var e=window.localStorage.getItem("points");e&&s(parseInt(e))}),[]);var m=function(e){return e<=0?0:e%500===0?250:e%100===0?40:e%10===0?5:0};b.on("totalClicks",(function(e){r(e)}));return[o,function(){if(o>0){var e=o-1+m(c+1);s(e),window.localStorage.setItem("points",e),b.emit("click")}return[9-c%10,m(c+1)]},function(){return s(e)}]}(20),t=Object(u.a)(e,3),n=t[0],r=t[1],l=t[2],O=E(),p=Object(u.a)(O,2),v=p[0],j=p[1],k=E(),y=Object(u.a)(k,2),I=y[0],d=y[1],N=function(e){if(!e)return{display:"none"}};return c.a.createElement("div",{className:"container"},c.a.createElement(f.a,null,c.a.createElement(m.a,null,c.a.createElement(o.a,{variant:"success",style:N(I)},I)),c.a.createElement(m.a,null,c.a.createElement(s.a,{variant:"info"},c.a.createElement("h2",null,"points: ",n))),c.a.createElement(m.a,null,c.a.createElement(o.a,{variant:"primary",style:N(v)},v)),c.a.createElement(m.a,null,c.a.createElement(i.a,{type:"button",onClick:function(){var e=r(),t=Object(u.a)(e,2),n=t[0],a=t[1];n>0&&j("ONLY ".concat(n," CLICKS UNTIL NEXT PRIZE")),a>0&&d("CONGRATULATION YOU WON ".concat(a," POINTS!!"))}},"click me"),c.a.createElement(i.a,{type:"button",onClick:l},"restart"))))};l.a.render(c.a.createElement(p,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.30701e93.chunk.js.map