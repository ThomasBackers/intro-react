(this["webpackJsonptodo-list-react-app"]=this["webpackJsonptodo-list-react-app"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(1),o=c.n(n),s=c(6),r=c.n(s),a=c(7),i=c(3),j=c(16),l=c(0),u=function(t){var e=t.setToDos,c=t.toDos,o=Object(n.useRef)(),s=function(){var t=o.current.value;o.current.value="",e((function(e){return[].concat(Object(i.a)(e),[{id:Object(j.a)(),content:t,isComplete:!1}])}))};return Object(l.jsx)("menu",{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("input",{type:"text",ref:o,onKeyDown:function(t){"Enter"===t.key&&s()}}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:s,children:Object(l.jsx)("i",{className:"fas fa-paper-plane"})}),Object(l.jsx)("button",{onClick:function(){var t=Object(i.a)(c).filter((function(t){return!t.isComplete}));e(t)},children:Object(l.jsx)("i",{className:"fas fa-broom"})}),Object(l.jsx)("button",{onClick:function(){e([])},children:Object(l.jsx)("i",{className:"fas fa-trash-alt"})})]})]})})},b=function(t){var e=t.toDo,c=t.toDos,n=t.setToDos;return Object(l.jsxs)("li",{children:[Object(l.jsx)("input",{type:"checkbox",checked:e.isComplete,onChange:function(t){var o=Object(i.a)(c),s=o.find((function(t){return t.id===e.id}));s.isComplete=!s.isComplete,s.isComplete?t.target.style.backgroundColor="#48CAE4":t.target.style.backgroundColor="#fff",n(o)}}),Object(l.jsx)("label",{children:Object(l.jsx)("span",{children:e.content})})]})},f=function(t){var e=t.toDos,c=t.setToDos;return e.map((function(t){return Object(l.jsx)(b,{toDo:t,toDos:e,setToDos:c},t.id)}))},O="toDoList",d=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],o=e[1];return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(O));t&&o(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(O,JSON.stringify(c))}),[c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("main",{children:Object(l.jsx)("ul",{className:"container",children:Object(l.jsx)(f,{toDos:c,setToDos:o})})}),Object(l.jsx)(u,{setToDos:o,toDos:c})]})};c(13);r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7a9a6c9a.chunk.js.map