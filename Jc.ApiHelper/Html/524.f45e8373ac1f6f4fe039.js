"use strict";(self.webpackChunkjc_api_helper=self.webpackChunkjc_api_helper||[]).push([[524],{3524:(Ye,C,c)=>{c.r(C),c.d(C,{WorkbenchModule:()=>Ve});var g=c(3423),w=c(3093),e=c(7716),h=c(1533),u=c(6704),d=c(8583),T=c(1398),f=c(665),b=c(4881),M=c(6175),x=c(4514),z=c(7674),P=c(464),v=c(3730),q=c(2079),A=c(4453),_=c(6795),S=c(3845);let N=(()=>{class n{transform(t,i,o){if(!t)return[];let a=t;if(i){let s=i.toLowerCase();a=t.filter(l=>{let p=!1;return p=l.areaName&&l.areaName.toLowerCase().indexOf(s)>=0||l.controllerName&&l.controllerName.toLowerCase().indexOf(s)>=0||l.summary&&l.summary.toLowerCase().indexOf(s)>=0||l.actionList.filter(Z=>Z.actionName.toLowerCase().indexOf(s)>=0||Z.summary&&Z.summary.toLowerCase().indexOf(s)>=0).length>0,p})}return a.length>0&&o&&o.length>0&&(a=a.filter(s=>o.filter(l=>l.areaName==s.areaName).length>0)),a}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"controllerFilter",type:n,pure:!0}),n})();function O(n,r){1&n&&e._UZ(0,"i",26)}function L(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",30),e.TgZ(1,"label",36),e.NdJ("ngModelChange",function(o){return e.CHM(t).$implicit.isSelected=o})("ngModelChange",function(){const a=e.CHM(t).$implicit;return e.oxw(3).areaSelectChange(a)}),e._uU(2),e.qZA(),e.qZA()}if(2&n){const t=r.$implicit,i=r.index;e.xp6(1),e.Gre("",i>1?"mt5":""," cursor-Hand"),e.Q6J("ngModel",t.isSelected),e.xp6(1),e.hij(" ",t.displayName,"")}}function U(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div",27),e.TgZ(2,"div",28),e.TgZ(3,"div",29),e.TgZ(4,"div",30),e.TgZ(5,"label",31),e._uU(6,"Areas"),e.qZA(),e.qZA(),e.TgZ(7,"div",32),e.TgZ(8,"label",33),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).isAllAreaSelected=o})("ngModelChange",function(){return e.CHM(t),e.oxw(2).allSelectAreaChange()}),e._uU(9,"All"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",34),e.YNc(11,L,3,5,"div",35),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(8),e.Q6J("ngModel",t.isAllAreaSelected)("nzIndeterminate",t.isAreaSelectIndeterminate),e.xp6(3),e.Q6J("ngForOf",t.areaList)}}function k(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"li",37),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).displayAll()}),e._uU(1,"Display All "),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("nzSelected",t.isDisplayAllMenuSelected)}}function I(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"li",38),e.TgZ(1,"a",39),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).onSelectController(a)}),e._uU(2),e.TgZ(3,"span",40),e._uU(4),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=r.$implicit;e.Q6J("nzSelected",t.isSelected),e.xp6(2),e.hij(" ",t.controllerName," "),e.xp6(2),e.Oqu(t.summary)}}function J(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"nz-affix"),e.TgZ(1,"div",12),e.TgZ(2,"div",0),e.TgZ(3,"div",13),e.TgZ(4,"nz-input-group",14),e.TgZ(5,"input",15),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().searchText=o}),e.qZA(),e.qZA(),e.YNc(6,O,1,0,"ng-template",null,16,e.W1O),e.qZA(),e.TgZ(8,"div",17),e.TgZ(9,"a",18),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return o.showAreaFilter=!o.showAreaFilter}),e._UZ(10,"i",19),e.qZA(),e.TgZ(11,"a",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().refreshControllerList()}),e._UZ(12,"i",21),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,U,12,3,"div",3),e.qZA(),e.TgZ(14,"section",22),e.TgZ(15,"ul",23),e.YNc(16,k,2,1,"li",24),e.YNc(17,I,5,3,"li",25),e.ALo(18,"controllerFilter"),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.MAs(7),i=e.oxw();e.xp6(4),e.Q6J("nzSuffix",t),e.xp6(1),e.Q6J("ngModel",i.searchText),e.xp6(8),e.Q6J("ngIf",i.showAreaFilter),e.xp6(3),e.Q6J("ngIf",(null==i.controllerList?null:i.controllerList.length)>0&&!i.searchText&&!i.isAreaSelectIndeterminate),e.xp6(1),e.Q6J("ngForOf",e.Dn7(18,5,i.controllerList,i.searchText,i.selectedArea))}}function F(n,r){if(1&n&&(e.TgZ(0,"span"),e.TgZ(1,"nz-tag",54),e._uU(2),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=r.index,o=e.oxw(2);e.xp6(1),e.Q6J("nzColor",i<o.tagcolor.length-1?o.tagcolor[i]:o.tagcolor[0]),e.xp6(1),e.hij(" ",t.name," ")}}function Q(n,r){if(1&n&&(e.TgZ(0,"label",55),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.summary,"")}}function V(n,r){if(1&n&&(e.TgZ(0,"div",12),e.TgZ(1,"nz-tag",54),e._uU(2),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=r.index,o=e.oxw(3);e.xp6(1),e.Q6J("nzColor",i<o.tagcolor.length-1?o.tagcolor[i]:o.tagcolor[0]),e.xp6(1),e.hij(" ",t.name," ")}}function Y(n,r){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"a",56),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"td"),e.YNc(5,V,3,2,"div",57),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.qZA()),2&n){const t=r.$implicit;e.xp6(2),e.MGl("routerLink","/workbench/action/",t.id,""),e.xp6(1),e.hij(" ",(t.areaName?t.areaName+"/":"")+t.controllerName+"/"+t.actionName," "),e.xp6(2),e.Q6J("ngForOf",t.customAttrList),e.xp6(2),e.Oqu(t.summary)}}function D(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",41),e.TgZ(2,"div",42),e.TgZ(3,"div",43),e.TgZ(4,"h2",44),e._uU(5),e.qZA(),e.TgZ(6,"label",45),e.YNc(7,F,3,2,"span",10),e.qZA(),e.qZA(),e.TgZ(8,"div",46),e.YNc(9,Q,2,1,"label",47),e.TgZ(10,"a",48),e._uU(11,"View Code"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",49),e.TgZ(13,"nz-table",50,51),e.TgZ(15,"thead"),e.TgZ(16,"tr"),e.TgZ(17,"th",52),e._uU(18,"API"),e.qZA(),e.TgZ(19,"th",53),e._uU(20,"Attr"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Summary"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"tbody"),e.YNc(24,Y,8,4,"tr",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=e.MAs(14),o=e.oxw();e.xp6(5),e.Oqu(t.controllerName),e.xp6(2),e.Q6J("ngForOf",t.customAttrList),e.xp6(2),e.Q6J("ngIf",t.summary),e.xp6(1),e.MGl("routerLink","/workbench/codeviewer/controller/",t.id,""),e.xp6(3),e.Q6J("nzShowPagination",!1)("nzSize",o.actionTableSize)("nzPageSize",1e3)("nzData",t.actionList),e.xp6(11),e.Q6J("ngForOf",i.data)}}let E=(()=>{class n{constructor(t){this.apiSvc=t,this.showControllerList=!0,this.isDisplayAllMenuSelected=!0,this.tagcolor=["cyan","geekblue","blue","purple"],this.actionTableSize="middle",this.searchText="",this.controllerList=[],this.selectedController=[],this.queryAmount=5,this.areaList=[],this.selectedArea=[],this.showAreaFilter=!1,this.isAllAreaSelected=!1,this.isAreaSelectIndeterminate=!1,this.onReuseFlag=!1;let i=localStorage.getItem("actionTableSize");this.actionTableSize=i||"middle"}ngOnInit(){this.initControllerList()}_onReuseInit(){this.onReuseFlag?(this.showControllerList=!1,setTimeout(()=>{this.showControllerList=!0},1),this.onReuseFlag=!1):this.onReuseFlag=!0}_onReuseDestroy(){}initControllerList(){this.searchText="",this.isDisplayAllMenuSelected=!1,this.controllerList=[],this.apiSvc.getControllerList().subscribe(t=>{this.controllerList=t,this.initAreaList(),this.initControllerDetail(0),this.displayAll()})}initControllerDetail(t){let i=[],o=0;for(o=0;t+o<this.controllerList.length&&(i.push(this.controllerList[t+o].id),o!=this.queryAmount-1);o++);this.apiSvc.getControllerListByIds(i).subscribe(a=>{a.forEach(s=>{let l=this.controllerList.filter(p=>p.id==s.id);l&&l.length>0&&(l[0].summary=s.summary,l[0].actionList=s.actionList)})},null,()=>{t+=o+1,console.log("curIndex:",t),t<this.controllerList.length&&this.initControllerDetail(t)})}initAreaList(){this.areaList=[],this.selectedArea=[],this.controllerList&&(this.controllerList.forEach(t=>{this.areaList.filter(i=>i.areaName==t.areaName).length<=0&&this.areaList.push({areaName:t.areaName,displayName:t.areaName?t.areaName:"None",isSelected:!1})}),this.areaList.sort((t,i)=>{let o=0;return t.areaName!=i.areaName&&(o=t.areaName>=i.areaName?1:-1),o}))}allSelectAreaChange(){this.areaList.forEach(t=>{t.isSelected=this.isAllAreaSelected}),this.selectedArea=this.areaList.filter(t=>t.isSelected)}areaSelectChange(t){this.areaList.filter(i=>!i.isSelected).length<=0?(this.isAllAreaSelected=!0,this.isAreaSelectIndeterminate=!1):this.areaList.filter(i=>i.isSelected).length<=0?(this.isAllAreaSelected=!1,this.isAreaSelectIndeterminate=!1):this.isAreaSelectIndeterminate=!0,this.selectedArea=this.areaList.filter(i=>i.isSelected)}refreshControllerList(){this.initControllerList()}onSelectController(t){this.selectedController=[],this.selectedController.push(t),console.log(t),this.controllerList.forEach(i=>{i.isSelected=i==t}),this.isDisplayAllMenuSelected=!1}displayAll(){this.selectedController=this.controllerList,this.isDisplayAllMenuSelected=!0,this.controllerList.forEach(t=>{t.isSelected=!1})}actionTableSizeChanged(){localStorage.setItem("actionTableSize",this.actionTableSize)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-workbench"]],decls:16,vars:3,consts:[["nz-row",""],["nz-col","","nzSpan","5",1,"p5"],[1,"main-menu"],[4,"ngIf"],["nz-col","","nzSpan","19",2,"width","calc(100% - 280px)"],[1,"p20",2,"min-height","calc( 100vh - 100px )"],[1,"pull-right","mrp18"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","middle"],["nz-radio","","nzValue","small"],[4,"ngFor","ngForOf"],[1,"pb20"],[1,"mt5"],["nz-col","","nzSpan","18"],["nzSize","small",3,"nzSuffix"],["placeholder","Search","nz-input","",3,"ngModel","ngModelChange"],["suffixIcon",""],["nz-col","","nzSpan","4",1,"lh24"],["title","Area Filter",1,"ml5",3,"click"],["nz-icon","","nzType","appstore","nzTheme","outline"],["title","Refresh",1,"ml5",3,"click"],["nz-icon","","nzType","sync","nzTheme","outline"],[1,"main-menu-inner"],["nz-menu","","nzMode","inline"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],["nz-menu-item","",3,"nzSelected",4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[1,"mt3"],[1,"mt3","p10","border-lightgray","border-radius"],["nz-row","",1,"border-bottom","pb10"],["nz-col","","nzSpan","12"],[1,"fw600","f-size16"],["nz-col","","nzSpan","12",1,"lh24"],["nz-checkbox","",3,"ngModel","nzIndeterminate","ngModelChange"],["nz-row","",1,"mt5"],["nz-col","","nzSpan","12",4,"ngFor","ngForOf"],["nz-checkbox","",3,"ngModel","ngModelChange"],["nz-menu-item","",3,"nzSelected","click"],["nz-menu-item","",3,"nzSelected"],[1,"overxhiden",3,"click"],[1,"ml8","f-size12",2,"color","#a5a5a5"],[1,"p10","mt10"],[1,"pl10"],[1,"vcenter"],[1,"lineblock",2,"font-size","26px"],[1,"ml40",2,"vertical-align","text-bottom"],[1,"wp90","lh24"],["class","f-size12","style","max-width: 80%;",4,"ngIf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"pull-right","mr20","w80",3,"routerLink"],[1,"wp90","mt5"],[3,"nzShowPagination","nzSize","nzPageSize","nzData"],["actionTable",""],[1,"wp33"],[1,"wp15"],[3,"nzColor"],[1,"f-size12",2,"max-width","80%"],[3,"routerLink"],["class","mt5",4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.YNc(4,J,19,9,"nz-affix",3),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"nz-radio-group",7),e.NdJ("ngModelChange",function(a){return i.actionTableSize=a})("ngModelChange",function(){return i.actionTableSizeChanged()}),e.TgZ(9,"label",8),e._uU(10,"Large"),e.qZA(),e.TgZ(11,"label",9),e._uU(12,"Small"),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,D,25,9,"div",10),e.qZA(),e.TgZ(14,"div",11),e._UZ(15,"layout-footer"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngIf",i.showControllerList),e.xp6(4),e.Q6J("ngModel",i.actionTableSize),e.xp6(5),e.Q6J("ngForOf",i.selectedController))},directives:[u.SK,u.t3,d.O5,T.Dg,f.JJ,f.On,T.Of,d.sg,b.c,M.$,x.w,z.gB,z.ke,z.Zp,f.Fj,P.Ls,v.wO,q.Ie,v.r9,A.ix,g.yS,_.N8,_.Om,_.$Z,_.Uo,_._C,_.p0,S.j],pipes:[N],styles:[".ant-menu-vertical>.ant-menu-item, .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%]{height:35px;line-height:35px;min-height:35px;padding:0 10px!important}.main-menu-inner[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:hidden;max-height:calc(100vh - 100px)}.main-menu[_ngcontent-%COMP%]:hover   .main-menu-inner[_ngcontent-%COMP%]{overflow-y:auto}"]}),n})();var $=c(9119),m=c(8902);function W(n,r){if(1&n&&(e.TgZ(0,"span"),e.TgZ(1,"nz-tag",18),e._uU(2),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=r.index,o=e.oxw(2);e.xp6(1),e.Q6J("nzColor",i<o.tagcolor.length-1?o.tagcolor[i]:o.tagcolor[0]),e.xp6(1),e.hij(" ",t.name," ")}}function H(n,r){if(1&n&&(e.TgZ(0,"div",19),e.TgZ(1,"label",20),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.action.summary)}}function R(n,r){if(1&n&&(e.TgZ(0,"span"),e.TgZ(1,"nz-tag",18),e._uU(2),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=r.index,o=e.oxw(5);e.xp6(1),e.Q6J("nzColor",i<o.tagcolor.length-1?o.tagcolor[i]:o.tagcolor[0]),e.xp6(1),e.hij(" ",t.name," ")}}function j(n,r){if(1&n&&(e.TgZ(0,"span"),e.TgZ(1,"span"),e._uU(2),e.qZA(),e._uU(3," : "),e.TgZ(4,"a",24),e._uU(5),e.qZA(),e.TgZ(6,"label",6),e.YNc(7,R,3,2,"span",7),e.qZA(),e.TgZ(8,"span",25),e._uU(9),e.qZA(),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.MGl("routerLink","/workbench/ptype/",t.isIEnumerable?t.enumItemId:t.typeId,""),e.xp6(1),e.Oqu(t.typeName),e.xp6(2),e.Q6J("ngForOf",t.customAttrList),e.xp6(2),e.Oqu(t.summary)}}function G(n,r){if(1&n&&(e.TgZ(0,"label",23),e.YNc(1,j,10,5,"span",1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.Q6J("ngIf",t.hasPiList)}}function B(n,r){if(1&n&&(e.TgZ(0,"div",21),e.YNc(1,G,2,1,"label",22),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.action.inputParameters)}}function K(n,r){1&n&&(e.TgZ(0,"label",26),e._uU(1,"(none)"),e.qZA())}function X(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.typeName)}}function ee(n,r){if(1&n&&(e.TgZ(0,"a",24),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","/workbench/ptype/",t.isIEnumerable?t.enumItemId:t.typeId,""),e.xp6(1),e.Oqu(t.typeName)}}function te(n,r){if(1&n&&(e.TgZ(0,"div",21),e.TgZ(1,"nz-tag",18),e._uU(2),e.qZA(),e.qZA()),2&n){const t=r.$implicit,i=r.index,o=e.oxw(4);e.xp6(1),e.Q6J("nzColor",i<o.tagcolor.length-1?o.tagcolor[i]:o.tagcolor[0]),e.xp6(1),e.hij(" ",t.name," ")}}function ne(n,r){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"td"),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"td"),e.YNc(8,X,2,1,"span",1),e.YNc(9,ee,2,2,"a",33),e.qZA(),e.TgZ(10,"td"),e.YNc(11,te,3,2,"div",34),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e._UZ(14,"td"),e.qZA()),2&n){const t=r.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(3),e.Oqu(t.summary),e.xp6(2),e.Q6J("ngIf",!t.hasPiList),e.xp6(1),e.Q6J("ngIf",t.hasPiList),e.xp6(2),e.Q6J("ngForOf",t.customAttrList),e.xp6(2),e.Oqu(t.defaultValue)}}function ie(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"nz-table",27,28),e.TgZ(3,"thead"),e.TgZ(4,"tr"),e.TgZ(5,"th",29),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"th",30),e._uU(8,"Summary"),e.qZA(),e.TgZ(9,"th",29),e._uU(10,"Type"),e.qZA(),e.TgZ(11,"th",31),e._uU(12,"Attr"),e.qZA(),e.TgZ(13,"th",32),e._uU(14,"Default"),e.qZA(),e._UZ(15,"th"),e.qZA(),e.qZA(),e.TgZ(16,"tbody"),e.YNc(17,ne,15,6,"tr",7),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.MAs(2),i=e.oxw(2);e.xp6(1),e.Q6J("nzShowPagination",!1)("nzPageSize",1e3)("nzData",i.inputParams),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",i.nameSortFn),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",i.typeSortFn),e.xp6(8),e.Q6J("ngForOf",t.data)}}function oe(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.typeName)}}function re(n,r){if(1&n&&(e.TgZ(0,"a",24),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","/workbench/ptype/",t.isIEnumerable?t.enumItemId:t.typeId,""),e.xp6(1),e.Oqu(t.typeName)}}function ae(n,r){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"td"),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.qZA(),e.TgZ(7,"td"),e.YNc(8,oe,2,1,"span",1),e.YNc(9,re,2,2,"a",33),e.qZA(),e._UZ(10,"td"),e.qZA()),2&n){const t=r.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(3),e.Oqu(t.summary),e.xp6(2),e.Q6J("ngIf",!t.hasPiList),e.xp6(1),e.Q6J("ngIf",t.hasPiList)}}function le(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div",13),e.TgZ(2,"label",14),e._uU(3,"ReturnParamters"),e.qZA(),e.TgZ(4,"div",35),e.TgZ(5,"a",24),e._uU(6),e.qZA(),e.TgZ(7,"span",25),e._uU(8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div"),e.TgZ(10,"nz-table",27,36),e.TgZ(12,"thead"),e.TgZ(13,"tr"),e.TgZ(14,"th",29),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",30),e._uU(17,"Summary"),e.qZA(),e.TgZ(18,"th",29),e._uU(19,"Type"),e.qZA(),e._UZ(20,"th"),e.qZA(),e.qZA(),e.TgZ(21,"tbody"),e.YNc(22,ae,11,4,"tr",7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.MAs(11),i=e.oxw(2);e.xp6(5),e.MGl("routerLink","/workbench/ptype/",i.action.returnParameter.typeId,""),e.xp6(1),e.Oqu(i.action.returnParameter.typeName),e.xp6(2),e.Oqu(i.action.returnParameter.summary),e.xp6(2),e.Q6J("nzShowPagination",!1)("nzPageSize",1e3)("nzData",i.returnParams),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",i.nameSortFn),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",i.typeSortFn),e.xp6(4),e.Q6J("ngForOf",t.data)}}function se(n,r){1&n&&(e.TgZ(0,"label",42),e._uU(1,"(none)"),e.qZA())}function ce(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.typeName)}}function _e(n,r){if(1&n&&(e.TgZ(0,"a"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.typeName)}}function pe(n,r){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.YNc(2,ce,2,1,"span",1),e.YNc(3,_e,2,1,"a",1),e.qZA(),e.TgZ(4,"td"),e.TgZ(5,"span"),e._uU(6),e.qZA(),e.qZA(),e._UZ(7,"td"),e.qZA()),2&n){const t=r.$implicit;e.xp6(2),e.Q6J("ngIf",!t.hasPiList),e.xp6(1),e.Q6J("ngIf",t.hasPiList),e.xp6(3),e.Oqu(t.summary)}}function de(n,r){if(1&n&&(e.TgZ(0,"div",37),e.TgZ(1,"div",38),e.TgZ(2,"label",39),e._uU(3,"ReturnParamters"),e.qZA(),e.YNc(4,se,2,0,"label",40),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"nz-table",41,36),e.TgZ(8,"thead"),e.TgZ(9,"tr"),e.TgZ(10,"th",32),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"th",30),e._uU(13,"Summary"),e.qZA(),e._UZ(14,"th"),e.qZA(),e.qZA(),e.TgZ(15,"tbody"),e.YNc(16,pe,8,3,"tr",7),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.MAs(7),i=e.oxw(2);e.xp6(4),e.Q6J("ngIf",(null==i.returnParams?null:i.returnParams.length)<=0),e.xp6(2),e.Q6J("nzShowPagination",!1)("nzData",i.returnParams),e.xp6(10),e.Q6J("ngForOf",t.data)}}function me(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"div"),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"label",5),e._uU(6),e.qZA(),e.TgZ(7,"label",6),e.YNc(8,W,3,2,"span",7),e.qZA(),e.TgZ(9,"a",8),e._uU(10,"View Code"),e.qZA(),e.qZA(),e.YNc(11,H,3,1,"div",9),e.qZA(),e.TgZ(12,"div",10),e.TgZ(13,"a",11),e._uU(14,"Return"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"div",12),e.TgZ(16,"div"),e.TgZ(17,"div"),e.TgZ(18,"div",13),e.TgZ(19,"label",14),e._uU(20,"InputParamters"),e.qZA(),e.YNc(21,B,2,1,"div",15),e.YNc(22,K,2,0,"label",16),e.qZA(),e.YNc(23,ie,18,8,"div",1),e.qZA(),e.qZA(),e.TgZ(24,"div",12),e.YNc(25,le,23,11,"div",1),e.YNc(26,de,17,4,"div",17),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(6),e.hij(" ",(t.action.areaName?t.action.areaName+"/":"")+t.action.controllerName+"/"+t.action.actionName," "),e.xp6(2),e.Q6J("ngForOf",t.action.customAttrList),e.xp6(1),e.MGl("routerLink","/workbench/codeviewer/action/",t.action.id,""),e.xp6(2),e.Q6J("ngIf",t.action.summary),e.xp6(6),e.Tol((null==t.inputParams?null:t.inputParams.length)>0?"":"border-bottom"),e.xp6(4),e.Q6J("ngIf",t.inputParams.length>0),e.xp6(1),e.Q6J("ngIf",t.inputParams.length<=0),e.xp6(1),e.Q6J("ngIf",t.inputParams.length>0),e.xp6(2),e.Q6J("ngIf",t.action.returnParameter.hasPiList),e.xp6(1),e.Q6J("ngIf",!t.action.returnParameter.hasPiList)}}let ge=(()=>{class n{constructor(t,i){this.routerParams=t,this.apiSvc=i,this.tagcolor=["cyan","geekblue","blue","purple"],this.inputParams=[],this.returnParams=[]}ngOnInit(){this.actionId=this.routerParams.snapshot.paramMap.get("actionId"),this.getAction()}getAction(){this.apiSvc.getAction(this.actionId).subscribe(t=>{this.action=t,m.Zr.setTitle(t.controllerName+"/"+t.actionName+" - Api Helper"),t&&t.inputParameters&&t.inputParameters.forEach(o=>{o.hasPiList&&!o.isEnum?this.apiSvc.getPType(o.typeId).subscribe(a=>{a.piList.forEach(s=>{this.inputParams.filter(l=>l.name==s.name).length<=0&&this.inputParams.push(s)})}):this.inputParams.push(o)}),t&&t.returnParameter&&(t.returnParameter.hasPiList&&!t.returnParameter.isEnum?this.apiSvc.getPType(t.returnParameter.typeId).subscribe(o=>{this.returnParams=o.piList}):this.returnParams.push(t.returnParameter))})}nameSortFn(t,i,o){return t.name.localeCompare(i.name)}typeSortFn(t,i,o){return t.typeName.localeCompare(i.typeName)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(h.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-action"]],decls:2,vars:1,consts:[[2,"padding","20px 80px"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size30"],[1,"ml40"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","","routerLink","/workbench/index",1,"ml50","w80"],[1,"mt30"],[1,"p10"],[1,"f-size18","fw500"],["class","mt5",4,"ngIf"],["class","ml5 f-size18",4,"ngIf"],["class","border-bottom",4,"ngIf"],[3,"nzColor"],[1,"mt10"],[1,"f-size16"],[1,"mt5"],["class","f-size14",4,"ngFor","ngForOf"],[1,"f-size14"],[3,"routerLink"],[1,"ml20"],[1,"ml5","f-size18"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],["inputParamsTable",""],[1,"w240",3,"nzShowSort","nzSortFn"],[1,"wp30"],[1,"wp10"],[1,"w240"],[3,"routerLink",4,"ngIf"],["class","mt5",4,"ngFor","ngForOf"],[1,"mt5","f-size14"],["returnParamsTable",""],[1,"border-bottom"],[1,"p10","f-size18"],[1,"fw500"],["class","ml5",4,"ngIf"],["nzSize","small",3,"nzShowPagination","nzData"],[1,"ml5"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,me,27,12,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.action))},directives:[d.O5,u.SK,u.t3,d.sg,A.ix,g.yS,x.w,S.j,_.N8,_.Om,_.$Z,_.Uo,_._C,_.qD,_.p0],styles:[""]}),n})();function ue(n,r){if(1&n&&(e.TgZ(0,"div",17),e.TgZ(1,"label",18),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.ptype.summary)}}function Ze(n,r){if(1&n&&(e.TgZ(0,"th",13),e._uU(1,"Value"),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("nzShowSort",!0)("nzSortFn",t.valueSortFn)}}function he(n,r){if(1&n&&(e.TgZ(0,"th",13),e._uU(1,"Type"),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("nzShowSort",!0)("nzSortFn",t.typeSortFn)}}function fe(n,r){if(1&n&&(e.TgZ(0,"td",20),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.paramValue)}}function Te(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.typeName)}}function xe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"a",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw(2).viewPType(o)}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Oqu(t.typeName)}}function ze(n,r){if(1&n&&(e.TgZ(0,"td"),e.YNc(1,Te,2,1,"span",1),e.YNc(2,xe,2,1,"a",21),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",!t.hasPiList),e.xp6(1),e.Q6J("ngIf",t.hasPiList)}}function Ae(n,r){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"span"),e._uU(3),e.qZA(),e.qZA(),e.YNc(4,fe,2,1,"td",19),e.TgZ(5,"td"),e.TgZ(6,"span"),e._uU(7),e.qZA(),e.qZA(),e.YNc(8,ze,3,2,"td",1),e._UZ(9,"td"),e.qZA()),2&n){const t=r.$implicit,i=e.oxw(2);e.xp6(3),e.Oqu(t.name),e.xp6(1),e.Q6J("ngIf",i.ptype.isEnum),e.xp6(3),e.Oqu(t.summary),e.xp6(1),e.Q6J("ngIf",!i.ptype.isEnum)}}function Ce(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div"),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"label",5),e._uU(6),e.qZA(),e.TgZ(7,"a",6),e._uU(8,"View Ts"),e.qZA(),e.qZA(),e.YNc(9,ue,3,1,"div",7),e.qZA(),e.TgZ(10,"div",8),e.TgZ(11,"a",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().goback()}),e._uU(12,"Return"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",10),e.TgZ(14,"nz-table",11,12),e.TgZ(16,"thead"),e.TgZ(17,"tr"),e.TgZ(18,"th",13),e._uU(19,"Name"),e.qZA(),e.YNc(20,Ze,2,2,"th",14),e.TgZ(21,"th",15),e._uU(22,"Summary"),e.qZA(),e.YNc(23,he,2,2,"th",14),e._UZ(24,"th"),e.qZA(),e.qZA(),e.TgZ(25,"tbody"),e.YNc(26,Ae,10,4,"tr",16),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.MAs(15),i=e.oxw();e.xp6(6),e.hij(" ",i.ptype.typeName," "),e.xp6(1),e.MGl("routerLink","/workbench/tsviewer/ptype/",i.ptype.isIEnumerable?i.ptype.enumItemId:i.ptype.id,""),e.xp6(2),e.Q6J("ngIf",i.ptype.summary),e.xp6(5),e.Q6J("nzShowPagination",!1)("nzPageSize",1e3)("nzData",i.ptype.piList),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",i.nameSortFn),e.xp6(2),e.Q6J("ngIf",i.ptype.isEnum),e.xp6(3),e.Q6J("ngIf",!i.ptype.isEnum),e.xp6(3),e.Q6J("ngForOf",t.data)}}let ve=(()=>{class n{constructor(t,i){this.routerParams=t,this.apiSvc=i}ngOnInit(){this.routerParams.params.subscribe(t=>{this.ptypeId=t.ptypeId,this.getPType()})}getPType(){this.apiSvc.getPType(this.ptypeId).subscribe(t=>{this.ptype=t,m.Zr.setTitle(t.typeName+" - Api Helper")})}viewPType(t){m.Zr.goTo("/workbench/ptype/"+(t.isIEnumerable?t.enumItemId:t.typeId),{replaceUrl:!0}),history.pushState(null,null,location.href)}nameSortFn(t,i,o){return t.name.localeCompare(i.name)}valueSortFn(t,i,o){return t.paramValue-i.paramValue}typeSortFn(t,i,o){return t.typeName.localeCompare(i.typeName)}goback(){history.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(h.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-ptype"]],decls:2,vars:1,consts:[[2,"padding","20px 80px"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20",1,"p10"],[1,"lh40"],[1,"f-size30"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt30"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],["piListTable",""],[1,"w240",3,"nzShowSort","nzSortFn"],["class","w240",3,"nzShowSort","nzSortFn",4,"ngIf"],[1,"wp30"],[4,"ngFor","ngForOf"],[1,"mt10"],[1,"f-size16"],["class","pl20",4,"ngIf"],[1,"pl20"],[3,"click",4,"ngIf"],[3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Ce,27,11,"div",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.ptype))},directives:[d.O5,u.SK,u.t3,A.ix,g.yS,x.w,_.N8,_.Om,_.$Z,_.Uo,_._C,_.qD,_.p0,d.sg],styles:[""]}),n})();var qe=c(6214),Se=c(7018),y=c(4828);function ye(n,r){if(1&n&&(e.TgZ(0,"div",18),e.TgZ(1,"label",19),e._uU(2),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Oqu(t.tsResult.summary)}}function we(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"label",27),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(3).isShowPageQueryModel=o})("ngModelChange",function(){return e.CHM(t),e.oxw(3).isShowPageQueryModelChanged()}),e._uU(1," Show PageQueryModels"),e.qZA()}if(2&n){const t=e.oxw(3);e.Q6J("ngModel",t.isShowPageQueryModel)}}function be(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr",43),e.NdJ("click",function(){const o=e.CHM(t),a=o.$implicit,s=o.index,l=e.oxw().$implicit;return e.oxw(4).selectPi(l,a,s)}),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.qZA()}if(2&n){const t=r.$implicit;e.Tol(t.isSelected?"selected":""),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.tsType),e.xp6(2),e.Oqu(t.summary)}}function Me(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",30),e.TgZ(1,"div"),e.TgZ(2,"div",31),e.TgZ(3,"label",32),e._uU(4),e.qZA(),e.TgZ(5,"label",33),e._uU(6),e.qZA(),e.TgZ(7,"div",34),e.TgZ(8,"a",35),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(4).viewLambda(a)}),e._uU(9,"\u5feb\u6377Lambda"),e.qZA(),e.TgZ(10,"a",36),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(4).viewModelCode(a)}),e._uU(11,"Code"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",37),e.NdJ("keyup",function(o){return e.CHM(t),e.oxw(4).onKeyUpHandler(o)})("keydown",function(o){return e.CHM(t),e.oxw(4).onKeyDownHandler(o)}),e.TgZ(13,"nz-table",38,39),e.TgZ(15,"thead"),e.TgZ(16,"tr"),e.TgZ(17,"th",40),e._uU(18,"Name"),e.qZA(),e.TgZ(19,"th",41),e._uU(20,"Type"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Summary"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"tbody"),e.YNc(24,be,7,6,"tr",42),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=r.$implicit,i=e.MAs(14),o=e.oxw(4);e.xp6(4),e.hij(" ",t.name," "),e.xp6(1),e.s9C("title",t.summary),e.xp6(1),e.hij(" ",t.summary," "),e.xp6(7),e.Q6J("nzBordered",!0)("nzShowPagination",!1)("nzPageSize",1e3)("nzData",t.piList),e.xp6(4),e.Q6J("nzShowSort",!0)("nzSortFn",o.nameSortFn),e.xp6(2),e.Q6J("nzShowSort",!0)("nzSortFn",o.typeSortFn),e.xp6(5),e.Q6J("ngForOf",i.data)}}function Pe(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"nz-card",28),e.YNc(2,Me,25,12,"div",29),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(2),e.Q6J("ngForOf",t.tsResult.tsModelList)}}function Ne(n,r){if(1&n&&(e.TgZ(0,"div"),e.TgZ(1,"nz-card",44),e.TgZ(2,"pre"),e._uU(3),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(3);e.xp6(3),e.Oqu(t.isShowPageQueryModel?t.tsModelCodeWithPgQuery:t.tsModelCode)}}function Oe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"nz-tab",20),e.TgZ(1,"div"),e.TgZ(2,"div",7),e.TgZ(3,"label",21),e._uU(4,"Ts Models"),e.qZA(),e.TgZ(5,"div",22),e.TgZ(6,"nz-radio-group",23),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).tsModelViewType=o})("ngModelChange",function(){return e.CHM(t),e.oxw(2).modelViewTypeChanged()}),e.TgZ(7,"label",24),e._uU(8,"TableView"),e.qZA(),e.TgZ(9,"label",25),e._uU(10,"CodeView"),e.qZA(),e.qZA(),e.YNc(11,we,2,1,"label",26),e.qZA(),e.qZA(),e.TgZ(12,"div"),e.YNc(13,Pe,3,1,"div",1),e.YNc(14,Ne,4,1,"div",1),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(6),e.Q6J("ngModel",t.tsModelViewType),e.xp6(5),e.Q6J("ngIf","2"==t.tsModelViewType),e.xp6(2),e.Q6J("ngIf","1"==t.tsModelViewType),e.xp6(1),e.Q6J("ngIf","2"==t.tsModelViewType)}}function Le(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"nz-tab",45),e.TgZ(1,"div"),e.TgZ(2,"div",7),e.TgZ(3,"label",21),e._uU(4,"Ts Services"),e.qZA(),e.TgZ(5,"div",22),e.TgZ(6,"nz-radio-group",23),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw(2).tsServiceType=o})("ngModelChange",function(){return e.CHM(t),e.oxw(2).tsServiceTypeChanged()}),e.TgZ(7,"label",24),e._uU(8,"Jc"),e.qZA(),e.TgZ(9,"label",25),e._uU(10,"Common"),e.qZA(),e.TgZ(11,"label",46),e._uU(12,"ApiCode"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div"),e.TgZ(14,"nz-card",44),e.TgZ(15,"pre"),e._uU(16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(6),e.Q6J("ngModel",t.tsServiceType),e.xp6(10),e.Oqu("1"==t.tsServiceType?t.tsResult.tsService.jcCode:"2"==t.tsServiceType?t.tsResult.tsService.commonCode:t.tsResult.tsService.apiCode)}}function Ue(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"div"),e.TgZ(2,"div",5),e.TgZ(3,"div",6),e.TgZ(4,"div",7),e.TgZ(5,"label",8),e._uU(6),e.ALo(7,"titlecase"),e.TgZ(8,"span",9),e._uU(9),e.qZA(),e.qZA(),e.qZA(),e.YNc(10,ye,3,1,"div",10),e.qZA(),e.TgZ(11,"div",11),e.TgZ(12,"a",12),e.NdJ("click",function(){return e.CHM(t),e.oxw().goback()}),e._uU(13,"Return"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div"),e.TgZ(15,"nz-card",13),e.TgZ(16,"nz-tabset",14),e.YNc(17,Oe,15,4,"nz-tab",15),e.YNc(18,Le,17,2,"nz-tab",16),e.qZA(),e.TgZ(19,"div"),e.TgZ(20,"label",17),e._uU(21,"Not all code is useful, the generated code is for reference only"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.hij(" Ts For ",e.lcZ(7,6,t.itemType)," "),e.xp6(3),e.Oqu(null==t.tsResult?null:t.tsResult.name),e.xp6(1),e.Q6J("ngIf",null==t.tsResult?null:t.tsResult.summary),e.xp6(6),e.Q6J("nzAnimated",!1),e.xp6(1),e.Q6J("ngIf",(null==t.tsResult?null:t.tsResult.tsModelList)&&t.tsResult.tsModelList.length>0),e.xp6(1),e.Q6J("ngIf",null==t.tsResult?null:t.tsResult.tsService)}}const Ie=[{path:"",component:w.R,children:[{path:"",redirectTo:"/workbench/index",pathMatch:"full"},{path:"action/:actionId",component:ge},{path:"ptype/:ptypeId",component:ve},{path:"codeviewer/:itemType/:itemId",component:(()=>{class n{constructor(t,i){this.routerParams=t,this.apiSvc=i,this.tsServiceType="1",this.tsModelViewType="1",this.isShowPageQueryModel=!0,this.showCode=!1,this.isCtrlDown=!1,this.isShiftDown=!1;const o=localStorage.getItem("tsServiceType");this.tsServiceType=o||"1";const a=localStorage.getItem("tsModelViewType");this.tsModelViewType=a||"1","false"===localStorage.getItem("isShowPageQueryModel")&&(this.isShowPageQueryModel=!1)}ngOnInit(){this.itemId=this.routerParams.snapshot.paramMap.get("itemId"),this.itemType=this.routerParams.snapshot.paramMap.get("itemType"),this.itemId&&this.itemType&&this.getTsModel()}getTsModel(){this.apiSvc.getTs(this.itemId,this.itemType).subscribe(t=>{if(this.tsResult=t,t&&t.tsModelList){let i="",o="";t.tsModelList.forEach(a=>{i+=a.tsModelCode,o+=a.tsModelCode,o+=a.pgQueryModelCode}),this.tsModelCode=i,this.tsModelCodeWithPgQuery=o}})}selectPi(t,i,o){if(this.tsResult.tsModelList.forEach(a=>{a!==t&&a.piList.forEach(s=>{s.isSelected=!1})}),this.isCtrlDown||this.isShiftDown){if(this.isCtrlDown)i.isSelected=!i.isSelected;else if(this.isShiftDown){let a=-1,s=-1;if(t.piList.filter(l=>!0===l.isSelected).forEach(l=>{let p=t.piList.indexOf(l);(-1===a||a>p)&&(a=p),(-1===s||s<p)&&(s=p)}),-1===a)return void(i.isSelected=!i.isSelected);if(o===a||o===s)return void(i.isSelected=!i.isSelected);if(o<a)for(let l=o;l<=s;l++)t.piList[l].isSelected=!0;else if(o>s)for(let l=a;l<=o;l++)t.piList[l].isSelected=!0;else{for(let l=a;l<=o;l++)t.piList[l].isSelected=!0;for(let l=o+1;l<=s;l++)t.piList[l].isSelected=!1}}}else t.piList.filter(a=>!0===a.isSelected).forEach((a,s)=>{a!=i&&(a.isSelected=!1)}),i.isSelected=!i.isSelected}nameSortFn(t,i,o){return t.name.localeCompare(i.name)}valueSortFn(t,i,o){return t.paramValue-i.paramValue}typeSortFn(t,i,o){return t.typeName.localeCompare(i.typeName)}viewModelCode(t){this.tsCode=t.tsModelCode+t.pgQueryModelCode,this.codeTitle=t.name+" Code",this.showCode=!0}viewLambda(t){if(t.piList.filter(p=>p.isSelected).length<=0)return void m.Zr.showInfoBox("No record is selected.");let i=t.piList.filter(p=>p.isSelected),a="//1 SetValue \r\n";a+=t.name+" "+m.Zr.firstToLower(t.name)+" = new "+t.name+"();\r\n",i.forEach((p,Z)=>{a+=m.Zr.firstToLower(t.name)+"."+m.Zr.firstToLower(p.name)+" = source."+m.Zr.firstToLower(p.name)+";\r\n"});let s="//2 Expression Lambda \r\n";1==i.length?s+="a => a."+i[0].name+"\r\n":(s+="var exp = ExpressionHelper.CreateExpression<"+t.name+">(a => new {\r\n",i.forEach((p,Z)=>{s+="  a."+p.name,Z<i.length-1&&(s+=","),s+="\r\n"}),s+="};\r\n");let l="//3 C# Ctor \r\n";l+=t.name+" "+m.Zr.firstToLower(t.name)+" = new "+t.name+"(){\r\n",i.forEach((p,Z)=>{l+="  "+p.name+" = source."+p.name,Z<i.length-1&&(l+=","),l+="\r\n"}),l+="};\r\n",this.tsCode=a+"\r\n"+s+"\r\n"+l,this.codeTitle=t.name+" Lambda",this.showCode=!0}closeModal(){this.showCode=!1}modelViewTypeChanged(){localStorage.setItem("tsModelViewType",this.tsModelViewType)}isShowPageQueryModelChanged(){localStorage.setItem("isShowPageQueryModel",this.isShowPageQueryModel.toString())}tsServiceTypeChanged(){localStorage.setItem("tsServiceType",this.tsServiceType)}onKeyDownHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!0,t.preventDefault();break;case 17:this.isCtrlDown=!0,t.preventDefault();break;case 37:break;case 38:t.preventDefault();break;case 39:break;case 40:t.preventDefault()}}onKeyUpHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!1,t.preventDefault();break;case 17:this.isCtrlDown=!1,t.preventDefault()}}goback(){history.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g.gz),e.Y36(h.s))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-codeviewer"]],decls:8,vars:6,consts:[[2,"padding","20px 80px"],[4,"ngIf"],[3,"nzVisible","nzTitle","nzCancelText","nzWidth","nzVisibleChange","nzOnCancel","nzOnOk"],["nz-input","","spellcheck","false",1,"wp100","bgcolor-code","scrolly",2,"height","calc( 100vh - 320px)","border","none","box-shadow","none"],[1,"mt10","ml10","f-size12"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size26"],[1,"color-lightblue"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt10","minh500"],["nzSize","large",3,"nzAnimated"],["nzTitle","Models",4,"ngIf"],["nzTitle","Services",4,"ngIf"],[1,"mt20","ml16","f-size12"],[1,"mt10"],[1,"f-size16"],["nzTitle","Models"],[1,"f-size18"],[1,"lineblock","ml80"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["class","ml50","nz-checkbox","",3,"ngModel","ngModelChange",4,"ngIf"],["nz-checkbox","",1,"ml50",3,"ngModel","ngModelChange"],["nzSize","small"],["class","mt10 mb20 pr56",4,"ngFor","ngForOf"],[1,"mt10","mb20","pr56"],[1,"pl5"],[1,"f-size16",2,"color","#1890ff"],[1,"ml10",2,"max-width","60%",3,"title"],[1,"pull-right","mr80"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"w100",3,"click"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml20","w80",3,"click"],["tabindex","1",3,"keyup","keydown"],["nzSize","small",1,"mt5","modelTable",3,"nzBordered","nzShowPagination","nzPageSize","nzData"],["tsModelTable",""],[1,"wp25",3,"nzShowSort","nzSortFn"],[1,"wp15",3,"nzShowSort","nzSortFn"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],["nzSize","small",1,"bgcolor-code"],["nzTitle","Services"],["nz-radio","","nzValue","3"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Ue,22,8,"div",1),e.TgZ(2,"nz-modal",2),e.NdJ("nzVisibleChange",function(a){return i.showCode=a})("nzOnCancel",function(){return i.closeModal()})("nzOnOk",function(){return i.closeModal()}),e.TgZ(3,"textarea",3),e._uU(4),e.qZA(),e.TgZ(5,"div"),e.TgZ(6,"label",4),e._uU(7,"Not all code is useful, the generated code is for reference only"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",i.itemId),e.xp6(1),e.Q6J("nzVisible",i.showCode)("nzTitle",i.codeTitle)("nzCancelText",null)("nzWidth",800),e.xp6(2),e.Oqu(i.tsCode))},directives:[d.O5,qe.du,z.Zp,u.SK,u.t3,A.ix,x.w,Se.bd,y.xH,y.xw,T.Dg,f.JJ,f.On,T.Of,q.Ie,d.sg,_.N8,_.Om,_.$Z,_.Uo,_._C,_.qD,_.p0],pipes:[d.rS],styles:[".modelTable tbody>tr.selected{background-color:#e8f8fe}  .modelTable tbody>tr:hover{background-color:#e8f8fe}  .ant-modal-body{padding:12px 24px 5px}div[_ngcontent-%COMP%]::selection{background:transparent!important;color:inherit}div[_ngcontent-%COMP%]:focus{outline:-webkit-focus-ring-color auto 0px;outline-style:auto;outline-width:0px}"]}),n})(),data:{title:"Ts"}}]},{path:"index",component:$.l,children:[{path:"",component:E,data:{reuse:!0}}]}];let Je=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[g.Bz.forChild(Ie)],g.Bz]}),n})();var Fe=c(8605),Qe=c(4805);let Ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[h.s],imports:[[Fe.m,Qe.x,Je]]}),n})()}}]);