import{C as a}from"./constants-BoOZBCnr.js";/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const I=`${a}state-layer`,E={TARGET:"target",DISABLED:"disabled"},A={...E},r={SURFACE:".forge-state-layer"},_={HOVERED:"forge-state-layer--hovered",PRESSED:"forge-state-layer--pressed"},S={elementName:I,attributes:A,selectors:r,classes:_};class c{constructor(t,o){this.x=t,this.y=o}static fromPointerEvent(t){return new c(t.pageX,t.pageY)}}const R=150,D=450,L=225,l=.2,u=10,M=75,f=.35,i="::after",d="forwards",F="cubic-bezier(0.2, 0, 0, 1)";var e;(function(s){s[s.INACTIVE=0]="INACTIVE",s[s.TOUCH_DELAY=1]="TOUCH_DELAY",s[s.HOLDING=2]="HOLDING",s[s.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"})(e||(e={}));/**
 * @license
 * Copyright Tyler Technologies, Inc. 
 * License: Apache-2.0
 */const N=`${a}focus-indicator`,O={TARGET:"target",ACTIVE:"active",INWARD:"inward",CIRCULAR:"circular",ALLOW_FOCUS:"allow-focus",FOCUS_MODE:"focus-mode"},n={...O},T={FOCUS_MODE:"focusin"},G={elementName:N,attributes:n,defaults:T};export{d as A,F as E,G as F,l as I,L as M,u as P,S,R as T,c as a,f as b,M as c,D as d,i as e,e as f};
