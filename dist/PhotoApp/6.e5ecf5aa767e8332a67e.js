(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{X3zk:function(e,t,i){"use strict";i.r(t),i.d(t,"LoginModule",(function(){return h}));var r=i("ofXK"),n=i("tyNb"),s=i("3Pt+"),o=i("fXoL"),a=i("UbJi");function l(e,t){if(1&e&&(o.Qb(0,"small",18),o.zc(1),o.Pb()),2&e){const e=o.dc();o.yb(1),o.Ac(e.alertMessage)}}function b(e,t){1&e&&(o.Qb(0,"span"),o.zc(1,"Login"),o.Pb())}function c(e,t){1&e&&o.Mb(0,"span",19)}function d(e,t){1&e&&(o.Qb(0,"span"),o.zc(1,"Register"),o.Pb())}function g(e,t){1&e&&o.Mb(0,"span",20)}const u=[{path:"",component:(()=>{class e{constructor(e,t,i){this._formBuilder=e,this._firebaseAuth=t,this._router=i,this.alert=!1,this.login_loading=!1,this.register_loading=!1,this.login=this._formBuilder.group({email:[null,[s.o.required,s.o.email]],password:[null,s.o.required]})}ngOnInit(){}register(){if(this.alert=!1,this.login.valid){this.register_loading=!0;let e=this.login.get("email").value,t=this.login.get("password").value;this._firebaseAuth.createUserWithEmailAndPassword(e,t).then(()=>{alert("User register succesfully"),this.register_loading=!1}).catch(e=>{this.alertMessage=e.message,this.alert=!0,this.register_loading=!0})}else this.alertMessage="Please fill the email and password correctly",this.alert=!0}loginuser(e){this.alert=!1,this.login.valid?(this.login_loading=!0,this._firebaseAuth.signInWithEmailAndPassword(e.email,e.password).then(()=>{this._router.navigateByUrl("/home"),this.login_loading=!1}).catch(e=>{this.alertMessage=e.message,this.alert=!0,this.login_loading=!1})):(this.alertMessage="Please fill the email and password correctly",this.alert=!0)}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(s.c),o.Lb(a.a),o.Lb(n.a))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-login"]],decls:26,vars:6,consts:[[1,"login","d-flex","flex-column","justify-content-center","align-items-center"],[1,"card",2,"width","18rem"],[1,"card-body"],[1,"card-title"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","id","exampleInputEmail1","formControlName","email","aria-describedby","emailHelp",1,"form-control"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","formControlName","password","id","exampleInputPassword1",1,"form-control"],["class","alert",4,"ngIf"],[1,"d-flex","justify-content-around"],["type","submit",1,"btn","btn-light"],[4,"ngIf"],["class","spinner-border spinner-border-sm","role","loginstatus","aria-hidden","true",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["class","spinner-border spinner-border-sm","role","registerstatus","aria-hidden","true",4,"ngIf"],[1,"alert"],["role","loginstatus","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["role","registerstatus","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,t){1&e&&(o.Qb(0,"div",0),o.Qb(1,"div",1),o.Qb(2,"div",2),o.Qb(3,"h5",3),o.zc(4,"Login / Register"),o.Pb(),o.Qb(5,"div"),o.Qb(6,"form",4),o.bc("ngSubmit",(function(){return t.loginuser(t.login.value)})),o.Qb(7,"div",5),o.Qb(8,"label",6),o.zc(9,"Email address"),o.Pb(),o.Mb(10,"input",7),o.Qb(11,"small",8),o.zc(12,"We'll never share your email with anyone else."),o.Pb(),o.Pb(),o.Qb(13,"div",5),o.Qb(14,"label",9),o.zc(15,"Password"),o.Pb(),o.Mb(16,"input",10),o.Pb(),o.Qb(17,"div"),o.xc(18,l,2,1,"small",11),o.Pb(),o.Qb(19,"div",12),o.Qb(20,"button",13),o.xc(21,b,2,0,"span",14),o.xc(22,c,1,0,"span",15),o.Pb(),o.Qb(23,"button",16),o.bc("click",(function(){return t.register()})),o.xc(24,d,2,0,"span",14),o.xc(25,g,1,0,"span",17),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&e&&(o.yb(6),o.jc("formGroup",t.login),o.yb(12),o.jc("ngIf",t.alert),o.yb(3),o.jc("ngIf",!t.login_loading),o.yb(1),o.jc("ngIf",t.login_loading),o.yb(2),o.jc("ngIf",!t.register_loading),o.yb(1),o.jc("ngIf",t.register_loading))},directives:[s.q,s.j,s.e,s.b,s.i,s.d,r.l],styles:[".login[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:rgba(0,0,0,.025)}.login[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{color:red;padding:0;text-align:center}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[n.b.forChild(u)],n.b]}),e})(),h=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[r.c,p,s.f,s.m]]}),e})()}}]);