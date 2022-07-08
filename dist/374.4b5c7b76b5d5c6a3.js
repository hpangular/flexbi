"use strict";(self.webpackChunkxero_frontend=self.webpackChunkxero_frontend||[]).push([[374],{7307:(B,Z,c)=>{c.r(Z),c.d(Z,{AuthModule:()=>K});var C=c(6895),h=c(2820),T=c(5698),I=c(4004),m=c(9653),P=c(1677),e=c(4650);let x=(()=>{class i{constructor(t,r){this.store=t,this.router=r}canActivate(t,r){return this.store.pipe((0,m.Ys)(P.M_),(0,T.q)(1),(0,I.U)(o=>!o||(this.router.navigate(["/dashboard/default"]),!1)))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(m.yh),e.LFG(h.F0))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var s=c(433),b=c(2340),k=c(1962),f=c(1127),_=c(2013);const N=["captchaWrapperElem"];let v=(()=>{class i{constructor(t){this.zone=t,this.windowGrecaptcha="grecaptcha",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com"}registerCaptchaScript(t,r,o,n){if(this.grecaptchaScriptLoaded())return void this.zone.run(()=>{o(window[this.windowGrecaptcha])});window[this.windowOnLoadCallbackProperty]=()=>this.zone.run(o.bind(this,window[this.windowGrecaptcha]));const a=document.createElement("script");a.innerHTML="",a.src=this.getCaptchaScriptUrl(t,r,n),a.async=!0,a.defer=!0,document.getElementsByTagName("head")[0].appendChild(a)}cleanup(){window[this.windowOnLoadCallbackProperty]=void 0,window[this.windowGrecaptcha]=void 0}grecaptchaScriptLoaded(){return!(!window[this.windowOnLoadCallbackProperty]||!window[this.windowGrecaptcha])}getLanguageParam(t){return t?`&hl=${t}`:""}getCaptchaScriptUrl(t,r,o){return`https://www.${t?this.globalDomain:this.defaultDomain}/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${r}${this.getLanguageParam(o)}`}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.R0b))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),F=(()=>{class i{constructor(t,r,o,n){this.renderer=t,this.zone=r,this.injector=o,this.scriptService=n,this.captchaElemPrefix="ngx_captcha_id_",this.setupCaptcha=!0,this.useGlobalDomain=!1,this.type="image",this.tabIndex=0,this.success=new e.vpe,this.load=new e.vpe,this.reset=new e.vpe,this.ready=new e.vpe,this.error=new e.vpe,this.expire=new e.vpe,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.isLoaded=!1}ngAfterViewInit(){this.control=this.injector.get(s.a5,void 0,e.XFs.Optional)?.control}ngAfterViewChecked(){this.setupCaptcha&&(this.setupCaptcha=!1,this.setupComponent())}ngOnChanges(t){t&&t.hl&&!t.hl.firstChange&&t.hl.currentValue!==t.hl.previousValue&&this.scriptService.cleanup(),t&&t.useGlobalDomain&&!t.useGlobalDomain.firstChange&&t.useGlobalDomain.currentValue!==t.useGlobalDomain.previousValue&&this.scriptService.cleanup(),this.setupCaptcha=!0}getResponse(){return this.reCaptchaApi.getResponse(this.captchaId)}getCaptchaId(){return this.captchaId}resetCaptcha(){this.zone.run(()=>{this.reCaptchaApi.reset(),this.onChange(void 0),this.onTouched(void 0),this.reset.next()})}getCurrentResponse(){return this.currentResponse}reloadCaptcha(){this.setupComponent()}ensureCaptchaElem(t){const r=document.getElementById(t);if(!r)throw Error(`Captcha element with id '${t}' was not found`);this.captchaElem=r}renderReCaptcha(){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.captchaId=this.reCaptchaApi.render(this.captchaElemId,this.getCaptchaProperties()),this.ready.next()},0)})}handleCallback(t){this.currentResponse=t,this.success.next(t),this.zone.run(()=>{this.onChange(t),this.onTouched(t)}),this.resetCaptchaAfterSuccess&&this.resetCaptcha()}getPseudoUniqueNumber(){return(new Date).getUTCMilliseconds()+Math.floor(9999*Math.random())}setupComponent(){this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript(this.useGlobalDomain,"explicit",t=>{this.onloadCallback(t)},this.hl)}onloadCallback(t){if(this.reCaptchaApi=t,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())}generateNewElemId(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()}createAndSetCaptchaElem(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");if(!this.captchaWrapperElem)throw Error("Captcha DOM element is not initialized");this.captchaWrapperElem.nativeElement.innerHTML="";const t=this.renderer.createElement("div");t.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,t),setTimeout(()=>{this.captchaElemId&&this.ensureCaptchaElem(this.captchaElemId)},0)}writeValue(t){}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}handleErrorCallback(){this.zone.run(()=>{this.onChange(void 0),this.onTouched(void 0)}),this.error.next()}handleExpireCallback(){this.expire.next(),this.resetCaptcha()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.zs3),e.Y36(v))},i.\u0275dir=e.lG2({type:i,inputs:{siteKey:"siteKey",useGlobalDomain:"useGlobalDomain",type:"type",hl:"hl",tabIndex:"tabIndex"},outputs:{success:"success",load:"load",reset:"reset",ready:"ready",error:"error",expire:"expire"},features:[e.TTD]}),i})();var w=(()=>{return(i=w||(w={}))[i.InvisibleReCaptcha=0]="InvisibleReCaptcha",i[i.ReCaptcha2=1]="ReCaptcha2",w;var i})();let S=(()=>{class i extends F{constructor(t,r,o,n){super(t,r,o,n),this.renderer=t,this.zone=r,this.injector=o,this.scriptService=n,this.windowOnErrorCallbackProperty="ngx_captcha_error_callback",this.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",this.theme="light",this.size="normal",this.recaptchaType=w.ReCaptcha2}ngOnChanges(t){super.ngOnChanges(t)}ngOnDestroy(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}}captchaSpecificSetup(){this.registerCallbacks()}getCaptchaProperties(){return{sitekey:this.siteKey,callback:t=>this.zone.run(()=>this.handleCallback(t)),"expired-callback":()=>this.zone.run(()=>this.handleExpireCallback()),"error-callback":()=>this.zone.run(()=>this.handleErrorCallback()),theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}}registerCallbacks(){window[this.windowOnErrorCallbackProperty]=super.handleErrorCallback.bind(this),window[this.windowOnExpireCallbackProperty]=super.handleExpireCallback.bind(this)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.zs3),e.Y36(v))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ngx-recaptcha2"]],viewQuery:function(t,r){if(1&t&&e.Gf(N,5),2&t){let o;e.iGM(o=e.CRH())&&(r.captchaWrapperElem=o.first)}},inputs:{theme:"theme",size:"size",hl:"hl"},features:[e._Bn([{provide:s.JU,useExisting:(0,e.Gpc)(()=>i),multi:!0}]),e.qOj,e.TTD],decls:2,vars:0,consts:[["captchaWrapperElem",""]],template:function(t,r){1&t&&e._UZ(0,"div",null,0)},encapsulation:2}),i})(),q=(()=>{class i{constructor(t,r){this.scriptService=t,this.zone=r}execute(t,r,o,n,a){this.executeAsPromise(t,r,n).then(o).catch(u=>a?a(u):console.error(u))}executeAsPromise(t,r,o){return new Promise((n,a)=>{this.scriptService.registerCaptchaScript(!(!o||!o.useGlobalDomain),t,d=>{this.zone.runOutsideAngular(()=>{try{d.execute(t,{action:r}).then(y=>this.zone.run(()=>n(y)))}catch(y){a(y)}})})})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(v),e.LFG(e.R0b))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[v,q],imports:[[C.ez]]}),i})();var R=c(7666),g=c(3546),G=c(1978);let U=(()=>{class i{constructor(t,r,o,n){this.socialAuthService=t,this.microsoftService=r,this.appStore=o,this.authService=n,this.registerWebDonuser=(a,u)=>{let p;p="GOOGLE"===u?{UserName:a.name,Email:a.email,CompanyName:"",Provider:"GOOGLE",UniqueID:a.id,AuthToken:a.authToken}:{UserName:a.account.username||a.account.name,Email:a.account.username,CompanyName:"",Provider:"MICROSOFT",UniqueID:a.account.tenantId,AuthToken:a.accessToken},this.appStore.dispatch(new R.cc({user:p}))},this.socialAuthService.authState.subscribe(a=>{this.user=a,a&&null!=a&&this.registerWebDonuser(a,"GOOGLE")}),this.socialAuthService.signOut().then(a=>{console.log("Logout google successfully")}),this.authService.isLoggedIn$.subscribe(a=>{a&&this.socialAuthService.signOut()})}ngOnInit(){}loginWithMicroSoft(){this.microsoftService.loginPopup().subscribe(t=>{this.microsoftService.instance.setActiveAccount(t.account),this.registerWebDonuser(t,"MICROSOFT")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.xE),e.Y36(G.W2),e.Y36(m.yh),e.Y36(f.e))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-social-auth"]],decls:5,vars:0,consts:[[1,"social"],[1,"mic_btn",3,"click"],["src","assets/images/icons/microsoft.png","width","16","alt","Image Description",1,"me-2"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"asl-google-signin-button"),e.TgZ(2,"a",1),e.NdJ("click",function(){return r.loginWithMicroSoft()}),e.TgZ(3,"span"),e._UZ(4,"img",2),e.qZA()()())},dependencies:[g.TI],styles:[".social[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.mic_btn[_ngcontent-%COMP%]{cursor:pointer;border:1px solid #dadce0;height:32px;width:32px;padding:4px 7px;border-radius:4px;margin-left:5px}.mic_btn[_ngcontent-%COMP%]:hover{border-color:#d2e3fc;background:rgba(66,133,244,.04)}"]}),i})(),z=(()=>{class i{constructor(t,r,o,n,a,u){this.router=t,this.route=r,this.fb=o,this.appStore=n,this.authService=a,this.notification=u,this.show=!0,this.cShow=!0,this.captchaSiteKey=b.N.captchaKey,this.aFormGroup=this.fb.group({recaptcha:["",s.kI.required]}),this.isCaptchaValidate=!1,this.isNoRobotClick=!1}onSignIn(){this.router.navigate(["auth/sign-in"],{relativeTo:this.route.parent})}ngOnInit(){this.signUpForm=this.fb.group({firstName:["",s.kI.required],lastName:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],companyName:["",s.kI.required],password:["",[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],cPassword:["",[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],Provider:[]},{validator:A("password","cPassword")})}onSignUp(){this.signUpForm.patchValue({Provider:"SIGNUP"}),this.signUpForm.valid&&this.aFormGroup.valid&&this.isNoRobotClick&&this.isCaptchaValidate&&this.appStore.dispatch(new k.er({form:this.signUpForm.value}))}validatorRepassword(t){return t.value.password===t.value.cPassword?null:{errorRepeatPassword:!0}}handleSuccess(t){t&&null!==t&&this.authService.captchValidate(t).subscribe(r=>{r&&200===r.status?(this.isNoRobotClick=!0,this.isCaptchaValidate=!0):(this.isNoRobotClick=!1,this.isCaptchaValidate=!1,this.notification.error("Not Valid captcha."))},r=>{this.isNoRobotClick=!1,this.isCaptchaValidate=!1,this.notification.error("Not Valid captcha.")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(s.qu),e.Y36(m.yh),e.Y36(f.e),e.Y36(_.g))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sign-up"]],decls:75,vars:11,consts:[[1,"bg-login"],[1,"wrapper"],[1,"section-authentication-signin","d-flex","align-items-center","justify-content-center","my-5","my-lg-0"],[1,"container-fluid"],[1,"row","row-cols-1","row-cols-lg-2","row-cols-xl-2"],[1,"col","mx-auto"],[1,"my-4","text-center"],["src","assets/images/icons/flex-bi-logo.png","width","180","alt",""],[1,"card"],[1,"card-body"],[1,"border","p-4","rounded"],[1,"text-center"],[1,""],["href","JavaScript:;",3,"click"],[1,"form-body"],[1,"row","g-3",3,"formGroup"],[1,"col-sm-6"],[1,"form-label"],["type","email","formControlName","firstName",1,"form-control"],[1,"invalid"],["type","email","formControlName","lastName",1,"form-control"],[1,"col-12"],["type","text","formControlName","companyName",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["id","show_hide_password",1,"input-group"],["type","password","formControlName","password",1,"form-control","border-end-0",3,"type"],["href","javascript:;",1,"input-group-text","bg-transparent",3,"click"],[1,"bx","bx-hide"],["id","show_hide_cPassword",1,"input-group"],["type","password","formControlName","cPassword",1,"form-control","border-end-0",3,"type"],[3,"formGroup"],["formControlName","recaptcha",3,"siteKey","success"],[1,"d-grid"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"bx","bx-user"],[1,"login-separater","text-center","mb-4"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"h3",12),e._uU(13,"Sign Up"),e.qZA(),e.TgZ(14,"p"),e._uU(15," Already have an account? "),e.TgZ(16,"a",13),e.NdJ("click",function(){return r.onSignIn()}),e._uU(17,"Sign In"),e.qZA()()(),e.TgZ(18,"div",14)(19,"form",15)(20,"div",16)(21,"label",17),e._uU(22,"First Name"),e.qZA(),e._UZ(23,"input",18),e.TgZ(24,"div",19),e._uU(25),e.qZA()(),e.TgZ(26,"div",16)(27,"label",17),e._uU(28,"Last Name"),e.qZA(),e._UZ(29,"input",20),e.TgZ(30,"div",19),e._uU(31),e.qZA()(),e.TgZ(32,"div",21)(33,"label",17),e._uU(34,"Company Name"),e.qZA(),e._UZ(35,"input",22),e.TgZ(36,"div",19),e._uU(37),e.qZA()(),e.TgZ(38,"div",21)(39,"label",17),e._uU(40,"Email Address"),e.qZA(),e._UZ(41,"input",23),e.TgZ(42,"div",19),e._uU(43),e.qZA()(),e.TgZ(44,"div",21)(45,"label",17),e._uU(46,"Password"),e.qZA(),e.TgZ(47,"div",24),e._UZ(48,"input",25),e.TgZ(49,"a",26),e.NdJ("click",function(n){return n.preventDefault(),r.show=!r.show}),e._UZ(50,"i",27),e.qZA()(),e.TgZ(51,"div",19),e._uU(52),e.qZA()(),e.TgZ(53,"div",21)(54,"label",17),e._uU(55,"Confirm Password"),e.qZA(),e.TgZ(56,"div",28),e._UZ(57,"input",29),e.TgZ(58,"a",26),e.NdJ("click",function(n){return n.preventDefault(),r.cShow=!r.cShow}),e._UZ(59,"i",27),e.qZA()(),e.TgZ(60,"div",19),e._uU(61),e.qZA()(),e.TgZ(62,"div",21)(63,"form",30)(64,"ngx-recaptcha2",31),e.NdJ("success",function(n){return r.handleSuccess(n)}),e.qZA()()(),e.TgZ(65,"div",21)(66,"div",32)(67,"button",33),e.NdJ("click",function(){return r.onSignUp()}),e._UZ(68,"i",34),e._uU(69,"Register "),e.qZA()()()()(),e.TgZ(70,"div",35)(71,"span"),e._uU(72,"OR SIGN UP WITH EMAIL"),e.qZA(),e._UZ(73,"hr"),e.qZA(),e._UZ(74,"app-social-auth"),e.qZA()()()()()()()()()),2&t){let o,n,a,u,p,d;e.xp6(19),e.Q6J("formGroup",r.signUpForm),e.xp6(6),e.hij(" ",null!=(o=r.signUpForm.get("firstName"))&&o.touched?null!=(o=r.signUpForm.get("firstName"))&&null!=o.errors&&o.errors.required?"First Name Required":null!=(o=r.signUpForm.get("firstName"))&&null!=o.errors&&o.errors.pattern?"Invalid First Name":"":""," "),e.xp6(6),e.hij(" ",null!=(n=r.signUpForm.get("lastName"))&&n.touched?null!=(n=r.signUpForm.get("lastName"))&&null!=n.errors&&n.errors.required?"Last Name required.":null!=(n=r.signUpForm.get("lastName"))&&null!=n.errors&&n.errors.pattern?"Last Name Required":"":""," "),e.xp6(6),e.hij(" ",null!=(a=r.signUpForm.get("companyName"))&&a.touched?null!=(a=r.signUpForm.get("companyName"))&&null!=a.errors&&a.errors.required?"Company Name required.":null!=(a=r.signUpForm.get("companyName"))&&null!=a.errors&&a.errors.pattern?"Invalid Company Name":"":""," "),e.xp6(6),e.hij(" ",null!=(u=r.signUpForm.get("email"))&&u.touched?null!=(u=r.signUpForm.get("email"))&&null!=u.errors&&u.errors.required?"Email is required.":null!=(u=r.signUpForm.get("email"))&&u.invalid?"Invalid Email.":"":""," "),e.xp6(5),e.Q6J("type",r.show?"password":"text"),e.xp6(4),e.hij(" ",null!=(p=r.signUpForm.get("password"))&&p.touched?null!=(p=r.signUpForm.get("password"))&&null!=p.errors&&p.errors.required?"Password is required.":null!=(p=r.signUpForm.get("password"))&&null!=p.errors&&p.errors.pattern?"Password must be minimum of 8 characters should contain lowercase letter, capital letter and numbers.":"":""," "),e.xp6(5),e.Q6J("type",r.cShow?"password":"text"),e.xp6(4),e.hij(" ",null!=(d=r.signUpForm.get("cPassword"))&&d.touched?null!=(d=r.signUpForm.get("cPassword"))&&null!=d.errors&&d.errors.required?"Confirm Password is required.":null!=(d=r.signUpForm.get("cPassword"))&&null!=d.errors&&d.errors.pattern?"Confirm Password must be minimum of 8 characters should contain lowercase letter, capital letter and numbers.":null!=(d=r.signUpForm.get("cPassword"))&&null!=d.errors&&d.errors.errorRepeatPassword?"Password & Confirm password not match.":"":""," "),e.xp6(2),e.Q6J("formGroup",r.aFormGroup),e.xp6(1),e.Q6J("siteKey",r.captchaSiteKey)}},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S,U],styles:[".invalid[_ngcontent-%COMP%]{color:red;font-size:12px}"]}),i})();function A(i,l){return t=>{const o=t.controls[l];o.errors&&!o.errors.errorRepeatPassword||o.setErrors(t.controls[i].value!==o.value?{errorRepeatPassword:!0}:null)}}function O(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"form",15)(2,"div",16)(3,"label",17),e._uU(4,"Email Address"),e.qZA(),e._UZ(5,"input",18),e.TgZ(6,"div",19),e._uU(7),e.qZA()(),e.TgZ(8,"div",16)(9,"div",20)(10,"button",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.requestForgetPassword())}),e._uU(11," Send "),e.qZA()()(),e.TgZ(12,"div",16)(13,"div",20)(14,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onSignIn())}),e._uU(15," Sign In "),e.qZA()()()()()}if(2&i){const t=e.oxw();let r;e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(6),e.hij(" ",null!=(r=t.form.get("UserName"))&&r.touched?null!=(r=t.form.get("UserName"))&&null!=r.errors&&r.errors.required?"Email is required.":null!=(r=t.form.get("UserName"))&&r.invalid?"Invalid Email.":"":""," ")}}function J(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"form",15)(2,"div",16)(3,"label",23),e._uU(4,"New Password"),e.qZA(),e.TgZ(5,"div",24),e._UZ(6,"input",25),e.TgZ(7,"a",26),e.NdJ("click",function(o){e.CHM(t);const n=e.oxw();return o.preventDefault(),e.KtG(n.show=!n.show)}),e._UZ(8,"i",27),e.qZA()(),e.TgZ(9,"div",19),e._uU(10),e.qZA()(),e.TgZ(11,"div",16)(12,"label",17),e._uU(13,"Confirm Password"),e.qZA(),e.TgZ(14,"div",28),e._UZ(15,"input",29),e.TgZ(16,"a",30),e.NdJ("click",function(o){e.CHM(t);const n=e.oxw();return o.preventDefault(),e.KtG(n.cShow=!n.cShow)}),e._UZ(17,"i",27),e.qZA()(),e.TgZ(18,"div",19),e._uU(19),e.qZA()(),e.TgZ(20,"div",16)(21,"div",20)(22,"button",21),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onForgetPassword())}),e._uU(23," Submit "),e.qZA()()(),e.TgZ(24,"div",16)(25,"div",20)(26,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.onSignIn())}),e._uU(27," Sign In "),e.qZA()()()()()}if(2&i){const t=e.oxw();let r,o;e.xp6(1),e.Q6J("formGroup",t.resetForm),e.xp6(5),e.Q6J("type",t.show?"password":"text"),e.xp6(4),e.hij(" ",null!=(r=t.resetForm.get("password"))&&r.touched?null!=(r=t.resetForm.get("password"))&&null!=r.errors&&r.errors.required?"Password is required.":null!=(r=t.resetForm.get("password"))&&null!=r.errors&&r.errors.pattern?"Password must be minimum of 8 characters should contain lowercase letter, capital letter and numbers.":"":""," "),e.xp6(5),e.Q6J("type",t.cShow?"password":"text"),e.xp6(4),e.hij(" ",null!=(o=t.resetForm.get("cPassword"))&&o.touched?null!=(o=t.resetForm.get("cPassword"))&&null!=o.errors&&o.errors.required?"Confirm Password is required.":null!=(o=t.resetForm.get("cPassword"))&&null!=o.errors&&o.errors.pattern?"Confirm Password must be minimum of 8 characters should contain lowercase letter, capital letter and numbers.":null!=(o=t.resetForm.get("cPassword"))&&null!=o.errors&&o.errors.errorRepeatPassword?"Password & Confirm password not match.":"":""," ")}}let L=(()=>{class i{constructor(t,r,o,n,a,u){this.router=t,this.route=r,this.fb=o,this.authService=n,this.appStore=a,this.notification=u,this.step=0,this.show=!0,this.cShow=!0,this.uniqueId=this.route.snapshot.queryParams.passCode||"",this.uniqueId&&(this.step=1,this.authService.resetLinkValid({UniqueID:this.uniqueId}).subscribe(p=>{500==p.status?this.notification.error("Invalid user, please contact administratior"):400==p.status?this.notification.error("Your link is expired, please regenarate again..."):sessionStorage.setItem("authToken","Bearer "+p.token)},p=>{this.notification.error("Invalid user, please contact administratior")}))}onSignIn(){this.router.navigate(["auth/sign-in"],{relativeTo:this.route.parent})}requestForgetPassword(){this.form.invalid||this.authService.requestPasswordChange(this.form.value.emailId).subscribe(t=>{500==t.status?this.notification.error("Failed to send the reset password link...Please try again"):404==t.status?this.notification.error("Email address incorrect. Please check your email address or contact us at support@flexbi.com.au"):409==t.status?this.notification.error(t.message):this.notification.success("We have sent you reset password link to your "+this.form.value.emailId+" id, please check your email.")})}onForgetPassword(){this.resetForm.patchValue({passCode:this.uniqueId}),!this.resetForm.invalid&&this.authService.passwordChange(this.resetForm.value).subscribe(t=>{500==t.status?this.notification.error("Failed to change the password...try again"):404==t.status?this.notification.error("Failed to change the password...try again. Please check your email address or contact us at support@flexbi.com.au"):409==t.status?this.notification.error(t.message):(this.notification.success("Your password updated successfully. Please login to system by using your credentials"),this.step=0,this.router.navigateByUrl("auth/sign-in"))})}ngOnInit(){this.form=this.fb.group({emailId:["",[s.kI.required,s.kI.email]]}),this.resetForm=this.fb.group({password:["",[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],cPassword:["",[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],passCode:["",s.kI.required]},{validator:A("password","cPassword")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(s.qu),e.Y36(f.e),e.Y36(m.yh),e.Y36(_.g))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-forgot-password"]],decls:16,vars:2,consts:[[1,"bg-login"],[1,"wrapper"],[1,"section-authentication-signin","d-flex","align-items-center","justify-content-center","my-5","my-lg-0"],[1,"container-fluid"],[1,"row","row-cols-1","row-cols-lg-2","row-cols-xl-3"],[1,"col","mx-auto"],[1,"mb-4","text-center"],["src","assets/images/icons/flex-bi-logo.png","width","180","alt",""],[1,"card"],[1,"card-body"],[1,"border","p-4","rounded"],[1,"text-center"],["src","assets/images/icons/forget.png","width","120","alt",""],[1,"form-body"],[4,"ngIf"],[1,"row","g-3",3,"formGroup"],[1,"col-12"],[1,"form-label"],["type","email","formControlName","emailId",1,"form-control"],[1,"invalid"],[1,"d-grid"],["type","submit",1,"btn","btn-primary",3,"click"],["type","submit",1,"btn","btn-white","shadow-sm",3,"click"],["for","inputChoosePassword",1,"form-label"],["id","show_hide_password",1,"input-group"],["formControlName","password",1,"form-control","border-end-0",3,"type"],[1,"input-group-text","bg-transparent",3,"click"],[1,"bx","bx-hide"],["id","show_hide_cPassword",1,"input-group"],["type","password","formControlName","cPassword",1,"form-control","border-end-0",3,"type"],["href","javascript:;",1,"input-group-text","bg-transparent",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11),e._UZ(12,"img",12),e.qZA(),e.TgZ(13,"div",13),e.YNc(14,O,16,2,"div",14),e.YNc(15,J,28,5,"div",14),e.qZA()()()()()()()()()()),2&t&&(e.xp6(14),e.Q6J("ngIf",0===r.step),e.xp6(1),e.Q6J("ngIf",1===r.step))},dependencies:[C.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:[".invalid[_ngcontent-%COMP%]{color:red;font-size:12px}"]}),i})(),M=(()=>{class i{constructor(t,r,o){this.router=t,this.route=r,this.fb=o}onLogin(){this.router.navigate(["auth/sign-in"],{relativeTo:this.route.parent})}ngOnInit(){this.form=this.fb.group({password:["",s.kI.required],cPassword:["",s.kI.required]})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(s.QS))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reset-password"]],decls:31,vars:1,consts:[[1,"wrapper"],[1,"authentication-reset-password","d-flex","align-items-center","justify-content-center"],[1,"row"],[1,"col-12","col-lg-10","mx-auto"],[1,"card"],[1,"row","g-0"],[1,"col-lg-5","border-end"],[1,"card-body"],[1,"p-5",3,"formGroup"],[1,"text-start"],["src","assets/images/icons/flex-bi-logo.png","width","180","alt",""],[1,"mt-5","font-weight-bold"],[1,"text-muted"],[1,"mb-3","mt-5"],[1,"form-label"],["type","password","formControlName","password",1,"form-control"],[1,"mb-3"],["type","password","formControlName","cPassword",1,"form-control"],[1,"d-grid","gap-2"],["type","button",1,"btn","btn-primary"],["href","javascript:;",1,"btn","btn-white","shadow-sm",3,"click"],[1,"bx","bx-arrow-back","mr-1"],[1,"col-lg-7"],["src","assets/images/login-images/forgot-password-frent-img.jpg","alt","...",1,"card-img","login-img","h-100"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"form",8)(9,"div",9),e._UZ(10,"img",10),e.qZA(),e.TgZ(11,"h4",11),e._uU(12,"Genrate New Password"),e.qZA(),e.TgZ(13,"p",12),e._uU(14," We received your reset password request. Please enter your new password! "),e.qZA(),e.TgZ(15,"div",13)(16,"label",14),e._uU(17,"New Password"),e.qZA(),e._UZ(18,"input",15),e.qZA(),e.TgZ(19,"div",16)(20,"label",14),e._uU(21,"Confirm Password"),e.qZA(),e._UZ(22,"input",17),e.qZA(),e.TgZ(23,"div",18)(24,"button",19),e._uU(25," Change Password "),e.qZA(),e.TgZ(26,"a",20),e.NdJ("click",function(){return r.onLogin()}),e._UZ(27,"i",21),e._uU(28,"Back to Login"),e.qZA()()()()(),e.TgZ(29,"div",22),e._UZ(30,"img",23),e.qZA()()()()()()()),2&t&&(e.xp6(8),e.Q6J("formGroup",r.form))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u]}),i})();var D=c(5577),Y=c(9646),j=c(262),V=c(2843);const W=[{path:"",canActivate:[x],children:[{path:"sign-in",component:(()=>{class i{constructor(t,r,o,n,a,u){this.router=t,this.route=r,this.fb=o,this.authService=n,this.socialAuthService=a,this.notification=u,this.show=!0,this.captchaSiteKey=b.N.captchaKey,this.isCaptchaValidate=!1,this.isNoRobotClick=!1,this.aFormGroup=this.fb.group({recaptcha:["",s.kI.required]})}onForgotpassword(){this.router.navigate(["forgot-password"],{relativeTo:this.route.parent})}onSignup(){this.router.navigate(["sign-up"],{relativeTo:this.route.parent})}onLogin(){this.form.valid&&this.aFormGroup.valid&&this.isNoRobotClick&&this.isCaptchaValidate?this.onLoginHandler().subscribe(t=>{},({})=>{this.isLoggingIn=!1}):this.isCaptchaValidate||this.notification.error("Not Valid captcha.")}onLoginHandler(){return this.authService.clientLogin(this.form.value).pipe((0,D.z)(t=>(0,Y.of)(t)),(0,j.K)(t=>(403===t.status?this.notification.error("Sorry! Cannot Login."):401===t.status?this.notification.error(t.error[0]):404===t.status&&this.notification.error(t.message),(0,V._)(t))))}ngOnInit(){this.form=this.fb.group({UserName:["",[s.kI.required,s.kI.email]],PassWord:["",[s.kI.required,s.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]],gcmTonken:[b.N.gcmToken]})}handleSuccess(t){t&&null!==t&&this.authService.captchValidate(t).subscribe(r=>{r&&200===r.status?(this.isNoRobotClick=!0,this.isCaptchaValidate=!0):(this.isNoRobotClick=!1,this.isCaptchaValidate=!1,this.notification.error("Not Valid captcha."))},r=>{this.isNoRobotClick=!1,this.isCaptchaValidate=!1,this.notification.error("Not Valid captcha.")})}loginWithGoogle(){this.socialAuthService.signIn(g.tV.PROVIDER_ID)}ngOnDestroy(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(s.qu),e.Y36(f.e),e.Y36(g.xE),e.Y36(_.g))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sign-in"]],decls:51,vars:8,consts:[[1,"bg-login"],[1,"wrapper"],[1,"section-authentication-signin","d-flex","align-items-center","justify-content-center","my-5","my-lg-0"],[1,"container-fluid"],[1,"row","row-cols-1","row-cols-lg-2","row-cols-xl-3"],[1,"col","mx-auto"],[1,"mb-4","text-center"],["src","assets/images/icons/flex-bi-logo.png","width","180","alt",""],[1,"card"],[1,"card-body"],[1,"border","p-4","rounded"],[1,"text-center"],[1,"",3,"title"],["href","JavaScript:;",3,"click"],[1,"form-body"],[1,"row","g-3",3,"formGroup"],[1,"col-12"],["for","inputEmailAddress",1,"form-label"],["type","email","formControlName","UserName",1,"form-control"],[1,"invalid"],["for","inputChoosePassword",1,"form-label"],["id","show_hide_password",1,"input-group"],["formControlName","PassWord",1,"form-control","border-end-0",3,"type"],[1,"input-group-text","bg-transparent",3,"click"],[1,"bx","bx-hide"],[1,"col-md-12","text-end","float-right"],[3,"formGroup"],["formControlName","recaptcha",3,"siteKey","success"],[1,"d-grid"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"bx","bxs-lock-open"],[1,"login-separater","text-center","mb-4"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"h3",12),e._uU(13,"Sign In"),e.qZA(),e.TgZ(14,"p"),e._uU(15," Don't have an account ? "),e.TgZ(16,"a",13),e.NdJ("click",function(){return r.onSignup()}),e._uU(17,"Sign up"),e.qZA()()(),e.TgZ(18,"div",14)(19,"form",15)(20,"div",16)(21,"label",17),e._uU(22,"Email Address"),e.qZA(),e._UZ(23,"input",18),e.TgZ(24,"div",19),e._uU(25),e.qZA()(),e.TgZ(26,"div",16)(27,"label",20),e._uU(28,"Enter Password"),e.qZA(),e.TgZ(29,"div",21),e._UZ(30,"input",22),e.TgZ(31,"a",23),e.NdJ("click",function(n){return n.preventDefault(),r.show=!r.show}),e._UZ(32,"i",24),e.qZA()(),e.TgZ(33,"div",19),e._uU(34),e.qZA()(),e.TgZ(35,"div",25)(36,"a",13),e.NdJ("click",function(){return r.onForgotpassword()}),e._uU(37,"Forgot Password ?"),e.qZA()(),e.TgZ(38,"div",16)(39,"form",26)(40,"ngx-recaptcha2",27),e.NdJ("success",function(n){return r.handleSuccess(n)}),e.qZA()()(),e.TgZ(41,"div",16)(42,"div",28)(43,"button",29),e.NdJ("click",function(){return r.onLogin()}),e._UZ(44,"i",30),e._uU(45,"Sign in "),e.qZA()()()()(),e.TgZ(46,"div",31)(47,"span"),e._uU(48,"OR SIGN IN WITH EMAIL"),e.qZA(),e._UZ(49,"hr"),e.qZA(),e._UZ(50,"app-social-auth"),e.qZA()()()()()()()()()),2&t){let o,n;e.xp6(12),e.Q6J("title",r.loginType),e.xp6(7),e.Q6J("formGroup",r.form),e.xp6(6),e.hij(" ",null!=(o=r.form.get("UserName"))&&o.touched?null!=(o=r.form.get("UserName"))&&null!=o.errors&&o.errors.required?"Email is required.":null!=(o=r.form.get("UserName"))&&o.invalid?"Invalid Email.":"":""," "),e.xp6(5),e.Q6J("type",r.show?"password":"text"),e.xp6(4),e.AsE(" ",null!=(n=r.form.get("PassWord"))&&n.touched?null!=(n=r.form.get("PassWord"))&&null!=n.errors&&n.errors.required?"Password is required.":null!=(n=r.form.get("PassWord"))&&null!=n.errors&&n.errors.pattern?"Invalid Password.":"":""," ",null!=(n=r.form.get("PassWord"))&&n.touched?null!=(n=r.form.get("PassWord"))&&null!=n.errors&&n.errors.required?"Password is required.":null!=(n=r.form.get("PassWord"))&&null!=n.errors&&n.errors.pattern?"Password must be minimum of 8 characters should contain lowercase letter, capital letter and numbers.":"":""," "),e.xp6(5),e.Q6J("formGroup",r.aFormGroup),e.xp6(1),e.Q6J("siteKey",r.captchaSiteKey)}},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,S,U],styles:[".invalid[_ngcontent-%COMP%]{color:red;font-size:12px}"]}),i})(),data:{title:"Sign In",value:"user"}},{path:"sign-up",component:z,data:{title:"Sign Up"}},{path:"forgot-password",component:L,data:{title:"Forgot Password"}},{path:"reset-password",component:M,data:{title:"Reset Password"}}]}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(W),h.Bz]}),i})();var $=c(4466);let K=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[C.ez,Q,s.UX,E,$.m,g.RB]}),i})()}}]);