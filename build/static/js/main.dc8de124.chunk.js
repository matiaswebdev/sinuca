(this.webpackJsonpsinuca_app=this.webpackJsonpsinuca_app||[]).push([[0],{38:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(11),i=a.n(s),r=(a(38),a(13)),o=a(2),l=(a(39),a(40),a(5)),j=a(31),d=a.n(j).a.create({}),b=(a(59),a(14),a(4)),m=a(0);var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),r=i[0],j=i[1],u=Object(c.useState)(""),h=Object(l.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)([]),p=Object(l.a)(f,2),N=p[0],v=p[1],g=Object(c.useState)(0),y=Object(l.a)(g,2),_=y[0],C=y[1],S=Object(o.f)(),k=Object(o.g)().id;return Object(c.useEffect)((function(){d.get("http://localhost/sinuca/api/tabela/"+k).then((function(e){v(e.data.data.tabela[0]),C(e.data.data.tabela[0].id)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center min-vh-100",children:Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h2",{children:"Cadastrar Time"}),Object(m.jsx)("h5",{children:N.nome}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.length?d.post("http://localhost/sinuca/api/time",{nome:a,jogador1:r,jogador2:O,tabela_id:_}).then((function(e){200===e.request.status&&(n(""),j(""),x(""),C(0),b.NotificationManager.success("Cadastrado com successo","Sucesso",1e3),setTimeout((function(){S.push("/tabela/"+k)}),1500))})).catch((function(e){409===e.response.status&&b.NotificationManager.error("Este time j\xe1 existe escolha outro nome","Fechar",1e3,(function(){}))})):b.NotificationManager.error("Por favor escolha um nome para o time","Fechar!",1e3)},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"nome",className:"form-label",children:"Nome"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"nome",value:a,onChange:function(e){return n(e.target.value)},autoFocus:!0})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"jogador1",className:"form-label",children:"Jogador 1"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"jogador1",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"jogador2",className:"form-label",children:"Jogador 2"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"jogador2",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Cadastrar time"}),Object(m.jsx)("button",{onClick:function(e){S.goBack()},className:"btn btn-default",children:"Cancelar"})]})]})})})}),Object(m.jsx)(b.NotificationContainer,{})]})};a(69);var h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){d.get("http://localhost/sinuca/api/time").then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)("div",{className:"container __main-container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(m.jsx)("h1",{className:"__page-title",children:"Lista de Times"})})}),Object(m.jsx)("div",{className:"row",children:a.map((function(e){return Object(m.jsx)("div",{className:"col-lg-4",onClick:function(){return t=e.id,void console.log("handleCardClick",t);var t},children:Object(m.jsx)("div",{className:"card __card",style:{width:"100%"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h3",{children:e.nome}),Object(m.jsxs)("p",{children:["Jogador 1 ",Object(m.jsx)("span",{className:"__player-name",children:e.jogador1})]}),Object(m.jsxs)("p",{children:["Jogador 2 ",Object(m.jsx)("span",{className:"__player-name",children:e.jogador2})]})]})})},e.id)}))}),Object(m.jsx)(b.NotificationContainer,{})]})};a(70);var O=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(o.f)();return Object(c.useEffect)((function(){d.get("http://localhost/sinuca/api/tabela").then((function(e){n(e.data.data)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)("div",{className:"container __main-container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(m.jsx)("h1",{className:"__page-title",children:"Lista de Tabelas"})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("button",{type:"button",onClick:function(e){s.push("/tabela-cadastro")},className:"btn btn-primary btn-sm mb-3",style:{marginRight:"10px"},children:"Adicionar tabela"})})}),Object(m.jsx)("div",{className:"row",children:a.map((function(e){return Object(m.jsx)("div",{className:"col-md-6 col-lg-4",onClick:function(){return t=e.id,void s.push("/tabela/".concat(t));var t},children:Object(m.jsx)("div",{className:"card __card",style:{width:"100%"},children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h3",{children:e.nome}),Object(m.jsxs)("p",{children:["Pr\xeamio ",Object(m.jsx)("span",{className:"__player-name",children:e.premio})]}),Object(m.jsxs)("p",{children:["Pontua\xe7\xe3o ",Object(m.jsx)("span",{className:"__player-name",children:e.pontuacao})]}),Object(m.jsxs)("p",{children:["Regra ",Object(m.jsx)("span",{className:"__player-name",children:e.regra})]})]})})},e.id)}))}),Object(m.jsx)(b.NotificationContainer,{})]})};a(71);var x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),r=i[0],j=i[1],u=Object(c.useState)(""),h=Object(l.a)(u,2),O=h[0],x=h[1],f=Object(c.useState)(""),p=Object(l.a)(f,2),N=p[0],v=p[1],g=Object(o.f)();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center min-vh-100",children:Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h2",{children:"Cadastrar Tabela"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.length?O.length?d.post("http://localhost/sinuca/api/tabela",{nome:a,premio:r,pontuacao:O,regra:N}).then((function(e){200===e.request.status&&(n(""),j(""),x(""),v(""),b.NotificationManager.success("Cadastrado com successo","Sucesso",1e3),setTimeout((function(){g.goBack()}),1e3))})).catch((function(e){409===e.response.status&&b.NotificationManager.error("Esta tabela j\xe1 existe escolha outro nome","Click me!",1e3,(function(){}))})):b.NotificationManager.error("Por favor escolha uma pontucao para a tabela","Click me!",1e3):b.NotificationManager.error("Por favor escolha um nome para a tabela","Click me!",1e3)},children:[Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"nome",className:"form-label",children:"Nome"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"nome",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"premio",className:"form-label",children:"Pr\xeamio"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"premio",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"pontuacao",className:"form-label",children:"Pontua\xe7\xe3o"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"pontuacao",value:O,onChange:function(e){return x(e.target.value)}})]}),Object(m.jsxs)("div",{className:"mb-3",children:[Object(m.jsx)("label",{htmlFor:"regra",className:"form-label",children:"Regra"}),Object(m.jsx)("input",{type:"text",className:"form-control",id:"regra",value:N,onChange:function(e){return v(e.target.value)}})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Cadastrar tabela"}),Object(m.jsx)("button",{onClick:function(e){g.goBack()},className:"btn btn-default",children:"Cancelar"})]})]})})})}),Object(m.jsx)(b.NotificationContainer,{})]})};a(72);var f=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),r=i[0],j=i[1],u=Object(o.f)(),h=Object(o.g)().id;return Object(c.useEffect)((function(){d.get("http://localhost/sinuca/api/tabela/".concat(h)).then((function(e){n(e.data.data.tabela[0]),j(e.data.data.times)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsxs)("div",{className:"container __main-container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-12 d-flex justify-content-center",children:Object(m.jsx)("h1",{className:"__page-title",children:a.nome})})}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsxs)("div",{className:"col-lg-6",children:[Object(m.jsxs)("div",{className:"card __card",style:{width:"100%"},children:[Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("p",{children:["Pr\xeamio ",Object(m.jsx)("span",{className:"__player-name",children:a.premio})]}),Object(m.jsxs)("p",{children:["Pontua\xe7\xe3o ",Object(m.jsx)("span",{className:"__player-name",children:a.pontuacao})]}),Object(m.jsxs)("p",{children:["Regra ",Object(m.jsx)("span",{className:"__player-name",children:a.regra})]})]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:r.map((function(e){return Object(m.jsxs)("p",{children:[e.nome," ",Object(m.jsxs)("span",{children:["Pontos: ",e.pontos]})]},e.id)}))})})]}),Object(m.jsx)("button",{type:"button",onClick:function(){r.length<10?u.push("/time-cadastro/"+h):b.NotificationManager.error("Capacidade de times esgotada, escolha outra tabela","Fechar!",1e3,(function(){}))},className:"btn btn-primary btn-sm",style:{marginRight:"10px"},children:"Adicionar time"}),Object(m.jsx)("button",{type:"button",onClick:function(e){return u.push("/tabela-list")},className:"btn btn-primary btn-sm",children:"Todas as tabelas"})]})}),Object(m.jsx)(b.NotificationContainer,{})]})};var p=function(){return Object(m.jsx)(r.a,{basename:"/sinuca/build",children:Object(m.jsx)("div",{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/time-cadastro/:id",children:Object(m.jsx)(u,{})}),Object(m.jsx)(o.a,{path:"/tabela-cadastro",children:Object(m.jsx)(x,{})}),Object(m.jsx)(o.a,{path:"/time-list",children:Object(m.jsx)(h,{})}),Object(m.jsx)(o.a,{path:"/tabela-list",children:Object(m.jsx)(O,{})}),Object(m.jsx)(o.a,{path:"/tabela/:id",children:Object(m.jsx)(f,{})})]})})})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.dc8de124.chunk.js.map