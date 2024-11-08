import{$ as oe,$a as Ht,A as U,Aa as Vt,B as vt,Ba as At,C as Tt,Ca as me,D as St,Da as se,E as R,Ea as Ot,F as s,Fa as Rt,G as z,Ga as ke,H as M,Ha as he,I as L,J as D,K as E,Ka as de,La as pe,M as Nt,Ma as G,N as Pe,Na as _e,O as bt,Oa as $,P as xt,Pa as H,Q as Le,Qa as Q,Ra as K,Sa as X,T as ne,Ta as Wt,U as W,Ua as qt,V as wt,Va as ce,Wa as jt,Xa as Ut,Za as Gt,_a as $t,aa as ae,b as be,bb as J,c as O,cb as Qt,d as xe,db as Kt,e as gt,ea as ge,eb as Xt,f as h,fa as dt,fb as Jt,g as _,ga as De,gb as y,h as r,ha as q,hb as Yt,i as F,ib as Z,j as g,ja as ze,jb as B,k as p,ka as j,kb as ee,l as we,la as Ee,lb as te,m as zt,ma as Ce,mb as ie,n as st,na as It,o as Ie,oa as Pt,p as fe,q as ye,r as m,ra as Lt,s as l,sa as le,t as k,ta as re,u as Ct,v as ht,va as Dt,w as I,wa as Et,x,xa as kt,y as u,ya as Mt,z as _t,za as Ft}from"./chunk-H3FUHGP3.js";var Me=class o{transform(t,e,n){if(!t)return[];let i=t;if(e){let a=e.toLowerCase();i=t.filter(d=>{let c=!1;return c=d.areaName&&d.areaName.toLowerCase().indexOf(a)>=0||d.controllerName&&d.controllerName.toLowerCase().indexOf(a)>=0||d.summary&&d.summary.toLowerCase().indexOf(a)>=0||d.actionList.filter(f=>f.actionName.toLowerCase().indexOf(a)>=0||f.summary&&f.summary.toLowerCase().indexOf(a)>=0).length>0,c})}return i.length>0&&n&&n.length>0&&(i=i.filter(a=>n.filter(d=>d.areaName==a.areaName).length>0)),i}static \u0275fac=function(e){return new(e||o)};static \u0275pipe=gt({name:"controllerFilter",type:o,pure:!0})};function oi(o,t){o&1&&k(0,"i",27)}function ai(o,t){if(o&1){let e=I();m(0,"div",31)(1,"label",37),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isSelected,i)||(a.isSelected=i),_(i)}),x("ngModelChange",function(){let i=h(e).$implicit,a=u(3);return _(a.areaSelectChange(i))}),s(2),l()()}if(o&2){let e=t.$implicit,n=t.index;r(),zt("",n>1?"mt5":""," cursor-Hand"),L("ngModel",e.isSelected),r(),M(" ",e.displayName,"")}}function li(o,t){if(o&1){let e=I();m(0,"div")(1,"div",28)(2,"div",29)(3,"div",30)(4,"div",31)(5,"label",32),s(6,"Areas"),l()(),m(7,"div",33)(8,"label",34),E("ngModelChange",function(i){h(e);let a=u(2);return D(a.isAllAreaSelected,i)||(a.isAllAreaSelected=i),_(i)}),x("ngModelChange",function(){h(e);let i=u(2);return _(i.allSelectAreaChange())}),s(9,"All"),l()()(),m(10,"div",35),g(11,ai,3,5,"div",36),l()()()()}if(o&2){let e=u(2);r(8),L("ngModel",e.isAllAreaSelected),p("nzIndeterminate",e.isAreaSelectIndeterminate),r(3),p("ngForOf",e.areaList)}}function ri(o,t){if(o&1){let e=I();m(0,"li",38),x("click",function(){h(e);let i=u(2);return _(i.displayAll())}),s(1," Display All "),l()}if(o&2){let e=u(2);p("nzSelected",e.isDisplayAllMenuSelected)}}function mi(o,t){if(o&1){let e=I();m(0,"li",39)(1,"a",40),x("click",function(){let i=h(e).$implicit,a=u(2);return _(a.onSelectController(i))}),s(2),m(3,"span",41),s(4),l()()()}if(o&2){let e=t.$implicit;p("nzSelected",e.isSelected),r(2),M(" ",e.controllerName," "),r(2),z(e.summary)}}function si(o,t){if(o&1){let e=I();m(0,"nz-affix")(1,"div",14)(2,"div",2)(3,"div",15)(4,"nz-input-group",16)(5,"input",17),E("ngModelChange",function(i){h(e);let a=u();return D(a.searchText,i)||(a.searchText=i),_(i)}),l()(),g(6,oi,1,0,"ng-template",null,0,Le),l(),m(8,"div",18)(9,"a",19),x("click",function(){h(e);let i=u();return _(i.showAreaFilter=!i.showAreaFilter)}),k(10,"i",20),l(),m(11,"a",21),x("click",function(){h(e);let i=u();return _(i.refreshControllerList())}),k(12,"i",22),l()()(),g(13,li,12,3,"div",5),l(),m(14,"section",23)(15,"ul",24),g(16,ri,2,1,"li",25)(17,mi,5,3,"li",26),Pe(18,"controllerFilter"),l()()()}if(o&2){let e=R(7),n=u();r(4),p("nzSuffix",e),r(),L("ngModel",n.searchText),r(8),p("ngIf",n.showAreaFilter),r(3),p("ngIf",(n.controllerList==null?null:n.controllerList.length)>0&&!n.searchText&&!n.isAreaSelectIndeterminate),r(),p("ngForOf",xt(18,5,n.controllerList,n.searchText,n.selectedArea))}}function di(o,t){if(o&1&&(m(0,"span")(1,"nz-tag",54),s(2),l()()),o&2){let e=t.$implicit,n=t.index,i=u(2);r(),p("nzColor",n<i.tagcolor.length-1?i.tagcolor[n]:i.tagcolor[0]),r(),M(" ",e.name," ")}}function pi(o,t){if(o&1&&(m(0,"label",55),s(1),l()),o&2){let e=u().$implicit;r(),M(" ",e.summary,"")}}function ci(o,t){if(o&1&&(m(0,"div",14)(1,"nz-tag",54),s(2),l()()),o&2){let e=t.$implicit,n=t.index,i=u(3);r(),p("nzColor",n<i.tagcolor.length-1?i.tagcolor[n]:i.tagcolor[0]),r(),M(" ",e.name," ")}}function ui(o,t){if(o&1&&(m(0,"tr")(1,"td")(2,"a",56),s(3),l()(),m(4,"td"),g(5,ci,3,2,"div",57),l(),m(6,"td"),s(7),l()()),o&2){let e=t.$implicit;r(2),U("routerLink","/workbench/action/",e.id,""),r(),M(" ",(e.areaName?e.areaName+"/":"")+e.controllerName+"/"+e.actionName," "),r(2),p("ngForOf",e.customAttrList),r(2),z(e.summary)}}function fi(o,t){if(o&1&&(m(0,"div")(1,"div",42)(2,"div",43)(3,"div",44)(4,"h2",45),s(5),l(),m(6,"label",46),g(7,di,3,2,"span",12),l()(),m(8,"div",47),g(9,pi,2,1,"label",48),m(10,"a",49),s(11,"View Code"),l()()(),m(12,"div",50)(13,"nz-table",51,1)(15,"thead")(16,"tr")(17,"th",52),s(18,"API"),l(),m(19,"th",53),s(20,"Attr"),l(),m(21,"th"),s(22,"Summary"),l()()(),m(23,"tbody"),g(24,ui,8,5,"tr",12),l()()()()()),o&2){let e=t.$implicit,n=R(14),i=u();r(5),z(e.controllerName),r(2),p("ngForOf",e.customAttrList),r(2),p("ngIf",e.summary),r(),U("routerLink","/workbench/codeviewer/controller/",e.id,""),r(3),p("nzShowPagination",!1)("nzSize",i.actionTableSize)("nzPageSize",1e3)("nzData",e.actionList),r(11),p("ngForOf",n.data)}}var Fe=class o{constructor(t){this.apiSvc=t;let e=localStorage.getItem("actionTableSize");this.actionTableSize=e||"middle"}showControllerList=!0;isDisplayAllMenuSelected=!0;tagcolor=["cyan","geekblue","blue","purple"];actionTableSize="middle";searchText="";controllerList=[];selectedController=[];queryAmount=3;areaList=[];selectedArea=[];showAreaFilter=!1;isAllAreaSelected=!1;isAreaSelectIndeterminate=!1;ngOnInit(){this.initControllerList()}onReuseFlag=!1;_onReuseInit(){this.onReuseFlag?(this.showControllerList=!1,setTimeout(()=>{this.showControllerList=!0},1),this.onReuseFlag=!1):this.onReuseFlag=!0}_onReuseDestroy(){}initControllerList(){this.searchText="",this.isDisplayAllMenuSelected=!1,this.controllerList=[],this.apiSvc.getControllerList().subscribe(t=>{this.controllerList=t,this.initAreaList(),this.initControllerDetail(0),this.displayAll()})}initControllerDetail(t){let e=[],n=0;for(n=0;t+n<this.controllerList.length&&(e.push(this.controllerList[t+n].id),n!=this.queryAmount-1);n++);t+=n+1,this.apiSvc.getControllerListByIds(e).subscribe({next:i=>{i.forEach(a=>{let d=this.controllerList.filter(c=>c.id==a.id);d&&d.length>0&&(d[0].summary=a.summary,d[0].actionList=a.actionList)})},error:i=>{console.log("error:",i),t<this.controllerList.length&&this.initControllerDetail(t)},complete:()=>{t<this.controllerList.length&&this.initControllerDetail(t)}})}initAreaList(){this.areaList=[],this.selectedArea=[],this.controllerList&&(this.controllerList.forEach(t=>{if(this.areaList.filter(e=>e.areaName==t.areaName).length<=0){let e={areaName:t.areaName,displayName:t.areaName?t.areaName:"None",isSelected:!1};this.areaList.push(e)}}),this.areaList.sort((t,e)=>{let n=0;return t.areaName!=e.areaName&&(n=t.areaName>=e.areaName?1:-1),n}))}allSelectAreaChange(){this.areaList.forEach(t=>{t.isSelected=this.isAllAreaSelected}),this.selectedArea=this.areaList.filter(t=>t.isSelected)}areaSelectChange(t){this.areaList.filter(e=>!e.isSelected).length<=0?(this.isAllAreaSelected=!0,this.isAreaSelectIndeterminate=!1):this.areaList.filter(e=>e.isSelected).length<=0?(this.isAllAreaSelected=!1,this.isAreaSelectIndeterminate=!1):this.isAreaSelectIndeterminate=!0,this.selectedArea=this.areaList.filter(e=>e.isSelected)}refreshControllerList(){this.initControllerList()}onSelectController(t){this.selectedController=[],this.selectedController.push(t),console.log(t),this.controllerList.forEach(e=>{e!=t?e.isSelected=!1:e.isSelected=!0}),this.isDisplayAllMenuSelected=!1}displayAll(){this.selectedController=this.controllerList,this.isDisplayAllMenuSelected=!0,this.controllerList.forEach(t=>{t.isSelected=!1})}actionTableSizeChanged(){localStorage.setItem("actionTableSize",this.actionTableSize)}static \u0275fac=function(e){return new(e||o)(F(J))};static \u0275cmp=O({type:o,selectors:[["app-workbench"]],decls:16,vars:3,consts:[["suffixIcon",""],["actionTable",""],["nz-row",""],["nz-col","","nzSpan","5",1,"p5"],[1,"main-menu"],[4,"ngIf"],["nz-col","","nzSpan","19",2,"width","calc(100% - 280px)"],[1,"p20",2,"min-height","calc( 100vh - 100px )"],[1,"pull-right","mrp18"],[3,"ngModelChange","ngModel"],["nz-radio","","nzValue","middle"],["nz-radio","","nzValue","small"],[4,"ngFor","ngForOf"],[1,"pb20"],[1,"mt5"],["nz-col","","nzSpan","18"],["nzSize","small",3,"nzSuffix"],["placeholder","Search","nz-input","",3,"ngModelChange","ngModel"],["nz-col","","nzSpan","4",1,"lh24"],["title","Area Filter",1,"ml5",3,"click"],["nz-icon","","nzType","appstore","nzTheme","outline"],["title","Refresh",1,"ml5",3,"click"],["nz-icon","","nzType","sync","nzTheme","outline"],[1,"main-menu-inner"],["nz-menu","","nzMode","inline"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],["nz-menu-item","",3,"nzSelected",4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[1,"mt3"],[1,"mt3","p10","border-lightgray","border-radius"],["nz-row","",1,"border-bottom","pb10"],["nz-col","","nzSpan","12"],[1,"fw600","f-size16"],["nz-col","","nzSpan","12",1,"lh24"],["nz-checkbox","",3,"ngModelChange","ngModel","nzIndeterminate"],["nz-row","",1,"mt5"],["nz-col","","nzSpan","12",4,"ngFor","ngForOf"],["nz-checkbox","",3,"ngModelChange","ngModel"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected"],[1,"overxhiden",3,"click"],[1,"ml8","f-size12",2,"color","#a5a5a5"],[1,"p10","mt10"],[1,"pl10"],[1,"vcenter"],[1,"lineblock",2,"font-size","26px"],[1,"ml40",2,"vertical-align","text-bottom"],[1,"wp90","lh24"],["class","f-size12","style","max-width: 80%;",4,"ngIf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"pull-right","mr20","w80",3,"routerLink"],[1,"wp90","mt5"],[3,"nzShowPagination","nzSize","nzPageSize","nzData"],[1,"wp33"],[1,"wp15"],[3,"nzColor"],[1,"f-size12",2,"max-width","80%"],[1,"actionLink",3,"routerLink"],["class","mt5",4,"ngFor","ngForOf"]],template:function(e,n){e&1&&(m(0,"div")(1,"div",2)(2,"div",3)(3,"div",4),g(4,si,19,9,"nz-affix",5),l()(),m(5,"div",6)(6,"div",7)(7,"div",8)(8,"nz-radio-group",9),E("ngModelChange",function(a){return D(n.actionTableSize,a)||(n.actionTableSize=a),a}),x("ngModelChange",function(){return n.actionTableSizeChanged()}),m(9,"label",10),s(10,"Large"),l(),m(11,"label",11),s(12,"Small"),l()()(),g(13,fi,25,10,"div",12),l(),m(14,"div",13),k(15,"layout-footer"),l()()()()),e&2&&(r(4),p("ngIf",n.showControllerList),r(4),L("ngModel",n.actionTableSize),r(5),p("ngForOf",n.selectedController))},dependencies:[ne,W,Lt,le,re,ge,Dt,j,q,he,Vt,Ft,pe,de,De,Et,Mt,kt,se,me,Q,G,$,X,H,K,ce,Ht,Me],styles:[".ant-menu-vertical>.ant-menu-item, .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-item[_ngcontent-%COMP%], .ant-menu-vertical[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-left[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-vertical-right[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%], .ant-menu-inline[_ngcontent-%COMP%] > .ant-menu-submenu[_ngcontent-%COMP%] > .ant-menu-submenu-title[_ngcontent-%COMP%]{height:35px;line-height:35px;min-height:35px;padding:0 10px!important}.main-menu-inner[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:hidden;max-height:calc(100vh - 100px)}.main-menu[_ngcontent-%COMP%]:hover   .main-menu-inner[_ngcontent-%COMP%]{overflow-y:auto}a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer;color:#2ea7e7}a[_ngcontent-%COMP%]:hover{text-decoration:none;color:#2f8bfa}.actionLink[_ngcontent-%COMP%]{color:#2ea7e7}"]})};function yi(o,t){if(o&1&&(m(0,"span")(1,"nz-tag",20),s(2),l()()),o&2){let e=t.$implicit,n=t.index,i=u(2);r(),p("nzColor",n<i.tagcolor.length-1?i.tagcolor[n]:i.tagcolor[0]),r(),M(" ",e.name," ")}}function gi(o,t){if(o&1&&(m(0,"div",21)(1,"label",22),s(2),l()()),o&2){let e=u(2);r(2),z(e.action.summary)}}function zi(o,t){if(o&1&&(m(0,"span")(1,"nz-tag",20),s(2),l()()),o&2){let e=t.$implicit,n=t.index,i=u(5);r(),p("nzColor",n<i.tagcolor.length-1?i.tagcolor[n]:i.tagcolor[0]),r(),M(" ",e.name," ")}}function Ci(o,t){if(o&1&&(m(0,"span")(1,"span"),s(2),l(),s(3," : "),m(4,"a",26),s(5),l(),m(6,"label",8),g(7,zi,3,2,"span",9),l(),m(8,"span",27),s(9),l()()),o&2){let e=u().$implicit;r(2),z(e.name),r(2),U("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),r(),z(e.typeName),r(2),p("ngForOf",e.customAttrList),r(2),z(e.summary)}}function hi(o,t){if(o&1&&(m(0,"label",25),g(1,Ci,10,6,"span",3),l()),o&2){let e=t.$implicit;r(),p("ngIf",e.hasPiList)}}function _i(o,t){if(o&1&&(m(0,"div",23),g(1,hi,2,1,"label",24),l()),o&2){let e=u(2);r(),p("ngForOf",e.action.inputParameters)}}function vi(o,t){o&1&&(m(0,"label",28),s(1,"(none)"),l())}function Ti(o,t){if(o&1&&(m(0,"span"),s(1),l()),o&2){let e=u().$implicit;r(),z(e.typeName)}}function Si(o,t){if(o&1&&(m(0,"a",26),s(1),l()),o&2){let e=u().$implicit;U("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),r(),z(e.typeName)}}function Ni(o,t){if(o&1&&(m(0,"div",23)(1,"nz-tag",20),s(2),l()()),o&2){let e=t.$implicit,n=t.index,i=u(4);r(),p("nzColor",n<i.tagcolor.length-1?i.tagcolor[n]:i.tagcolor[0]),r(),M(" ",e.name," ")}}function bi(o,t){if(o&1&&(m(0,"tr")(1,"td")(2,"span"),s(3),l()(),m(4,"td")(5,"span"),s(6),l()(),m(7,"td"),g(8,Ti,2,1,"span",3)(9,Si,2,3,"a",34),l(),m(10,"td"),g(11,Ni,3,2,"div",35),l(),m(12,"td"),s(13),l(),k(14,"td"),l()),o&2){let e=t.$implicit;r(3),z(e.name),r(3),z(e.summary),r(2),p("ngIf",!e.hasPiList),r(),p("ngIf",e.hasPiList),r(2),p("ngForOf",e.customAttrList),r(2),z(e.defaultValue)}}function xi(o,t){if(o&1&&(m(0,"div")(1,"nz-table",29,0)(3,"thead")(4,"tr")(5,"th",30),s(6,"Name"),l(),m(7,"th",31),s(8,"Summary"),l(),m(9,"th",30),s(10,"Type"),l(),m(11,"th",32),s(12,"Attr"),l(),m(13,"th",33),s(14,"Default"),l(),k(15,"th"),l()(),m(16,"tbody"),g(17,bi,15,6,"tr",9),l()()()),o&2){let e=R(2),n=u(2);r(),p("nzShowPagination",!1)("nzPageSize",1e3)("nzData",n.inputParams),r(4),p("nzShowSort",!0)("nzSortFn",n.nameSortFn),r(4),p("nzShowSort",!0)("nzSortFn",n.typeSortFn),r(8),p("ngForOf",e.data)}}function wi(o,t){if(o&1&&(m(0,"span"),s(1),l()),o&2){let e=u().$implicit;r(),z(e.typeName)}}function Ii(o,t){if(o&1&&(m(0,"a",26),s(1),l()),o&2){let e=u().$implicit;U("routerLink","/workbench/ptype/",e.isIEnumerable?e.enumItemId:e.typeId,""),r(),z(e.typeName)}}function Pi(o,t){if(o&1&&(m(0,"tr")(1,"td")(2,"span"),s(3),l()(),m(4,"td")(5,"span"),s(6),l()(),m(7,"td"),g(8,wi,2,1,"span",3)(9,Ii,2,3,"a",34),l(),k(10,"td"),l()),o&2){let e=t.$implicit;r(3),z(e.name),r(3),z(e.summary),r(2),p("ngIf",!e.hasPiList),r(),p("ngIf",e.hasPiList)}}function Li(o,t){if(o&1&&(m(0,"div")(1,"div",15)(2,"label",16),s(3,"ReturnParamters"),l(),m(4,"div",36)(5,"a",26),s(6),l(),m(7,"span",27),s(8),l()()(),m(9,"div")(10,"nz-table",29,1)(12,"thead")(13,"tr")(14,"th",30),s(15,"Name"),l(),m(16,"th",31),s(17,"Summary"),l(),m(18,"th",30),s(19,"Type"),l(),k(20,"th"),l()(),m(21,"tbody"),g(22,Pi,11,4,"tr",9),l()()()()),o&2){let e=R(11),n=u(2);r(5),U("routerLink","/workbench/ptype/",n.action.returnParameter.typeId,""),r(),z(n.action.returnParameter.typeName),r(2),z(n.action.returnParameter.summary),r(2),p("nzShowPagination",!1)("nzPageSize",1e3)("nzData",n.returnParams),r(4),p("nzShowSort",!0)("nzSortFn",n.nameSortFn),r(4),p("nzShowSort",!0)("nzSortFn",n.typeSortFn),r(4),p("ngForOf",e.data)}}function Di(o,t){o&1&&(m(0,"label",42),s(1,"(none)"),l())}function Ei(o,t){if(o&1&&(m(0,"span"),s(1),l()),o&2){let e=u().$implicit;r(),z(e.typeName)}}function ki(o,t){if(o&1&&(m(0,"a"),s(1),l()),o&2){let e=u().$implicit;r(),z(e.typeName)}}function Mi(o,t){if(o&1&&(m(0,"tr")(1,"td"),g(2,Ei,2,1,"span",3)(3,ki,2,1,"a",3),l(),m(4,"td")(5,"span"),s(6),l()(),k(7,"td"),l()),o&2){let e=t.$implicit;r(2),p("ngIf",!e.hasPiList),r(),p("ngIf",e.hasPiList),r(3),z(e.summary)}}function Fi(o,t){if(o&1&&(m(0,"div",37)(1,"div",38)(2,"label",39),s(3,"ReturnParamters"),l(),g(4,Di,2,0,"label",40),l(),m(5,"div")(6,"nz-table",41,1)(8,"thead")(9,"tr")(10,"th",33),s(11,"Type"),l(),m(12,"th",31),s(13,"Summary"),l(),k(14,"th"),l()(),m(15,"tbody"),g(16,Mi,8,3,"tr",9),l()()()()),o&2){let e=R(7),n=u(2);r(4),p("ngIf",(n.returnParams==null?null:n.returnParams.length)<=0),r(2),p("nzShowPagination",!1)("nzData",n.returnParams),r(10),p("ngForOf",e.data)}}function Vi(o,t){if(o&1&&(m(0,"div")(1,"div")(2,"div",4)(3,"div",5)(4,"div",6)(5,"label",7),s(6),l(),m(7,"label",8),g(8,yi,3,2,"span",9),l(),m(9,"a",10),s(10,"View Code"),l()(),g(11,gi,3,1,"div",11),l(),m(12,"div",12)(13,"a",13),s(14,"Return"),l()()()(),m(15,"div",14)(16,"div")(17,"div")(18,"div",15)(19,"label",16),s(20,"InputParamters"),l(),g(21,_i,2,1,"div",17)(22,vi,2,0,"label",18),l(),g(23,xi,18,8,"div",3),l()(),m(24,"div",14),g(25,Li,23,12,"div",3)(26,Fi,17,4,"div",19),l()()()),o&2){let e=u();r(6),M(" ",(e.action.areaName?e.action.areaName+"/":"")+e.action.controllerName+"/"+e.action.actionName," "),r(2),p("ngForOf",e.action.customAttrList),r(),U("routerLink","/workbench/codeviewer/action/",e.action.id,""),r(2),p("ngIf",e.action.summary),r(6),we((e.inputParams==null?null:e.inputParams.length)>0?"":"border-bottom"),r(4),p("ngIf",e.inputParams.length>0),r(),p("ngIf",e.inputParams.length<=0),r(),p("ngIf",e.inputParams.length>0),r(2),p("ngIf",e.action.returnParameter.hasPiList),r(),p("ngIf",!e.action.returnParameter.hasPiList)}}var Oe=class o{constructor(t,e){this.routerParams=t;this.apiSvc=e}actionId;action;tagcolor=["cyan","geekblue","blue","purple"];inputParams=[];returnParams=[];ngOnInit(){this.actionId=this.routerParams.snapshot.paramMap.get("actionId"),this.getAction()}getAction(){this.apiSvc.getAction(this.actionId).subscribe(t=>{this.action=t;let e=t.controllerName+"/"+t.actionName+" - Api Helper";oe.setTitle(e),t&&t.inputParameters&&t.inputParameters.forEach(n=>{n.hasPiList&&!n.isEnum?this.apiSvc.getPType(n.typeId).subscribe(i=>{i.piList.forEach(a=>{this.inputParams.filter(d=>d.name==a.name).length<=0&&this.inputParams.push(a)})}):this.inputParams.push(n)}),t&&t.returnParameter&&(t.returnParameter.hasPiList&&!t.returnParameter.isEnum?this.apiSvc.getPType(t.returnParameter.typeId).subscribe(n=>{this.returnParams=n.piList}):this.returnParams.push(t.returnParameter))})}nameSortFn(t,e,n){return t.name.localeCompare(e.name)}typeSortFn(t,e,n){return t.typeName.localeCompare(e.typeName)}static \u0275fac=function(e){return new(e||o)(F(ae),F(J))};static \u0275cmp=O({type:o,selectors:[["app-action"]],decls:2,vars:1,consts:[["inputParamsTable",""],["returnParamsTable",""],[1,"content"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size30"],[1,"ml40"],[4,"ngFor","ngForOf"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","","routerLink","/workbench/index",1,"ml50","w80"],[1,"mt30"],[1,"p10"],[1,"f-size18","fw500"],["class","mt5",4,"ngIf"],["class","ml5 f-size18",4,"ngIf"],["class","border-bottom",4,"ngIf"],[3,"nzColor"],[1,"mt10"],[1,"f-size16"],[1,"mt5"],["class","f-size14",4,"ngFor","ngForOf"],[1,"f-size14"],[3,"routerLink"],[1,"ml20"],[1,"ml5","f-size18"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],[1,"w240",3,"nzShowSort","nzSortFn"],[1,"wp30"],[1,"wp10"],[1,"w240"],[3,"routerLink",4,"ngIf"],["class","mt5",4,"ngFor","ngForOf"],[1,"mt5","f-size14"],[1,"border-bottom"],[1,"p10","f-size18"],[1,"fw500"],["class","ml5",4,"ngIf"],["nzSize","small",3,"nzShowPagination","nzData"],[1,"ml5"]],template:function(e,n){e&1&&(m(0,"div",2),g(1,Vi,27,13,"div",3),l()),e&2&&(r(),p("ngIf",n.action))},dependencies:[ne,W,ge,j,q,pe,de,Q,_e,G,$,X,H,K,ce]})};function Ai(o,t){if(o&1&&(m(0,"div",17)(1,"label",18),s(2),l()()),o&2){let e=u(2);r(2),z(e.ptype.summary)}}function Oi(o,t){if(o&1&&(m(0,"th",13),s(1,"Value"),l()),o&2){let e=u(2);p("nzShowSort",!0)("nzSortFn",e.valueSortFn)}}function Ri(o,t){if(o&1&&(m(0,"th",13),s(1,"Type"),l()),o&2){let e=u(2);p("nzShowSort",!0)("nzSortFn",e.typeSortFn)}}function Wi(o,t){if(o&1&&(m(0,"td",20),s(1),l()),o&2){let e=u().$implicit;r(),z(e.paramValue)}}function qi(o,t){if(o&1&&(m(0,"span"),s(1),l()),o&2){let e=u(2).$implicit;r(),z(e.typeName)}}function ji(o,t){if(o&1){let e=I();m(0,"a",22),x("click",function(){h(e);let i=u(2).$implicit,a=u(2);return _(a.viewPType(i))}),s(1),l()}if(o&2){let e=u(2).$implicit;r(),z(e.typeName)}}function Ui(o,t){if(o&1&&(m(0,"td"),g(1,qi,2,1,"span",2)(2,ji,2,1,"a",21),l()),o&2){let e=u().$implicit;r(),p("ngIf",!e.hasPiList),r(),p("ngIf",e.hasPiList)}}function Gi(o,t){if(o&1&&(m(0,"tr")(1,"td")(2,"span"),s(3),l()(),g(4,Wi,2,1,"td",19),m(5,"td")(6,"span"),s(7),l()(),g(8,Ui,3,2,"td",2),k(9,"td"),l()),o&2){let e=t.$implicit,n=u(2);r(3),z(e.name),r(),p("ngIf",n.ptype.isEnum),r(3),z(e.summary),r(),p("ngIf",!n.ptype.isEnum)}}function $i(o,t){if(o&1){let e=I();m(0,"div")(1,"div")(2,"div",3)(3,"div",4)(4,"div",5)(5,"label",6),s(6),l(),m(7,"a",7),s(8,"View Code"),l()(),g(9,Ai,3,1,"div",8),l(),m(10,"div",9)(11,"a",10),x("click",function(){h(e);let i=u();return _(i.goback())}),s(12,"Return"),l()()()(),m(13,"div",11)(14,"nz-table",12,0)(16,"thead")(17,"tr")(18,"th",13),s(19,"Name"),l(),g(20,Oi,2,2,"th",14),m(21,"th",15),s(22,"Summary"),l(),g(23,Ri,2,2,"th",14),k(24,"th"),l()(),m(25,"tbody"),g(26,Gi,10,4,"tr",16),l()()()()}if(o&2){let e=R(15),n=u();r(6),M(" ",n.ptype.typeName," "),r(),U("routerLink","/workbench/codeviewer/ptype/",n.ptype.isIEnumerable?n.ptype.enumItemId:n.ptype.id,""),r(2),p("ngIf",n.ptype.summary),r(5),p("nzShowPagination",!1)("nzPageSize",1e3)("nzData",n.ptype.piList),r(4),p("nzShowSort",!0)("nzSortFn",n.nameSortFn),r(2),p("ngIf",n.ptype.isEnum),r(3),p("ngIf",!n.ptype.isEnum),r(3),p("ngForOf",e.data)}}var Re=class o{constructor(t,e){this.routerParams=t;this.apiSvc=e}ptypeId;ptype;ngOnInit(){this.routerParams.params.subscribe(t=>{this.ptypeId=t.ptypeId,this.getPType()})}getPType(){this.apiSvc.getPType(this.ptypeId).subscribe(t=>{this.ptype=t;let e=t.typeName+" - Api Helper";oe.setTitle(e)})}viewPType(t){oe.goTo("/workbench/ptype/"+(t.isIEnumerable?t.enumItemId:t.typeId),{replaceUrl:!0}),history.pushState(null,null,location.href)}nameSortFn(t,e,n){return t.name.localeCompare(e.name)}valueSortFn(t,e,n){return t.paramValue-e.paramValue}typeSortFn(t,e,n){return t.typeName.localeCompare(e.typeName)}goback(){history.back()}static \u0275fac=function(e){return new(e||o)(F(ae),F(J))};static \u0275cmp=O({type:o,selectors:[["app-ptype"]],decls:2,vars:1,consts:[["piListTable",""],[2,"padding","20px 80px"],[4,"ngIf"],["nz-row",""],["nz-col","","nzSpan","20",1,"p10"],[1,"lh40"],[1,"f-size30"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"routerLink"],["class","mt10",4,"ngIf"],["nz-col","","nzSpan","4",1,"h60","lh60","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt30"],["nzSize","small",3,"nzShowPagination","nzPageSize","nzData"],[1,"w240",3,"nzShowSort","nzSortFn"],["class","w240",3,"nzShowSort","nzSortFn",4,"ngIf"],[1,"wp30"],[4,"ngFor","ngForOf"],[1,"mt10"],[1,"f-size16"],["class","pl20",4,"ngIf"],[1,"pl20"],[3,"click",4,"ngIf"],[3,"click"]],template:function(e,n){e&1&&(m(0,"div",1),g(1,$i,27,12,"div",2),l()),e&2&&(r(),p("ngIf",n.ptype))},dependencies:[ne,W,ge,j,q,pe,de,Q,_e,G,$,X,H,K]})};var We=class{static getListPageHtmlCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<div>
    <nz-page-header class="contentPageHeader">
        <nz-page-header-subtitle>@modelSummary</nz-page-header-subtitle>
        <nz-page-header-extra>
            <button nz-button [nzType]="'primary'" (click)="add@modelName()">\u65B0\u589E</button>
        </nz-page-header-extra>
    </nz-page-header>
    <!--Content-->
    <nz-card [nzSize]="'small'">
        @queryFormCode
    </nz-card>
    <nz-card class="mt5">
        @tableListCode
    </nz-card>
</div>`,c=this.getQueryFormCode(t),f=this.getTableListCode(t);return a=d.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@queryFormCode/g,c).replace(/@tableListCode/g,f),a}static getQueryFormCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<form nz-form>
            <div class="pt24">@queryItemCode
            </div>
            <div *ngIf="isShowMore">@queryMoreItemCode
            </div>
            <div nz-row>
                <div nz-col [nzSpan]="24" class="tar">
                    <button nz-button [nzType]="'primary'" (click)="query@modelClassNameList(true)">\u67E5\u8BE2</button>
                    <button nz-button (click)="resetForm()" class="ml20 mr20">\u91CD\u7F6E</button>
                    <a class="collapse" (click)="isShowMore = !isShowMore">
                        {{ isShowMore ? '\u6536\u8D77' : '\u9AD8\u7EA7' }}
                        <span nz-icon [nzType]="isShowMore ? 'up' : 'down'"></span>
                    </a>
                </div>
            </div>
        </form>`,c=0,f=t.piList.filter(v=>v.isQuery),T="",C="";for(let v of f){let w=this.getQueryItemCode(t,v);c<=5?(c%3==0&&(T+=`
                <div nz-row [nzGutter]="24">`),T+=w,(c%3==2||c==f.length-1)&&(T+=`
                </div>`)):(c%3==0&&(C+=`
                <div nz-row [nzGutter]="24">`),C+=w,(c%3==2||c==f.length-1)&&(C+=`
                </div>`)),c++}return a=d.replace(/@queryItemCode/g,T).replace(/@queryMoreItemCode/g,C).replace(/@modelClassName/g,n),a}static getQueryItemCode(t,e){let n="",i="",a=y.firstToLower(t.name),d=t.name,c=t.summary?t.summary:a,f=y.firstToLower(e.name),T=e.summary?e.summary:f;return e.queryDisplayType=="RadioGroup"?i=`<div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="10" [nzLg]="10">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-radio-group name="@piName" [(ngModel)]="queryObj.@piName"
                                    (ngModelChange)="query@modelClassNameList(true)">
                                    <label nz-radio [nzValue]="null">\u5168\u90E8</label>
                                    <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                                </nz-radio-group>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="Select"?i=`<div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="10" [nzLg]="10">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-select name="@piName" [(ngModel)]="queryObj.@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                                    <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                        [nzLabel]="@piName.displayName"></nz-option>
                                </nz-select>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="DatePicker"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-date-picker name="@piName" [(ngModel)]="queryObj.@piNameRange"></nz-date-picker>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="RangePicker"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>
                                <nz-range-picker name="@piName" [(ngModel)]="queryObj.@piNameRange"></nz-range-picker>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="Checkbox"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piSummary</nz-form-label>
                            <nz-form-control>                            
                                <label nz-checkbox name="@piName" [(ngModel)]="queryObj.@piName">@piSummary</label>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:e.queryDisplayType=="InputNumber"?i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piName</nz-form-label>
                            <nz-form-control>
                                <nz-input-group [nzSuffix]="inputClearTpl">
                                    <input nz-input name="@piName" type="number" [(ngModel)]="queryObj.@piName"
                                        placeholder="\u8BF7\u8F93\u5165@piSummary" />
                                </nz-input-group>
                                <ng-template #inputClearTpl>
                                    @if (queryObj.@piName) {
                                    <span nz-icon class="ant-input-clear-icon" nzTheme="fill" nzType="close-circle"
                                        (click)="queryObj.@piName = null"></span>
                                    }
                                </ng-template>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`:i=`
                    <div nz-col [nzXs]="24" [nzSm]="12" [nzMd]="8" [nzLg]="8">
                        <nz-form-item>
                            <nz-form-label class="w80">@piName</nz-form-label>
                            <nz-form-control>
                                <nz-input-group [nzSuffix]="inputClearTpl">
                                    <input nz-input name="@piName" [(ngModel)]="queryObj.@piName"
                                        placeholder="\u8BF7\u8F93\u5165@piSummary" />
                                </nz-input-group>
                                <ng-template #inputClearTpl>
                                    @if (queryObj.@piName) {
                                    <span nz-icon class="ant-input-clear-icon" nzTheme="fill" nzType="close-circle"
                                        (click)="queryObj.@piName = null"></span>
                                    }
                                </ng-template>
                            </nz-form-control>
                        </nz-form-item>
                    </div>`,n=i.replace(/@modelClassName/g,d).replace(/@piName/g,f).replace(/@piSummary/g,T),n}static getTableListCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`<nz-table #@modelName nzSize='default' [nzFrontPagination]='false' nzShowSizeChanger [nzData]='@modelNameList'
          [nzLoading]='loading' [nzTotal]="totalCount" [nzShowTotal]="totalTemplate"
          [nzPageIndex]="queryObj.pageIndex" [nzPageSize]="queryObj.pageSize"
          (nzQueryParams)="onQueryParamsChange($event)">
          <thead>
              <tr>@theadListCode
              </tr>
          </thead>
          <tbody>
              @for (@modelName of @modelNameList; track $index) {
              <tr>@tbodyListCode
              </tr>
              }
          </tbody>
          <ng-template #totalTemplate let-total>
              <span class="mr10">\u5171 {{ total }} \u6761\u8BB0\u5F55</span>
          </ng-template>
      </nz-table>`,d=t.piList.filter(v=>v.isList),c="",f="";for(let v of d){let w=y.firstToLower(v.name),S=v.summary?v.summary:w,V=`
                <th nz-th${v.isListSort?' [nzSortFn]="true" nzColumnKey="@piName"':""}>@piSummary</th>`,P=`
                <td>{{ @modelName.@piName }}</td>`;v.listDisplayType=="Text"&&(v.tsType=="Date"?P=`
                <td>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</td>`:P=`
                <td>{{ @modelName.@piName }}</td>`),v.listDisplayType=="Tag"&&(P=`
                <td><nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag></td>`),v.listDisplayType=="Pre"?P=`
                <td><pre>{{ @modelName.@piName }}</pre></td>`:v.listDisplayType=="ProgressBar"?P=`
                <td><nz-progress [nzPercent]="@modelName.@piName" nzSize="small"></nz-progress></td>`:v.listDisplayType=="Rate"?P=`
                <td><nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate></td>`:v.listDisplayType=="Switch"?P=`
                <td><nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch></td>`:v.listDisplayType=="Checkbox"&&(P=`
                <td><label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label></td>`),V=V.replace(/@piName/g,w).replace(/@piSummary/g,S),P=P.replace(/@modelName/g,e).replace(/@piName/g,w),c+=V,f+=P}let T=`
                <th nz-th>\u64CD\u4F5C</th>`,C=`
                <td>
                    <a (click)="view@modelClassName(@modelName)">\u67E5\u770B</a>
                    <a (click)="edit@modelClassName(@modelName)" class="ml10">\u7F16\u8F91</a>
                    <a (click)="delete@modelClassName(@modelName)" class="ml10" [nzType]="'danger'">\u5220\u9664</a>
                </td>`;return c+=T,f+=C,a=a.replace("@theadListCode",c),a=a.replace("@tbodyListCode",f),a=a.replace(/@modelName/g,e),a=a.replace(/@modelClassName/g,n),a}};var N=class{static getEnumPiInitCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`
  /**
   * \u521D\u59CB\u5316@piSummary
   */
  init@piClassName(): void {
    this.enumSvc.getEnumItem('@piClassName').subscribe((items: EnumItem[]) => {
      this.@piNames = items;
    });
  }`;return a=a.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,n),a}static getKeyvalueItemPiInitCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`
  /**
   * \u521D\u59CB\u5316@piSummary\u5217\u8868
   */
  init@piClassNames(): void {
    this.keyvalueItemSvc.getKeyValueItemByCode("@piClassName").subscribe((items: KeyValueItem[]) => {
      // this.@piNameItems = items;
    });
  }`;return a=a.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,n),a}static getAddFunctionCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="";return t.editPageType=="Page"?a=`
  /*\u6DFB\u52A0@modelSummary*/
  add@modelClassName(): void {
    Util.goTo("/@modelNameedit/add");
  }`:a=`
  /*\u6DFB\u52A0@modelSummary*/
  add@modelClassName(): void {
    let @modelName = new @modelClassName();
    this.edit@modelClassName(@modelName);
  }`,a=a.replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getEditFunctionCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="";return t.editPageType=="Page"?a=`
  /*\u7F16\u8F91@modelSummary*/
  edit@modelClassName(@modelName: @modelClassName): void {
    Util.goTo("/@modelNameedit/edit/" + @modelName.id);
  }`:a=`
  /*\u7F16\u8F91@modelSummary*/
  edit@modelClassName(@modelName: @modelClassName): void {
    let title = @modelName.id ? "\u7F16\u8F91@modelSummary" : "\u6DFB\u52A0@modelSummary";
    const modal: NzModalRef = this.modalSvc.create({
      nzTitle: title,
      nzWidth: 720,
      nzContent: @modelClassNameEditModalComponent,
      nzData: { @modelName: @modelName },
      nzCentered: true,
      nzMaskClosable: false,
      nzNoAnimation: true,
      nzOkText: null,
      nzCancelText: null,
    });
    modal.afterClose.subscribe((result) => {
      if (result) {
        this.query@modelClassNameList(true);
      }
    });
  }`,a=a.replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getViewDetailFunctionCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="";return t.editPageType=="Page"?a=`
  /*\u67E5\u770B@modelSummary\u8BE6\u60C5*/
  view@modelClassName(@modelName: @modelClassName): void {
    Util.goTo("/systemmanage/@modelNamedetail/" + @modelName.id);
    //this.view@modelClassNameModal(@modelName);
  }`:a=`
  /*\u67E5\u770B@modelSummary\u8BE6\u60C5*/
  view@modelClassName(@modelName: @modelClassName): void {
    this.modalSvc.create({
      nzTitle: "\u67E5\u770B@modelSummary",
      nzWidth: 720,
      nzContent: @modelClassNameDetailModalComponent,
      nzData: { @modelNameId: @modelName.id },
      nzCentered: true,
      nzMaskClosable: false,
      nzNoAnimation: true,
      nzOkText: null,
      nzCancelText: null,
    });
  }`,a=a.replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static geteditCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`
  /**
   * \u521D\u59CB\u5316@piSummary\u5217\u8868
   */
  init@piClassNames(): void {
    this.keyvalueItemSvc.getKeyValueItemByCode("@piClassName").subscribe((items: KeyValueItem[]) => {
      // this.@piNameItems = items;
    });
  }`;return a=a.replace(/@piSummary/g,i).replace(/@piName/g,e).replace(/@piClassName/g,n),a}static getPiQueryDisplayType(t){let e="Input";return t.isEnum||t.isKeyvalueItem?e=Z.defaultQueryType:t.tsType==="Date"?e=te.defaultQueryType:t.tsType=="boolean"?e=ee.defaultQueryType:t.tsType=="number"?e=B.defaultQueryType:t.tsType=="string"?e=ie.defaultQueryType:e="Input",e}static getPiListDisplayType(t){let e="Text";return t.isEnum||t.isKeyvalueItem?e=Z.defaultListType:t.tsType=="Date"?e=te.defaultListType:t.tsType=="boolean"?e=ee.defaultListType:t.tsType=="number"?e=B.defaultListType:t.tsType=="string"?e=ie.defaultListType:e="Text",e}static getPiEditDisplayType(t){let e="Input";return t.isEnum||t.isKeyvalueItem?e=Z.defaultEditType:t.tsType=="Date"?e=te.defaultEditType:t.tsType=="boolean"?e=ee.defaultEditType:t.tsType=="number"?e=B.defaultEditType:t.tsType=="string"?e=ie.defaultEditType:e="Input",e}static getPiDetailDisplayType(t){let e="Text";return t.isEnum||t.isKeyvalueItem?e=Z.defaultDisplayType:t.tsType=="Date"?e=te.defaultDisplayType:t.tsType=="boolean"?e=ee.defaultDisplayType:t.tsType=="number"?e=B.defaultDisplayType:t.tsType=="string"?e=ie.defaultDisplayType:e="Text",e}static getPiQueryDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Z.getQueryType():t.tsType=="Date"?e=te.getQueryType():t.tsType=="boolean"?e=ee.getQueryType():t.tsType=="number"?e=B.getQueryType():t.tsType=="string"?e=ie.getQueryType():e=["Input"],e}static getPiListDisplayTypeList(t){let e=["Text"];return t.isEnum||t.isKeyvalueItem?e=Z.getDisplayType():t.tsType=="Date"?e=te.getDisplayType():t.tsType=="boolean"?e=ee.getDisplayType():t.tsType=="number"?e=B.getDisplayType():t.tsType=="string"?e=ie.getDisplayType():e.Text,e}static getPiEditDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Z.getEditType():t.tsType=="Date"?e=te.getEditType():t.tsType=="boolean"?e=ee.getEditType():t.tsType=="number"?e=B.getEditType():t.tsType=="string"?e=ie.getEditType():e=["Input"],e}static getPiDetailDisplayTypeList(t){let e=["Input"];return t.isEnum||t.isKeyvalueItem?e=Z.getDisplayType():t.tsType=="Date"?e=te.getDisplayType():t.tsType=="boolean"?e=ee.getDisplayType():t.tsType=="number"?e=B.getDisplayType():t.tsType=="string"?e=ie.getDisplayType():e=["Input"],e}};var qe=class o{static getListPageTsCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=o.getTsTemplate(),c="",f="",T="",C=t.piList.filter(v=>v.isQuery);if(C.filter(v=>v.isKeyvalueItem).length>0){let v=C.filter(w=>w.isKeyvalueItem);for(let w of v){let S=y.firstToLower(w.name),b=w.name;c+=`
  ${S}s: KeyvalueItem[] = [];`,T+=N.getKeyvalueItemPiInitCode(w),f+=`
    this.init${b}();`}}else if(C.filter(v=>v.isEnum).length>0){let v=C.filter(w=>w.isEnum);for(let w of v){let S=y.firstToLower(w.name),b=w.name;c+=`
  ${S}s: EnumItem[] = [];`,T+=N.getEnumPiInitCode(w),f+=`
    this.init${b}();`}}return T+=N.getAddFunctionCode(t),T+=N.getEditFunctionCode(t),T+=N.getViewDetailFunctionCode(t),a=d.replace(/@expandPropertyCode/g,c).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { NzTableQueryParams } from "ng-zorro-antd/table";
import { Util } from "@core/util";
import { @modelClassName, @modelClassNameQueryObj } from "@models/@modelName";
import { PageResult } from "@models/page";
import { EnumItem } from "@models/enumitem";
import { KeyValueItem } from "@models/keyvalue";
import { @modelClassNameService } from "@services/@modelNameservice";
import { EnumService } from "@services/enumservice";
import { KeyValueItemService } from "@services/keyvalueitemservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";
import { @modelClassNameDetailModalComponent } from "../@modelNamedetailmodal/@modelNamedetailmodal.component";

@Component({
  selector: "@modelName-@modelNamelist",
  templateUrl: "./@modelNamelist.component.html",
  styleUrl: "./@modelNamelist.component.less",
})
export class @modelClassNameListComponent implements OnInit {
  loading = false;
  totalCount: number = 0;
  queryObj: @modelClassNameQueryObj = new @modelClassNameQueryObj();
  @modelNameList: @modelClassName[] = [];  
  @expandPropertyCode

  constructor(
    private modalSvc: NzModalService,
    private enumSvc: EnumService,
    private keyvalueItemSvc: KeyValueItemService,
    private @modelNameSvc: @modelClassNameService
  ) {}

  ngOnInit(): void {
    Util.setTitle("@modelSummary\u7BA1\u7406");    
    @expandInitCode
    this.query@modelClassNameList();
  }
  
  /**
   * \u67E5\u8BE2\u53C2\u6570\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570
   *
   * @param params \u67E5\u8BE2\u53C2\u6570\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    if (
      this.queryObj.pageSize != pageSize ||
      this.queryObj.pageIndex != pageIndex ||
      this.queryObj.sort != sortField ||
      this.queryObj.order != sortOrder
    ) {
      // \u89E3\u51B3\u754C\u9762\u521D\u59CB\u5316\u65F6,\u81EA\u52A8\u89E6\u53D1\u67E5\u8BE2\u95EE\u9898,\u754C\u9762\u4FEE\u6539\u4E3A\u5355\u5411\u7ED1\u5B9A,\u53EA\u6709\u4E0EqueryObj\u7684\u503C\u5BF9\u6BD4\u53D8\u5316\u65F6\u624D\u91CD\u65B0\u67E5\u8BE2
      this.queryObj.pageSize = pageSize;
      this.queryObj.pageIndex = pageIndex;
      this.queryObj.sort = sortField || null;
      this.queryObj.order = sortOrder ? sortOrder.replace("end", "") : null;
      this.query@modelClassNameList();
    }
  }

  /**
   * \u67E5\u8BE2@modelSummary\u5217\u8868
   *
   * @param isReload \u662F\u5426\u91CD\u65B0\u52A0\u8F7D\u5217\u8868\uFF0C\u9ED8\u8BA4\u4E3A false
   */
  query@modelClassNameList(isReload: boolean = false): void {
    this.loading = true;
    if (isReload) {
      this.queryObj.pageIndex = 1;
    }
    console.log(this.queryObj);
    this.@modelNameSvc.query@modelClassNameList(this.queryObj).subscribe({
      next: (pgResult: PageResult<@modelClassName>) => {
        this.@modelNameList = pgResult.rows;
        this.totalCount = pgResult.total;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
      },
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(@modelName: @modelClassName): void {
    Util.showConfirmBox("\u786E\u8BA4\u8981\u5220\u9664@modelSummary" + @modelName.name + "\u5417?").subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(@modelName.id).subscribe(() => {
          this.query@modelClassNameList();
        });
      }
    });
  }
}`}};var je=class{static getListPageLessCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`::ng-deep {
@ngcss
}`,d="",c=t.piList;return c.filter(f=>f.isList&&f.listDisplayType=="Switch").length>0&&(d+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),c.filter(f=>f.isList&&f.listDisplayType=="Checkbox").length>0&&(d+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),a=a.replace(/@ngcss/g,d),a}};var Ue=class{static getListPageNode(t){let e=t.id.toLowerCase(),n=t.name.toLowerCase(),i={title:n+"list",key:e+"list",expanded:!1,children:[]},a={title:n+"list.component.html",key:e+"list.component.html",isLeaf:!0,code:We.getListPageHtmlCode(t),language:"html"},d={title:n+"list.component.less",key:e+"list.component.less",isLeaf:!0,code:je.getListPageLessCode(t),language:"less"},c={title:n+"list.component.ts",key:e+"list.component.ts",isLeaf:!0,code:qe.getListPageTsCode(t),language:"typescript"};return i.children.push(a),i.children.push(d),i.children.push(c),i}};var Ge=class{static getEditPageHtmlCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<nz-page-header>
    <nz-page-header-subtitle>{{@modelNameId ? '\u7F16\u8F91@modelSummary':'\u65B0\u589E@modelSummary'}}</nz-page-header-subtitle>
</nz-page-header>
<!--Content-->
<nz-card nzBordered="false">
    @editFormCode
</nz-card>
</div>`,c=this.getEditFormCode(t);return a=d.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@editFormCode/g,c),a}static getEditFormCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<nz-form [formGroup]="editForm" nzLayout="vertical">@editItemCode
        <div nz-row class="mt35">
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12" class="tac">
                <button nz-button nzType="primary" class="w100" (click)="save()">\u4FDD\u5B58</button>
                <button nz-button nzType="primary" class="w100 ml50" (click)="back()">\u53D6\u6D88</button>
            </div>
        </div>
    </nz-form>`,c=0,f=t.piList.filter(C=>C.isEdit),T="";for(let C of f){let v=this.getEditItemCode(t,C);T+=v,c++}return a=d.replace(/@editItemCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n),a}static getEditItemCode(t,e){let n="",i="",a=y.firstToLower(t.name),d=t.name,c=t.summary?t.summary:a,f=y.firstToLower(e.name),T=e.summary?e.summary:f,C=e.isRequire??f;return e.editDisplayType=="Select"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label nzRequired class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-select formControlName="@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                            <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                [nzLabel]="@piName.displayName"></nz-option>
                        </nz-select>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="RadioGroup"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-radio-group formControlName="@piName">
                            <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                        </nz-radio-group>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Switch"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-switch formControlName="@piName"></nz-switch>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Checkbox"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <label nz-checkbox formControlName="@piName"></label>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="DatePicker"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-date-picker formControlName="@piName"></nz-date-picker>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Rate"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <nz-rate formControlName="@piName" nzAllowHalf></nz-rate>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="UploadFile"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>   
                        @if (!uploadFile)                     
                        <a style="position: relative;" href="javascript:void(0)">
                            <button nz-button class="w120 mr10" nzType="primary" nzGhost>\u9009\u62E9\u6587\u4EF6</button>
                            <input type="file" accept=".doc" name="file" (change)="selectUploadFiles($event)"
                                style="position: absolute; top: 0; left: 0; opacity: 0;" />
                        </a>
                        }
                        @else if (uploadFile.fileStatus ==1) {
                        <div nz-row [nzGutter]="16">
                            <div nz-col nzSpan="10">
                                <nz-progress [nzPercent]="uploadFile.progress"></nz-progress>
                            </div>
                            <div nz-col nzSpan="12">
                                <a (click)='cancelUpload()'>
                                    \u53D6\u6D88\u4E0A\u4F20
                                </a>
                            </div>
                        </div>
                        } @else if (uploadFile.fileStatus!=1) {
                        <a [title]="uploadFile.fileName" class="maxw200">
                            {{uploadFile.fileName}}
                        </a>
                        <a class="ml10" (click)='deleteUploadFile()'>
                            <span nz-icon nzType="delete" nzTheme="outline"></span>
                        </a>
                        <span *ngIf="uploadFile.fileStatus==2 || uploadFile.fileStatus == 3" class="ml10 color-red">
                            {{uploadFile.fileStatusStr}}
                            <span class="ml10 maxw200" [title]="uploadFile.fileStatusNote">
                                {{uploadFile.fileStatusNote |nzEllipsis:36:'...'}}
                            </span>
                        </span>
                        }
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="TextArea"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <textarea nz-input formControlName="@piName" rows="4" placeholder="\u8BF7\u8F93\u5165@piSummary" nzAutoSize></textarea>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="InputNumber"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input type="number" formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piName</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`,n=i.replace(/@modelClassName/g,d).replace(/@piName/g,f).replace(/@piSummary/g,T),n}};var $e=class o{static getEditPageTsCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=o.getTsTemplate(),c=t.piList.filter(S=>S.isEdit),f="",T="";for(let S of c){let b=y.firstToLower(S.name),V=S.tsType,P=S.isRequire,A="''";switch(V){case"string":A="''";break;case"number":A="0";break;case"boolean":A="false";break;case"date":A="null";break;default:A="null";break}f+=`    ${b}: FormControl<${V}>;`,T+=`      ${b}: [${A}, ${P?"Validators.required":""}],`}let C="",v="",w="";if(c.filter(S=>S.isKeyvalueItem).length>0){let S=c.filter(b=>b.isKeyvalueItem);for(let b of S){let V=y.firstToLower(b.name),P=b.name;C+=`
  ${V}s: KeyvalueItem[] = [];`,w+=N.getKeyvalueItemPiInitCode(b),v+=`
    this.init${P}();`}}else if(c.filter(S=>S.isEnum).length>0){let S=c.filter(b=>b.isEnum);for(let b of S){let V=y.firstToLower(b.name),P=b.name;C+=`  ${V}s: EnumItem[] = [];`,w+=N.getEnumPiInitCode(b),v+=`
    this.init${P}();`}}return c.filter(S=>S.editDisplayType=="UploadFile").length>0&&(C+="",w+=o.getUploadFileFunctionCode()),a=d.replace(/@expandPropertyCode/g,C).replace(/@expandInitCode/g,v).replace(/@expandFunctionCode/g,w).replace(/@editItemCode/g,f).replace(/@editItemBuildCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getTsTemplate(){return`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { @modelClassName } from '@models/@modelName';
import { @modelClassNameService } from '@services/@modelNameservice';
import { EnumService } from '@services/enumservice';
import { EnumItem } from '@models/enumitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-@modelNameeditpage',
  templateUrl: './@modelNameedit.component.html',
  styleUrl: './@modelNameedit.component.less',
})
export class @modelClassNameEditComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();  
  @expandPropertyCode
  editForm!: FormGroup<{
    @editItemCode
  }>;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private enumSvc: EnumService,
    private @modelNameSvc: @modelClassNameService
  ) {}

  ngOnInit(): void {
    this.@modelNameId = this.route.snapshot.params['id'];    
    this.editForm = this.formBuilder.group({
      @editItemBuildCode
    });
    @expandInitCode
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
      this.editForm.patchValue(this.@modelName);
    });
  }  
  @expandFunctionCode

  /**
   * \u63D0\u4EA4\u8868\u5355\uFF0C\u4FDD\u5B58@modelSummary
   */
  save() {
    if (!this.editForm.valid) {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    let formValue = this.editForm.value;
    this.@modelName = { ...this.@modelName, ...formValue };
    this.@modelNameSvc.set@modelClassName(this.@modelName).subscribe((res) => {
      this.back();
    });
  }

  /**
   * \u8FD4\u56DE\u4E0A\u4E00\u9875
   */
  back(): void {
    history.back();
  }
}
`}static getUploadFileFunctionCode(){return`
  /*\u9009\u62E9\u6587\u4EF6*/
  selectUploadFiles(event): void {
    const file = event.target.files[0];
    let fileObj = new FileObj();
    fileObj.fileName = file.name;
    fileObj.fileSize = file.size;
    fileObj.fileType = file.extension || "";
    fileObj.progress = 0;
    fileObj.progressStr = "";
    fileObj.file = file;
    fileObj.fileStatus = file.size > 0 ? 0 : -1;
    this.uploadFile = fileObj;
    this.editForm.patchValue({ fileName: fileObj.fileName });
  }
  
  /**
   * \u4E0A\u4F20\u6587\u4EF6\u524D\u7684\u9884\u5904\u7406
   *
   * @param orderSeriesObj \u8BA2\u5355\u7CFB\u5217\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  preUploadFile(uploadFile: FileObj): void {
    // \u521B\u5EFA UploadApply \u5BF9\u8C61
    uploadFile.fileStatus = 1;
    uploadFile.fileStatusStr = "\u4E0A\u4F20\u4E2D";
    const uploadApply = new UploadApply();
    uploadApply.bussinessId = this.@modelName.id;
    uploadApply.name = uploadFile.fileName;
    uploadApply.fileType = uploadFile.fileType;
    uploadApply.fileSize = uploadFile.fileSize;
    uploadApply.md5 = uploadFile.md5;
    this.@modelNameSvc.preUploadFile(uploadApply).subscribe((token: StsTokenUpload) => {
      this.uploadOssFile(token, uploadFile.file);
    });
  }

  /*\u4E0A\u4F20\u6587\u4EF6*/
  uploadOssFile(token: StsTokenUpload, file: File): void {
    this.updateUploadStatus(1, "\u6B63\u5728\u4E0A\u4F20", 0);
    let ossAccess = token;
    let ossClient = new OSS({
      region: "oss-cn-beijing",
      accessKeyId: ossAccess.authToken.accessId,
      accessKeySecret: ossAccess.authToken.accessSecrect,
      stsToken: ossAccess.authToken.securityToken,
      accessDir: ossAccess.authToken.accessDir,
      accessPath: ossAccess.authToken.accessPath,
      bucket: ossAccess.authToken.bucketName,
    });
    ossClient
      .multipartUpload(ossAccess.authToken.accessPath, file, {
        progress: (p) => {
          if (this.uploadFile.fileStatus == 3) {
            throw new Error("\u5DF2\u53D6\u6D88\u4E0A\u4F20");
          }
          this.updateProgress(p);
        },
      })
      .then((result) => {
        this.finishUpload(token);
      })
      .catch((err) => {
        if (this.uploadFile.fileStatus != 3) {
          this.updateUploadStatus(2, "\u4E0A\u4F20\u5F02\u5E38", err.message || "\u4E0A\u4F20\u5931\u8D25");
        }
      });
  }

  /*\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6*/
  cancelUpload() {
    this.updateUploadStatus(3, "\u5DF2\u53D6\u6D88\u4E0A\u4F20", "");
  }

  /*\u4E0A\u4F20\u72B6\u6001\u66F4\u65B0*/
  updateUploadStatus(status, statusStr, statusNote): void {
    this.uploadFile.fileStatus = status;
    this.uploadFile.fileStatusStr = statusStr;
    this.uploadFile.fileStatusNote = statusNote;
  }

  /*\u8FDB\u5EA6\u6761\u8BBE\u7F6E*/
  updateProgress(p) {
    let progress = Math.floor(p * 100); // \u8F6C\u6362\u4E3A\u767E\u5206\u6BD4\u6574\u6570
    this.uploadFile.progress = progress;
    this.uploadFile.progressStr = progress.toString() + '%';
  }

  /*\u5B8C\u6210\u4E0A\u4F20\u6587\u4EF6*/
  finishUpload(token: StsTokenUpload): void {
    this.@modelNameSvc.finishUpload(token.uploadKey).subscribe((ossFileId: string) => {
      this.updateUploadStatus(4, "\u5DF2\u4E0A\u4F20", 100);
      this.@modelName.ossFileId = ossFileId;
      if (this.saveMode == 0) {
        // \u4FDD\u5B58
        this.save();
      }
    });
  }  
  `}};var He=class{static getEditPageNode(t){let e=t.id.toLowerCase(),n=t.name.toLowerCase(),i={title:n+"edit",key:e+"edit",expanded:!1,children:[]},a={title:n+"edit.component.html",key:e+"edit.component.html",isLeaf:!0,code:Ge.getEditPageHtmlCode(t),language:"html"},d={title:n+"edit.component.less",key:e+"edit.component.less",isLeaf:!0,code:"",language:"less"},c={title:n+"edit.component.ts",key:e+"edit.component.ts",isLeaf:!0,code:$e.getEditPageTsCode(t),language:"typescript"};return i.children.push(a),i.children.push(d),i.children.push(c),i}};var Qe=class{static getEditModalHtmlCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<nz-card nzBordered="false" [nzSize]="'small'">
    @editFormCode
</nz-card>`,c=this.getEditFormCode(t);return a=d.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@editFormCode/g,c),a}static getEditFormCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<nz-form [formGroup]="editForm" nzLayout="vertical">@editItemCode
        <div nz-row class="mt35">
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12" class="tac">
                <button nz-button nzType="primary" class="w80" (click)="save()">\u4FDD\u5B58</button>
                <button nz-button nzType="primary" class="w80 ml50" (click)="back()">\u53D6\u6D88</button>
            </div>
        </div>
    </nz-form>`,c=0,f=t.piList.filter(C=>C.isEdit),T="";for(let C of f){let v=this.getEditItemCode(t,C);T+=v,c++}return a=d.replace(/@editItemCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n),a}static getEditItemCode(t,e){let n="",i="",a=y.firstToLower(t.name),d=t.name,c=t.summary?t.summary:a,f=y.firstToLower(e.name),T=e.summary?e.summary:f,C=e.isRequire??f;return e.editDisplayType=="Select"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label nzRequired class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-select formControlName="@piName" nzAllowClear nzPlaceHolder="-- \u8BF7 \u9009 \u62E9 --">
                            <nz-option *ngFor="let @piName of @piNames" [nzValue]="@piName.value"
                                [nzLabel]="@piName.displayName"></nz-option>
                        </nz-select>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="RadioGroup"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-radio-group formControlName="@piName">
                            <label nz-radio *ngFor="let @piName of @piNames" [nzValue]="@piName.value">{{@piName.displayName}}</label>
                        </nz-radio-group>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Switch"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <nz-switch formControlName="@piName"></nz-switch>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Checkbox"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control>
                        <label nz-checkbox formControlName="@piName"></label>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="DatePicker"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u9009\u62E9@piSummary"':""}>
                        <nz-date-picker formControlName="@piName"></nz-date-picker>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="Rate"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <nz-rate formControlName="@piName" nzAllowHalf></nz-rate>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="UploadFile"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>   
                        @if (!uploadFile)                     
                        <a style="position: relative;" href="javascript:void(0)">
                            <button nz-button class="w120 mr10" nzType="primary" nzGhost>\u9009\u62E9\u6587\u4EF6</button>
                            <input type="file" accept=".doc" name="file" (change)="selectUploadFiles($event)"
                                style="position: absolute; top: 0; left: 0; opacity: 0;" />
                        </a>
                        }
                        @else if (uploadFile.fileStatus ==1) {
                        <div nz-row [nzGutter]="16">
                            <div nz-col nzSpan="10">
                                <nz-progress [nzPercent]="uploadFile.progress"></nz-progress>
                            </div>
                            <div nz-col nzSpan="12">
                                <a (click)='cancelUpload()'>
                                    \u53D6\u6D88\u4E0A\u4F20
                                </a>
                            </div>
                        </div>
                        } @else if (uploadFile.fileStatus!=1) {
                        <a [title]="uploadFile.fileName" class="maxw200">
                            {{uploadFile.fileName}}
                        </a>
                        <a class="ml10" (click)='deleteUploadFile()'>
                            <span nz-icon nzType="delete" nzTheme="outline"></span>
                        </a>
                        <span *ngIf="uploadFile.fileStatus==2 || uploadFile.fileStatus == 3" class="ml10 color-red">
                            {{uploadFile.fileStatusStr}}
                            <span class="ml10 maxw200" [title]="uploadFile.fileStatusNote">
                                {{uploadFile.fileStatusNote |nzEllipsis:36:'...'}}
                            </span>
                        </span>
                        }
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="TextArea"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8BBE\u7F6E@piSummary"':""}>
                        <textarea nz-input formControlName="@piName" rows="4" placeholder="\u8BF7\u8F93\u5165@piSummary" nzAutoSize></textarea>
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:e.editDisplayType=="InputNumber"?i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piSummary</nz-form-label>                    
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input type="number" formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`:i=`
        <div nz-row>
            <div nz-col [nzXs]="24" [nzSm]="24" [nzMd]="12" [nzLg]="12">
                <nz-form-item>
                    <nz-form-label class="w100 mr5">@piName</nz-form-label>
                    <nz-form-control ${C?'nzErrorTip="\u8BF7\u8F93\u5165@piSummary"':""}>
                        <input nz-input formControlName="@piName" placeholder="\u8BF7\u8F93\u5165@piSummary" />
                    </nz-form-control>
                </nz-form-item>
            </div>
        </div>`,n=i.replace(/@modelClassName/g,d).replace(/@piName/g,f).replace(/@piSummary/g,T),n}};var Ke=class o{static getEditModalTsCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=o.getTsTemplate(),c=t.piList.filter(S=>S.isEdit),f="",T="";for(let S of c){let b=y.firstToLower(S.name),V=S.tsType,P=S.isRequire,A="''";switch(V){case"string":A="''";break;case"number":A="0";break;case"boolean":A="false";break;case"date":A="null";break;default:A="null";break}f+=`    ${b}: FormControl<${V}>;`,T+=`      ${b}: [${A}, ${P?"Validators.required":""}],`}let C="",v="",w="";if(c.filter(S=>S.isKeyvalueItem).length>0){let S=c.filter(b=>b.isKeyvalueItem);for(let b of S){let V=y.firstToLower(b.name),P=b.name;C+=`
  ${V}s: KeyvalueItem[] = [];`,w+=N.getKeyvalueItemPiInitCode(b),v+=`
    this.init${P}();`}}else if(c.filter(S=>S.isEnum).length>0){let S=c.filter(b=>b.isEnum);for(let b of S){let V=y.firstToLower(b.name),P=b.name;C+=`  ${V}s: EnumItem[] = [];`,w+=N.getEnumPiInitCode(b),v+=`
    this.init${P}();`}}return c.filter(S=>S.editDisplayType=="UploadFile").length>0&&(C+="",w+=o.getUploadFileFunctionCode()),a=d.replace(/@expandPropertyCode/g,C).replace(/@expandInitCode/g,v).replace(/@expandFunctionCode/g,w).replace(/@editItemCode/g,f).replace(/@editItemBuildCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getTsTemplate(){return`import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzModalRef } from "ng-zorro-antd/modal";
import { @modelClassName } from '@models/@modelName';
import { @modelClassNameService } from '@services/@modelNameservice';
import { EnumService } from '@services/enumservice';
import { EnumItem } from '@models/enumitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-@modelNameeditpage',
  templateUrl: './@modelNameedit.component.html',
  styleUrl: './@modelNameedit.component.less',
})
export class @modelClassNameEditComponent implements OnInit {
  action: string;
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode
  editForm!: FormGroup<{
    @editItemCode
  }>;

  loading = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: NonNullableFormBuilder,
    private enumSvc: EnumService,
    private @modelNameSvc: @modelClassNameService,
    private modal: NzModalRef
  ) {}

  ngOnInit(): void {
    this.@modelNameId = this.route.snapshot.params['id'];    
    this.editForm = this.formBuilder.group({
      @editItemBuildCode
    });
    @expandInitCode
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
      this.editForm.patchValue(this.@modelName);
    });
  }
  @expandFunctionCode

  /**
   * \u63D0\u4EA4\u8868\u5355\uFF0C\u4FDD\u5B58@modelSummary
   */
  save() {
    if (!this.editForm.valid) {
      Object.values(this.editForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    let formValue = this.editForm.value;
    this.@modelName = { ...this.@modelName, ...formValue };
    this.@modelNameSvc.set@modelClassName(this.@modelName).subscribe((res) => {
      this.modal.close(true);
    });
  }

  /**
   * \u53D6\u6D88\u64CD\u4F5C
   *
   * @description \u5173\u95ED\u6A21\u6001\u6846\u5E76\u8FD4\u56DEfalse
   */
  cancel() {
    this.modal.close(false);
  }
}
`}static getUploadFileFunctionCode(){return`
  /*\u9009\u62E9\u6587\u4EF6*/
  selectUploadFiles(event): void {
    const file = event.target.files[0];
    let fileObj = new FileObj();
    fileObj.fileName = file.name;
    fileObj.fileSize = file.size;
    fileObj.fileType = file.extension || "";
    fileObj.progress = 0;
    fileObj.progressStr = "";
    fileObj.file = file;
    fileObj.fileStatus = file.size > 0 ? 0 : -1;
    this.uploadFile = fileObj;
    this.editForm.patchValue({ fileName: fileObj.fileName });
  }
  
  /**
   * \u4E0A\u4F20\u6587\u4EF6\u524D\u7684\u9884\u5904\u7406
   *
   * @param orderSeriesObj \u8BA2\u5355\u7CFB\u5217\u5BF9\u8C61
   * @returns \u65E0\u8FD4\u56DE\u503C
   */
  preUploadFile(uploadFile: FileObj): void {
    // \u521B\u5EFA UploadApply \u5BF9\u8C61
    uploadFile.fileStatus = 1;
    uploadFile.fileStatusStr = "\u4E0A\u4F20\u4E2D";
    const uploadApply = new UploadApply();
    uploadApply.bussinessId = this.@modelName.id;
    uploadApply.name = uploadFile.fileName;
    uploadApply.fileType = uploadFile.fileType;
    uploadApply.fileSize = uploadFile.fileSize;
    uploadApply.md5 = uploadFile.md5;
    this.@modelNameSvc.preUploadFile(uploadApply).subscribe((token: StsTokenUpload) => {
      this.uploadOssFile(token, uploadFile.file);
    });
  }

  /*\u4E0A\u4F20\u6587\u4EF6*/
  uploadOssFile(token: StsTokenUpload, file: File): void {
    this.updateUploadStatus(1, "\u6B63\u5728\u4E0A\u4F20", 0);
    let ossAccess = token;
    let ossClient = new OSS({
      region: "oss-cn-beijing",
      accessKeyId: ossAccess.authToken.accessId,
      accessKeySecret: ossAccess.authToken.accessSecrect,
      stsToken: ossAccess.authToken.securityToken,
      accessDir: ossAccess.authToken.accessDir,
      accessPath: ossAccess.authToken.accessPath,
      bucket: ossAccess.authToken.bucketName,
    });
    ossClient
      .multipartUpload(ossAccess.authToken.accessPath, file, {
        progress: (p) => {
          if (this.uploadFile.fileStatus == 3) {
            throw new Error("\u5DF2\u53D6\u6D88\u4E0A\u4F20");
          }
          this.updateProgress(p);
        },
      })
      .then((result) => {
        this.finishUpload(token);
      })
      .catch((err) => {
        if (this.uploadFile.fileStatus != 3) {
          this.updateUploadStatus(2, "\u4E0A\u4F20\u5F02\u5E38", err.message || "\u4E0A\u4F20\u5931\u8D25");
        }
      });
  }

  /*\u53D6\u6D88\u4E0A\u4F20\u6587\u4EF6*/
  cancelUpload() {
    this.updateUploadStatus(3, "\u5DF2\u53D6\u6D88\u4E0A\u4F20", "");
  }

  /*\u4E0A\u4F20\u72B6\u6001\u66F4\u65B0*/
  updateUploadStatus(status, statusStr, statusNote): void {
    this.uploadFile.fileStatus = status;
    this.uploadFile.fileStatusStr = statusStr;
    this.uploadFile.fileStatusNote = statusNote;
  }

  /*\u8FDB\u5EA6\u6761\u8BBE\u7F6E*/
  updateProgress(p) {
    let progress = Math.floor(p * 100); // \u8F6C\u6362\u4E3A\u767E\u5206\u6BD4\u6574\u6570
    this.uploadFile.progress = progress;
    this.uploadFile.progressStr = progress.toString() + '%';
  }

  /*\u5B8C\u6210\u4E0A\u4F20\u6587\u4EF6*/
  finishUpload(token: StsTokenUpload): void {
    this.@modelNameSvc.finishUpload(token.uploadKey).subscribe((ossFileId: string) => {
      this.updateUploadStatus(4, "\u5DF2\u4E0A\u4F20", 100);
      this.@modelName.ossFileId = ossFileId;
      if (this.saveMode == 0) {
        // \u4FDD\u5B58
        this.save();
      }
    });
  }  
  `}};var Xe=class{static getEditModalNode(t){let e=t.id.toLowerCase(),n=t.name.toLowerCase(),i={title:n+"editmodal",key:e+"editmodal",expanded:!1,children:[]},a={title:n+"edit.component.html",key:e+"editmodal.component.html",isLeaf:!0,code:Qe.getEditModalHtmlCode(t),language:"html"},d={title:n+"edit.component.less",key:e+"editmodal.component.less",isLeaf:!0,code:"",language:"less"},c={title:n+"edit.component.ts",key:e+"editmodal.component.ts",isLeaf:!0,code:Ke.getEditModalTsCode(t),language:"typescript"};return i.children.push(a),i.children.push(d),i.children.push(c),i}};var Je=class{static getDetailPageHtmlCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`<nz-page-header>
    <nz-page-header-subtitle>\u5E94\u7528\u8BE6\u60C5--{{app.name}}</nz-page-header-subtitle>
    <nz-page-header-extra>
        <button nz-button class="w100 mr30" [nzType]="'primary'" (click)="detailApp()">\u7F16\u8F91</button>
        <button nz-button class="w100 mr30" [nzType]="'primary'" nzGhost nzDanger (click)="deleteApp()">\u5220\u9664</button>
        <button nz-button class="w80 mr30" [nzType]="'primary'" nzGhost (click)="back()">\u8FD4\u56DE</button>
        <button nz-button nzType="primary" nzGhost nz-dropdown [nzDropdownMenu]="menu" nzDropdownTrigger="click">
            ...
        </button>
        <nz-dropdown-menu #menu="nzDropdownMenu">
            <ul nz-menu class="minw100">
                <li nz-menu-item (click)="back()">\u66F4\u591A</li>
            </ul>
        </nz-dropdown-menu>
    </nz-page-header-extra>
</nz-page-header>
<nz-card class="minh360">
    <div nz-row>
        <div nz-col [nzSpan]="24">
            <label>\u57FA\u672C\u4FE1\u606F</label>
        </div>
    </div>
    <div class="ml10">
        @detailCode
    </div>
</nz-card>`,c=this.getDetailCode(t);return a=d.replace(/@modelName/g,e).replace(/@modelSummary/g,i).replace(/@detailCode/g,c),a}static getDetailCode(t){let e="",n=0,i=t.piList.filter(a=>a.isDetail);for(let a of i){let d=this.getDetailItemCode(t,a);n%3==0&&(e+=`
        <div nz-row [nzGutter]="32" class="mt20">`),e+=d,(n%3==2||n==i.length-1)&&(e+=`
        </div>`),n++}return e}static getDetailItemCode(t,e){let n="",i="",a=y.firstToLower(t.name),d=y.firstToLower(e.name),c=e.summary?e.summary:d;return e.detailDisplayType=="Text"?e.tsType=="Date"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</span>
            </div>`:i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName }}</span>
            </div>`:e.detailDisplayType=="Tag"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag>
            </div>`:e.detailDisplayType=="Pre"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <pre>{{ @modelName.@piName }}</pre>
            </div>`:e.detailDisplayType=="ProgressBar"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-progress [nzPercent]="@modelName.@piName"></nz-progress>
            </div>`:e.detailDisplayType=="Rate"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate>
            </div>`:e.detailDisplayType=="Switch"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch>
            </div>`:e.detailDisplayType=="Checkbox"&&(i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label>
            </div>`),n=i.replace(/@modelName/g,a).replace(/@piName/g,d).replace(/@piSummary/g,c),n}};var Ye=class o{static getDetailPageTsCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=o.getTsTemplate(),c="",f="",T="";return T+=N.getEditFunctionCode(t),a=d.replace(/@expandPropertyCode/g,c).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Util } from "@core/util";
