(this.webpackJsonpmakitappbeta=this.webpackJsonpmakitappbeta||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s.n(i),c=s(8),r=s(13),a=s.n(r),o=s(11),l=s(3),d=s.p+"static/media/planet.a63017b2.svg",m=s(1),u=function(){return Object(m.jsxs)("div",{className:"nav_bar_container",children:[Object(m.jsxs)("div",{className:"logoflex",children:[Object(m.jsx)("img",{className:"logo_img",src:d,alt:"logo"}),Object(m.jsx)("h1",{className:"logo_title montserrat-bold",children:"Space Travelers' Hub"})]}),Object(m.jsxs)("ul",{className:"nav_links",children:[Object(m.jsx)("li",{className:"montserrat-regular navLinkWrapper",children:Object(m.jsx)(o.b,{className:"navLink",activeClassName:"selected_link",to:"/rocket",children:"Rocket"})}),Object(m.jsx)("li",{className:"montserrat-regular navLinkWrapper",children:Object(m.jsx)(o.b,{className:"navLink",activeClassName:"selected_link",to:"/mission",children:"Mission"})}),Object(m.jsx)("li",{className:"montserrat-regular navLinkWrapper",children:"|"}),Object(m.jsx)("li",{className:"montserrat-regular navLinkWrapper",children:Object(m.jsx)(o.b,{className:"navLink",activeClassName:"selected_link",to:"/profile",children:"Profile"})})]})]})},j="redux/mission/UPDATE_ALL",b="redux/mission/UPDATE_FROM_API",p="redux/mission/SET_MISSION_STATE",h=!0,O=[],_=function(e){return{type:p,payload:e}},f=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.missionReducer}));Object(i.useEffect)((function(){e({type:j,payload:[]})}),[]);return Object(m.jsxs)("div",{className:"mission_grid",children:[Object(m.jsxs)("div",{className:"mission_wrapper",children:[Object(m.jsx)("div",{className:"montserrat-regular title_item",children:"Mission"}),Object(m.jsx)("div",{className:"montserrat-regular title_item",children:"Description"}),Object(m.jsx)("div",{className:"montserrat-regular title_item",children:"Status"}),Object(m.jsx)("div",{className:"montserrat-regular title_item",children:" "})]}),t.map((function(t){return Object(m.jsxs)("div",{className:"mission_wrapper",children:[Object(m.jsx)("div",{className:"montserrat-regular mission_item",children:Object(m.jsx)("p",{children:t.mission_name})}),Object(m.jsx)("div",{className:"montserrat-regular mission_item_text",children:t.description}),Object(m.jsx)("div",{className:"montserrat-regular mission_item",children:Object(m.jsx)("div",{className:t.mission_status?"active_member":"not_member",children:t.mission_status?"Active Member":"NOT A MEMBER"})}),Object(m.jsx)("div",{className:"montserrat-regular mission_item",children:Object(m.jsx)("button",{className:t.mission_status?"active_member_btn":"not_member_btn",onClick:function(){var s,i;s=t.mission_id,i=t.mission_status,e(_(i?{id:s,value:!1}:{id:s,value:!0}))},type:"button",id:"member_btn",children:t.mission_status?"Leave Mission":"Join Mission"})})]},t.mission_id)}))]})},x=function(){var e=Object(c.c)((function(e){return e.missionReducer})),t=Object(c.c)((function(e){return e.rocketReducer})),s=e.filter((function(e){return!0===e.mission_status})),i=t.filter((function(e){return!0===e.rocket_status}));return Object(m.jsxs)("div",{className:"profile-section-container",children:[Object(m.jsxs)("div",{className:"profile-container",children:[Object(m.jsx)("h1",{className:"profile-title roboto-bold",children:"My Missions"}),Object(m.jsx)("ul",{className:0===s.length?"profile-table-none":"profile-table",children:s.map((function(e){return Object(m.jsx)("li",{className:"profile-list montserrat-light",children:e.mission_name},e.mission_name)}))})]}),Object(m.jsxs)("div",{className:"profile-container",children:[Object(m.jsx)("h1",{className:"profile-title roboto-bold",children:"My Rockets"}),Object(m.jsx)("ul",{className:0===i.length?"profile-table-none":"profile-table",children:i.map((function(e){return Object(m.jsx)("li",{className:"profile-list montserrat-light",children:e.rocket_name},e.rocket_name)}))})]})]})},v="redux/rocket/GET_INFO",k="redux/rocket/API_CALL",N="redux/rocket/SET_STATE",g=!0,y=[],E=function(e){return{type:N,payload:e}},R=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.rocketReducer}));Object(i.useEffect)((function(){e({type:v,payload:[]})}),[]);return Object(m.jsx)("div",{className:"rocket-section-container",children:t.map((function(t){return Object(m.jsxs)("div",{className:"rocket-container",children:[Object(m.jsx)("img",{src:t.flickr_images,alt:t.rocket_type,className:"rocket-image"}),Object(m.jsxs)("div",{className:"rocket-description-container",children:[Object(m.jsx)("div",{className:"rocket-description-name montserrat-bold",children:t.rocket_name}),Object(m.jsxs)("p",{className:"rocket-description roboto-bold",children:[t.rocket_status?Object(m.jsx)("span",{className:"rocket-description-reserved roboto-bold",children:"Reserved"}):Object(m.jsx)("span",{}),t.description]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){var s,i;s=t.rocket_id,i=t.rocket_status,e(E(i?{id:s,value:!1}:{id:s,value:!0}))},className:t.rocket_status?"reserve-rocket":"rocket-description-button",type:"button",children:t.rocket_status?"Cancel Reservation":"Reserve Rocket"})})]})]},t.rocket_id)}))})},M=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)(u,{}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(l.a,{to:"/rocket"})}),Object(m.jsx)(l.b,{path:"/rocket",children:Object(m.jsx)(R,{})}),Object(m.jsx)(l.b,{path:"/mission",children:Object(m.jsx)(f,{})}),Object(m.jsx)(l.b,{path:"/profile",children:Object(m.jsx)(x,{})})]})]})})},T=(s(34),s(35),s(36),s(37),s(9)),L=s(20),A=s.n(L),C=Object(T.b)({rocketReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,s=t.payload,i=e,n=[],c=function(e){return e.rocket_id===t.payload.id?t.payload.value:!!e.rocket_status};switch(t.type){case v:return e;case k:return s;case N:return i.forEach((function(e){n.push({rocket_id:e.rocket_id,description:e.description,rocket_name:e.rocket_name,rocket_type:e.rocket_type,flickr_images:e.flickr_images,rocket_status:c(e)})})),n;default:return e}},missionReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,s=t.payload,i=e,n=[],c=function(e){return e.mission_id===t.payload.id?t.payload.value:!!e.mission_status};switch(t.type){case j:return e;case b:return s;case p:return i.forEach((function(e){n.push({mission_id:e.mission_id,mission_name:e.mission_name,description:e.description,mission_status:c(e)})})),n;default:return e}}}),S=Object(T.c)(Object(T.a)((function(e){return function(t){return function(s){h&&(h=!1,fetch("https://api.spacexdata.com/v3/missions",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:b,payload:t})}))),t(s)}}})),Object(T.a)((function(e){return function(t){return function(s){g&&(g=!1,fetch("https://api.spacexdata.com/v3/rockets",{headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){return e.dispatch({type:k,payload:t})}))),t(s)}}})),Object(T.a)(A.a)),w=Object(T.d)(C,void 0,S);a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(c.a,{store:w,children:Object(m.jsx)(M,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c0ad1c7a.chunk.js.map