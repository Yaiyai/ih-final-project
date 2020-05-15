(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,a,t){e.exports=t(85)},51:function(e,a,t){},52:function(e,a,t){},70:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(22),l=t.n(s),c=(t(50),t(51),t(7)),o=t(9),i=t(11),m=t(10),u=(t(52),t(23)),h=t(16),p=t.n(h),d=function e(){var a=this;Object(c.a)(this,e),this.signup=function(e){var t=e.username,n=e.email,r=e.password;return a.service.post("/signup",{username:t,email:n,password:r})},this.login=function(e){var t=e.username,n=e.password;return a.service.post("/login",{username:t,password:n})},this.logout=function(){return a.service.post("/logout")},this.isLoggedIn=function(){return a.service.get("/loggedin")},this.service=p.a.create({baseURL:"".concat("http://cuentame-mas.herokuapp.com/api"),withCredentials:!0})},g=(t(70),t(8)),E=t(18),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"menu"},r.a.createElement(E.a,{className:"flex-container"},r.a.createElement(g.b,{className:"to-link",to:"/"},"\xbfC\xf3mo funciona?"),r.a.createElement("div",null,r.a.createElement(g.b,{className:"to-link",to:"/signup"},"Registrarme"),r.a.createElement(g.b,{className:"to-link",to:"/login"},"Iniciar sesi\xf3n")))))},v=(t(76),t(17)),b=t(25),C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",{className:"homePage"},r.a.createElement(E.a,null,r.a.createElement(v.a,{as:"header"},r.a.createElement(b.a,{as:"article",md:6},r.a.createElement("figure",{className:"logo"},r.a.createElement("img",{src:"/imgs/home/logo-home.svg",alt:"Cuentame m\xe1s Logo"})),r.a.createElement("h1",null,"Construye tu portfolio de forma r\xe1pida y sencilla"),r.a.createElement("h5",null,"Porque no todas las empresas necesitan ver todo tu trabajo, usa ",r.a.createElement("strong",null,"Cu\xe9ntame M\xe1s"),"."),r.a.createElement("p",null,"Cu\xe9ntame M\xe1s te proporcinona las herramientas que necesitas para presentar portfolios espec\xedficos para la empresa en la que est\xe1s interesado en aplicar.."),r.a.createElement("p",{className:"features"},"Totalmente gratis | No pierdas el tiempo con programas de dise\xf1o"),r.a.createElement(g.b,{className:"myButton",to:"/login"},"crear portfolio")),r.a.createElement(b.a,{as:"article",md:6},r.a.createElement("figure",{className:"imgHeader"},r.a.createElement("img",{src:"/imgs/home/img-header.svg",alt:"Cuentame m\xe1s"})))),r.a.createElement(v.a,{as:"section",className:"infoSection"},r.a.createElement(b.a,{md:5,as:"article"},r.a.createElement("figure",{className:"imgInfo"},r.a.createElement("img",{src:"/imgs/home/mac.svg",alt:"Cuentame m\xe1s - Computer"}))),r.a.createElement(b.a,{md:7,as:"article"},r.a.createElement("h2",null,"Crea portfolios espec\xedficos"),r.a.createElement("h5",null,"Dise\xf1a un portfolio nuevo en minutos."),r.a.createElement("p",null,"Simplemente tienes que a\xf1adir contenido que previamente hayas a\xf1adido a tu perfil, elige una plantilla y luego personal\xedzala como mejor se adapte a las necesidades de la oferta de trabajo que te interesa."))),r.a.createElement(v.a,{as:"section",className:"howWorks"},r.a.createElement("h2",null,"\xbfC\xf3mo funciona?"),r.a.createElement("article",{className:"groupCards"},r.a.createElement("article",{className:"eachCard"},r.a.createElement("figure",{className:"icons"},r.a.createElement("img",{src:"/imgs/ic/ic-profile.svg",alt:"Cuentame m\xe1s - Computer"})),r.a.createElement("h4",null,"Reg\xedstrate"),r.a.createElement("p",null,"Para empezar a montar tus portfolios, es necesario que te registres.")),r.a.createElement("article",{className:"eachCard"},r.a.createElement("figure",{className:"icons"},r.a.createElement("img",{src:"/imgs/ic/ic-cv.svg",alt:"Cuentame m\xe1s - Computer"})),r.a.createElement("h4",null,"A\xf1ade"),r.a.createElement("p",null,"Para empezar a montar tus portfolios, es necesario que te registres.")),r.a.createElement("article",{className:"eachCard"},r.a.createElement("figure",{className:"icons"},r.a.createElement("img",{src:"/imgs/ic/ic-addnew.svg",alt:"Cuentame m\xe1s - Computer"})),r.a.createElement("h4",null,"Portfolios"),r.a.createElement("p",null,"Para empezar a montar tus portfolios, es necesario que te registres.")),r.a.createElement("article",{className:"eachCard"},r.a.createElement("figure",{className:"icons"},r.a.createElement("img",{src:"/imgs/ic/ic-link.svg",alt:"Cuentame m\xe1s - Computer"})),r.a.createElement("h4",null,"Comparte"),r.a.createElement("p",null,"Para empezar a montar tus portfolios, es necesario que te registres."))),r.a.createElement(g.b,{className:"myButton",to:"/login"},"\xa1empezar!")))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 Copyright Cu\xe9ntameM\xe1s 2020")))}}]),t}(n.Component),N=t(19),y=t(24),I=(t(77),t(20)),j=t(4),O=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInputChange=function(e){var a=Object(y.a)({},n.state.loginInfo),t=e.target,r=t.name,s=t.value;a=Object(y.a)(Object(y.a)({},a),{},Object(N.a)({},r,s)),n.setState({loginInfo:a})},n.handleSubmit=function(e){e.preventDefault(),n.signupService.signup(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/login")})).catch((function(e){return 400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",email:"",password:""},errorMessage:""},n.signupService=new d,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(E.a,{className:"signup-page"},r.a.createElement("h4",null,"\xa1Quiero registrarme!"),r.a.createElement(j.a,{onSubmit:this.handleSubmit,className:"my-form"},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{className:"form-label"},"Username"),r.a.createElement(j.a.Control,{className:"form-input",name:"username",onChange:this.handleInputChange,value:this.state.username,type:"text",placeholder:"Introduce un nombre de usuario"})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Correo electr\xf3nico"),r.a.createElement(j.a.Control,{className:"form-input",name:"email",onChange:this.handleInputChange,value:this.state.email,type:"email",placeholder:"Introduce un correo electr\xf3nico"})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Contrase\xf1a"),r.a.createElement(j.a.Control,{className:"form-input",name:"password",onChange:this.handleInputChange,value:this.state.password,type:"password",placeholder:"Contrase\xf1a"})),r.a.createElement(I.a,{className:"form-button",type:"submit"},"Crear Usuario")),r.a.createElement("p",null,"\xbfYa tienes cuenta?"," ",r.a.createElement(g.b,{className:"mini-link",to:"/login"},"Iniciar Sesi\xf3n"))))}}]),t}(n.Component),S=(t(79),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleInputChange=function(e){var a=Object(y.a)({},n.state.loginInfo),t=e.target,r=t.name,s=t.value;a=Object(y.a)(Object(y.a)({},a),{},Object(N.a)({},r,s)),n.setState({loginInfo:a})},n.handleSubmit=function(e){e.preventDefault(),n.signupService.login(n.state.loginInfo).then((function(e){n.props.setTheUser(e.data),n.props.history.push("/dashboard")})).catch((function(e){return 400===e.response.status&&n.setState({errorMessage:e.response.data.message})}))},n.state={loginInfo:{username:"",email:"",password:""},errorMessage:""},n.signupService=new d,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(E.a,{className:"login-page"},r.a.createElement("h4",null,"\xa1Iniciar sesi\xf3n!"),r.a.createElement(j.a,{onSubmit:this.handleSubmit,className:"my-form"},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,{className:"form-label"},"Username"),r.a.createElement(j.a.Control,{className:"form-input",name:"username",onChange:this.handleInputChange,value:this.state.username,type:"text",placeholder:"Introduce un nombre de usuario"})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Contrase\xf1a"),r.a.createElement(j.a.Control,{className:"form-input",name:"password",onChange:this.handleInputChange,value:this.state.password,type:"password",placeholder:"Contrase\xf1a"})),r.a.createElement(I.a,{className:"form-button",type:"submit"},"Iniciar sesi\xf3n")),r.a.createElement("p",null,"\xbfNo tienes cuenta?"," ",r.a.createElement(g.b,{className:"mini-link",to:"/signup"},"Iniciar sesi\xf3n"))))}}]),t}(n.Component)),w=(t(80),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).logout=function(){n.props.setTheUser(!1),n.props.history.push("/"),n.authServices.logout()},n.authServices=new d,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"latNavBar"},r.a.createElement("div",{className:"personalInfo"},r.a.createElement("figure",{className:"logoDash"},r.a.createElement("img",{src:"/imgs/dashboard/logo-dash.svg",alt:"Cuentame m\xe1s"})),r.a.createElement("figure",{className:"logoProfile"},this.props.loggedInDash.avatar?r.a.createElement("img",{src:this.props.loggedInDash.avatar,alt:"Cuentame m\xe1s"}):r.a.createElement("img",{src:"/imgs/ic/ic-signup.svg",alt:"Cuentame m\xe1s"})),this.props.loggedInDash.name?r.a.createElement("p",{className:"dashName"},"".concat(this.props.loggedInDash.name," ").concat(this.props.loggedInDash.lastName)):r.a.createElement("p",{className:"dashName"},"A\xf1ade nombre"),r.a.createElement("p",{className:"dashEmail"},this.props.loggedInDash.email),r.a.createElement(g.b,{to:"/dashboard/profile",className:"myButton mini"},"Editar perfil")),r.a.createElement("div",{className:"buttonGroup"},r.a.createElement(g.b,{className:"dashLink",to:"/dashboard"},"dashboard ",r.a.createElement("img",{src:"/imgs/ic/ic-dashboard.svg",alt:""})),r.a.createElement(g.b,{className:"dashLink",to:"/dashboard/cv"},"experiencia ",r.a.createElement("img",{src:"/imgs/ic/ic-cv.svg",alt:""})),r.a.createElement(g.b,{className:"dashLink",to:"#"},"portfolios ",r.a.createElement("img",{src:"/imgs/ic/ic-addnew.svg",alt:""}))),r.a.createElement("button",{className:"dashLink",onClick:this.logout},"Cerrar Sesi\xf3n ",r.a.createElement("img",{src:"/imgs/ic/ic-close.svg",alt:""}))))}}]),t}(n.Component)),k=function e(){var a=this;Object(c.a)(this,e),this.editUser=function(e,t){return a.service.post("/updateUser/".concat(e),t)},this.service=p.a.create({baseURL:"".concat("http://cuentame-mas.herokuapp.com/api"),withCredentials:!0})},U=(t(81),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target,t=a.name,r=a.value;n.setState(Object(N.a)({},t,r))},n.submitEdits=function(e){n.userService.editUser(n.props.loggedInDash._id,n.state).then((function(){n.props.setTheUser(n.state),n.props.history.push("/dashboard")})).catch((function(e){return new Error(e)}))},n.state={username:n.props.loggedInDash.username,name:n.props.loggedInDash.name,lastName:n.props.loggedInDash.lastName,email:n.props.loggedInDash.email,phone:n.props.loggedInDash.phone},n.userService=new k,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"profilePage"},r.a.createElement("h4",null,this.props.loggedInDash.username,", aqu\xed puedes editar tu perfil"),r.a.createElement("figure",{className:"profileImg"},this.props.loggedInDash.avatar?r.a.createElement("img",{src:this.props.loggedInDash.avatar,alt:"Cuentame m\xe1s"}):r.a.createElement("img",{src:"/imgs/ic/ic-signup.svg",alt:"Cuentame m\xe1s"})),r.a.createElement(j.a,{onSubmit:this.submitEdits},r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Nombre de usuario"),r.a.createElement(j.a.Control,{name:"username",type:"text",onChange:this.handleChange,placeholder:this.props.loggedInDash.username,value:this.state.username})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Email address"),r.a.createElement(j.a.Control,{name:"email",type:"email",onChange:this.handleChange,placeholder:this.props.loggedInDash.email,value:this.state.email})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Nombre"),r.a.createElement(j.a.Control,{name:"name",onChange:this.handleChange,type:"text",placeholder:this.props.loggedInDash.name,value:this.state.name})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Apellidos"),r.a.createElement(j.a.Control,{name:"lastName",onChange:this.handleChange,type:"text",placeholder:this.props.loggedInDash.lastName,value:this.state.lastName})),r.a.createElement(j.a.Group,null,r.a.createElement(j.a.Label,null,"Tel\xe9fono"),r.a.createElement(j.a.Control,{name:"phone",onChange:this.handleChange,type:"text",placeholder:this.props.loggedInDash.phone,value:this.state.phone})),r.a.createElement(I.a,{variant:"primary",type:"submit"},"Guardar cambios"))))}}]),t}(n.Component)),D=function e(){var a=this;Object(c.a)(this,e),this.findMyPortfolios=function(e){return a.service.get("/findMyPortfolios",e)},this.service=p.a.create({baseURL:"".concat("http://cuentame-mas.herokuapp.com/api"),withCredentials:!0})},M=function e(){var a=this;Object(c.a)(this,e),this.findMyCvs=function(e){return a.service.get("/findMyCvs",e)},this.findThisCv=function(e){return a.service.get("/findThisCv/".concat(e))},this.service=p.a.create({baseURL:"".concat("http://cuentame-mas.herokuapp.com/api"),withCredentials:!0})},L=(t(82),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).getMyPortfolios=function(){n.portfolioService.findMyPortfolios(n.props.loggedInDash._id).then((function(e){return n.setState({portfolios:e.data})})).catch((function(e){return new Error(e)}))},n.getMyCv=function(){n.cvService.findMyCvs(n.props.loggedInDash._id).then((function(e){return n.setState({cvs:e.data})})).catch((function(e){return new Error(e)}))},n.componentDidMount=function(){n.getMyPortfolios(),n.getMyCv()},n.state={portfolios:[],cvs:[]},n.portfolioService=new D,n.cvService=new M,n}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"homeDash"},r.a.createElement(v.a,{as:"article",className:"welcomeBox"},r.a.createElement("div",null,r.a.createElement("h4",null,"Bienvenid@ ",this.props.loggedInUser.name),r.a.createElement("p",null,"Este es tu dashboard de usuario. En \xe9l encontrar\xe1s todos los portfolios creados hasta el momento."),r.a.createElement("p",null,"\xa1Recuerda a\xf1adir tus trabajos para tener el portfolio a la \xfaltima!")),r.a.createElement("figure",null,r.a.createElement("img",{src:"/imgs/dashboard/img-welcome.svg",alt:"Cuentame m\xe1s"})," ")),r.a.createElement(v.a,{as:"article",className:"homePortfolios"},r.a.createElement("h4",null,"Mis portfolios"),r.a.createElement(v.a,{as:"article",className:"everyPortfolio"},this.state.portfolios.map((function(e,a){return r.a.createElement(g.b,{key:a,to:""},r.a.createElement("article",{className:"eachPortfolio"},r.a.createElement("figure",null,r.a.createElement("img",{src:"/imgs/ic/ic-signup.svg",alt:""})),r.a.createElement("p",{className:"titlePortfolio"},e.title)))})),r.a.createElement("div",{className:"eachPortfolio add"},r.a.createElement("figure",null,r.a.createElement("img",{src:"/imgs/ic/ic-addnew-portfolio.svg",alt:""})),r.a.createElement("p",{className:"addPortfolio"},"Nuevo Portfolio")))),r.a.createElement(v.a,{as:"article",className:"homeCv"},r.a.createElement("h4",null,"Mis CV"),r.a.createElement(v.a,{as:"article",className:"everyCv"},this.state.cvs.map((function(e,a){return r.a.createElement(g.b,{key:a,to:"/dashboard/cv/".concat(e._id)},r.a.createElement("article",{className:"eachCv"},r.a.createElement("figure",null,r.a.createElement("img",{src:"/imgs/ic/ic-signup.svg",alt:""})),r.a.createElement("p",{className:"titleCv"},e.title)))})),r.a.createElement("div",{className:"eachCv add"},r.a.createElement("figure",null,r.a.createElement("img",{src:"/imgs/ic/ic-addnew-portfolio.svg",alt:""})),r.a.createElement("p",{className:"addCv"},"Nuevo Cv"))))))}}]),t}(n.Component)),P=function e(){var a=this;Object(c.a)(this,e),this.findJobs=function(e){return a.service.get("/getJobs/".concat(e))},this.findEducations=function(e){return a.service.get("/getEducations/".concat(e))},this.createJob=function(e,t){var n=t.place,r=t.duration;return a.service.post("/addJob/".concat(e),{place:n,duration:r})},this.createEducation=function(e,t){var n=t.place,r=t.duration;return a.service.post("/addEducation/".concat(e),{place:n,duration:r})},this.service=p.a.create({baseURL:"".concat("http://cuentame-mas.herokuapp.com/api"),withCredentials:!0})},T=(t(83),t(44)),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleModal=function(e){return n.setState({modalShow:e})},n.componentDidMount=function(){n.getMyCv(),n.getMyJobs(),n.getMyEducations()},n.handleSkill=function(e){},n.state={modalShow:!1,cv:{socialMedia:[],skills:[],whatIveDone:[],title:"",owner:""},experience:[],eds:[]},n.cvServices=new M,n.infoServices=new P,n.id=n.props.match.params.id,n}return Object(o.a)(t,[{key:"getMyCv",value:function(){var e=this;this.cvServices.findThisCv(this.id).then((function(a){return e.setState({cv:a.data})})).catch((function(e){return new Error(e)}))}},{key:"getMyJobs",value:function(){var e=this;this.infoServices.findJobs(this.id).then((function(a){return e.setState({experience:a.data})})).catch((function(e){return new Error(e)}))}},{key:"getMyEducations",value:function(){var e=this;this.infoServices.findEducations(this.id).then((function(a){e.setState({eds:a.data})})).catch((function(e){return new Error(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"cvPage"},r.a.createElement("p",null,this.state.cv.owner.name),r.a.createElement("p",null,this.state.cv.title),this.state.cv.skills.map((function(e,a){return r.a.createElement("p",{key:a},e)})),r.a.createElement("button",{onClick:function(){return e.handleModal(!0)},className:"myButton"},"A\xf1adir Skill"),r.a.createElement(T.a,{show:this.state.modalShow,onHide:function(){return e.handleModal(!1)}},r.a.createElement(j.a,null,r.a.createElement(j.a.Group,{controlId:"formBasicEmail"},r.a.createElement(j.a.Label,null,"A\xf1adir Skill"),r.a.createElement(j.a.Control,{type:"text",placeholder:"A\xf1adir Skill",value:this.state.cv.skills})),r.a.createElement(I.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement("button",{onClick:function(){return e.handleModal(!1)}},"cerrar")),this.state.eds&&this.state.eds.map((function(e,a){return r.a.createElement("article",{key:a},r.a.createElement("h6",null,e.place),r.a.createElement("p",null,e.duration),r.a.createElement("p",null,e.experienceInfo))})),this.state.experience&&this.state.experience.map((function(e,a){return r.a.createElement("article",{key:a},r.a.createElement("h6",null,e.place),r.a.createElement("p",null,e.duration),r.a.createElement("p",null,e.experienceInfo))})),this.state.cv.whatIveDone.map((function(e,a){return r.a.createElement("img",{key:a,src:e})}))))}}]),t}(n.Component),G=(t(84),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"dashPage"},r.a.createElement(w,Object.assign({},this.props,{setTheUser:this.props.setTheUser,loggedInDash:this.props.loggedInUser})),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(L,Object.assign({},e.props,{loggedInDash:e.props.loggedInUser}))}}),r.a.createElement(u.a,{path:"/dashboard/profile",render:function(){return r.a.createElement(U,Object.assign({},e.props,{setTheUser:e.props.setTheUser,loggedInDash:e.props.loggedInUser}))}}),r.a.createElement(u.a,{path:"/dashboard/cv/:id",render:function(e){return r.a.createElement(x,e)}}))))}}]),t}(n.Component)),q=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).setTheUser=function(a){return e.setState({loggedInUser:a},(function(){return console.log("El estado es",e.state)}))},e.fetchUser=function(){null===e.state.loggedInUser&&e.authService.isLoggedIn().then((function(a){return e.setTheUser(a.data)})).catch((function(){return e.setTheUser(!1)}))},e.state={loggedInUser:null},e.authService=new d,e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,render:function(){return r.a.createElement(C,null)}}),r.a.createElement(u.a,{path:"/signup",render:function(a){return r.a.createElement(O,Object.assign({},a,{setTheUser:e.setTheUser}))}}),r.a.createElement(u.a,{path:"/login",render:function(a){return r.a.createElement(S,Object.assign({},a,{setTheUser:e.setTheUser}))}}),this.state.loggedInUser&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{path:"/dashboard",render:function(a){return r.a.createElement(G,Object.assign({},a,{setTheUser:e.setTheUser,loggedInUser:e.state.loggedInUser}))}}))))}}]),t}(n.Component);l.a.render(r.a.createElement(g.a,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1e280ea6.chunk.js.map