import { @modelClassName } from "@models/@modelName";
import { @modelClassNameService } from "@services/@modelNameservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";

@Component({
  selector: "app-@modelNamedetail",
  templateUrl: "./@modelNamedetail.component.html",
  styleUrl: "./@modelNamedetail.component.less",
})
export class @modelClassNameDetailComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode

  constructor(
    private route: ActivatedRoute,
    private modalSvc: NzModalService,
    private @modelNameSvc: @modelClassNameService,
    private @modelNameVersionSvc: @modelClassNameVersionService
  ) {}

  ngOnInit() {
    this.@modelNameId = this.route.snapshot.params["id"];
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
    @expandInitCode
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(): void {
    Util.showConfirmBox('\u786E\u8BA4\u8981\u5220\u9664@modelSummary' + this.@modelName.name + '?').subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(this.@modelNameId).subscribe(() => {
          Util.goTo("/@modelNamelist");
        });
      }
    });
  }
  
  /*\u8FD4\u56DE*/
  back(): void {
    history.back();
  }
}
`}};var Ze=class{static getDetailPageLessCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`::ng-deep {
@ngcss
}`,d="",c=t.piList;return c.filter(f=>f.isList&&f.listDisplayType=="Switch").length>0&&(d+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),c.filter(f=>f.isList&&f.listDisplayType=="Checkbox").length>0&&(d+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),a=a.replace(/@ngcss/g,d),a}};var Be=class{static getDetailPageNode(t){let e=t.id.toLowerCase(),n=t.name.toLowerCase(),i={title:n+"detail",key:e+"detail",expanded:!1,children:[]},a={title:n+"detail.component.html",key:e+"detail.component.html",isLeaf:!0,code:Je.getDetailPageHtmlCode(t),language:"html"},d={title:n+"detail.component.less",key:e+"detail.component.less",isLeaf:!0,code:Ze.getDetailPageLessCode(t),language:"less"},c={title:n+"detail.component.ts",key:e+"detail.component.ts",isLeaf:!0,code:Ye.getDetailPageTsCode(t),language:"typescript"};return i.children.push(a),i.children.push(d),i.children.push(c),i}};var et=class{static getDetailModalHtmlCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=`
<div class="ml20">@detailCode
</div>
<div class="tac mt50">
    <button nz-button class="w100 mr30" [nzType]="'primary'" (click)="edit@modelClassName()">\u7F16\u8F91</button>
    <button nz-button class="w100 mr30" [nzType]="'primary'" nzGhost nzDanger (click)="delete@modelClassName()">\u5220\u9664</button>
    <button nz-button class="w80" [nzType]="'primary'" nzGhost (click)="cancel()">\u8FD4\u56DE</button>
