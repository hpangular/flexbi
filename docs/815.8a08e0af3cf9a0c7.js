"use strict";(self.webpackChunkxero_frontend=self.webpackChunkxero_frontend||[]).push([[815],{2815:(A,u,s)=>{s.r(u),s.d(u,{SubscriptionsModule:()=>U});var l=s(6895),d=s(87),p=s(2023),t=s(4650),g=s(1135),c=s(2340),a=s(3651),v=s(529),h=s(9653);let m=(()=>{class e{constructor(i,n){this.http=i,this.store=n,this.socialLogin=new g.X(!1)}registerUserByThirdParty(i){return this.http.post(`${c.N.serviceUrl}${a.u.CLIENT_PROFILE}`,i,{params:{skipAuthorization:"true"}})}getSubscriptions(){return this.http.get(`${c.N.serviceUrl}${a.u.SUBSCRIPTION_LIST}`)}activateFreeTrail(i){return this.http.get(`${c.N.serviceUrl}${a.u.SUBSCRIPTION_ACTIVE_FREE} ${i}`)}}return e.\u0275fac=function(i){return new(i||e)(t.LFG(v.eN),t.LFG(h.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=s(7556);function f(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"h5",8),t._uU(4),t.qZA(),t.TgZ(5,"h6",9),t._uU(6),t._UZ(7,"span",10),t.qZA()(),t.TgZ(8,"div",11)(9,"ul",12)(10,"li",13),t._UZ(11,"i",14),t._uU(12),t.qZA(),t.TgZ(13,"li",13),t._uU(14,"\xa0"),t.qZA(),t.TgZ(15,"li",13),t._uU(16,"\xa0"),t.qZA()(),t.TgZ(17,"div",15)(18,"a",16),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.activateFreeTrail())}),t._uU(19,"Activate"),t.qZA()()()()()}if(2&e){const i=r.$implicit;t.xp6(4),t.hij(" ",i.PlanName," "),t.xp6(2),t.hij(" $ ",i.Amount," "),t.xp6(6),t.hij("Free Trial for ",i.Days," Days ")}}function S(e,r){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"h5",8),t._uU(4),t.qZA(),t.TgZ(5,"h6",9),t._uU(6),t._UZ(7,"span",10),t.qZA()(),t.TgZ(8,"div",11)(9,"ul",12)(10,"li",13),t._UZ(11,"i",14),t._uU(12),t.qZA(),t.TgZ(13,"li",13),t._UZ(14,"i",14),t._uU(15," Xero Data Integration "),t.qZA(),t.TgZ(16,"li",13),t._UZ(17,"i",14),t._uU(18,"Power BI Reports "),t.qZA()(),t.TgZ(19,"div",15)(20,"a",16),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.activateFreeTrail())}),t._uU(21,"Activate"),t.qZA()()()()()}if(2&e){const i=r.$implicit;t.xp6(4),t.hij(" ",i.PlanName," "),t.xp6(2),t.hij(" $ ",i.Amount," "),t.xp6(6),t.hij("Free Trial for ",i.Days," Days ")}}const T=[{path:"",component:(()=>{class e{constructor(i,n){this.subscriptionService=i,this.authService=n}ngOnInit(){this.getSubscriptionsPlans()}getSubscriptionsPlans(){this.subscriptionService.getSubscriptions().subscribe(i=>{this.subscriptionPlans=i.filter(n=>n.IsActive),this.dumysubPlanList=i})}activateFreeTrail(){const i=this.authService.getLoggedInUserDetails().UserId,n=this.authService.getLoggedInUserDetails().CompanyName;n&&n.length>0&&this.activateFreeTrialPlanMethod(i)}activateFreeTrialPlanMethod(i){this.subscriptionService.activateFreeTrail(i).subscribe(n=>{n&&200===n.status&&(sessionStorage.setItem("subDetails",JSON.stringify(n.planData)),setTimeout(()=>{window.location.reload()},500))})}getPlan(i){const n=[];return this.dumysubPlanList.map("TRIAL"===i?o=>{1===o.id&&n.push(o)}:o=>{1!==o.id&&o.IsActive&&n.push(o)}),n}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(m),t.Y36(b.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-subscriptions"]],decls:7,vars:2,consts:[[1,"page-breadcrumb","d-none","d-sm-flex","align-items-center","mb-3"],[1,"breadcrumb-title","pe-3"],[1,"pricing-table"],[1,"row","row-cols-1","row-cols-lg-3"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card","mb-5","mb-lg-0"],[1,"card-header","bg-flexbi","py-3"],[1,"card-title","text-white","text-uppercase","text-center"],[1,"card-price","text-white","text-center"],[1,"term"],[1,"card-body"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"bx","bx-check","me-2","font-18"],[1,"d-grid"],[1,"btn","btn-flexbi","my-2","radius-30",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"Subscription Plans"),t.qZA()(),t.TgZ(3,"div",2)(4,"div",3),t.YNc(5,f,20,3,"div",4),t.YNc(6,S,22,3,"div",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("ngForOf",n.getPlan("TRIAL")),t.xp6(1),t.Q6J("ngForOf",n.getPlan("PREMIUM")))},dependencies:[l.sg],styles:[".bg-flexbi[_ngcontent-%COMP%]{background-color:#21cead!important}.btn-flexbi[_ngcontent-%COMP%]{color:#fff;background-color:#21cead;border-color:#21cead}.card[_ngcontent-%COMP%]{height:100%}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(T),p.Bz]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,Z,d.IJ]}),e})()}}]);