(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{24:function(e,t,c){},38:function(e,t,c){},64:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(28),r=c.n(i),l=(c(38),c(13)),o=c.n(l),j=c(29),d=c(7),h=c(30),b=c.n(h),m=(c(63),c(24),c(64),c(31)),u=c.n(m);var x=function(e){var t=e.selected,c=e.exitbutton,n=e.trailer;return Object(s.jsx)("div",{className:"detail",children:Object(s.jsx)("div",{className:"movie-card",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("a",{href:"#",children:Object(s.jsx)("img",{src:"http://localhost:8083/posters/".concat(t.posterPath),alt:"cover",width:"250",className:"cover"})}),Object(s.jsx)("div",{className:"hero",style:{backgroundImage:"url('http://localhost:8083/posters/".concat(t.posterPath,"')")},children:Object(s.jsxs)("div",{className:"details",children:[Object(s.jsxs)("div",{className:"title1",children:[t.title," "]}),Object(s.jsxs)("div",{className:"title2",children:["Categories: ",t.genre]})]})}),Object(s.jsxs)("div",{className:"description",children:[Object(s.jsx)("div",{className:"column2",children:Object(s.jsx)("p",{children:t.synopsis})}),Object(s.jsxs)("div",{className:"column3",children:[Object(s.jsx)("h3",{children:"Trailer:"}),console.log(n),Object(s.jsx)(u.a,{width:"100%",height:"200px",url:"http://localhost:8083/api/videos/video/".concat(t.videoPath),playing:!0})]})]}),Object(s.jsx)("a",{href:"#",onClick:function(){return c()},className:"close"})]})})})},O=function(e){e.favouriteComponent;return Object(s.jsx)("div",{className:"box",children:e.movies.map((function(t,c){return Object(s.jsxs)("div",{className:"image-container",children:[Object(s.jsx)("img",{src:"http://localhost:8083/posters/".concat(t.posterPath),alt:"movie",width:"150",onClick:function(){e.opendetail(t.movieUUID)}}),Object(s.jsxs)("p",{onClick:function(){e.opendetail(t.movieUUID)},children:[t.title," (",t.releaseYear,")"]})]},t.movieUUID)}))})},p=function(e){return Object(s.jsx)("div",{className:"col col-lg-8 justify-content-md-center",children:Object(s.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(d.a)(i,2),l=r[0],h=r[1],m=Object(n.useState)({}),u=Object(d.a)(m,2),v=u[0],f=u[1],g=Object(n.useState)([]),N=Object(d.a)(g,2),y=(N[0],N[1],function(){var e=Object(j.a)(o.a.mark((function e(t){var c,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c="http://localhost:8083/api/movies/getMoviesByTitleContaining/".concat(t),e.next=5,fetch(c);case 5:return s=e.sent,e.next=8,s.json();case 8:(n=e.sent)&&a(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){y(l)}),[l]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{align:"center",children:Object(s.jsx)("h1",{children:"Films"})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(s.jsx)("img",{src:"https://t-mobile.scene7.com/is/image/Tmusprod/netflix-hero.desktop?wid=1280&hei=360&fmt=png-alpha",alt:""})}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsx)(p,{searchValue:l,setSearchValue:h})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(O,{movies:c,opendetail:function(e){var t="http://localhost:8083/api/movies/getMovie/".concat(e);b()(t).then((function(e){return e})).then((function(e){f(e.data)}))}})}),Object(s.jsxs)("div",{className:"row",children:[console.log("selected","string"==typeof v.title),"string"==typeof v.title&&Object(s.jsx)(x,{selected:v,exitbutton:function(){f({})}})]})]})]})},f=c(32),g=c(2),N=c.p+"static/media/footer-bg.67e95f05.jpg",y=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("footer",{children:Object(s.jsxs)("div",{className:"footer-img",style:{backgroundImage:"url(".concat(N,")")},children:[Object(s.jsxs)("div",{className:"inner-footer",children:[Object(s.jsx)("div",{className:"footer-text",children:Object(s.jsx)("h5",{children:"Curs Desenvolupament a Java amb Framework Spring"})}),Object(s.jsx)("div",{className:"contact",children:Object(s.jsx)("ul",{className:"icons",children:Object(s.jsx)("h4",{children:"Contact"})})})]}),Object(s.jsx)("p",{className:"copyright",children:"\xa92022  React Film App by GARA"})]})})})},w=function(){return Object(s.jsxs)("div",{className:"navbar navbar-expand-lg navbar-light bg-dark",children:[Object(s.jsx)("div",{className:"logo",children:"SpringFilm"}),Object(s.jsx)("div",{className:"menus",children:Object(s.jsx)("ul",{className:"menu"})})]})};var k=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(f.a,{children:[Object(s.jsx)(w,{}),Object(s.jsx)(g.c,{children:Object(s.jsx)(g.a,{path:"/",element:Object(s.jsx)(v,{})})}),Object(s.jsx)(y,{})]})})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.49f8f726.chunk.js.map