(this["webpackJsonpretirement-calculator"]=this["webpackJsonpretirement-calculator"]||[]).push([[0],{128:function(e,t,a){e.exports={helper:"Helper_helper__1ZvMQ",tooltip:"Helper_tooltip__3-QdT",click:"Helper_click__12Squ"}},18:function(e,t,a){e.exports={configuration:"Configuration_configuration__lembR",error:"Configuration_error__2gdp3",basic:"Configuration_basic__3BtaF",goal:"Configuration_goal__1gR7h",dynamic:"Configuration_dynamic__2VQiA","input-group":"Configuration_input-group__1D6IB","list-group":"Configuration_list-group__32Xdr",list:"Configuration_list__2c-bL",header:"Configuration_header__1-ueq",item:"Configuration_item__1ZS3h",remove:"Configuration_remove__9oc4I","add-item":"Configuration_add-item__3arbO","dynamic-portfolio":"Configuration_dynamic-portfolio__12cUU",click:"Configuration_click__BEKVz"}},217:function(e,t,a){e.exports={header:"Menu_header__2qNDD",click:"Menu_click__3dA3L"}},218:function(e,t,a){e.exports={click:"Home_click__1HOmN"}},250:function(e,t,a){e.exports=a(516)},255:function(e,t,a){},261:function(e,t){},263:function(e,t){},296:function(e,t){},297:function(e,t){},516:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(82),o=a.n(l),i=(a(255),a(9)),c=a(38);function u(e){var t=e.children;return r.a.createElement("div",{className:"app"},r.a.createElement(c.a,null,t))}var s=a(216),m=a(217),d=a.n(m);var p=function(){return r.a.createElement("header",{className:d.a.header},r.a.createElement("aside",null,"outils financiers"),r.a.createElement("nav",null,r.a.createElement(c.b,{to:"/"},"Informations"),r.a.createElement(c.b,{to:"/early-retirement"},"Retraite anticip\xe9e"),r.a.createElement(s.a,{projectId:"43da111c16b019"},r.a.createElement(c.b,{to:"/"},"Votre avis sur l'outil"))))},f=a(218),g=a.n(f);var E=function(){return r.a.createElement("article",{className:g.a.home},r.a.createElement("p",null,"Hello \xe0 tous, voici un petit side project pour m'occuper durant le confinement. Je compte de temps en temps rajouter d'autres outils en fonction de mon temps libre et de ma motivation."),r.a.createElement("p",null,"Aujourd'hui un seul outil est disponible: un calculateur de pr\xe9retraite."),r.a.createElement("p",null,"Vous pouvez me faire vos retours sur discord (afoures#7719)."))},v=a(22),b=Object(n.createContext)();function h(){var e=Object(n.useContext)(b),t=Object(v.a)(e,2);return{config:t[0],updateConfig:t[1]}}function k(e){var t=e.children,a=Object(n.useState)({stockReturns:.081,bondReturns:.024,avgTaxRate:.3,goal:{amount:3e4,wr:.04},spending:[],income:[],investments:[],portfolio:[]});return r.a.createElement(b.Provider,{value:a},t)}var y=a(13),_=a(11),j=a(40),N=a(87),x=a(18),O=a.n(x),q=a(219),C=a(128),R=a.n(C);var I=function(e){var t=e.id,a=e.children,n=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:R.a.helper,"data-tip":!0,"data-for":t},"?"),r.a.createElement(q.a,{className:R.a.tooltip,id:t,place:"bottom",effect:"solid","aria-haspopup":"true"},r.a.createElement("h3",null,n),a))},M=function(e,t){return Object.keys(e).reduce((function(a,n){return a[n]=t(e[n]),a}),{})},K=function(e){return!isNaN(Number(e))},z=function(e){var t=e.name,a=e.label,n=e.value,l=e.registered,o=e.error,i=e.helper;return r.a.createElement("div",{className:O.a["input-group"]},r.a.createElement("label",{htmlFor:t},a),i&&r.a.createElement(I,{title:a,id:t},i),r.a.createElement("input",{className:o&&O.a.error,name:t,defaultValue:n,ref:l}))};function w(){var e=Object(N.a)({mode:"onBlur"}),t=e.register,a=e.handleSubmit,n=e.errors,l=h(),o=l.config,i=l.updateConfig;return r.a.createElement("form",{className:O.a.basic,onChange:a((function(e){i((function(t){return Object(j.a)({},t,{},M(e,Number))}))}))},r.a.createElement(z,{name:"stockReturns",label:"Rendement annuel des actions",value:o.stockReturns,registered:t({required:!0,validate:K}),error:n.stockReturns,helper:r.a.createElement("p",null,"Entrez les rendements r\xe9els des actions. Le rendement boursier moyen au cours des 150 derni\xe8res ann\xe9es \xe9tait d'environ 8,1%.")}),r.a.createElement(z,{name:"bondReturns",label:"Rendement annuel des obligations",value:o.bondReturns,registered:t({required:!0,validate:K}),error:n.bondReturns,helper:r.a.createElement("p",null,"Entrez les rendements r\xe9els des obligations. Le rendement moyen des titres \xe0 revenu fixe au cours des 150 derni\xe8res ann\xe9es \xe9tait d'environ 2,4 %.")}),r.a.createElement(z,{name:"avgTaxRate",label:"Taux d'imposition sur plus-values",value:o.avgTaxRate,registered:t({required:!0,validate:K}),error:n.avgTaxRate,helper:r.a.createElement("p",null,"Indiquez votre taux d'imposition moyen . Les imp\xf4ts ne sont appliqu\xe9s que lors de la vente d'actifs. Ce taux gonflera le montant que vous devrez retirer annuellement de votre patrimoine boursier.")}))}var T=function(e,t){return Number(e.age)-Number(t.age)};function S(e){var t=e.name,a=e.title,l=e.inputs,o=void 0===l?[]:l,i=e.helper,c=Object(N.a)(),u=c.register,s=c.handleSubmit,m=c.errors,d=(c.reset,h()),p=d.config,f=d.updateConfig,g=Object(n.useState)(p[t]),E=Object(v.a)(g,2),b=E[0],k=E[1];return Object(n.useEffect)((function(){return f((function(e){return Object(j.a)({},e,Object(y.a)({},t,b))}))}),[b,t,f]),r.a.createElement("div",{className:O.a["list-group"]},r.a.createElement("h3",null,a,i&&r.a.createElement(I,{title:a,id:t},i)),r.a.createElement("div",{className:O.a.list},r.a.createElement("div",{className:O.a.header},o.map((function(e,t){return r.a.createElement("span",{key:t},e.placeholder)}))),b.map((function(e,t){return r.a.createElement("div",{className:O.a.item,key:t},o.map((function(t,a){return r.a.createElement("span",{key:a},e[t.name])})),r.a.createElement("span",{onClick:function(){return e=t,k((function(t){var a=Object(_.a)(t);return a.splice(e,1),a}));var e},className:O.a.remove},"\u2a2f"))}))),r.a.createElement("form",{className:O.a["add-item"],onSubmit:s((function(e){return k((function(t){return[].concat(Object(_.a)(t),[M(e,Number)]).sort(T)}))}))},o.map((function(e,t){return r.a.createElement("input",{key:t,className:m[e.name]&&O.a.error,name:e.name,placeholder:e.placeholder,ref:u({required:!0,validate:e.validation})})})),r.a.createElement("button",{type:"submit"},"Ajouter")))}function D(){return r.a.createElement("div",{className:O.a.dynamic},r.a.createElement(S,{title:"Revenus r\xe9guliers",name:"income",inputs:[{name:"age",placeholder:"age",validation:{isNumber:K}},{name:"amount",placeholder:"montant",validation:{isNumber:K}}]}),r.a.createElement(S,{title:"D\xe9penses r\xe9guli\xe8res",name:"spending",inputs:[{name:"age",placeholder:"age",validation:{isNumber:K}},{name:"amount",placeholder:"montant",validation:{isNumber:K}}]}),r.a.createElement(S,{title:"Investissements irr\xe9guliers",name:"investments",inputs:[{name:"age",placeholder:"age",validation:{isNumber:K}},{name:"amount",placeholder:"montant",validation:{isNumber:K}}]}),r.a.createElement(S,{title:"R\xe9partition des actifs",name:"portfolio",inputs:[{name:"age",placeholder:"age",validation:{isNumber:K}},{name:"stock",placeholder:"action",validation:{isNumber:K}},{name:"bond",placeholder:"obligation",validation:{isNumber:K}}],helper:r.a.createElement("p",null,"Indiquez la repartition en pourcentage cible des actifs de votre portfolio.")}))}function L(){var e=Object(N.a)(),t=e.register,a=e.handleSubmit,n=e.errors,l=h(),o=l.config,i=l.updateConfig;return r.a.createElement("form",{className:O.a.goal,onChange:a((function(e){i((function(t){return Object(j.a)({},t,{goal:M(e,Number)})}))}))},r.a.createElement(z,{name:"amount",label:"D\xe9penses li\xe9es \xe0 la retraite",value:o.goal.amount,registered:t({required:!0,validate:K}),error:n.amount,helper:r.a.createElement("p",null,"Indiquez le montant que vous pr\xe9voyez de d\xe9penser annuellement pendant la retraite. N'oubliez pas que vous devrez peut-\xeatre payer des frais de sant\xe9 suppl\xe9mentaires une fois que vous aurez cess\xe9 de travailler.")}),r.a.createElement(z,{name:"wr",label:"Taux de retrait s\xe9curis\xe9",value:o.goal.wr,registered:t({required:!0,validate:K}),error:n.wr,helper:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Le taux de retrait s\xe9curis\xe9 est le pourcentage de l'argent de votre retraite que vous pr\xe9voyez de liquider et de d\xe9penser chaque ann\xe9e \xe0 partir de votre \xe9pargne. Il est calcul\xe9 \xe0 partir de la valeur de votre \xe9pargne au moment de votre d\xe9part \xe0 la retraite. 4 % est g\xe9n\xe9ralement consid\xe9r\xe9 comme un montant s\xfbr pour une retraite de plus de 30 ans et vous oblige \xe0 \xe9conomiser 25 fois les d\xe9penses pr\xe9vues."),r.a.createElement("p",null,"Les taux de retrait inf\xe9rieurs (2 \xe0 3 %) sont g\xe9n\xe9ralement consid\xe9r\xe9s comme tr\xe8s s\xfbrs et beaucoup plus prudents, mais ils vous obligent \xe0 \xe9pargner beaucoup plus d'argent pour la retraite."))}))}var F=function(){return r.a.createElement("div",{className:O.a.configuration},r.a.createElement(w,null),r.a.createElement(D,null),r.a.createElement(L,null))},A=a(85),B=a.n(A),H=a(5);function Q(e){var t=e.boundaries,a=e.income,l=e.spending,o=e.investments,i=e.savings,c=e.repartition,u=Object(n.useMemo)((function(){return i.map((function(e,a){return{age:t.min+a,saved:e}}))}),[i,t]),s=Object(n.useMemo)((function(){return o.map((function(e,a){return{age:t.min+a,investment:e}}))}),[o,t]),m=Object(n.useMemo)((function(){return a.map((function(e,a){return{age:t.min+a,income:e,spending:l[a]}}))}),[a,l,t]),d=Object(n.useMemo)((function(){return c.map((function(e,a){return Object(j.a)({age:t.min+a},e)}))}),[c,t]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Situation",r.a.createElement(I,{title:"Situation",id:"summary"},r.a.createElement("p",null,"Ces graphiques r\xe9sument la situation simul\xe9e en fonction des valeurs pr\xe9sentes plus haut."),r.a.createElement("p",null,"Le premier montre le montant calcul\xe9 en tant qu'epargne r\xe9guli\xe8re chaque ann\xe9e."),r.a.createElement("p",null,"Le deuxi\xe8me permet de voir les montants d'investissement irr\xe9guliers pour chaque ann\xe9e de la simulation."),r.a.createElement("p",null,"Le troisi\xe8me compare les revenus reguliers et les d\xe9penses reguli\xe8res."),r.a.createElement("p",null,"Le dernier montre l'\xe9volution de la repartition des actifs du portefeuille boursier."))),r.a.createElement(H.d,{width:320,height:160,data:u,syncId:"summary"},r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.c,{dataKey:"saved",fill:"#fdad5c"})),r.a.createElement(H.d,{width:320,height:160,data:s,syncId:"summary"},r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.c,{dataKey:"investment",fill:"#63acdd"})),r.a.createElement(H.b,{width:320,height:160,data:m,syncId:"summary"},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"colorSpending",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),r.a.createElement("linearGradient",{id:"colorIncome",x1:"0",y1:"0",x2:"0",y2:"1"},r.a.createElement("stop",{offset:"5%",stopColor:"#82ca9d",stopOpacity:.8}),r.a.createElement("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0}))),r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.a,{type:"monotone",dataKey:"income",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorIncome)"}),r.a.createElement(H.a,{type:"monotone",dataKey:"spending",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorSpending)"})),r.a.createElement(H.b,{width:320,height:160,data:d,syncId:"summary"},r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(H.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"})))}function V(e){var t=e.boundaries,a=e.balance,l=e.target,o=Object(n.useMemo)((function(){return a.map((function(e,a){return Object(j.a)({age:t.min+a},e)}))}),[a,t]),i=Object(n.useMemo)((function(){return a.map((function(e,a){return{age:t.min+a,stock:(e.stock/(e.bond+e.stock)).toFixed(3),bond:(e.bond/(e.bond+e.stock)).toFixed(3)}}))}),[a,t]);return r.a.createElement("div",null,r.a.createElement(H.h,{width:"100%",height:320},r.a.createElement(H.f,{data:o,syncId:"result"},r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(H.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(H.g,{y:l,label:"FIRE Target",stroke:"red"}))),r.a.createElement(H.h,{width:"100%",height:224},r.a.createElement(H.b,{data:i,syncId:"result"},r.a.createElement(H.e,{strokeDasharray:"3 3"}),r.a.createElement(H.j,{dataKey:"age",stroke:"#ccc"}),r.a.createElement(H.k,{stroke:"#ccc"}),r.a.createElement(H.i,null),r.a.createElement(H.a,{type:"monotone",dataKey:"bond",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(H.a,{type:"monotone",dataKey:"stock",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}))))}var J=function(e,t){var a=0;return Object(_.a)(Array(e.years)).map((function(n,r){var l=t.find((function(t){return t.age===e.min+r}));return l&&(a=l.amount),a}))},Z=function(e,t){return Object(_.a)(Array(e.years)).map((function(a,n){var r=t.find((function(t){return t.age===e.min+n}));return r?r.amount:0}))},G=function(e,t){var a={stock:0,bond:0,cash:0};return Object(_.a)(Array(e.years)).map((function(n,r){var l=t.find((function(t){return t.age===e.min+r}));return l&&(a={stock:l.stock,bond:l.bond,cash:l.cash}),a}))},P=function(e,t,a,n){var r={stock:0,bond:0};return a.map((function(a,l){return r=function(e,t,a,n,r){var l=e.stock+e.bond,o=l+t,i={stock:r.stock*o-e.stock,bond:r.bond*o-e.bond},c=e.stock+Math.min(t,Math.max(0,i.stock)),u=e.bond+Math.min(t,Math.max(0,i.bond)),s=l+t+a,m={stock:r.stock*s-c,bond:r.bond*s-u};return{stock:e.stock*(1+n.stock)+Math.min(t,Math.max(0,i.stock))*(1+n.stock)+Math.min(a,Math.max(0,m.stock))*(1+n.stock),bond:e.bond*(1+n.bond)+Math.min(t,Math.max(0,i.bond))*(1+n.bond)+Math.min(a,Math.max(0,m.bond))*(1+n.bond)}}(r,t[l],a,e,n[l])}))};function U(e){var t=function(e){var t=80;return e.income.forEach((function(e){e.age<t&&(t=e.age)})),e.spending.forEach((function(e){e.age<t&&(t=e.age)})),e.investments.forEach((function(e){e.age<t&&(t=e.age)})),e.portfolio.forEach((function(e){e.age<t&&(t=e.age)})),{min:t,max:80,years:80-t}}(e),a=[J(t,e.income),J(t,e.spending),Z(t,e.investments),G(t,e.portfolio)],n=a[0],r=a[1],l=a[2],o=a[3],i=e.goal.amount/(1-e.avgTaxRate)/e.goal.wr,c=function(e,t){return e.map((function(e,a){return Math.max(0,e-t[a])}))}(n,r);return{boundaries:t,income:n,spending:r,investments:l,repartition:o,savings:c,balance:P({stock:e.stockReturns,bond:e.bondReturns},l,c,o),target:i}}var X=function(){var e=h().config,t=Object(n.useMemo)((function(){return U(e)}),[e]),a=t.boundaries,l=t.income,o=t.spending,i=t.investments,c=t.savings,u=t.repartition,s=t.balance,m=t.target;return r.a.createElement("div",{className:B.a.results},r.a.createElement(Q,{boundaries:a,income:l,spending:o,investments:i,savings:c,repartition:u}),r.a.createElement("div",{className:B.a.main},r.a.createElement("div",{className:B.a.informations},r.a.createElement("p",null,"Target = (",e.goal.amount," / ",1-e.avgTaxRate,") / ",e.goal.wr," = ",m.toFixed(2),r.a.createElement(I,{title:"Target"},r.a.createElement("p",null,"Il s'agit du montant que vous devez \xe9pargner en vue de votre retraite.")))),r.a.createElement(V,{boundaries:a,balance:s,target:m})))};var W=function(){return r.a.createElement(k,null,r.a.createElement(F,null),r.a.createElement(X,null))};var Y=function(){return r.a.createElement("article",null,r.a.createElement("div",null,r.a.createElement("p",null,"Ce calculateur / visualiseur de retraite anticip\xe9e est con\xe7u pour projeter le nombre d'ann\xe9es qui vous s\xe9parent de la retraite, en fonction de quelques donn\xe9es cl\xe9s telles que les revenus et les d\xe9penses annuels, le taux de croissance des revenus, les d\xe9penses annuelles pr\xe9vues \xe0 la retraite et la r\xe9partition des actifs. Il s'agit d'un calculateur de pr\xe9retraite qui est utile avant votre d\xe9part \xe0 la retraite pour avoir une id\xe9e du nombre d'ann\xe9es qu'il vous faudra probablement pour accumuler suffisamment d'argent pour prendre votre retraite."),r.a.createElement("strong",null,"TODO"),r.a.createElement("ul",{style:{margin:0,marginBottom:16}},r.a.createElement("li",null,"ajouter un moyen d'investir sur des periodes differentes (ex: chaque mois, toutes les 2 semaines)."),r.a.createElement("li",null,"avoir plus de coh\xe9rance au niveau des couleurs des graphiques. [epargne] -> jaune / orange [investissement irreg] -> bleu azure ? [repartition] -> cash(jaune) obligation(violet) action(rouge) [revenu - depense] -> vert - bleu"),r.a.createElement("li",null,"ajouter cash et gold au portfolio."),r.a.createElement("li",null,"afficher le nombre d'ann\xe9e avant retraite."),r.a.createElement("li",null,"modifier les informations flottantes des graphiques."),r.a.createElement("li",null,"faire une meilleur verification des formulaires + changer les pourcentages de 0.8 a 80%"))),r.a.createElement(W,null))},$=function(e){return r.a.createElement("main",e,r.a.createElement(i.a,null))};var ee=function(){return r.a.createElement(u,null,r.a.createElement(p,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/*",element:r.a.createElement($,null)},r.a.createElement(i.b,{path:"",element:r.a.createElement(E,null)}),r.a.createElement(i.b,{path:"early-retirement",element:r.a.createElement(Y,null)}))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root"))},85:function(e,t,a){e.exports={results:"Results_results__3Bszj",main:"Results_main__33oQQ",informations:"Results_informations__3P7aK",click:"Results_click__3TZpp"}}},[[250,1,2]]]);
//# sourceMappingURL=main.4fee6048.chunk.js.map