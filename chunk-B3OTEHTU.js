import{Bb as C,Cb as y,Db as F,Eb as S,Ha as v,Jb as E,K as u,L as g,Ma as p,Ta as l,Va as a,Wa as o,Ya as s,Za as c,ab as x,bb as r,cb as m,i as f,ya as i,za as _}from"./chunk-ST6CVAJQ.js";function I(t,n){if(t&1&&(s(0),a(1,"span",10),r(2),o(),c()),t&2){let e=x().$implicit;i(2),m(" (",e.info,") ")}}function O(t,n){if(t&1&&(s(0),p(1,I,3,1,"ng-container",11),c()),t&2){let e=n.$implicit;i(),l("ngIf",e.category==="Volatility")}}function w(t,n){if(t&1&&(s(0),a(1,"div",9)(2,"span",10),r(3),o(),p(4,O,2,1,"ng-container",2),o(),c()),t&2){let e=n.$implicit;i(3),m(" ",e.ingredient," "),i(),l("ngForOf",e.details)}}function h(t,n){if(t&1&&(s(0),a(1,"div",10),r(2),o(),c()),t&2){let e=n.$implicit;i(2),m(" ",e.filiation," ")}}function j(t,n){if(t&1&&(s(0),a(1,"div",3)(2,"div",4)(3,"div",5),r(4),o(),a(5,"div",6),r(6),o(),a(7,"div",7),r(8),o(),a(9,"div",8),r(10," Name Material : "),o(),p(11,w,5,2,"ng-container",2),a(12,"div",8),r(13," Filiation : "),o(),p(14,h,3,1,"ng-container",2),o()(),c()),t&2){let e=n.$implicit;i(4),m(" ",e.name," "),i(2),m(" ",e.type," "),i(2),m(" ",e.type," "),i(3),l("ngForOf",e.detail),i(3),l("ngForOf",e.detail)}}var b=class t{constructor(n){this.formulaService=n}destroy=new f;ganjil;normalView;formulas;ngOnDestroy(){this.destroy.next(),this.destroy.complete()}ngOnInit(){this.formulaService.get.pipe(g(n=>{console.log(n),this.formulas=n}),u(this.destroy)).subscribe()}static \u0275fac=function(e){return new(e||t)(_(E))};static \u0275cmp=v({type:t,selectors:[["app-formula"]],decls:3,vars:2,consts:[[1,"my-20"],[1,"columns-1","gap-4","space-y-4",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"bg-emerald-100","divide-emerald-200","w-full","rounded-xl","shadow","flex","flex-col","divide-y","justify-between","items-start","gap-2","break-inside-avoid"],[1,"flex","flex-col","items-start","w-full","p-4","overflow-auto"],[1,"text-2xl","font-semibold"],[1,"text-base"],[1,"text-xs","pt-1"],[1,"text-sm","font-semibold","pt-2"],[1,"flex","gap-1","items-center","justify-start"],[1,"text-xs","font-semibold"],[4,"ngIf"]],template:function(e,d){e&1&&(a(0,"div",0)(1,"div",1),p(2,j,15,5,"ng-container",2),o()()),e&2&&(i(),l("ngClass",d.ganjil?"md:columns-4":"md:columns-3"),i(),l("ngForOf",d.formulas))},dependencies:[S,C,y,F],encapsulation:2})};export{b as FormulaComponent};
