import{ak as S,al as c,a as h,N as y,am as q,h as A,an as Q,ao as _,ap as G,d as w,E as b,f as T,a5 as K,aq as $,p as k,ah as E,k as L}from"./index.136848cc.js";import{r as P,b as O}from"./focus-manager.d6507951.js";function U(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),S.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const f=[];function W(e){return f.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function I(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return c(e)}else if(e.__qPortal===!0){const n=c(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=c(e)}while(e!=null)}function z(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=I(e,t);continue}e.hide(t)}e=c(e)}}function M(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function J(e,t,n,o){const i=h(!1),u=h(!1);let l=null;const d={},v=o==="dialog"&&M(e);function F(m){if(m===!0){P(d),u.value=!0;return}u.value=!1,i.value===!1&&(v===!1&&l===null&&(l=_(!1,o)),i.value=!0,f.push(e.proxy),O(d))}function g(m){if(u.value=!1,m!==!0)return;P(d),i.value=!1;const p=f.indexOf(e.proxy);p!==-1&&f.splice(p,1),l!==null&&(G(l),l=null)}return y(()=>{g(!0)}),e.proxy.__qPortal=!0,q(e.proxy,"contentEl",()=>t.value),{showPortal:F,hidePortal:g,portalIsActive:i,portalIsAccessible:u,renderPortal:()=>v===!0?n():i.value===!0?[A(Q,{to:l},n())]:void 0}}const V={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function X(e,t=()=>{},n=()=>{}){return{transitionProps:w(()=>{const o=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Y(){let e;const t=k();function n(){e=void 0}return b(n),T(n),{removeTick:n,registerTick(o){e=o,K(()=>{e===o&&($(t)===!1&&e(),e=void 0)})}}}function Z(){let e=null;const t=k();function n(){e!==null&&(clearTimeout(e),e=null)}return b(n),T(n),{removeTimeout:n,registerTimeout(o,i){n(),$(t)===!1&&(e=setTimeout(o,i))}}}const a=[];let r;function N(e){r=e.keyCode===27}function R(){r===!0&&(r=!1)}function j(e){r===!0&&(r=!1,L(e,27)===!0&&a[a.length-1](e))}function C(e){window[e]("keydown",N),window[e]("blur",R),window[e]("keyup",j),r=!1}function x(e){E.is.desktop===!0&&(a.push(e),a.length===1&&C("addEventListener"))}function ee(e){const t=a.indexOf(e);t>-1&&(a.splice(t,1),a.length===0&&C("removeEventListener"))}const s=[];function D(e){s[s.length-1](e)}function te(e){E.is.desktop===!0&&(s.push(e),s.length===1&&document.body.addEventListener("focusin",D))}function ne(e){const t=s.indexOf(e);t>-1&&(s.splice(t,1),s.length===0&&document.body.removeEventListener("focusin",D))}export{Y as a,Z as b,z as c,U as d,X as e,J as f,W as g,te as h,ee as i,x as j,I as k,f as p,ne as r,V as u};
