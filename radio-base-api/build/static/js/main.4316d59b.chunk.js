(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a(71)},36:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},39:function(e,t,a){},68:function(e,t){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),l=(a(36),a(11)),i=a.n(l),s=a(29),u=a(30),g=(a(38),a(12));a(39),a(40);var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=r.a.useMemo((function(){return[{Header:"Radio base",accessor:"radiobase"},{Header:"Fecha",accessor:"fecha"},{Header:"Regi\xf3n",accessor:"region"},{Header:"Trafico",accessor:"",Cell:function(e){var t="";return console.log("row.row.original",e.row.original),e.row.original.trafico<=15&&(t="text-danger"),e.row.original.trafico>15&&e.row.original.trafico<=40&&(t="text-warning"),e.row.original.trafico>40&&e.row.original.trafico<=90&&(t="text-warning"),e.row.original.trafico>90&&(t="text-success"),null===e.row.original.trafico&&(t="text-secondary"),r.a.createElement("div",{className:t},e.row.original.trafico)}}]}),[]),l=Object(g.b)({columns:c,data:a,initialState:{pageIndex:2}},g.a),p=l.getTableProps,d=l.getTableBodyProps,m=l.headerGroups,f=l.prepareRow,b=l.page,v=l.canPreviousPage,w=l.canNextPage,E=l.pageOptions,h=l.pageCount,x=l.gotoPage,P=l.nextPage,k=l.previousPage,C=l.setPageSize,y=l.state,N=y.pageIndex,j=y.pageSize,H=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/data");case 3:return t=e.sent,console.log(t),e.next=7,t.json();case 7:a=e.sent,o(a.data),console.log(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){H()}),[]),r.a.createElement("div",null),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"table-registros"},a.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("table",Object.assign({className:"table table-striped table-responsive"},p()),r.a.createElement("thead",null,m.map((function(e){return r.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return r.a.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),r.a.createElement("tbody",d(),b.map((function(e,t){return f(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:function(){return x(0)},disabled:!v},"<<")," ",r.a.createElement("button",{onClick:function(){return k()},disabled:!v},"<")," ",r.a.createElement("button",{onClick:function(){return P()},disabled:!w},">")," ",r.a.createElement("button",{onClick:function(){return x(h-1)},disabled:!w},">>")," ",r.a.createElement("span",null,"Page"," ",r.a.createElement("strong",null,N+1," of ",E.length)," "),r.a.createElement("span",null,"| Go to page:"," ",r.a.createElement("input",{type:"number",defaultValue:N+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;x(t)},style:{width:"100px"}}))," ",r.a.createElement("select",{value:j,onChange:function(e){C(Number(e.target.value))}},[10,20,30,40,50].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show ",e)}))))):r.a.createElement("div",{className:"alert alert-info"},"Falta que los registros se asignen a servidores")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.4316d59b.chunk.js.map