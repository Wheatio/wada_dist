import{Q as o}from"./QInput.ab74723d.js";import{g as u}from"./QBtn.68a98313.js";import{s as m}from"./staffing.1c48af4b.js";import{_ as i,o as p,c as d,a7 as s,z as t,B as _}from"./index.fc2873ca.js";import"./focus-manager.e17a04ac.js";import"./uid.42677368.js";const b={data(){return{number:null,beanData:"",name:"",location:"",array:[]}},computed:{events(){return m.getters.getEvents}},methods:{setValue(){console.log(this.array)},submit(){let l=Array(this.number);this.array=l}}},c={class:"q-pa-md row"};function y(l,a,f,v,e,n){return p(),d("div",c,[s("div",null,[t(o,{type:"search",label:"search",modelValue:e.beanData,"onUpdate:modelValue":a[0]||(a[0]=r=>e.beanData=r),rules:[r=>!!r||"value is required"]},null,8,["modelValue","rules"]),t(o,{type:"number",label:"number",modelValue:e.number,"onUpdate:modelValue":a[1]||(a[1]=r=>e.number=r),modelModifiers:{number:!0}},null,8,["modelValue"]),t(u,{label:"submit",onClick:n.submit},null,8,["onClick"]),s("p",null,_(e.array),1)])])}var D=i(b,[["render",y],["__scopeId","data-v-6eb1e76e"]]);export{D as default};
