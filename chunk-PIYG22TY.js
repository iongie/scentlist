import{d as R,h as D,i as N,j as V,k as W}from"./chunk-ZAELGSWR.js";import{$a as _,Bb as B,Cb as T,Db as M,Eb as O,Ha as w,Jb as j,K as E,L as h,Ma as g,Ta as m,Va as t,Wa as n,Ya as d,Za as c,_a as I,aa as F,ab as u,ba as k,bb as i,c as S,cb as r,db as v,eb as y,fb as b,i as C,ya as a,za as x}from"./chunk-ST6CVAJQ.js";function $(o,l){if(o&1&&(d(0),t(1,"span",15),i(2," Major Components : "),n(),t(3,"span",16),i(4),n(),c()),o&2){let e=u().$implicit;a(4),r(" ",e.info," ")}}function L(o,l){if(o&1&&(d(0),t(1,"span",15),i(2," Other names : "),n(),t(3,"span",16),i(4),n(),c()),o&2){let e=u().$implicit;a(4),r(" ",e.info," ")}}function U(o,l){if(o&1&&(d(0),t(1,"span",15),i(2," Use : "),n(),t(3,"span",16),i(4),n(),c()),o&2){let e=u().$implicit;a(4),r(" ",e.info," ")}}function z(o,l){if(o&1&&(d(0),t(1,"span",15),i(2," Detection Threshold : "),n(),t(3,"span",16),i(4),n(),c()),o&2){let e=u().$implicit;a(4),r(" ",e.info," ")}}function A(o,l){if(o&1&&(d(0),g(1,$,5,1,"ng-container",18)(2,L,5,1,"ng-container",18)(3,U,5,1,"ng-container",18)(4,z,5,1,"ng-container",18),c()),o&2){let e=l.$implicit;a(),m("ngIf",e.category==="Major Components"),a(),m("ngIf",e.category==="Other names"),a(),m("ngIf",e.category==="Uses in perfumery"),a(),m("ngIf",e.category==="Detection Threshold")}}function q(o,l){if(o&1&&(d(0),t(1,"span",16),i(2),n(),c()),o&2){let e=u().$implicit;a(2),r(" ",e.info," ")}}function G(o,l){if(o&1&&(d(0),g(1,q,3,1,"ng-container",18),c()),o&2){let e=l.$implicit;a(),m("ngIf",e.category==="Volatility")}}function H(o,l){if(o&1){let e=I();d(0),t(1,"div",9),_("click",function(){let f=F(e).index,p=u();return k(p.deleteFormula(f))}),t(2,"div",10)(3,"span",11),i(4),n(),t(5,"span",12),i(6),n(),t(7,"span",13),i(8),n(),t(9,"span",14),i(10),n(),t(11,"span",15),i(12," Formula : "),n(),t(13,"span",16),i(14),n(),t(15,"span",15),i(16," Weight : "),n(),t(17,"span",16),i(18),n(),t(19,"span",15),i(20," Boiling Point : "),n(),t(21,"span",16),i(22),n(),t(23,"span",15),i(24," Log P : "),n(),t(25,"span",16),i(26),n(),t(27,"span",15),i(28," Vapor pressure : "),n(),t(29,"span",16),i(30),n(),t(31,"span",15),i(32," Soluble : "),n(),t(33,"span",16),i(34),n(),t(35,"span",15),i(36," Insoluble : "),n(),t(37,"span",16),i(38),n(),t(39,"span",15),i(40," Stability : "),n(),t(41,"span",16),i(42),n(),t(43,"span",15),i(44," Odor strength : "),n(),t(45,"span",16),i(46),n(),g(47,A,5,4,"ng-container",5),n(),t(48,"div",17),g(49,G,2,1,"ng-container",5),n()(),c()}if(o&2){let e=l.$implicit;a(),m("ngClass",e.height=="small"?"bg-emerald-100 divide-emerald-200":"bg-teal-100 divide-teal-200"),a(2),m("ngClass",e.height=="small"?"border-emerald-500":"border-teal-500"),a(),r(" ",e.category," "),a(2),r(" ",e.ingredient," "),a(2),r(" ",e.cas," "),a(2),r(" ",e.filiation," "),a(4),r(" ",e.molecular_formula," "),a(4),r(" ",e.molecular_weight," "),a(4),r(" ",e.boiling_point," "),a(4),r(" ",e.logP," "),a(4),r(" ",e.vapor_pressure," "),a(4),r(" ",e.soluble," "),a(4),r(" ",e.insoluble," "),a(4),r(" ",e.stability," "),a(4),r(" ",e.odor_strength," "),a(),m("ngForOf",e.details),a(2),m("ngForOf",e.details)}}var P=class o{constructor(l,e){this.formulaService=l;this.router=e}destroy=new C;ganjil;normalView;formula;updateTimeout;ngOnDestroy(){this.destroy.next(),this.destroy.complete()}ngOnInit(){this.formulaService.getFormulaBasket.pipe(h(l=>{this.formula=l}),E(this.destroy)).subscribe()}deleteFormula(l){return S(this,null,function*(){yield this.formula.detail.splice(l,1),yield this.formulaService.updateFormula(this.formula)})}saveFormula(){this.formulaService.update(this.formula),this.formulaService.updateFormula({name:"no name",type:"no type",detail:[]}),this.router.navigate(["formula"])}cancelFormula(){this.formulaService.updateFormula({name:"no name",type:"no type",detail:[]})}static \u0275fac=function(e){return new(e||o)(x(j),x(R))};static \u0275cmp=w({type:o,selectors:[["app-basket-formula"]],decls:19,vars:4,consts:[[1,"my-20","p-2"],[1,"mb-6"],["for","large-input",1,"block","mb-2","text-sm","font-medium","text-gray-900"],["type","text","id","large-input",1,"block","w-full","p-4","text-gray-900","border","border-gray-300","rounded-lg","bg-gray-50","text-base","focus:ring-blue-500","focus:border-blue-500","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],[1,"columns-1","gap-4","space-y-4",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"grid","grid-cols-1","md:grid-cols-2"],["type","button",1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2",3,"click"],["type","button",1,"py-2.5","px-5","me-2","mb-2","text-sm","font-medium","text-gray-900","focus:outline-none","bg-white","rounded-lg","border","border-gray-200","hover:bg-gray-100","hover:text-blue-700","focus:z-10","focus:ring-4","focus:ring-gray-100",3,"click"],[1,"w-full","rounded-xl","shadow","flex","flex-col","divide-y","justify-between","items-start","gap-2","break-inside-avoid","active:motion-scale-in-[0.44]","active:motion-blur-in-[10px]","active:motion-delay-[0.75s]/blur",3,"click","ngClass"],[1,"flex","flex-col","items-start","w-full","p-4","overflow-auto"],[1,"text-xs","font-semibold","px-2","py-0.5","border","rounded-full","text-center",3,"ngClass"],[1,"text-2xl","font-semibold"],[1,"text-base"],[1,"text-xs","pt-1"],[1,"text-sm","font-semibold","pt-2"],[1,"text-xs","font-semibold"],[1,"flex","flex-col","items-start","w-full","px-4","py-2"],[4,"ngIf"]],template:function(e,s){e&1&&(t(0,"div",0)(1,"div",1)(2,"label",2),i(3,"Name"),n(),t(4,"input",3),b("ngModelChange",function(p){return y(s.formula.name,p)||(s.formula.name=p),p}),n()(),t(5,"div",1)(6,"label",2),i(7,"Type"),n(),t(8,"input",3),b("ngModelChange",function(p){return y(s.formula.type,p)||(s.formula.type=p),p}),n()(),t(9,"div",1)(10,"label",2),i(11,"Formula"),n(),t(12,"div",4),g(13,H,50,17,"ng-container",5),n()(),t(14,"div",6)(15,"button",7),_("click",function(){return s.saveFormula()}),i(16,"Simpan"),n(),t(17,"button",8),_("click",function(){return s.cancelFormula()}),i(18,"Batal"),n()()()),e&2&&(a(4),v("ngModel",s.formula.name),a(4),v("ngModel",s.formula.type),a(4),m("ngClass",s.ganjil?"md:columns-4":"md:columns-3"),a(),m("ngForOf",s.formula.detail))},dependencies:[O,B,T,M,W,D,N,V],encapsulation:2})};export{P as BasketFormulaComponent};
