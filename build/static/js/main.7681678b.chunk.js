(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(21),r=c.n(a),i=c(11),u=c(3),o=c(2),l=c(0),j=Object(n.createContext)();function d(){return Object(n.useContext)(j)}function b(e){var t=e.children,c=Object(n.useState)([]),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),d={favPosts:a,favAlbums:u[0],deleteFavItem:function(e,t,c){c(e.filter((function(e){return e.userId!==t})))},setFavPosts:r,setFavAlbums:u[1]};return Object(l.jsx)(j.Provider,{value:d,children:t})}var m=function(){var e,t,c=d(),n=c.favPosts,s=c.favAlbums,a=c.deleteFavItem,r=c.setFavPosts,i=c.setFavAlbums;return"/posts"===location.pathname?(e=n,t=r):(e=s,t=i),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"uk-button uk-open uk-icon",type:"button","uk-icon":"icon: heart; ratio: 2"}),Object(l.jsx)("div",{className:"uk-width-large uk-dropdown","uk-dropdown":"mode: click",children:Object(l.jsx)("div",{className:"uk-dropdown-grid uk-child-width-1-1@m",children:Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"uk-table uk-table-divider uk-table-justify",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{className:"uk-text-right",children:"Delete"})]})}),Object(l.jsx)("tbody",{children:e.map((function(c){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:c.title}),Object(l.jsx)("td",{className:"uk-text-right",children:Object(l.jsx)("button",{className:"uk-button",type:"button","uk-icon":"icon: close;",onClick:function(){a(e,c.userId,t)}})})]},c.userId)}))})]})})})})]})},h=function(){var e=Object(n.useState)("uk-active"),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(o.a)(a,2),u=r[0],j=r[1],d=function(){"/albums"===location.pathname?(s(""),j("uk-active")):(s("uk-active"),j(""))};return Object(l.jsxs)("nav",{className:"uk-navbar uk-navbar-container","uk-navbar":"false",children:[Object(l.jsx)("div",{className:"uk-navbar-left",children:Object(l.jsxs)("ul",{className:"uk-navbar-nav",children:[Object(l.jsx)("li",{onClick:d,className:c,children:Object(l.jsx)(i.b,{to:"/posts",children:"Posts"})}),Object(l.jsx)("li",{onClick:d,className:u,children:Object(l.jsx)(i.b,{to:"/albums",children:"Albums"})})]})}),Object(l.jsx)("div",{className:"uk-navbar-right",children:Object(l.jsx)("div",{className:"uk-navbar-item",children:Object(l.jsx)(m,{})})})]})},O=function(e){var t=e.setSortOrder;return Object(l.jsxs)("select",{className:"uk-select uk-width-small uk-margin-auto-left",onChange:function(e){t(e.target.value)},children:[Object(l.jsx)("option",{value:"asc",children:"ASC"}),Object(l.jsx)("option",{value:"desc",children:"DESC"})]})},f=function(e){var t=e.setlimitPosts;return Object(l.jsxs)("select",{className:"uk-select uk-width-small uk-margin-left",onChange:function(e){t(e.target.value)},children:[Object(l.jsx)("option",{value:"6",children:"6"}),Object(l.jsx)("option",{value:"12",children:"12"}),Object(l.jsx)("option",{value:"24",children:"24"})]})},k=function(e){var t=e.isSearching,c=e.setIsSearching,n=e.setSearchQuery;return Object(l.jsxs)("form",{className:"uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right",children:[Object(l.jsx)("span",{"uk-search-icon":"true",className:"uk-icon uk-search-icon"}),Object(l.jsx)("span",{className:"uk-search-icon uk-search-icon-flip","uk-spinner":"ratio: 0.6",style:{visibility:t?"":"hidden"}}),Object(l.jsx)("input",{className:"uk-search-input",type:"search",placeholder:"Search...",onInput:function(e){c(!0),n(e.target.value)}})]})},x=function(e){var t=e.viewGrid,c=e.viewList,n=e.setViewGrid,s=e.setViewList,a=t?"uk-active":"",r=c?"uk-active":"";return Object(l.jsxs)("div",{className:"uk-button-group uk-margin-left",children:[Object(l.jsx)("button",{className:"uk-button uk-button-default"+a,onClick:function(){n(!0),s(!1)},children:Object(l.jsx)("span",{"uk-icon":"icon:  grid"})}),Object(l.jsx)("button",{className:"uk-button uk-button-default"+r,onClick:function(){n(!1),s(!0)},children:Object(l.jsx)("span",{"uk-icon":"icon:  list"})})]})},p=function(e){var t=e.setSortOrder,c=e.setlimitPosts,n=e.setIsSearching,s=e.isSearching,a=e.setSearchQuery,r=e.viewGrid,i=e.setViewGrid,u=e.viewList,o=e.setViewList;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{setIsSearching:n,isSearching:s,setSearchQuery:a}),Object(l.jsx)(O,{setSortOrder:t}),Object(l.jsx)(f,{setlimitPosts:c}),Object(l.jsx)(x,{viewGrid:r,setViewGrid:i,viewList:u,setViewList:o})]})},v=c(9),g=function(e){var t=e.title,c=e.body,n=e.id,s=e.isColor,a=d(),r=a.favPosts,u=a.setFavPosts;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid","uk-grid":"true",children:[Object(l.jsxs)("div",{className:"uk-card-media-left uk-cover-container uk-first-column",children:[Object(l.jsx)("img",{src:"https://picsum.photos/600/400",alt:"",className:"uk-cover"}),Object(l.jsx)("canvas",{width:"600",height:"400"})]}),Object(l.jsx)("div",{className:"",children:Object(l.jsxs)("div",{className:"uk-card-body",children:[Object(l.jsxs)("h3",{className:"uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between",children:["".concat(t.slice(0,6),"..."),Object(l.jsx)("a",{className:"uk-icon-link","uk-icon":"heart",style:{cursor:"pointer",color:s?"red":""},onClick:function(e){e.preventDefault(),0===r.filter((function(e){return e.id===n})).length&&u([].concat(Object(v.a)(r),[{id:n,title:t,body:c,userId:Date.now()}]))},style:{cursor:"pointer",color:s?"red":""},children:" "})]}),Object(l.jsx)("p",{children:"".concat(c.slice(0,70),"...")}),Object(l.jsx)(i.b,{to:"/posts/".concat(n),className:"uk-button uk-button-text",children:"Read more"})]})})]})})},N=function(e){var t=e.posts,c=d().favPosts,n=t.map((function(e){return c.some((function(t){return t.id==e.id}))}));return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)(g,{isColor:n[t],id:e.id,title:e.title,body:e.body},e.id)}))})},w=function(e){var t=e.title,c=e.body,n=e.id,s=e.isColor,a=d(),r=a.favPosts,u=a.setFavPosts;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"uk-card uk-card-default uk-margin-medium-bottom",children:[Object(l.jsx)("div",{className:"uk-card-header",children:Object(l.jsxs)("h3",{className:"uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between",children:[t&&"".concat(t.slice(0,10),"..."),Object(l.jsx)("a",{className:"uk-icon-link","uk-icon":"heart",onClick:function(e){e.preventDefault(),0===r.filter((function(e){return e.id===n})).length&&u([].concat(Object(v.a)(r),[{id:n,title:t,body:c,userId:Date.now()}]))},style:{cursor:"pointer",color:s?"red":""},children:" "})]})}),Object(l.jsx)("div",{className:"uk-card-body",children:Object(l.jsx)("p",{children:"".concat(null===c||void 0===c?void 0:c.slice(0,100),"...")})}),Object(l.jsx)("div",{className:"uk-card-footer",children:Object(l.jsx)(i.b,{to:"/posts/".concat(n),className:"uk-button uk-button-text",children:"Read more"})})]})})},y=function(e){var t=e.posts,c=d().favPosts,n=t.map((function(e){return c.some((function(t){return t.id==e.id}))}));return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)(w,{isColor:n[t],id:e.id,title:e.title,body:e.body},e.id)}))})},S=c(5),C=c.n(S),I=c(10),P=c(23),D=function(){var e=Object(I.a)(C.a.mark((function e(t){var c,n,s,a,r,i=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=i.length>1&&void 0!==i[1]?i[1]:{},e.prev=2,e.next=5,fetch("".concat("https://jsonplaceholder.typicode.com").concat(t),Object(P.a)({method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},c));case 5:return n=e.sent,s={},n.headers.get("X-Total-Count"),(a=n.headers.get("Link"))&&(s.links=a),e.next=12,n.json();case 12:return r=e.sent,e.abrupt("return",{data:r,meta:s});case 16:throw e.prev=16,e.t0=e.catch(2),e.t0;case 19:case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(I.a)(C.a.mark((function e(t){var c,n=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>1&&void 0!==n[1]?n[1]:"asc",e.next=3,D("/posts?_limit=".concat(t,"&_sort=id&_order=").concat(c));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(I.a)(C.a.mark((function e(t){var c,n,s,a=arguments;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>1&&void 0!==a[1]?a[1]:"1",n=a.length>2&&void 0!==a[2]?a[2]:"asc",s=a.length>3&&void 0!==a[3]?a[3]:"",e.next=5,D("/posts?_limit=".concat(t,"&_page=").concat(c,"&_sort=id&_order=").concat(n,"&title_like=").concat(s));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(I.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/posts?id=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(I.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/comments?postId=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(I.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("/albums?_limit=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(I.a)(C.a.mark((function e(t,c,n,s){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("".concat(t,"?_start=").concat(c,"&_end=").concat(n,"&_sort=id&_order=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n,s){return e.apply(this,arguments)}}(),T=function(){var e=Object(I.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){var t=e.isLoading,c=e.setIsLoading,n=e.limit,s=e.currentNum,a=e.setCurrentNum;return Object(l.jsx)("div",{className:"uk-margin",children:Object(l.jsxs)("button",{className:"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom",onClick:function(){c(!0),a(Number(s)+Number(n))},children:["Load more",Object(l.jsx)("div",{className:"uk-margin-small-left","uk-spinner":"ratio: 0.6",style:{visibility:t?"":"hidden"}})]})})},Q=function(e){for(var t=e.total,c=e.limit,n=e.page,s=e.setPage,a=[],r=1;r<=Math.ceil(t/c);r++)a.push(r);return Object(l.jsxs)("ul",{className:"uk-pagination uk-flex-center uk-flex-middle uk-margin",children:[Object(l.jsx)("li",{children:n>1&&Object(l.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),s(n-1)},children:Object(l.jsx)("span",{className:"uk-icon uk-pagination-previous","uk-pagination-previous":"true"})})}),a.map((function(e){return e===n?Object(l.jsx)("li",{className:"uk-active",children:Object(l.jsx)("span",{children:e})},e):Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),s(e)},children:e})},e)})),Object(l.jsx)("li",{children:n<a.length&&Object(l.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),s(n+1)},children:Object(l.jsx)("span",{className:"uk-icon uk-pagination-next","uk-pagination-next":"true"})})})]})},R=function(e){var t=e.limit,c=void 0===t?6:t,s=e.currentNumOfItems,a=e.setCurrentNumOfItems,r=(e.order,e.data),i=e.setItems,u=e.total,j=e.page,d=e.setPage,b=Object(n.useState)(!1),m=Object(o.a)(b,2),h=m[0],O=m[1],f=Object(n.useState)(s),k=Object(o.a)(f,2),x=k[0],p=k[1],g=location.pathname,N=Object(n.useRef)(!0);return Object(n.useEffect)((function(){N.current?N.current=!1:(G(g,x,Number(x)+Number(c),"acs").then((function(e){return i([].concat(Object(v.a)(r),Object(v.a)(e.data)))})),a(x),setTimeout((function(){O(!1)}),1e3))}),[x]),Object(l.jsxs)("div",{className:"uk-margin uk-container",children:[Object(l.jsx)(Q,{total:u,limit:c,page:j,setPage:d}),Object(l.jsx)(V,{isLoading:h,setIsLoading:O,limit:c,currentNum:x,setCurrentNum:p})]})},q=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(1),r=Object(o.a)(a,2),i=r[0],u=r[1],j=Object(n.useState)("asc"),d=Object(o.a)(j,2),b=d[0],m=d[1],h=Object(n.useState)(6),O=Object(o.a)(h,2),f=O[0],k=O[1],x=Object(n.useState)(f),v=Object(o.a)(x,2),g=v[0],w=v[1],S=Object(n.useState)(!1),C=Object(o.a)(S,2),I=C[0],P=C[1],D=Object(n.useState)(""),_=Object(o.a)(D,2),A=_[0],E=_[1],G=Object(n.useState)(!0),V=Object(o.a)(G,2),Q=V[0],q=V[1],B=Object(n.useState)(!1),J=Object(o.a)(B,2),M=J[0],U=J[1],X=Object(n.useState)(),z=Object(o.a)(X,2),H=z[0],K=z[1],W=Object(n.useRef)(!0),Y=function(e,t){var c=Object(n.useState)(e),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){var c=setTimeout((function(){r(e)}),t);return function(){clearTimeout(c)}}),[e,t]),a}(A,500);return Object(n.useEffect)((function(){F(f,b).then((function(e){s(e.data)}))}),[b,f]),Object(n.useEffect)((function(){W.current?W.current=!1:(L(f,i,b,Y).then((function(e){return s(e.data)})),setTimeout((function(){P(!1)}),1500))}),[A,i]),Object(n.useEffect)((function(){T(location.pathname).then((function(e){return K(e.data.length)}))}),[]),Object(l.jsxs)("div",{className:"uk-section",children:[Object(l.jsxs)("div",{className:"uk-container",children:[Object(l.jsx)("div",{className:"uk-margin-medium-bottom uk-flex",children:Object(l.jsx)(p,{setSortOrder:m,setlimitPosts:k,isSearching:I,setIsSearching:P,setSearchQuery:E,viewGrid:Q,setViewGrid:q,viewList:M,setViewList:U})}),Object(l.jsx)("div",{className:"uk-grid uk-child-width-1-2@s uk-child-width-1-3@m",children:Q?Object(l.jsx)(y,{posts:c}):Object(l.jsx)(N,{posts:c})})]}),Object(l.jsx)(R,{limit:f,currentNumOfItems:g,setCurrentNumOfItems:w,order:b,data:c,setItems:s,total:H,page:i,setPage:u})]})},B=s.a.memo(q),J=function(e){var t=e.id,c=e.title,n=e.isColor,s=d(),a=s.favAlbums,r=s.setFavAlbums;return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"uk-card uk-card-default uk-margin-medium-bottom uk-light",children:[Object(l.jsx)("img",{src:"https://picsum.photos/600/400",alt:"",className:"uk-cover",width:"100%"}),Object(l.jsx)("canvas",{width:"600",height:"400"}),Object(l.jsx)("div",{className:"uk-overlay-primary uk-position-cover"}),Object(l.jsx)("div",{className:"uk-overlay uk-overlay-primary uk-position-bottom",children:Object(l.jsxs)("p",{children:[" ",c," "]})}),Object(l.jsx)("div",{className:"uk-position-top-right uk-overlay",children:Object(l.jsx)("a",{href:"",className:"uk-icon","uk-icon":"icon: heart; ratio: 2",onClick:function(e){e.preventDefault(),0===a.filter((function(e){return e.id===t})).length&&r([].concat(Object(v.a)(a),[{id:t,title:c,userId:Date.now()}]))},style:{cursor:"pointer",color:n?"red":""}})})]})})},M=function(e){var t=e.albums,c=d().favAlbums,n=t.map((function(e){return c.some((function(t){return t.id==e.id}))}));return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)(J,{isColor:n[t],title:e.title,id:e.id},e.id)}))})},U=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(6),r=Object(o.a)(a,2),i=r[0],u=(r[1],Object(n.useState)(i)),j=Object(o.a)(u,2),d=j[0],b=j[1];return Object(n.useEffect)((function(){E(i).then((function(e){s(e.data)}))}),[]),Object(l.jsxs)("div",{className:"uk-section",children:[Object(l.jsx)("div",{className:"uk-container",children:Object(l.jsx)("div",{className:"uk-grid uk-child-width-1-2@s uk-child-width-1-3@m",children:Object(l.jsx)(M,{albums:c})})}),Object(l.jsx)(R,{limit:i,currentNumOfItems:d,setCurrentNumOfItems:b,data:c,setItems:s})]})},X=s.a.memo(U),z=function(e){var t=e.comments;return Object(l.jsx)("div",{className:"uk-comments",children:null===t||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("article",{className:"uk-comment",children:[Object(l.jsx)("header",{className:"uk-comment-header uk-grid uk-grid-medium uk-flex-middle",children:Object(l.jsxs)("div",{className:"uk-width-expand",children:[Object(l.jsx)("h4",{className:"uk-comment-title uk-margin-remove",children:Object(l.jsx)("a",{className:"uk-link-reset",href:"/",onClick:function(e){return e.preventDefault()},children:e.name.toUpperCase().slice(0,10)})}),Object(l.jsx)("ul",{className:"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top",children:Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/",children:e.email})})})]})}),Object(l.jsx)("div",{className:"uk-comment-body",children:Object(l.jsx)("p",{children:e.body})}),Object(l.jsx)("hr",{})]},"".concat(e.id,"comment"))}))})},H=function(e){var t=e.comments,c=e.setComments,s=Object(n.useState)(""),a=Object(o.a)(s,2),r=a[0],i=a[1],u=Object(n.useState)(""),j=Object(o.a)(u,2),d=j[0],b=j[1],m=Object(n.useState)(""),h=Object(o.a)(m,2),O=h[0],f=h[1];return Object(l.jsx)("form",{action:"#",className:"uk-comment-form uk-margin-medium-top",onSubmit:function(e){e.preventDefault();var n={name:r,email:d,body:O};c([].concat(Object(v.a)(t),[n])),e.target.reset()},children:Object(l.jsxs)("fieldset",{className:"uk-fieldset",children:[Object(l.jsx)("legend",{className:"uk-legend",children:"Add Comment"}),Object(l.jsx)("div",{className:"uk-margin",children:Object(l.jsx)("input",{className:"uk-input",type:"text",placeholder:"Name",required:!0,onInput:function(e){return i(e.target.value)}})}),Object(l.jsx)("div",{className:"uk-margin",children:Object(l.jsx)("input",{className:"uk-input",type:"email",placeholder:"Email",required:!0,onInput:function(e){return b(e.target.value)}})}),Object(l.jsx)("div",{className:"uk-margin",children:Object(l.jsx)("textarea",{className:"uk-textarea",rows:"5",placeholder:"Comment",required:!0,onInput:function(e){return f(e.target.value)}})}),Object(l.jsx)("div",{className:"uk-margin",children:Object(l.jsx)("button",{className:"uk-button uk-button-primary",type:"submit",children:"Post Comment"})})]})})},K=function(e){var t=e.match.params.id,c=Object(n.useState)({}),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),j=u[0],d=u[1];return Object(n.useEffect)((function(){_(t).then((function(e){return r(e.data[0])}))}),[t]),Object(n.useEffect)((function(){A(t).then((function(e){return d(e.data)}))}),[t]),Object(l.jsx)("div",{className:"uk-section",children:Object(l.jsxs)("div",{className:"uk-container",children:[Object(l.jsx)("button",{className:"uk-button uk-button-primary",onClick:function(e){e.preventDefault(),history.back()},children:"Back"}),Object(l.jsxs)("h1",{className:"uk-heading-bullet uk-margin-medium-bottom",children:[Object(l.jsx)("span",{children:a.title}),Object(l.jsx)("a",{className:"uk-text-small",href:"/",children:" Author-".concat(a.userId)})]}),Object(l.jsx)("div",{className:"uk-article uk-dropcap uk-margin-large-bottom",children:Object(l.jsx)("p",{children:a.body})}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{className:"uk-margin-remove-top",children:"Comments:"}),Object(l.jsx)(z,{comments:j}),Object(l.jsx)(H,{comments:j,setComments:d})]})})};function W(){return Object(l.jsx)("main",{className:"uk-main",children:Object(l.jsx)(b,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(u.d,{children:[Object(l.jsx)(u.b,{exact:!0,path:"/posts",component:B}),Object(l.jsx)(u.b,{path:"/albums",component:X}),Object(l.jsx)(u.b,{path:"/posts/:id",component:K}),Object(l.jsx)(u.a,{to:"/posts"})]})]})})})}var Y=document.getElementById("root");r.a.render(Object(l.jsx)(n.StrictMode,{children:Object(l.jsx)(W,{})}),Y)}},[[35,1,2]]]);
//# sourceMappingURL=main.7681678b.chunk.js.map