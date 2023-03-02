import{u as A,d as u,h as n,z as I,p as N,H as yt,Q as ke,a as D,y as M,aA as Ne,g as Qe,F as _t,E as qt,f as He,a7 as wt,a6 as Le,m as Pe,a0 as ze,a1 as Ue,aC as U,j as Ee,aa as Ct,aD as Me,aE as Ce,aF as je,aG as kt,a5 as Ke,aH as Pt,am as G,B as ie}from"./index.136848cc.js";import{a as xt,Q as Rt}from"./QList.d01c620f.js";import{a as se,b as ce}from"./uid.478f7271.js";import{u as Tt,a as Bt,c as We,Q as Vt}from"./QSelect.dc345e08.js";import{d as Ot,h as $t}from"./QInput.c610543f.js";var hl=A({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:a}){const l=N(),c=u(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return n("td",{class:c.value},I(a.default));const o=l.vnode.key,v=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(v===void 0)return;const{row:i}=e.props;return n("td",{class:c.value+v.__tdClass(i),style:v.__tdStyle(i)},I(a.default))}}}),yl=A({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:a}){const l=u(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>n("tr",{class:l.value},I(a.default))}}),Ft=A({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const c=N(),{proxy:{$q:o}}=c,v=i=>{l("click",i)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:v},I(a.default));let i,d;const f=c.vnode.key;if(f){if(i=e.props.colsMap[f],i===void 0)return}else i=e.props.col;if(i.sortable===!0){const r=i.align==="right"?"unshift":"push";d=yt(a.default,[]),d[r](n(ke,{class:i.__iconClass,name:o.iconSet.table.arrowUp}))}else d=I(a.default);const m={class:i.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:i.headerStyle,onClick:r=>{i.sortable===!0&&e.props.sort(i),v(r)}};return n("th",m,d)}}});const pt=["horizontal","vertical","cell","none"];var Lt=A({name:"QMarkupTable",props:{...se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>pt.includes(e)}},setup(e,{slots:a}){const l=N(),c=ce(e,l.proxy.$q),o=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(c.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},I(a.default))])}});function Ge(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const Et={list:xt,table:Lt},Mt=["list","table","__qtable"];var jt=A({name:"QVirtualScroll",props:{...Tt,type:{type:String,default:"list",validator:e=>Mt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let c;const o=D(null),v=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:i,localResetVirtualScroll:d,padVirtualScroll:f,onVirtualScrollEvt:m}=Bt({virtualScrollLength:v,getVirtualScrollTarget:w,getVirtualScrollEl:k}),r=u(()=>{if(v.value===0)return[];const V=($,x)=>({index:i.value.from+x,item:$});return e.itemsFn===void 0?e.items.slice(i.value.from,i.value.to).map(V):e.itemsFn(i.value.from,i.value.to-i.value.from).map(V)}),b=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(v,()=>{d()}),M(()=>e.scrollTarget,()=>{h(),y()});function k(){return o.value.$el||o.value}function w(){return c}function y(){c=wt(k(),e.scrollTarget),c.addEventListener("scroll",m,Le.passive)}function h(){c!==void 0&&(c.removeEventListener("scroll",m,Le.passive),c=void 0)}function B(){let V=f(e.type==="list"?"div":"tbody",r.value.map(a.default));return a.before!==void 0&&(V=a.before().concat(V)),Pe(a.after,V)}return Ne(()=>{d()}),Qe(()=>{y()}),_t(()=>{y()}),qt(()=>{h()}),He(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Ge({ref:o,class:"q-table__middle "+b.value},B()):n(Et[e.type],{...l,ref:o,class:[l.class,b.value],...q.value},B)}}});const Dt={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var At=A({name:"QLinearProgress",props:{...se,...ze,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=N(),c=ce(e,l.$q),o=Ue(e,Dt),v=u(()=>e.indeterminate===!0||e.query===!0),i=u(()=>e.reverse!==e.query),d=u(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=u(()=>De(e.buffer!==void 0?e.buffer:1,i.value,l.$q)),r=u(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=u(()=>De(v.value===!0?1:e.value,i.value,l.$q)),k=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${v.value===!0?"in":""}determinate`),w=u(()=>({width:`${e.value*100}%`})),y=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const h=[n("div",{class:b.value,style:m.value}),n("div",{class:k.value,style:q.value})];return e.stripe===!0&&v.value===!1&&h.push(n("div",{class:y.value,style:w.value})),n("div",{class:f.value,style:d.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Pe(a.default,h))}}});function It(e,a){const l=D(null),c=u(()=>e.disable===!0?null:n("span",{ref:l,class:"no-outline",tabindex:-1}));function o(v){const i=a.value;v!==void 0&&v.type.indexOf("key")===0?i!==null&&document.activeElement!==i&&i.contains(document.activeElement)===!0&&i.focus():l.value!==null&&(v===void 0||i!==null&&i.contains(v.target)===!0)&&l.value.focus()}return{refocusTargetEl:c,refocusTarget:o}}var Nt={xs:30,sm:35,md:40,lg:50,xl:60};const Qt={...se,...ze,...Ot,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Ht=["update:modelValue"];function zt(e,a){const{props:l,slots:c,emit:o,proxy:v}=N(),{$q:i}=v,d=ce(l,i),f=D(null),{refocusTargetEl:m,refocusTarget:r}=It(l,f),b=Ue(l,Nt),q=u(()=>l.val!==void 0&&Array.isArray(l.modelValue)),k=u(()=>{const C=U(l.val);return q.value===!0?l.modelValue.findIndex(p=>U(p)===C):-1}),w=u(()=>q.value===!0?k.value>-1:U(l.modelValue)===U(l.trueValue)),y=u(()=>q.value===!0?k.value===-1:U(l.modelValue)===U(l.falseValue)),h=u(()=>w.value===!1&&y.value===!1),B=u(()=>l.disable===!0?-1:l.tabindex||0),V=u(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(d.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),$=u(()=>{const C=w.value===!0?"truthy":y.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${C}${p}`}),x=u(()=>{const C={type:"checkbox"};return l.name!==void 0&&Object.assign(C,{".checked":w.value,"^checked":w.value===!0?"checked":void 0,name:l.name,value:q.value===!0?l.val:l.trueValue}),C}),T=$t(x),Q=u(()=>{const C={tabindex:B.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(C["aria-disabled"]="true"),C});function K(C){C!==void 0&&(Ee(C),r(C)),l.disable!==!0&&o("update:modelValue",W(),C)}function W(){if(q.value===!0){if(w.value===!0){const C=l.modelValue.slice();return C.splice(k.value,1),C}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function J(C){(C.keyCode===13||C.keyCode===32)&&Ee(C)}function F(C){(C.keyCode===13||C.keyCode===32)&&K(C)}const j=a(w,h);return Object.assign(v,{toggle:K}),()=>{const C=j();l.disable!==!0&&T(C,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[n("div",{class:$.value,style:b.value,"aria-hidden":"true"},C)];m.value!==null&&p.push(m.value);const Y=l.label!==void 0?Pe(c.default,[l.label]):I(c.default);return Y!==void 0&&p.push(n("div",{class:`q-${e}__label q-anchor--skip`},Y)),n("div",{ref:f,class:V.value,...Q.value,onClick:K,onKeydown:J,onKeyup:F},p)}}const Ut=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var we=A({name:"QCheckbox",props:Qt,emits:Ht,setup(e){function a(l,c){const o=u(()=>(l.value===!0?e.checkedIcon:c.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(ke,{class:"q-checkbox__icon",name:o.value})])]:[Ut]}return zt("checkbox",a)}});let X=0;const Kt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Wt=["update:fullscreen","fullscreen"];function Gt(){const e=N(),{props:a,emit:l,proxy:c}=e;let o,v,i;const d=D(!1);Ct(e)===!0&&M(()=>c.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&r()}),M(()=>a.fullscreen,b=>{d.value!==b&&f()}),M(d,b=>{l("update:fullscreen",b),l("fullscreen",b)});function f(){d.value===!0?r():m()}function m(){d.value!==!0&&(d.value=!0,i=c.$el.parentNode,i.replaceChild(v,c.$el),document.body.appendChild(c.$el),X++,X===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:r},Me.add(o))}function r(){d.value===!0&&(o!==void 0&&(Me.remove(o),o=void 0),i.replaceChild(c.$el,v),d.value=!1,X=Math.max(0,X-1),X===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return Ne(()=>{v=document.createElement("span")}),Qe(()=>{a.fullscreen===!0&&m()}),He(r),Object.assign(c,{toggleFullscreen:f,setFullscreen:m,exitFullscreen:r}),{inFullscreen:d,toggleFullscreen:f}}function Xt(e,a){return new Date(e)-new Date(a)}const Jt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Yt(e,a,l,c){const o=u(()=>{const{sortBy:d}=a.value;return d&&l.value.find(f=>f.name===d)||null}),v=u(()=>e.sortMethod!==void 0?e.sortMethod:(d,f,m)=>{const r=l.value.find(k=>k.name===f);if(r===void 0||r.field===void 0)return d;const b=m===!0?-1:1,q=typeof r.field=="function"?k=>r.field(k):k=>k[r.field];return d.sort((k,w)=>{let y=q(k),h=q(w);return y==null?-1*b:h==null?1*b:r.sort!==void 0?r.sort(y,h,k,w)*b:Ce(y)===!0&&Ce(h)===!0?(y-h)*b:je(y)===!0&&je(h)===!0?Xt(y,h)*b:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*b:([y,h]=[y,h].map(B=>(B+"").toLocaleString().toLowerCase()),y<h?-1*b:y===h?0:b)})});function i(d){let f=e.columnSortOrder;if(kt(d)===!0)d.sortOrder&&(f=d.sortOrder),d=d.name;else{const b=l.value.find(q=>q.name===d);b!==void 0&&b.sortOrder&&(f=b.sortOrder)}let{sortBy:m,descending:r}=a.value;m!==d?(m=d,r=f==="da"):e.binaryStateSort===!0?r=!r:r===!0?f==="ad"?m=null:r=!1:f==="ad"?r=!0:m=null,c({sortBy:m,descending:r,page:1})}return{columnToSort:o,computedSortMethod:v,sort:i}}const Zt={filter:[String,Object],filterMethod:Function};function el(e,a){const l=u(()=>e.filterMethod!==void 0?e.filterMethod:(c,o,v,i)=>{const d=o?o.toLowerCase():"";return c.filter(f=>v.some(m=>{const r=i(m,f)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(d)!==-1}))});return M(()=>e.filter,()=>{Ke(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function tl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const ll={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function al(e,a){const{props:l,emit:c}=e,o=D(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),v=u(()=>{const r=l["onUpdate:pagination"]!==void 0?{...o.value,...l.pagination}:o.value;return Ae(r)}),i=u(()=>v.value.rowsNumber!==void 0);function d(r){f({pagination:r,filter:l.filter})}function f(r={}){Ke(()=>{c("request",{pagination:r.pagination||v.value,filter:r.filter||l.filter,getCellValue:a})})}function m(r,b){const q=Ae({...v.value,...r});if(tl(v.value,q)===!0){i.value===!0&&b===!0&&d(q);return}if(i.value===!0){d(q);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?c("update:pagination",q):o.value=q}return{innerPagination:o,computedPagination:v,isServerSide:i,requestServerInteraction:f,setPagination:m}}function nl(e,a,l,c,o,v){const{props:i,emit:d,proxy:{$q:f}}=e,m=u(()=>c.value===!0?l.value.rowsNumber||0:v.value),r=u(()=>{const{page:x,rowsPerPage:T}=l.value;return(x-1)*T}),b=u(()=>{const{page:x,rowsPerPage:T}=l.value;return x*T}),q=u(()=>l.value.page===1),k=u(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/l.value.rowsPerPage))),w=u(()=>b.value===0?!0:l.value.page>=k.value),y=u(()=>(i.rowsPerPageOptions.includes(a.value.rowsPerPage)?i.rowsPerPageOptions:[a.value.rowsPerPage].concat(i.rowsPerPageOptions)).map(T=>({label:T===0?f.lang.table.allRows:""+T,value:T})));M(k,(x,T)=>{if(x===T)return;const Q=l.value.page;x&&!Q?o({page:1}):x<Q&&o({page:x})});function h(){o({page:1})}function B(){const{page:x}=l.value;x>1&&o({page:x-1})}function V(){const{page:x,rowsPerPage:T}=l.value;b.value>0&&x*T<m.value&&o({page:x+1})}function $(){o({page:k.value})}return i["onUpdate:pagination"]!==void 0&&d("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:b,isFirstPage:q,isLastPage:w,pagesNumber:k,computedRowsPerPageOptions:y,computedRowsNumber:m,firstPage:h,prevPage:B,nextPage:V,lastPage:$}}const rl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ol=["update:selected","selection"];function il(e,a,l,c){const o=u(()=>{const w={};return e.selected.map(c.value).forEach(y=>{w[y]=!0}),w}),v=u(()=>e.selection!=="none"),i=u(()=>e.selection==="single"),d=u(()=>e.selection==="multiple"),f=u(()=>l.value.length>0&&l.value.every(w=>o.value[c.value(w)]===!0)),m=u(()=>f.value!==!0&&l.value.some(w=>o.value[c.value(w)]===!0)),r=u(()=>e.selected.length);function b(w){return o.value[w]===!0}function q(){a("update:selected",[])}function k(w,y,h,B){a("selection",{rows:y,added:h,keys:w,evt:B});const V=i.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter($=>w.includes(c.value($))===!1);a("update:selected",V)}return{hasSelectionMode:v,singleSelection:i,multipleSelection:d,allRowsSelected:f,someRowsSelected:m,rowsSelectedNumber:r,isRowSelected:b,clearSelection:q,updateSelection:k}}function Ie(e){return Array.isArray(e)?e.slice():[]}const ul={expanded:Array},sl=["update:expanded"];function cl(e,a){const l=D(Ie(e.expanded));M(()=>e.expanded,i=>{l.value=Ie(i)});function c(i){return l.value.includes(i)}function o(i){e.expanded!==void 0?a("update:expanded",i):l.value=i}function v(i,d){const f=l.value.slice(),m=f.indexOf(i);d===!0?m===-1&&(f.push(i),o(f)):m!==-1&&(f.splice(m,1),o(f))}return{isRowExpanded:c,setExpanded:o,updateExpanded:v}}const dl={visibleColumns:Array};function vl(e,a,l){const c=u(()=>{if(e.columns!==void 0)return e.columns;const d=e.rows[0];return d!==void 0?Object.keys(d).map(f=>({name:f,label:f.toUpperCase(),field:f,align:Ce(d[f])?"right":"left",sortable:!0})):[]}),o=u(()=>{const{sortBy:d,descending:f}=a.value;return(e.visibleColumns!==void 0?c.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):c.value).map(r=>{const b=r.align||"right",q=`text-${b}`;return{...r,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===d?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>q+" "+r.classes:k=>q+" "+r.classes(k):()=>q}})}),v=u(()=>{const d={};return o.value.forEach(f=>{d[f.name]=f}),d}),i=u(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(l.value===!0?1:0));return{colList:c,computedCols:o,computedColsMap:v,computedColspan:i}}const ue="q-table__bottom row items-center",Xe={};We.forEach(e=>{Xe[e]={}});var _l=A({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Xe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...se,...Kt,...dl,...Zt,...ll,...ul,...rl,...Jt},emits:["request","virtualScroll",...Wt,...sl,...ol],setup(e,{slots:a,emit:l}){const c=N(),{proxy:{$q:o}}=c,v=ce(e,o),{inFullscreen:i,toggleFullscreen:d}=Gt(),f=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=D(null),r=D(null),b=u(()=>e.grid!==!0&&e.virtualScroll===!0),q=u(()=>" q-table__card"+(v.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),k=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(v.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(i.value===!0?" fullscreen scroll":"")),w=u(()=>k.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+k.value,()=>{b.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:B,requestServerInteraction:V,setPagination:$}=al(c,H),{computedFilterMethod:x}=el(e,$),{isRowExpanded:T,setExpanded:Q,updateExpanded:K}=cl(e,l),W=u(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:s,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,L.value,H)),Ze.value!==null&&(t=et.value(e.rows===t?t.slice():t,s,g)),t}),J=u(()=>W.value.length),F=u(()=>{let t=W.value;if(B.value===!0)return t;const{rowsPerPage:s}=h.value;return s!==0&&(ee.value===0&&e.rows!==t?t.length>te.value&&(t=t.slice(0,te.value)):t=t.slice(ee.value,te.value)),t}),{hasSelectionMode:j,singleSelection:C,multipleSelection:p,allRowsSelected:Y,someRowsSelected:xe,rowsSelectedNumber:de,isRowSelected:ve,clearSelection:Je,updateSelection:Z}=il(e,l,F,f),{colList:Ye,computedCols:L,computedColsMap:Re,computedColspan:Te}=vl(e,h,j),{columnToSort:Ze,computedSortMethod:et,sort:fe}=Yt(e,h,Ye,$),{firstRowIndex:ee,lastRowIndex:te,isFirstPage:ge,isLastPage:be,pagesNumber:le,computedRowsPerPageOptions:tt,computedRowsNumber:ae,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye}=nl(c,y,h,B,$,J),lt=u(()=>F.value.length===0),at=u(()=>{const t={};return We.forEach(s=>{t[s]=e[s]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function nt(){b.value===!0&&r.value.reset()}function rt(){if(e.grid===!0)return St();const t=e.hideHeader!==!0?Fe:null;if(b.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=n("tbody",g({cols:L.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>n("tbody",S({cols:L.value}))),n(jt,{ref:r,class:e.tableClass,style:e.tableStyle,...at.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:it},_)}const s=[ut()];return t!==null&&s.unshift(t()),Ge({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},s)}function ot(t,s){if(r.value!==null){r.value.scrollTo(t,s);return}t=parseInt(t,10);const g=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=m.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function it(t){l("virtualScroll",t)}function Be(){return[n(At,{class:"q-table__linear-progress",color:e.color,dark:v.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,s,g){const S=f.value(t),_=ve(S);if(s!==void 0)return s(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=L.value.map(O=>{const re=a[`body-cell-${O.name}`],oe=re!==void 0?re:R;return oe!==void 0?oe(st({key:S,row:t,pageIndex:g,col:O})):n("td",{class:O.__tdClass(t),style:O.__tdStyle(t)},H(O,t))});if(j.value===!0){const O=a["body-selection"],re=O!==void 0?O(ct({key:S,row:t,pageIndex:g})):[n(we,{modelValue:_,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(oe,ht)=>{Z([S],[t],oe,ht)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},re))}const E={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(E.class["cursor-pointer"]=!0,E.onClick=O=>{l("RowClick",O,t,g)}),e.onRowDblclick!==void 0&&(E.class["cursor-pointer"]=!0,E.onDblclick=O=>{l("RowDblclick",O,t,g)}),e.onRowContextmenu!==void 0&&(E.class["cursor-pointer"]=!0,E.onContextmenu=O=>{l("RowContextmenu",O,t,g)}),n("tr",E,P)}function ut(){const t=a.body,s=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Ve(_,t,R));return s!==void 0&&(S=s({cols:L.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:L.value}))),n("tbody",S)}function Oe(t){return _e(t),t.cols=t.cols.map(s=>G({...s},"value",()=>H(s,t.row))),t}function st(t){return _e(t),G(t,"value",()=>H(t.col,t.row)),t}function ct(t){return _e(t),t}function _e(t){Object.assign(t,{cols:L.value,colsMap:Re.value,sort:fe,rowIndex:ee.value+t.pageIndex,color:e.color,dark:v.value,dense:e.dense}),j.value===!0&&G(t,"selected",()=>ve(t.key),(s,g)=>{Z([t.key],[t.row],s,g)}),G(t,"expand",()=>T(t.key),s=>{K(t.key,s)})}function H(t,s){const g=typeof t.field=="function"?t.field(s):s[t.field];return t.format!==void 0?t.format(g,s):g}const z=u(()=>({pagination:h.value,pagesNumber:le.value,isFirstPage:ge.value,isLastPage:be.value,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,inFullscreen:i.value,toggleFullscreen:d}));function dt(){const t=a.top,s=a["top-left"],g=a["top-right"],S=a["top-selection"],_=j.value===!0&&S!==void 0&&de.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:R},[t(z.value)]);let P;if(_===!0?P=S(z.value).slice():(P=[],s!==void 0?P.push(n("div",{class:"q-table-control"},[s(z.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[g(z.value)]))),P.length!==0)return n("div",{class:R},P)}const $e=u(()=>xe.value===!0?null:Y.value);function Fe(){const t=vt();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Te.value},Be())])),n("thead",t)}function vt(){const t=a.header,s=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=L.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:s,P=qe({col:S});return R!==void 0?R(P):n(Ft,{key:S.name,props:P},()=>S.label)});if(C.value===!0&&e.grid!==!0)g.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const S=a["header-selection"],_=S!==void 0?S(qe({})):[n(we,{color:e.color,modelValue:$e.value,dark:v.value,dense:e.dense,"onUpdate:modelValue":pe})];g.unshift(n("th",{class:"q-table--col-auto-width"},_))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:L.value,sort:fe,colsMap:Re.value,color:e.color,dark:v.value,dense:e.dense}),p.value===!0&&G(t,"selected",()=>$e.value,pe),t}function pe(t){xe.value===!0&&(t=!1),Z(F.value.map(f.value),F.value,t)}const ne=u(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ft(){if(e.hideBottom===!0)return;if(lt.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:o.iconSet.table.warning,filter:e.filter})]:[n(ke,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),g];return n("div",{class:ue+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return n("div",{class:ue},[t(z.value)]);const s=e.hideSelectedBanner!==!0&&j.value===!0&&de.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(de.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ue+" justify-end"},bt(s));if(s.length>0)return n("div",{class:ue},s)}function gt(t){$({page:1,rowsPerPage:t.value})}function bt(t){let s;const{rowsPerPage:g}=h.value,S=e.paginationLabel||o.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),R===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Vt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:tt.value,displayValue:g===0?o.lang.table.allRows:g,dark:v.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":gt})])),_!==void 0)s=_(z.value);else if(s=[n("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(ee.value+1,Math.min(te.value,ae.value),ae.value):S(1,J.value,ae.value)])],g!==0&&le.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),le.value>2&&s.push(n(ie,{key:"pgFirst",...P,icon:ne.value[0],disable:ge.value,onClick:me})),s.push(n(ie,{key:"pgPrev",...P,icon:ne.value[1],disable:ge.value,onClick:Se}),n(ie,{key:"pgNext",...P,icon:ne.value[2],disable:be.value,onClick:he})),le.value>2&&s.push(n(ie,{key:"pgLast",...P,icon:ne.value[3],disable:be.value,onClick:ye}))}return t.push(n("div",{class:"q-table__control"},s)),t}function mt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Fe()])]:e.loading===!0&&a.loading===void 0?Be():void 0;return n("div",{class:"q-table__middle"},t)}function St(){const t=a.item!==void 0?a.item:s=>{const g=s.cols.map(_=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[_.label]),n("div",{class:"q-table__grid-item-value"},[_.value])]));if(j.value===!0){const _=a["body-selection"],R=_!==void 0?_(s):[n(we,{modelValue:s.selected,color:e.color,dark:v.value,dense:e.dense,"onUpdate:modelValue":(P,E)=>{Z([s.key],[s.row],P,E)}})];g.unshift(n("div",{class:"q-table__grid-item-row"},R),n(Rt,{dark:v.value}))}const S={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,s.row,s.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,s.row,s.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(s.selected===!0?" q-table__grid-item--selected":"")},[n("div",S,g)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((s,g)=>t(Oe({key:f.value(s),row:s,pageIndex:g}))))}return Object.assign(c.proxy,{requestServerInteraction:V,setPagination:$,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,isRowSelected:ve,clearSelection:Je,isRowExpanded:T,setExpanded:Q,sort:fe,resetVirtualScroll:nt,scrollTo:ot,getCellValue:H}),Pt(c.proxy,{filteredSortedRows:()=>W.value,computedRows:()=>F.value,computedRowsNumber:()=>ae.value}),()=>{const t=[dt()],s={ref:m,class:w.value};return e.grid===!0?t.push(mt()):Object.assign(s,{class:[s.class,e.cardClass],style:e.cardStyle}),t.push(rt(),ft()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",s,t)}}});export{hl as Q,yl as a,_l as b};