</div>`,c=this.getDetailCode(t);return a=d.replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i).replace(/@detailCode/g,c),a}static getDetailCode(t){let e="",n=0,i=t.piList.filter(a=>a.isDetail);for(let a of i){let d=this.getDetailItemCode(t,a);n%3==0&&(e+=`
    <div nz-row [nzGutter]="32" class="mt20">`),e+=d,(n%3==2||n==i.length-1)&&(e+=`
    </div>`),n++}return e}static getDetailItemCode(t,e){let n="",i="",a=y.firstToLower(t.name),d=y.firstToLower(e.name),c=e.summary?e.summary:d;return e.detailDisplayType=="Text"?e.tsType=="Date"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName | date:'yyyy-MM-dd HH:mm:ss' }}</span>
            </div>`:i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <span>{{ @modelName.@piName }}</span>
            </div>`:e.detailDisplayType=="Tag"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-tag [nzColor]="'cyan'">{{ @modelName.@piName }}</nz-tag>
            </div>`:e.detailDisplayType=="Pre"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <pre>{{ @modelName.@piName }}</pre>
            </div>`:e.detailDisplayType=="ProgressBar"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-progress [nzPercent]="@modelName.@piName"></nz-progress>
            </div>`:e.detailDisplayType=="Rate"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-rate [ngModel]="@modelName.@piName" nzAllowHalf nzDisabled></nz-rate>
            </div>`:e.detailDisplayType=="Switch"?i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <nz-switch [ngModel]="@modelName.@piName" nzDisabled></nz-switch>
            </div>`:e.detailDisplayType=="Checkbox"&&(i=`
            <div nz-col [nzSpan]="6">
                <label class="w100">@piSummary</label>
                <label nz-checkbox [ngModel]="@modelName.@piName" nzDisabled></label>
            </div>`),n=i.replace(/@modelName/g,a).replace(/@piName/g,d).replace(/@piSummary/g,c),n}};var tt=class o{static getDetailModalTsCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a="",d=o.getTsTemplate(),c="",f="",T="";return T+=N.getEditFunctionCode(t),a=d.replace(/@expandPropertyCode/g,c).replace(/@expandInitCode/g,f).replace(/@expandFunctionCode/g,T).replace(/@modelName/g,e).replace(/@modelClassName/g,n).replace(/@modelSummary/g,i),a}static getTsTemplate(){return`import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import { Util } from "@core/util";
import { @modelClassName } from "@models/@modelName";
import { @modelClassNameService } from "@services/@modelNameservice";
import { @modelClassNameEditModalComponent } from "../@modelNameeditmodal/@modelNameedit.component";

@Component({
  selector: "app-@modelNamedetail",
  templateUrl: "./@modelNamedetail.component.html",
  styleUrl: "./@modelNamedetail.component.less",
})
export class @modelClassNameDetailComponent implements OnInit {
  @modelNameId: string;
  @modelName: @modelClassName = new @modelClassName();
  @expandPropertyCode

  constructor(
    private route: ActivatedRoute,
    private modalSvc: NzModalService,
    private modal: NzModalRef,
    private @modelNameSvc: @modelClassNameService,
    private @modelNameVersionSvc: @modelClassNameVersionService
  ) {}

  ngOnInit() {
    this.@modelNameId = this.modal.getConfig().nzData.@modelNameId;
    if (this.@modelNameId) {
      this.get@modelClassName();
    }
    @expandInitCode
  }

  /*\u83B7\u53D6@modelSummary*/
  get@modelClassName(): void {
    this.@modelNameSvc.get@modelClassNameById(this.@modelNameId).subscribe((@modelName) => {
      this.@modelName = @modelName;
    });
  }
  @expandFunctionCode

  /*\u5220\u9664@modelSummary*/
  delete@modelClassName(): void {
    Util.showConfirmBox('\u786E\u8BA4\u8981\u5220\u9664@modelSummary' + this.@modelName.name + '?').subscribe((res) => {
      if (res) {
        this.@modelNameSvc.delete@modelClassName(this.@modelNameId).subscribe(() => {
          this.modal.close(true);
        });
      }
    });
  }
  
  /*\u8FD4\u56DE*/
  cancel(): void {
    this.modal.close(false);
  }
}
`}};var it=class{static getDetailModalLessCode(t){let e=y.firstToLower(t.name),n=t.name,i=t.summary?t.summary:e,a=`::ng-deep {
@ngcss
}`,d="",c=t.piList;return c.filter(f=>f.isList&&f.listDisplayType=="Switch").length>0&&(d+=`
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 1;
  }
`),c.filter(f=>f.isList&&f.listDisplayType=="Checkbox").length>0&&(d+=`
  .ant-checkbox-disabled .ant-checkbox-inner {
    background-color: #fff !important;
    border-color: var(--ant-primary-color) !important;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: var(--ant-primary-color);
  }
`),a=a.replace(/@ngcss/g,d),a}};var nt=class{static getDetailModalNode(t){let e=t.id.toLowerCase(),n=t.name.toLowerCase(),i={title:n+"detailmodal",key:e+"detailmodal",expanded:!1,children:[]},a={title:n+"detail.component.html",key:e+"detailmodal.component.html",isLeaf:!0,code:et.getDetailModalHtmlCode(t),language:"html"},d={title:n+"detail.component.less",key:e+"detailmodal.component.less",isLeaf:!0,code:it.getDetailModalLessCode(t),language:"less"},c={title:n+"detail.component.ts",key:e+"detailmodal.component.ts",isLeaf:!0,code:tt.getDetailModalTsCode(t),language:"typescript"};return i.children.push(a),i.children.push(d),i.children.push(c),i}};var ot=class{static generatePageNode(t){if(!t)return null;let e=t.id.toLocaleLowerCase(),i={title:t.name.toLocaleLowerCase(),key:e,expanded:!0,children:[]},a=Ue.getListPageNode(t),d=He.getEditPageNode(t),c=Xe.getEditModalNode(t),f=Be.getDetailPageNode(t),T=nt.getDetailModalNode(t);return i.children.push(a),i.children.push(d),i.children.push(c),i.children.push(f),i.children.push(T),i}};function Ki(o,t){if(o&1&&(m(0,"div")(1,"label",7),s(2),l()()),o&2){let e=t.$implicit;r(),p("nzValue",e),r(),z(e)}}function Xi(o,t){if(o&1){let e=I();m(0,"label",8),E("ngModelChange",function(i){h(e);let a=u();return D(a.isSort,i)||(a.isSort=i),_(i)}),s(1,"Sortable"),l()}if(o&2){let e=u();L("ngModel",e.isSort)}}function Ji(o,t){if(o&1){let e=I();m(0,"label",8),E("ngModelChange",function(i){h(e);let a=u();return D(a.isRequire,i)||(a.isRequire=i),_(i)}),s(1,"Require"),l()}if(o&2){let e=u();L("ngModel",e.isRequire)}}var at=class o{constructor(t,e){this.modalSvc=t;this.modal=e}pi=new Yt;display="query";piDisplayType;displayTypeList=[];isSort=!1;isRequire=!1;ngOnInit(){this.pi=this.modal.getConfig().nzData.pi,this.display=this.modal.getConfig().nzData.display,this.display=="query"?(this.displayTypeList=N.getPiQueryDisplayTypeList(this.pi),this.piDisplayType=this.pi.queryDisplayType??N.getPiQueryDisplayType(this.pi)):this.display=="list"?(this.displayTypeList=N.getPiListDisplayTypeList(this.pi),this.piDisplayType=this.pi.listDisplayType??N.getPiListDisplayType(this.pi),this.isSort=this.pi.isListSort==null?!0:this.pi.isListSort):this.display=="edit"?(this.displayTypeList=N.getPiEditDisplayTypeList(this.pi),this.piDisplayType=this.pi.editDisplayType??N.getPiEditDisplayType(this.pi),this.isRequire=this.pi.isRequire==null?!0:this.pi.isRequire):this.display=="detail"&&(this.displayTypeList=N.getPiDetailDisplayTypeList(this.pi),this.piDisplayType=this.pi.detailDisplayType??N.getPiDetailDisplayType(this.pi))}save(){this.display=="query"?this.pi.queryDisplayType=this.piDisplayType:this.display=="list"?(this.pi.listDisplayType=this.piDisplayType,this.pi.isListSort=this.isSort):this.display=="edit"?(this.pi.editDisplayType=this.piDisplayType,this.pi.isRequire=this.isRequire):this.display=="detail"&&(this.pi.detailDisplayType=this.piDisplayType),this.modal.close(!0)}cancel(){this.modal.close(!1)}static \u0275fac=function(e){return new(e||o)(F(Ce),F(Ee))};static \u0275cmp=O({type:o,selectors:[["app-pidisplayconfig"]],decls:15,vars:5,consts:[[1,"mb20"],[1,"mb10"],[3,"ngModelChange","ngModel"],["nz-checkbox","","class","mt20",3,"ngModel","ngModelChange",4,"ngIf"],[1,"tac","mt50"],["nz-button","","nzSize","small",1,"w80","mr50",3,"click","nzType"],["nz-button","","nzGhost","","nzSize","small",1,"w80",3,"click","nzType"],["nz-radio","",3,"nzValue"],["nz-checkbox","",1,"mt20",3,"ngModelChange","ngModel"]],template:function(e,n){e&1&&(m(0,"nz-card",0)(1,"div")(2,"div",1),s(3,"Display Type"),l(),m(4,"nz-radio-group",2),E("ngModelChange",function(a){return D(n.piDisplayType,a)||(n.piDisplayType=a),a}),fe(5,Ki,3,2,"div",null,Ie),l(),m(7,"div"),g(8,Xi,2,1,"label",3)(9,Ji,2,1,"label",3),l()(),m(10,"div",4)(11,"button",5),x("click",function(){return n.save()}),s(12,"\u786E\u5B9A"),l(),m(13,"button",6),x("click",function(){return n.cancel()}),s(14,"\u53D6\u6D88"),l()()()),e&2&&(r(4),L("ngModel",n.piDisplayType),r(),ye(n.displayTypeList),r(3),p("ngIf",n.display=="list"),r(),p("ngIf",n.display=="edit"),r(2),p("nzType","primary"),r(2),p("nzType","primary"))},dependencies:[W,le,re,j,q,ze,ke,he,se,me]})};var Yi=()=>({y:"400px"});function Zi(o,t){if(o&1){let e=I();m(0,"a",18),x("click",function(){h(e);let i=u().$implicit,a=u();return _(a.setDisplayType(i,"query"))}),s(1),l()}if(o&2){let e=u().$implicit;r(),z(e.queryDisplayType)}}function Bi(o,t){if(o&1&&(m(0,"span",20)(1,"nz-tag",21),s(2),l()()),o&2){let e=u(2).$implicit;r(2),z(e.isListSort?"Sortable":"")}}function en(o,t){if(o&1){let e=I();m(0,"a",18),x("click",function(){h(e);let i=u().$implicit,a=u();return _(a.setDisplayType(i,"list"))}),m(1,"span"),s(2),l(),g(3,Bi,3,1,"span",19),l()}if(o&2){let e=u().$implicit;r(2),z(e.listDisplayType),r(),p("ngIf",e.isListSort)}}function tn(o,t){if(o&1&&(m(0,"span",20)(1,"nz-tag",22),s(2),l()()),o&2){let e=u(2).$implicit;r(2),z(e.isRequire?"Require":"")}}function nn(o,t){if(o&1){let e=I();m(0,"a",18),x("click",function(){h(e);let i=u().$implicit,a=u();return _(a.setDisplayType(i,"edit"))}),m(1,"span"),s(2),l(),g(3,tn,3,1,"span",19),l()}if(o&2){let e=u().$implicit;r(2),z(e.editDisplayType),r(),p("ngIf",e.isRequire)}}function on(o,t){if(o&1){let e=I();m(0,"a",18),x("click",function(){h(e);let i=u().$implicit,a=u();return _(a.setDisplayType(i,"detail"))}),s(1),l()}if(o&2){let e=u().$implicit;r(),z(e.detailDisplayType)}}function an(o,t){if(o&1){let e=I();m(0,"tr")(1,"td")(2,"span",14),s(3),l()(),m(4,"td")(5,"span",14),s(6),l()(),m(7,"td"),s(8),l(),m(9,"td",15)(10,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isEnum,i)||(a.isEnum=i),_(i)}),l()(),m(11,"td",15)(12,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isKeyvalueItem,i)||(a.isKeyvalueItem=i),_(i)}),l()(),m(13,"td",15)(14,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isQuery,i)||(a.isQuery=i),_(i)}),l()(),m(15,"td"),g(16,Zi,2,1,"a",17),l(),m(17,"td",15)(18,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isList,i)||(a.isList=i),_(i)}),l()(),m(19,"td"),g(20,en,4,2,"a",17),l(),m(21,"td",15)(22,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isEdit,i)||(a.isEdit=i),_(i)}),l()(),m(23,"td"),g(24,nn,4,2,"a",17),l(),m(25,"td",15)(26,"label",16),E("ngModelChange",function(i){let a=h(e).$implicit;return D(a.isDetail,i)||(a.isDetail=i),_(i)}),l()(),m(27,"td"),g(28,on,2,1,"a",17),l()()}if(o&2){let e=t.$implicit;r(2),p("title",e.summary),r(),z(e.summary),r(2),p("title",e.name),r(),z(e.name),r(2),z(e.tsType),r(2),L("ngModel",e.isEnum),r(2),L("ngModel",e.isKeyvalueItem),r(2),L("ngModel",e.isQuery),r(2),p("ngIf",e.isQuery),r(2),L("ngModel",e.isList),r(2),p("ngIf",e.isList),r(2),L("ngModel",e.isEdit),r(2),p("ngIf",e.isEdit),r(2),L("ngModel",e.isDetail),r(2),p("ngIf",e.isDetail)}}var lt=class o{constructor(t,e,n){this.route=t;this.modalSvc=e;this.modal=n}config=new Jt;ngOnInit(){this.config=this.modal.getConfig().nzData.configModel,this.checkPiDisplayTypeList(this.config)}checkPiDisplayTypeList(t){t.editPageType||(t.editPageType="Page"),t.detailPageType||(t.detailPageType="Page"),t.piList.forEach(e=>{let n=N.getPiQueryDisplayTypeList(e),i=N.getPiListDisplayTypeList(e),a=N.getPiEditDisplayTypeList(e),d=N.getPiDetailDisplayTypeList(e);(!e.queryDisplayType||n.filter(c=>c==e.queryDisplayType).length==0)&&(e.queryDisplayType=N.getPiQueryDisplayType(e)),(!e.listDisplayType||i.filter(c=>c==e.listDisplayType).length==0)&&(e.listDisplayType=N.getPiListDisplayType(e),e.isListSort=!0),(!e.editDisplayType||a.filter(c=>c==e.editDisplayType).length==0)&&(e.editDisplayType=N.getPiEditDisplayType(e),e.isRequire=!0),(!e.detailDisplayType||d.filter(c=>c==e.detailDisplayType).length==0)&&(e.detailDisplayType=N.getPiDetailDisplayType(e))})}setDisplayType(t,e="query"){this.modalSvc.create({nzTitle:"Set DisplayType",nzWidth:320,nzContent:at,nzData:{pi:t,display:e},nzCentered:!0,nzMaskClosable:!1,nzNoAnimation:!0,nzFooter:null,nzOkText:null,nzCancelText:null}).afterClose.subscribe(i=>{})}generate(){this.modal.close(!0)}cancel(){this.modal.close(!1)}static \u0275fac=function(e){return new(e||o)(F(ae),F(Ce),F(Ee))};static \u0275cmp=O({type:o,selectors:[["app-codegenerateconfig"]],decls:58,vars:24,consts:[[1,"ml20"],["nzShowPagination","false","nzBordered","","nzSize","small",1,"configTable",3,"nzData","nzScroll"],[3,"nzWidth"],[1,"tac",3,"nzWidth"],["title","enumItem \u6570\u636E\u6E90\u6765\u81EAenumItem"],["title","keyvalueItem \u6570\u636E\u6E90\u6765\u81EAKeyvalueItem"],[1,"mt20"],[1,"mr10"],[3,"ngModelChange","ngModel"],["nz-radio","",3,"nzValue"],[1,"ml50"],[1,"tac","mt50","mb35"],["nz-button","",1,"w100","mr50",3,"click","nzType"],["nz-button","","nzGhost","",1,"w100",3,"click","nzType"],[3,"title"],[1,"tac"],["nz-checkbox","",3,"ngModelChange","ngModel"],[3,"click",4,"ngIf"],[3,"click"],["class","ml10",4,"ngIf"],[1,"ml10"],["nzColor","cyan"],["nzColor","magenta"]],template:function(e,n){e&1&&(m(0,"div",0)(1,"div")(2,"nz-table",1)(3,"thead")(4,"tr")(5,"th",2),s(6,"summary"),l(),m(7,"th",2),s(8,"name"),l(),m(9,"th",2),s(10,"type"),l(),m(11,"th",3)(12,"span",4),s(13,"enum"),l()(),m(14,"th",3)(15,"span",5),s(16,"keyval"),l()(),m(17,"th",3),s(18,"query"),l(),m(19,"th",2),s(20,"queryDisplay"),l(),m(21,"th",3),s(22,"list"),l(),m(23,"th",2),s(24,"listDisplay"),l(),m(25,"th",3),s(26,"edit"),l(),m(27,"th",2),s(28,"editDisplay"),l(),m(29,"th",3),s(30,"detail"),l(),m(31,"th",2),s(32,"detailDisplay"),l()()(),m(33,"tbody"),fe(34,an,29,15,"tr",null,Ie),l()()(),m(36,"div",6)(37,"span")(38,"span",7),s(39,"\u7F16\u8F91\u9875\u9762\uFF1A"),l(),m(40,"nz-radio-group",8),E("ngModelChange",function(a){return D(n.config.editPageType,a)||(n.config.editPageType=a),a}),m(41,"label",9),s(42,"Page"),l(),m(43,"label",9),s(44,"Modal"),l()()(),m(45,"span",10)(46,"span",7),s(47,"\u8BE6\u60C5\u9875\u9762\uFF1A"),l(),m(48,"nz-radio-group",8),E("ngModelChange",function(a){return D(n.config.detailPageType,a)||(n.config.detailPageType=a),a}),m(49,"label",9),s(50,"Page"),l(),m(51,"label",9),s(52,"Modal"),l()()()()(),m(53,"div",11)(54,"button",12),x("click",function(){return n.generate()}),s(55,"\u751F\u6210"),l(),m(56,"button",13),x("click",function(){return n.cancel()}),s(57,"\u8FD4\u56DE"),l()()),e&2&&(r(2),p("nzData",n.config.piList)("nzScroll",Nt(23,Yi)),r(3),p("nzWidth","150px"),r(2),p("nzWidth","120px"),r(2),p("nzWidth","70px"),r(2),p("nzWidth","60px"),r(3),p("nzWidth","60px"),r(3),p("nzWidth","60px"),r(2),p("nzWidth","100px"),r(2),p("nzWidth","60px"),r(2),p("nzWidth","140px"),r(2),p("nzWidth","60px"),r(2),p("nzWidth","180px"),r(2),p("nzWidth","60px"),r(2),p("nzWidth","100px"),r(3),ye(n.config.piList),r(6),L("ngModel",n.config.editPageType),r(),p("nzValue","Page"),r(2),p("nzValue","Modal"),r(5),L("ngModel",n.config.detailPageType),r(),p("nzValue","Page"),r(2),p("nzValue","Modal"),r(3),p("nzType","primary"),r(2),p("nzType","primary"))},dependencies:[W,le,re,j,q,ze,he,se,me,Q,G,$,X,H,K,ce],styles:[".modelTable tbody>tr.selected{background-color:#e8f8fe}  .modelTable tbody>tr:hover{background-color:#e8f8fe}  .ant-modal-body{padding:12px 24px 5px}  .configTable td{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"]})};var ln=["nzTree"],rn=(o,t)=>t.id;function mn(o,t){if(o&1&&(m(0,"span",21),s(1),l()),o&2){let e=u(2);r(),z(e.tsResult.summary)}}function sn(o,t){if(o&1&&(m(0,"label",43),s(1),l()),o&2){let e=u().$implicit;r(),M(" (",e.sourceName,") ")}}function dn(o,t){o&1&&(m(0,"nz-tag",44),s(1,"IsEnum"),l())}function pn(o,t){if(o&1){let e=I();m(0,"tr",45),x("click",function(){let i=h(e),a=i.$implicit,d=i.index,c=u().$implicit,f=u(4);return _(f.selectPi(c,a,d))}),m(1,"td"),s(2),l(),m(3,"td"),s(4),l(),m(5,"td"),s(6),l()()}if(o&2){let e=t.$implicit;we(e.isSelected?"selected":""),r(2),z(e.name),r(2),z(e.tsType),r(2),z(e.summary)}}function cn(o,t){if(o&1){let e=I();m(0,"div",30)(1,"div")(2,"div",31)(3,"label",32),s(4),l(),g(5,sn,2,1,"label",33)(6,dn,2,0,"nz-tag",34),m(7,"label",35),s(8),l(),m(9,"div",36)(10,"a",37),x("click",function(){let i=h(e).$implicit,a=u(4);return _(a.viewLambda(i))}),s(11,"\u5FEB\u6377Lambda"),l()()()(),m(12,"div",38),x("keyup",function(i){h(e);let a=u(4);return _(a.onKeyUpHandler(i))})("keydown",function(i){h(e);let a=u(4);return _(a.onKeyDownHandler(i))}),m(13,"nz-table",39,0)(15,"thead")(16,"tr")(17,"th",40),s(18,"Name"),l(),m(19,"th",41),s(20,"Type"),l(),m(21,"th"),s(22,"Summary"),l()()(),m(23,"tbody"),g(24,pn,7,6,"tr",42),l()()()()}if(o&2){let e=t.$implicit,n=R(14),i=u(4);r(4),M(" ",e.name," "),r(),p("ngIf",e.name!=e.sourceName),r(),p("ngIf",e.isEnum),r(),_t("title",e.summary),r(),M(" ",e.summary," "),r(5),p("nzBordered",!0)("nzShowPagination",!1)("nzPageSize",1e3)("nzData",e.piList),r(4),p("nzShowSort",!0)("nzSortFn",i.nameSortFn),r(2),p("nzShowSort",!0)("nzSortFn",i.typeSortFn),r(5),p("ngForOf",n.data)}}function un(o,t){if(o&1&&(m(0,"div")(1,"nz-card",28),g(2,cn,25,14,"div",29),l()()),o&2){let e=u(3);r(2),p("ngForOf",e.tsResult.tsModelList)}}function fn(o,t){if(o&1&&(m(0,"div"),k(1,"app-syntax-highlight",46),l()),o&2){let e=u(3);r(),p("title","Typescript")("code",e.tsResult==null?null:e.tsResult.tsCode.tsModelCode)("language","typescript")}}function yn(o,t){if(o&1){let e=I();m(0,"nz-tab",22)(1,"div")(2,"div",9)(3,"label",23),s(4,"Ts Models"),l(),m(5,"div",24)(6,"nz-radio-group",25),E("ngModelChange",function(i){h(e);let a=u(2);return D(a.tsModelViewType,i)||(a.tsModelViewType=i),_(i)}),x("ngModelChange",function(){h(e);let i=u(2);return _(i.modelViewTypeChanged())}),m(7,"label",26),s(8,"TableView"),l(),m(9,"label",27),s(10,"CodeView"),l()()()(),m(11,"div"),g(12,un,3,1,"div",4)(13,fn,2,3,"div",4),l()()()}if(o&2){let e=u(2);r(6),L("ngModel",e.tsModelViewType),r(6),p("ngIf",e.tsModelViewType=="1"),r(),p("ngIf",e.tsModelViewType=="2")}}function gn(o,t){if(o&1&&(m(0,"span",58),s(1),l()),o&2){let e=u().$implicit;r(),M(" ",e.sourceName," ")}}function zn(o,t){if(o&1&&(m(0,"nz-option",49)(1,"span")(2,"span"),s(3),l(),g(4,gn,2,1,"span",57),l()()),o&2){let e=t.$implicit;p("nzLabel",e.name)("nzValue",e),r(3),M(" ",e.name," "),r(),p("ngIf",e.name!=e.sourceName)}}function Cn(o,t){if(o&1){let e=I();m(0,"div",59)(1,"div",60)(2,"div",61)(3,"span",62),x("click",function(){h(e);let i=u().$implicit,a=u(3);return _(a.openFolder(i))}),l()(),m(4,"div",63)(5,"span",64),s(6),l()()()()}if(o&2){let e=u().$implicit;r(3),p("nzType",e.isExpanded?"folder-open":"folder"),r(3),z(e.title)}}function hn(o,t){if(o&1&&(m(0,"div",59)(1,"div",60)(2,"div",61),k(3,"span",65),l(),m(4,"div",63)(5,"span",66),s(6),l()()()()),o&2){let e=u().$implicit;r(6),z(e.title)}}function _n(o,t){if(o&1&&g(0,Cn,7,2,"div",59)(1,hn,7,1,"div",59),o&2){let e=t.$implicit;st(e.isLeaf?1:0)}}function vn(o,t){if(o&1){let e=I();m(0,"nz-tab",47)(1,"div")(2,"div",9)(3,"label",23),s(4,"Ts Pages"),l(),m(5,"div",24)(6,"label"),s(7,"Base Model"),l(),m(8,"nz-select",48),E("ngModelChange",function(i){h(e);let a=u(2);return D(a.pageBaseModel,i)||(a.pageBaseModel=i),_(i)}),x("ngModelChange",function(i){h(e);let a=u(2);return _(a.pageBaseModelChange(i))}),fe(9,zn,5,4,"nz-option",49,rn),l(),m(11,"button",50),x("click",function(){h(e);let i=u(2);return _(i.generatePages())}),s(12,"Generate"),l()()(),m(13,"div",51)(14,"div",52)(15,"div",53)(16,"nz-tree",54,1),x("nzClick",function(i){h(e);let a=u(2);return _(a.activeNode(i))})("nzDblClick",function(i){h(e);let a=u(2);return _(a.openFolder(i))}),l(),g(18,_n,2,1,"ng-template",null,2,Le),l()(),m(20,"div",55),k(21,"app-syntax-highlight",56),l()()()()}if(o&2){let e=R(19),n=u(2);r(8),L("ngModel",n.pageBaseModel),p("nzShowArrow",!0),r(),ye(n.pageModelList),r(7),p("nzData",n.pageNodes)("nzTreeTemplate",e),r(5),p("title",n.pageCodeTitle)("size","middle")("code",n.pageCode)("language",n.pageLanguage)}}function Tn(o,t){if(o&1&&k(0,"app-syntax-highlight",46),o&2){let e=u(3);p("title","Typescript")("code",e.tsResult==null?null:e.tsResult.tsCode.tsServiceCode)("language","typescript")}}function Sn(o,t){if(o&1&&k(0,"app-syntax-highlight",46),o&2){let e=u(3);p("title","C#")("code",e.tsResult==null?null:e.tsResult.tsCode.apiCode)("language","csharp")}}function Nn(o,t){if(o&1){let e=I();m(0,"nz-tab",67)(1,"div")(2,"div",9)(3,"label",68),s(4,"Api Services"),l(),m(5,"div",69)(6,"nz-radio-group",25),E("ngModelChange",function(i){h(e);let a=u(2);return D(a.tsServiceType,i)||(a.tsServiceType=i),_(i)}),x("ngModelChange",function(){h(e);let i=u(2);return _(i.tsServiceTypeChanged())}),m(7,"label",26),s(8,"Ts Service"),l(),m(9,"label",27),s(10,"ApiCode"),l()()()(),m(11,"div"),g(12,Tn,1,3,"app-syntax-highlight",46)(13,Sn,1,3,"app-syntax-highlight",46),l()()()}if(o&2){let e=u(2);r(6),L("ngModel",e.tsServiceType),r(6),st(e.tsServiceType=="1"?12:13)}}function bn(o,t){if(o&1){let e=I();m(0,"div")(1,"div")(2,"div",7)(3,"div",8)(4,"div",9)(5,"label",10),s(6),Pe(7,"titlecase"),m(8,"span",11),s(9),l()(),g(10,mn,2,1,"span",12),l()(),m(11,"div",13)(12,"a",14),x("click",function(){h(e);let i=u();return _(i.goback())}),s(13,"Return"),l()()(),m(14,"div")(15,"nz-card",15)(16,"nz-tabset",16),g(17,yn,14,3,"nz-tab",17)(18,vn,22,8,"nz-tab",18)(19,Nn,14,2,"nz-tab",19),l(),m(20,"div")(21,"label",20),s(22,"Not all code is useful, the generated code is for reference only"),l()()()()()()}if(o&2){let e=u();r(6),M(" Ts For ",bt(7,9,e.itemType)," "),r(3),z(e.tsResult==null?null:e.tsResult.name),r(),p("ngIf",e.tsResult==null?null:e.tsResult.summary),r(5),p("nzSize","small"),r(),p("nzSize","small")("nzAnimated",!1),r(),p("ngIf",(e.tsModelList==null?null:e.tsModelList.length)>0),r(),p("ngIf",(e.tsModelList==null?null:e.tsModelList.length)>0),r(),p("ngIf",e.tsResult==null||e.tsResult.tsCode==null?null:e.tsResult.tsCode.tsServiceCode)}}function xn(o,t){if(o&1&&(Ct(0),k(1,"app-syntax-highlight",70),ht()),o&2){let e=u();r(),p("title","Typescript")("code",e.tsCode)("language","typescript")}}var rt=class o{constructor(t,e,n,i){this.routerParams=t;this.nzContextMenuService=e;this.modalSvc=n;this.apiSvc=i;let a=localStorage.getItem("tsServiceType");this.tsServiceType=a||"1";let d=localStorage.getItem("tsModelViewType");this.tsModelViewType=d||"1",localStorage.getItem("isShowPageQueryModel")==="false"&&(this.isShowPageQueryModel=!1)}nzTree;itemId;itemType;tsServiceType="1";tsModelViewType="1";isShowPageQueryModel=!0;isAfterViewInit=!1;tsResult;tsModelList=[];pageModelList=[];tsModelCode;tsModelCodeWithPgQuery;pageBaseModel;showCode=!1;codeTitle;tsCode;isCtrlDown=!1;isShiftDown=!1;rootNode;rootNodeOptions={title:"pages",key:"pages",expanded:!0,children:[]};pageNodes=[this.rootNodeOptions];activatedNode;pageCode="";pageCodeTitle="";pageLanguage="html";ngOnInit(){this.itemId=this.routerParams.snapshot.paramMap.get("itemId"),this.itemType=this.routerParams.snapshot.paramMap.get("itemType")}ngAfterViewInit(){this.isAfterViewInit=!0,this.getTsModel()}getTsModel(){this.apiSvc.GetTsModel(this.itemId,this.itemType).subscribe(t=>{if(this.tsResult=t,this.tsModelList=this.tsResult.tsModelList,this.pageModelList=this.tsModelList?.filter(e=>!e.isEnum&&e.name.indexOf("<")<0),this.pageModelList?.length>0){let e=this.tsModelList.filter(n=>n.name.toLowerCase()===this.tsResult.name.toLowerCase());e.length>0?this.pageBaseModel=e[0]:this.pageBaseModel=this.pageModelList[0],this.pageBaseModel&&this.autoGeneratePages()}})}autoGeneratePages(){let t=setInterval(()=>{this.isAfterViewInit&&this.nzTree&&(clearInterval(t),this.rootNode=this.nzTree.getTreeNodeByKey(this.rootNodeOptions.key),this.generatePages(!0))},100)}pageBaseModelChange(t){}generatePages(t=!1){if(this.pageBaseModel)if(this.loadConfigFromStorage(this.pageBaseModel),t)this.doGeneratePages();else{let e="Pages Generate Config for "+this.pageBaseModel.name;this.modalSvc.create({nzTitle:e,nzWidth:1360,nzContent:lt,nzData:{configModel:this.pageBaseModel},nzCentered:!0,nzDraggable:!0,nzMaskClosable:!1,nzNoAnimation:!0,nzFooter:null,nzOkText:null,nzCancelText:null}).afterClose.subscribe(i=>{i&&(localStorage.setItem("generateConfig"+this.pageBaseModel.id,JSON.stringify(this.pageBaseModel)),this.doGeneratePages())})}}doGeneratePages(){if(!(!this.pageBaseModel||!this.rootNode))try{let t=this.rootNode.getChildren(),e=t.find(d=>d.key===this.pageBaseModel.id.toLowerCase()),n=t.findIndex(d=>d.key===e?.key);e&&e.remove();let a=ot.generatePageNode(this.pageBaseModel);n!=-1?this.rootNode.addChildren([a],n):this.rootNode.addChildren([a])}catch(t){oe.showErrorMessageBox(t)}}loadConfigFromStorage(t){let e=localStorage.getItem("generateConfig"+this.pageBaseModel?.id),n=JSON.parse(e);if(n){t.editPageType=n.editPageType,t.detailPageType=n.detailPageType;let i=t.piList,a=n.piList;i?.forEach(d=>{let c=a.filter(f=>f.name===d.name)[0];c&&c.tsType===d.tsType&&(d.isKeyvalueItem=c.isKeyvalueItem,d.isQuery=c.isQuery,d.queryDisplayType=c.queryDisplayType,d.isList=c.isList,d.isListSort=c.isListSort,d.listDisplayType=c.listDisplayType,d.isEdit=c.isEdit,d.isRequire=c.isRequire,d.editDisplayType=c.editDisplayType,d.isDetail=c.isDetail,d.detailDisplayType=c.detailDisplayType)})}}openFolder(t){if(t instanceof jt)t.isExpanded=!t.isExpanded;else{let e=t.node;e&&(e.isExpanded=!e.isExpanded)}}activeNode(t){if(this.activatedNode=t.node,!this.activatedNode.isLeaf)this.activatedNode.isExpanded=!this.activatedNode.isExpanded,this.pageCode="",this.pageLanguage="html",this.pageCodeTitle=this.activatedNode.title;else{let e=this.activatedNode?.origin;this.pageCode=e.code,this.pageLanguage=e.language,this.pageCodeTitle=e?.title}}contextMenu(t,e){this.nzContextMenuService.create(t,e)}selectDropdown(){}selectPi(t,e,n){if(this.tsResult.tsModelList.forEach(i=>{i!==t&&i.piList.forEach(a=>{a.isSelected=!1})}),!this.isCtrlDown&&!this.isShiftDown)t.piList.filter(i=>i.isSelected===!0).forEach((i,a)=>{i!=e&&(i.isSelected=!1)}),e.isSelected=!e.isSelected;else if(this.isCtrlDown)e.isSelected=!e.isSelected;else if(this.isShiftDown){let i=-1,a=-1;if(t.piList.filter(d=>d.isSelected===!0).forEach(d=>{let c=t.piList.indexOf(d);(i===-1||i>c)&&(i=c),(a===-1||a<c)&&(a=c)}),i===-1){e.isSelected=!e.isSelected;return}if(n===i||n===a){e.isSelected=!e.isSelected;return}if(n<i)for(let d=n;d<=a;d++)t.piList[d].isSelected=!0;else if(n>a)for(let d=i;d<=n;d++)t.piList[d].isSelected=!0;else{for(let d=i;d<=n;d++)t.piList[d].isSelected=!0;for(let d=n+1;d<=a;d++)t.piList[d].isSelected=!1}}}nameSortFn(t,e,n){return t.name.localeCompare(e.name)}valueSortFn(t,e,n){return t.paramValue-e.paramValue}typeSortFn(t,e,n){return t.typeName.localeCompare(e.typeName)}viewLambda(t){if(t.piList.filter(d=>d.isSelected).length<=0){oe.showInfoBox("No record is selected.");return}let e=t.piList.filter(d=>d.isSelected),n=`//1 SetValue \r
`;n+=t.name+" "+y.firstToLower(t.name)+" = new "+t.name+`();\r
`,e.forEach((d,c)=>{n+=y.firstToLower(t.name)+"."+y.firstToLower(d.name)+" = source."+y.firstToLower(d.name)+`;\r
`});let i=`//2 C# Ctor \r
`;i+=t.name+" "+y.firstToLower(t.name)+" = new "+t.name+`(){\r
`,e.forEach((d,c)=>{i+="  "+d.name+" = source."+d.name,c<e.length-1&&(i+=","),i+=`\r
`}),i+=`};\r
`;let a=`//3 Expression Lambda \r
`;e.length==1?a+="a => a."+e[0].name+`\r
`:(a+="var exp = ExpressionHelper.CreateExpression<"+t.name+`>(a => new {\r
`,e.forEach((d,c)=>{a+="  a."+d.name,c<e.length-1&&(a+=","),a+=`\r
`}),a+=`};\r
`),this.tsCode=`\r
`+n+`\r
`+i+`\r
`+a,this.codeTitle=t.name+" Lambda",this.showCode=!0}closeModal(){this.showCode=!1}modelViewTypeChanged(){localStorage.setItem("tsModelViewType",this.tsModelViewType)}isShowPageQueryModelChanged(){localStorage.setItem("isShowPageQueryModel",this.isShowPageQueryModel.toString())}tsServiceTypeChanged(){localStorage.setItem("tsServiceType",this.tsServiceType)}onKeyDownHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!0,t.preventDefault();break;case 17:this.isCtrlDown=!0,t.preventDefault();break;case 37:break;case 38:this.isCtrlDown||this.isShiftDown,t.preventDefault();break;case 39:break;case 40:this.isCtrlDown||this.isShiftDown,t.preventDefault();break;default:break}}onKeyUpHandler(t){switch(t.keyCode){case 16:this.isShiftDown=!1,t.preventDefault();break;case 17:this.isCtrlDown=!1,t.preventDefault();break;default:break}}goback(){history.back()}static \u0275fac=function(e){return new(e||o)(F(ae),F(At),F(Ce),F(J))};static \u0275cmp=O({type:o,selectors:[["app-codeviewer"]],viewQuery:function(e,n){if(e&1&&vt(ln,5),e&2){let i;Tt(i=St())&&(n.nzTree=i.first)}},decls:4,vars:4,consts:[["tsModelTable",""],["nzTree",""],["nzTreeTemplate",""],[2,"padding","20px 80px"],[4,"ngIf"],["nzWidth","720px",3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzCancelText"],[4,"nzModalContent"],["nz-row",""],["nz-col","","nzSpan","20"],[1,"lh40"],[1,"f-size20"],[1,"color-lightblue"],["class","f-size16 ml30",4,"ngIf"],["nz-col","","nzSpan","4",1,"lh40","valign-bottom"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"ml50","w80",3,"click"],[1,"mt10","minh500",3,"nzSize"],[3,"nzSize","nzAnimated"],["nzTitle","Models",4,"ngIf"],["nzTitle","Pages",4,"ngIf"],["nzTitle","Services",4,"ngIf"],[1,"mt20","ml16","f-size12"],[1,"f-size16","ml30"],["nzTitle","Models"],[1,"f-size18","w80"],[1,"lineblock","ml50"],[3,"ngModelChange","ngModel"],["nz-radio","","nzValue","1"],["nz-radio","","nzValue","2"],["nzSize","small"],["class","mt10 mb20 pr56",4,"ngFor","ngForOf"],[1,"mt10","mb20","pr56"],[1,"pl5"],[1,"f-size16","color-primary"],["class","f-size16 ml10 color-darkgray",4,"ngIf"],["nzColor","cyan","class","ml10",4,"ngIf"],[1,"ml10",2,"max-width","60%",3,"title"],[1,"pull-right","mr80"],["nz-button","","nzType","primary","nzSize","small","nzGhost","",1,"w100",3,"click"],["tabindex","1",3,"keyup","keydown"],["nzSize","small",1,"mt5","modelTable",3,"nzBordered","nzShowPagination","nzPageSize","nzData"],[1,"wp25",3,"nzShowSort","nzSortFn"],[1,"wp15",3,"nzShowSort","nzSortFn"],[3,"class","click",4,"ngFor","ngForOf"],[1,"f-size16","ml10","color-darkgray"],["nzColor","cyan",1,"ml10"],[3,"click"],[3,"title","code","language"],["nzTitle","Pages"],["nzPlaceHolder","select base model for pages",1,"w300","ml20",3,"ngModelChange","ngModel","nzShowArrow"],["nzCustomContent","",3,"nzLabel","nzValue"],["nz-button","","nzType","primary",1,"ml30","w100",3,"click"],["nz-row","","nzGutter","32",1,"mt10"],["nz-col","","nzSpan","6",2,"overflow-x","hidden","overflow-y","auto"],[1,"h420","w350"],["nzBlockNode","",3,"nzClick","nzDblClick","nzData","nzTreeTemplate"],["nz-col","","nzSpan","18"],[3,"title","size","code","language"],["class","ml10 color-darkgray",4,"ngIf"],[1,"ml10","color-darkgray"],[1,"custom-node"],["nz-row","","nzGutter","5"],["nz-col","","nzSpan","1"],["nz-icon","",3,"click","nzType"],["nz-col","","nzSpan","23"],[1,"folder-name","ml8"],["nz-icon","","nzType","file"],[1,"file-name","ml8"],["nzTitle","Services"],[1,"f-size18","w100"],[1,"lineblock","ml30"],["size","middle",3,"title","code","language"]],template:function(e,n){e&1&&(m(0,"div",3),g(1,bn,23,11,"div",4),m(2,"nz-modal",5),E("nzVisibleChange",function(a){return D(n.showCode,a)||(n.showCode=a),a}),x("nzOnCancel",function(){return n.closeModal()})("nzOnOk",function(){return n.closeModal()}),g(3,xn,2,3,"ng-container",6),l()()),e&2&&(r(),p("ngIf",n.itemId),r(),L("nzVisible",n.showCode),p("nzTitle",n.codeTitle)("nzCancelText",null))},dependencies:[ne,W,le,re,j,q,ze,ke,pe,de,De,Pt,It,se,me,Ot,Rt,Q,_e,G,$,X,H,K,qt,Wt,ce,Ut,Gt,wt],styles:[".modelTable tbody>tr:hover{background-color:#e8f8fe}  .modelTable tbody>tr.selected{background-color:#e8f8fe}  .ant-modal-body{padding:12px 24px 5px}div[_ngcontent-%COMP%]::selection{background:transparent!important;color:inherit}div[_ngcontent-%COMP%]:focus{outline:-webkit-focus-ring-color auto 0px;outline-style:auto;outline-width:0px}nz-tree[_ngcontent-%COMP%]{overflow:hidden;margin:0 -24px;padding:0 20px}.custom-node[_ngcontent-%COMP%]{cursor:pointer;line-height:28px;margin-left:4px;display:inline-block;width:100%}.file-name[_ngcontent-%COMP%], .folder-name[_ngcontent-%COMP%]{margin-left:4px}.file-desc[_ngcontent-%COMP%], .folder-desc[_ngcontent-%COMP%]{padding:0 8px;display:inline-block;background:#1890ff;color:#fff;position:relative;left:12px}"]})};var wn=[{path:"",component:Qt,children:[{path:"",redirectTo:"/workbench/index",pathMatch:"full"},{path:"action/:actionId",component:Oe},{path:"ptype/:ptypeId",component:Re},{path:"codeviewer/:itemType/:itemId",component:rt,data:{title:"Ts"}}]},{path:"index",component:Kt,children:[{path:"",component:Fe,data:{reuse:!0}}]}],mt=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=xe({type:o});static \u0275inj=be({imports:[dt.forChild(wn),dt]})};var ti=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=xe({type:o});static \u0275inj=be({providers:[J],imports:[$t,Xt,mt]})};export{ti as WorkbenchModule};
