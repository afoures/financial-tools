(this["webpackJsonpretirement-calculator"]=this["webpackJsonpretirement-calculator"]||[]).push([[0],{139:function(e,t,a){e.exports={header:"Menu_header__2qNDD",click:"Menu_click__3dA3L"}},140:function(e,t,a){e.exports={click:"Home_click__1HOmN"}},171:function(e,t,a){e.exports=a(358)},176:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(59),c=a.n(o),l=(a(176),a(8)),i=a(35);function u(e){var t=e.children;return r.a.createElement("div",{className:"app"},r.a.createElement(i.a,null,t))}var s=a(139),m=a.n(s);var d=function(){return r.a.createElement("header",{className:m.a.header},r.a.createElement("aside",null,"financial tools"),r.a.createElement("nav",null,r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/early-retirement"},"Early Retirement")))},f=a(140),p=a.n(f);var E=function(){return r.a.createElement("article",{className:p.a.home},r.a.createElement("p",null,"Hello \xe0 tous, voici un petit side project pour m'occuper durant le confinement. Je compte de temps en temps rajouter d'autres outils en fonction de mon temps libre et de ma motivation."),r.a.createElement("p",null,"Aujourd'hui un seul outil est disponible: un calculateur de pr\xe9retraite."),r.a.createElement("p",null,"Vous pouvez me faire vos retours sur discord (afoures#7719)."))},g=a(15),b=Object(n.createContext)();function v(){var e=Object(n.useContext)(b),t=Object(g.a)(e,2);return{config:t[0],updateConfig:t[1]}}function k(e){var t=e.children,a=Object(n.useState)({stockReturns:.081,bondReturns:.024,avgTaxRate:.3,goal:{amount:3e4,wr:.04},spending:[],income:[],investments:[],portfolio:[]});return r.a.createElement(b.Provider,{value:a},t)}var y=a(11),h=a(10),_=a(24),N=a(47),j=a(7),O=a.n(j),C=function(e,t){return Object.keys(e).reduce((function(a,n){return a[n]=t(e[n]),a}),{})},x=function(e){return!isNaN(Number(e))},R=function(e){var t=e.name,a=e.label,n=e.value,o=e.registered,c=e.error;return r.a.createElement("div",{className:O.a["input-group"]},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{className:c&&O.a.error,name:t,defaultValue:n,ref:o}))};function M(){var e=Object(N.a)({mode:"onBlur"}),t=e.register,a=e.handleSubmit,n=e.errors,o=v(),c=o.config,l=o.updateConfig;return r.a.createElement("form",{className:O.a.basic,onChange:a((function(e){l((function(t){return Object(_.a)({},t,{},C(e,Number))}))}))},r.a.createElement(R,{name:"stockReturns",label:"Rendement annuel des Actions",value:c.stockReturns,registered:t({required:!0,validate:x}),error:n.stockReturns}),r.a.createElement(R,{name:"bondReturns",label:"Rendement annuel des Obligations",value:c.bondReturns,registered:t({required:!0,validate:x}),error:n.bondReturns}),r.a.createElement(R,{name:"avgTaxRate",label:"Taux d'imposition sur plus-values",value:c.avgTaxRate,registered:t({required:!0,validate:x}),error:n.avgTaxRate}))}function K(e){var t=e.name,a=e.title,o=e.dataKey,c=Object(N.a)(),l=c.register,i=c.handleSubmit,u=c.errors,s=c.reset,m=v(),d=m.config,f=m.updateConfig,p=Object(n.useState)(d[t]),E=Object(g.a)(p,2),b=E[0],k=E[1];return Object(n.useEffect)((function(){f((function(e){return Object(_.a)({},e,Object(y.a)({},t,b))}))}),[b,t,f]),r.a.createElement("div",{className:O.a["dynamic-group"]},r.a.createElement("h3",null,a),r.a.createElement("div",{className:O.a["dynamic-list"]},r.a.createElement("div",{className:O.a.header},r.a.createElement("span",{className:O.a["key-title"]},"age"),r.a.createElement("span",{className:O.a["value-title"]},o)),b.map((function(e,t){return r.a.createElement("div",{className:O.a.item,key:t},r.a.createElement("span",{className:O.a.key},e.age),r.a.createElement("span",{className:O.a.value},e[o]),r.a.createElement("span",{onClick:function(){return e=t,void k((function(t){var a=Object(h.a)(t);return a.splice(e,1),a}));var e},className:O.a.remove},"\u2a2f"))}))),r.a.createElement("form",{className:O.a["add-item"],onSubmit:i((function(e){k((function(t){return[].concat(Object(h.a)(t),[C(e,Number)])})),s()}))},r.a.createElement("input",{className:u.age&&O.a.error,name:"age",placeholder:"age",ref:l({required:!0,validate:x})}),r.a.createElement("input",{className:u[o]&&O.a.error,name:o,placeholder:o,ref:l({required:!0,validate:x})}),r.a.createElement("button",{type:"submit"},"add")))}function I(){var e=Object(N.a)(),t=e.register,a=e.handleSubmit,o=e.getValues,c=e.errors,l=e.reset,i=v(),u=i.config,s=i.updateConfig,m=Object(n.useState)(u.portfolio),d=Object(g.a)(m,2),f=d[0],p=d[1],E=function(){var e=o();return Number(e.stock)+Number(e.bond)===1};return Object(n.useEffect)((function(){s((function(e){return Object(_.a)({},e,{portfolio:f})}))}),[f,s]),r.a.createElement("div",{className:O.a["dynamic-portfolio"]},r.a.createElement("h3",null,"portfolio"),r.a.createElement("div",{className:O.a["dynamic-list"]},r.a.createElement("div",{className:O.a.header},r.a.createElement("span",{className:O.a["key-title"]},"age"),r.a.createElement("span",{className:O.a["value-title"]},["stock","bond"].join(" - "))),f.map((function(e,t){return r.a.createElement("div",{className:O.a.item,key:t},r.a.createElement("span",{className:O.a.key},e.age),r.a.createElement("span",{className:O.a.value},"".concat(e.repartition.stock," - ").concat(e.repartition.bond)),r.a.createElement("span",{onClick:function(){return e=t,void p((function(t){var a=Object(h.a)(t);return a.splice(e,1),a}));var e},className:O.a.remove},"\u2a2f"))}))),r.a.createElement("form",{className:O.a["add-item"],onSubmit:a((function(e){var t=C(e,Number),a={age:t.age,repartition:{stock:t.stock,bond:t.bond}};p((function(e){return[].concat(Object(h.a)(e),[a])})),l()}))},r.a.createElement("input",{className:c.age&&O.a.error,name:"age",placeholder:"age",ref:t({required:!0,validate:x})}),r.a.createElement("input",{className:c.stock&&O.a.error,name:"stock",placeholder:"stock",ref:t({required:!0,validate:{isNumber:x,isOne:E}})}),r.a.createElement("input",{className:c.bond&&O.a.error,name:"bond",placeholder:"bond",ref:t({required:!0,validate:{isNumber:x,isOne:E}})}),r.a.createElement("button",{type:"submit"},"add")))}function q(){return r.a.createElement("div",{className:O.a.dynamic},r.a.createElement(K,{title:"Investissements",name:"investments",dataKey:"amount"}),r.a.createElement(K,{title:"Revenus",name:"income",dataKey:"amount"}),r.a.createElement(K,{title:"D\xe9penses",name:"spending",dataKey:"amount"}),r.a.createElement(I,null))}function S(){var e=Object(N.a)(),t=e.register,a=e.handleSubmit,n=e.errors,o=v(),c=o.config,l=o.updateConfig;return r.a.createElement("form",{className:O.a.goal,onChange:a((function(e){l((function(t){return Object(_.a)({},t,{goal:C(e,Number)})}))}))},r.a.createElement(R,{name:"amount",label:"D\xe9penses li\xe9es \xe0 la retraite",value:c.goal.amount,registered:t({required:!0,validate:x}),error:n.amount}),r.a.createElement(R,{name:"wr",label:"Taux de retrait s\xe9curis\xe9",value:c.goal.wr,registered:t({required:!0,validate:x}),error:n.wr}))}var w=function(){return r.a.createElement("div",{className:O.a.configuration},r.a.createElement(M,null),r.a.createElement(q,null),r.a.createElement(S,null))},T=a(62),D=a.n(T),A=a(6);function F(e){var t=e.boundaries,a=e.income,o=e.spending,c=e.investments,l=e.repartition,i=Object(n.useMemo)((function(){return c.map((function(e,a){return{age:t.min+a,investment:e}}))}),[c,t]),u=Object(n.useMemo)((function(){return a.map((function(e,a){return{age:t.min+a,income:e,spending:o[a]}}))}),[a,o,t]),s=Object(n.useMemo)((function(){return l.map((function(e,a){return Object(_.a)({age:t.min+a},e)}))}),[l,t]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Summary"),r.a.createElement(A.b,{width:320,height:160,data:u,syncId:"summary"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorSpending",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorIncome",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0}))),r.a.createElement(A.e,{strokeDasharray:"3 3"}),r.a.createElement(A.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(A.k,{stroke:"#ccc"}),r.a.createElement(A.i,null),r.a.createElement(A.a,{type:"monotone",dataKey:"income",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorIncome)"}),r.a.createElement(A.a,{type:"monotone",dataKey:"spending",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorSpending)"})),r.a.createElement(A.d,{width:320,height:160,data:i,syncId:"summary"},r.a.createElement(A.e,{strokeDasharray:"3 3"}),r.a.createElement(A.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(A.k,{stroke:"#ccc"}),r.a.createElement(A.i,null),r.a.createElement(A.c,{dataKey:"investment",fill:"#82ca9d"})),r.a.createElement(A.b,{width:320,height:160,data:s,syncId:"summary"},r.a.createElement(A.e,{strokeDasharray:"3 3"}),r.a.createElement(A.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(A.k,{stroke:"#ccc"}),r.a.createElement(A.i,null),r.a.createElement(A.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(A.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"})))}function B(e){var t=e.boundaries,a=e.balance,o=e.target,c=Object(n.useMemo)((function(){return a.map((function(e,a){return Object(_.a)({age:t.min+a},e)}))}),[a,t]),l=Object(n.useMemo)((function(){return a.map((function(e,a){return{age:t.min+a,stock:(e.stock/(e.bond+e.stock)).toFixed(3),bond:(e.bond/(e.bond+e.stock)).toFixed(3)}}))}),[a,t]);return r.a.createElement("div",null,r.a.createElement(A.h,{width:"100%",height:320},r.a.createElement(A.f,{data:c,syncId:"result"},r.a.createElement(A.e,{strokeDasharray:"3 3"}),r.a.createElement(A.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(A.k,{stroke:"#ccc"}),r.a.createElement(A.i,null),r.a.createElement(A.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(A.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(A.g,{y:o,label:"FIRE Target",stroke:"red"}))),r.a.createElement(A.h,{width:"100%",height:224},r.a.createElement(A.b,{data:l,syncId:"result"},r.a.createElement(A.e,{strokeDasharray:"3 3"}),r.a.createElement(A.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(A.k,{stroke:"#ccc"}),r.a.createElement(A.i,null),r.a.createElement(A.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(A.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}))))}var V=function(e,t){var a=0;return Object(h.a)(Array(e.years)).map((function(n,r){var o=t.find((function(t){return t.age===e.min+r}));return o&&(a=o.amount),a}))},H=function(e,t){return Object(h.a)(Array(e.years)).map((function(a,n){var r=t.find((function(t){return t.age===e.min+n}));return r?r.amount:0}))},Q=function(e,t){var a={stock:0,bond:0,cash:0};return Object(h.a)(Array(e.years)).map((function(n,r){var o=t.find((function(t){return t.age===e.min+r}));return o&&(a=o.repartition),a}))},z=function(e,t,a,n){var r={stock:0,bond:0};return a.map((function(a,o){return r=function(e,t,a,n,r){var o=e.stock+e.bond,c=o+t,l={stock:r.stock*c-e.stock,bond:r.bond*c-e.bond},i=e.stock+Math.min(t,Math.max(0,l.stock)),u=e.bond+Math.min(t,Math.max(0,l.bond)),s=o+t+a,m={stock:r.stock*s-i,bond:r.bond*s-u};return{stock:e.stock*(1+n.stock)+Math.min(t,Math.max(0,l.stock))*(1+n.stock)+Math.min(a,Math.max(0,m.stock))*(1+n.stock),bond:e.bond*(1+n.bond)+Math.min(t,Math.max(0,l.bond))*(1+n.bond)+Math.min(a,Math.max(0,m.bond))*(1+n.bond)}}(r,t[o],a,e,n[o])}))};function J(e){var t=function(e){var t=80;return console.log(e),e.income.forEach((function(e){e.age<t&&(t=e.age)})),e.spending.forEach((function(e){e.age<t&&(t=e.age)})),e.investments.forEach((function(e){e.age<t&&(t=e.age)})),e.portfolio.forEach((function(e){e.age<t&&(t=e.age)})),{min:t,max:80,years:80-t}}(e);console.log(t);var a=[V(t,e.income),V(t,e.spending),H(t,e.investments),Q(t,e.portfolio)],n=a[0],r=a[1],o=a[2],c=a[3],l=e.goal.amount/(1-e.avgTaxRate)/e.goal.wr,i=function(e,t){return e.map((function(e,a){return e-t[a]}))}(n,r),u=z({stock:e.stockReturns,bond:e.bondReturns},o,i,c);return console.log(u),{boundaries:t,income:n,spending:r,investments:o,repartition:c,savings:i,balance:u,target:l}}var U=function(){var e=v().config,t=Object(n.useMemo)((function(){return J(e)}),[e]),a=t.boundaries,o=t.income,c=t.spending,l=t.investments,i=t.repartition,u=t.balance,s=t.target;return r.a.createElement("div",{className:D.a.results},r.a.createElement(F,{boundaries:a,income:o,spending:c,investments:l,repartition:i}),r.a.createElement("div",{className:D.a.main},r.a.createElement("div",{className:D.a.informations},r.a.createElement("p",null,"Target = (",e.goal.amount," / ",1-e.avgTaxRate,") / ",e.goal.wr," = ",s.toFixed(2))),r.a.createElement(B,{boundaries:a,balance:u,target:s})))};var Z=function(){return r.a.createElement(k,null,r.a.createElement(w,null),r.a.createElement(U,null))};var G=function(){return r.a.createElement("article",null,r.a.createElement("div",null,r.a.createElement("p",null,"Ce calculateur / visualiseur de retraite anticip\xe9e est con\xe7u pour projeter le nombre d'ann\xe9es qui vous s\xe9parent de la retraite, en fonction de quelques donn\xe9es cl\xe9s telles que les revenus et les d\xe9penses annuels, le taux de croissance des revenus, les d\xe9penses annuelles pr\xe9vues \xe0 la retraite et la r\xe9partition des actifs. Il s'agit d'un calculateur de pr\xe9retraite qui est utile avant votre d\xe9part \xe0 la retraite pour avoir une id\xe9e du nombre d'ann\xe9es qu'il vous faudra probablement pour accumuler suffisamment d'argent pour prendre votre retraite.")),r.a.createElement(Z,null))},P=function(e){return r.a.createElement("main",e,r.a.createElement(l.a,null))};var L=function(){return r.a.createElement(u,null,r.a.createElement(d,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/*",element:r.a.createElement(P,null)},r.a.createElement(l.b,{path:"",element:r.a.createElement(E,null)}),r.a.createElement(l.b,{path:"early-retirement",element:r.a.createElement(G,null)}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))},62:function(e,t,a){e.exports={results:"Results_results__3Bszj",main:"Results_main__33oQQ",informations:"Results_informations__3P7aK",click:"Results_click__3TZpp"}},7:function(e,t,a){e.exports={configuration:"Configuration_configuration__lembR",error:"Configuration_error__2gdp3",basic:"Configuration_basic__3BtaF",dynamic:"Configuration_dynamic__2VQiA",goal:"Configuration_goal__1gR7h","input-group":"Configuration_input-group__1D6IB","dynamic-group":"Configuration_dynamic-group__Ul93l","dynamic-portfolio":"Configuration_dynamic-portfolio__12cUU","dynamic-list":"Configuration_dynamic-list__3wrYy",header:"Configuration_header__1-ueq","key-title":"Configuration_key-title__i3tFS","value-title":"Configuration_value-title__1xQC0",item:"Configuration_item__1ZS3h",key:"Configuration_key__13x9Z",value:"Configuration_value__3shjA",remove:"Configuration_remove__9oc4I","add-item":"Configuration_add-item__3arbO",click:"Configuration_click__BEKVz"}}},[[171,1,2]]]);
//# sourceMappingURL=main.9bac3f3d.chunk.js.map