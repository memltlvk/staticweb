"use strict";(self["webpackChunkccstaticweb"]=self["webpackChunkccstaticweb"]||[]).push([[555],{6917:(e,a,r)=>{r.d(a,{Z:()=>v});var n=r(9835);const s=e=>((0,n.dD)("data-v-ef5b6bf0"),e=e(),(0,n.Cn)(),e),l=s((()=>(0,n._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.041812028454!2d80.28742731409706!3d13.09653669077399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f451754e633%3A0x9f2193c5fbc8ff36!2sDoshi%20Plaza!5e0!3m2!1sen!2sin!4v1661360418271!5m2!1sen!2sin",width:"100%",height:"100%",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1)));function t(e,a,r,s,t,o){const i=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(i,{class:"location-card"},{default:(0,n.w5)((()=>[l])),_:1})}var o=r(499),i=r(9302);r(5103);const m=(0,n.aZ)({name:"LocationComponent",props:{colors:{type:Object,default(){return{bg:"",infobg:"",infotext:"",contactbg:"",contacttext:""}}},displayArea:{type:Object,default(){return{width:256,height:256,"font-size":16}}},dark:{type:Boolean,default:!1}},setup(e){(0,i.Z)(),(0,o.iH)(e.displayArea.width/e.displayArea["font-size"]);return(0,n.bv)((()=>{})),{}}});var d=r(1639),c=r(4458),p=r(9984),u=r.n(p);const f=(0,d.Z)(m,[["render",t],["__scopeId","data-v-ef5b6bf0"]]),v=f;u()(m,"components",{QCard:c.Z})},4555:(e,a,r)=>{r.r(a),r.d(a,{default:()=>le});var n=r(9835);const s={class:"display-area"},l={class:"persons-column"},t={class:"location-column"},o={class:"feedback-column"},i={class:"feedback-column-item"};function m(e,a,r,m,d,c){const p=(0,n.up)("person-card-component"),u=(0,n.up)("location-component"),f=(0,n.up)("feedback-form-component"),v=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(v,{class:"flex flex-center"},{default:(0,n.w5)((()=>[(0,n._)("div",s,[(0,n._)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.persons,(a=>((0,n.wg)(),(0,n.iD)("div",{key:a.no,class:"persons-column-item"},[(0,n.Wm)(p,{person:a,displayArea:e.displayArea},null,8,["person","displayArea"])])))),128))]),(0,n._)("div",t,[(0,n.Wm)(u)]),(0,n._)("div",o,[(0,n._)("div",i,[(0,n.Wm)(f)])])])])),_:1})}var d=r(499),c=r(9302),p=(r(5103),r(6970));const u={class:"person-card-section"},f={class:"person-image-div"},v={class:"info-div"},g={class:"person-info-div"},y={class:"person-name"},h={class:"separator"},b={class:"person-title"},P={class:"icon-style"},V={class:"person-contact-div"},z={class:"phone-div"},C={class:"icon-style"},w={class:"email-div"},q={class:"icon-style"},_={class:"email-div-full-span"},k={class:"icon-style"};function D(e,a,r,s,l,t){const o=(0,n.up)("q-img"),i=(0,n.up)("q-separator"),m=(0,n.up)("q-icon"),d=(0,n.up)("q-resize-observer"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{id:"mainCard",class:"persons-card"},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n._)("div",f,[(0,n.Wm)(o,{src:e.person.image,class:"person-image"},null,8,["src"])]),(0,n._)("div",v,[(0,n._)("div",g,[(0,n._)("div",y,(0,p.zw)(e.person.name),1),(0,n._)("div",h,[(0,n.Wm)(i,{color:"accent"})]),(0,n._)("div",b,[(0,n._)("span",P,[(0,n.Wm)(m,{name:"assignment_ind"})]),(0,n.Uk)(" "+(0,p.zw)(e.person.title),1)])]),(0,n._)("div",V,[(0,n._)("div",z,[(0,n._)("span",C,[(0,n.Wm)(m,{name:"call"})]),(0,n.Uk)(" "+(0,p.zw)(e.person.phone),1)]),(0,n._)("div",w,[(0,n._)("span",q,[(0,n.Wm)(m,{name:"email"})]),(0,n.Uk)(" "+(0,p.zw)(e.person.email),1)])])]),(0,n._)("div",_,[(0,n._)("span",k,[(0,n.Wm)(m,{name:"email"})]),(0,n.Uk)("  "+(0,p.zw)(e.person.email),1)])]),(0,n.Wm)(d,{onResize:e.onCardResize},null,8,["onResize"])])),_:1})}function W(e,a,r){return"linear"===e?F.apply(r,a):"stringval"===e?x.apply(r,a):void 0}function F(e,a,r,n,s){let l=(n-a)/(r-e),t=a-l*e,o=l*this+t;return o.toString()+s}function x(e){return e}r(4409);const Z=JSON.parse('{"D":[{"id":"1","name":"portrait","minBaseParameterValue":"0","maxBaseParameterValue":"22","vars":[{"var":"backgroundImageFile","fname":"stringval","fparams":["url(\\"/assets/personal-card.png\\")"]},{"var":"normalFontSize","fname":"linear","fparams":[14,0.6,22,0.9,"rem"]},{"var":"cardTopPadding","fname":"linear","fparams":[14,3,22,5,"rem"]},{"var":"cardBottomPadding","fname":"linear","fparams":[14,3.5,22,5.5,"rem"]},{"var":"cardLeftPadding","fname":"linear","fparams":[14,0,22,0,"rem"]},{"var":"cardRightPadding","fname":"linear","fparams":[14,0,22,0,"rem"]},{"var":"imageDivWidth","fname":"linear","fparams":[14,4.5,22,7,"rem"]},{"var":"personImageDivFlexValue","fname":"stringval","fparams":["100%"]},{"var":"imageWidth","fname":"linear","fparams":[14,4.5,22,7,"rem"]},{"var":"infoDivFlexValue","fname":"stringval","fparams":["100%"]},{"var":"infodivTopMargin","fname":"linear","fparams":[14,1.3,22,2.8,"rem"]},{"var":"infodivBottomMargin","fname":"linear","fparams":[14,0.7,22,1.7,"rem"]},{"var":"personNameFontSize","fname":"linear","fparams":[14,1,22,1.3,"rem"]},{"var":"separatorMarginTop","fname":"linear","fparams":[14,0,22,0.2,"rem"]},{"var":"separatorMarginBottom","fname":"linear","fparams":[14,0,22,0.2,"rem"]},{"var":"iconFontSize","fname":"linear","fparams":[14,1.2,22,1.5,"rem"]},{"var":"phonedivBottomMargin","fname":"linear","fparams":[14,0,22,0,"rem"]},{"var":"emailDivDisplayValue","fname":"stringval","fparams":["flex"]},{"var":"emailDivFullSpanDisplayValue","fname":"stringval","fparams":["none"]}]},{"id":"2","name":"landscape","minBaseParameterValue":"22","maxBaseParameterValue":"30","vars":[{"var":"backgroundImageFile","fname":"stringval","fparams":["url(\\"/assets/personal-card-landscape.png\\")"]},{"var":"normalFontSize","fname":"linear","fparams":[22,0.7,30,0.9,"rem"]},{"var":"cardTopPadding","fname":"linear","fparams":[22,2,30,3,"rem"]},{"var":"cardBottomPadding","fname":"linear","fparams":[22,2,30,3,"rem"]},{"var":"cardLeftPadding","fname":"linear","fparams":[22,3.5,30,4.5,"rem"]},{"var":"cardRightPadding","fname":"linear","fparams":[22,3,30,4,"rem"]},{"var":"imageDivWidth","fname":"linear","fparams":[22,4.5,30,7,"rem"]},{"var":"personImageDivFlexValue","fname":"stringval","fparams":["30%"]},{"var":"imageWidth","fname":"linear","fparams":[22,4.5,30,7,"rem"]},{"var":"infoDivFlexValue","fname":"stringval","fparams":["55%"]},{"var":"infodivTopMargin","fname":"linear","fparams":[22,0.3,30,0.7,"rem"]},{"var":"infodivBottomMargin","fname":"linear","fparams":[22,0.3,30,0.7,"rem"]},{"var":"personNameFontSize","fname":"linear","fparams":[22,1,30,1.3,"rem"]},{"var":"separatorMarginTop","fname":"linear","fparams":[22,0,30,0.2,"rem"]},{"var":"separatorMarginBottom","fname":"linear","fparams":[22,0,30,0.2,"rem"]},{"var":"iconFontSize","fname":"linear","fparams":[22,1.2,30,1.5,"rem"]},{"var":"phonedivBottomMargin","fname":"linear","fparams":[22,0,30,0,"rem"]},{"var":"emailDivDisplayValue","fname":"stringval","fparams":["none"]},{"var":"emailDivFullSpanDisplayValue","fname":"stringval","fparams":["flex"]}]}],"q":{"backgroundImageFile":{"cssClass":"persons-card","cssProperty":"background-image","defaultValue":"url(\\"/assets/personal-card.png\\")"},"normalFontSize":{"cssClass":"person-card-section","cssProperty":"font-size","defaultValue":"0.7rem"},"cardTopPadding":{"cssClass":"person-card-section","cssProperty":"padding-top","defaultValue":"2.5rem"},"cardBottomPadding":{"cssClass":"person-card-section","cssProperty":"padding-bottom","defaultValue":"2.5rem"},"cardLeftPadding":{"cssClass":"person-card-section","cssProperty":"padding-left","defaultValue":"1rem"},"cardRightPadding":{"cssClass":"person-card-section","cssProperty":"padding-right","defaultValue":"1rem"},"imageDivWidth":{"cssClass":"person-image-div","cssProperty":"width","defaultValue":"4.5rem"},"personImageDivFlexValue":{"cssClass":"person-image-div","cssProperty":"flex","defaultValue":"none"},"imageWidth":{"cssClass":"person-image","cssProperty":"width","defaultValue":"4.5rem"},"infoDivFlexValue":{"cssClass":"info-div","cssProperty":"flex","defaultValue":"100%"},"infodivTopMargin":{"cssClass":"person-info-div","cssProperty":"margin-top","defaultValue":"1.3rem"},"infodivBottomMargin":{"cssClass":"person-info-div","cssProperty":"margin-bottom","defaultValue":"0.7rem"},"personContactDivPaddingLeft":{"cssClass":"person-contact-div","cssProperty":"padding-left","defaultValue":"0rem"},"personNameFontSize":{"cssClass":"person-name","cssProperty":"font-size","defaultValue":"1rem"},"separatorMarginTop":{"cssClass":"separator","cssProperty":"margin-top","defaultValue":"0rem"},"separatorMarginBottom":{"cssClass":"separator","cssProperty":"margin-bottom","defaultValue":"0rem"},"iconFontSize":{"cssClass":"icon-style","cssProperty":"font-size","defaultValue":"1.2rem"},"phonedivBottomMargin":{"cssClass":"phone-div","cssProperty":"margin-bottom","defaultValue":"0rem"},"emailDivDisplayValue":{"cssClass":"email-div","cssProperty":"display","defaultValue":"flex"},"emailDivFullSpanDisplayValue":{"cssClass":"email-div-full-span","cssProperty":"display","defaultValue":"none"}}}'),B=(0,n.aZ)({name:"PersonCardComponent",props:{person:{type:Object,default(){return{no:1,image:"",title:"",name:"",phone:"",email:""}}},colors:{type:Object,default(){return{bg:"",infobg:"",infotext:"",contactbg:"",contacttext:""}}},displayArea:{type:Object,default(){return{width:256,height:256,"font-size":16}}},dark:{type:Boolean,default:!1}},setup(e){(0,c.Z)();const a=(0,d.iH)(e.displayArea.width/e.displayArea["font-size"]);function r(r){a.value=r.width/e.displayArea["font-size"],s(a.value)}function s(e){for(let a=0;a<Z.D.length;++a){let r=Z.D[a];if(e>=r.minBaseParameterValue&&e<=r.maxBaseParameterValue){r.vars.forEach((function(a){let r=Z.q[a.var]["cssClass"],n=W(a.fname,a.fparams,e);const s=document.getElementsByClassName(r);for(let e=0;e<s.length;e++)s[e].style.setProperty("--"+a.var,n,"important")}));break}}}return(0,n.bv)((()=>{})),{onCardResize:r,documentUpdateDim:s}}});var S=r(1639),A=r(4458),R=r(335),M=r(926),U=r(2857),I=r(883),j=r(9984),Q=r.n(j);const O=(0,S.Z)(B,[["render",D],["__scopeId","data-v-edb83c6a"]]),T=O;Q()(B,"components",{QCard:A.Z,QImg:R.Z,QSeparator:M.Z,QIcon:U.Z,QResizeObserver:I.Z});const N={class:"feedback-form"},H={class:"feedback-form-item-header text-h6"},L=(0,n.Uk)("Feedback"),E={class:"feedback-form-item-footer"};function J(e,a,r,s,l,t){const o=(0,n.up)("q-card"),i=(0,n.up)("q-input"),m=(0,n.up)("q-btn"),d=(0,n.up)("q-form"),c=(0,n.up)("q-resize-observer");return(0,n.wg)(),(0,n.j4)(o,{class:"feedback-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onSubmit:e.onSubmit,onReset:e.onReset},{default:(0,n.w5)((()=>[(0,n._)("div",N,[(0,n._)("div",H,[(0,n.Wm)(o,{class:"q-px-md q-mb-md bg-brown-10 text-white"},{default:(0,n.w5)((()=>[L])),_:1})]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.enquiry.name=a),label:"Name",hint:"Name and surname","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.address,"onUpdate:modelValue":a[1]||(a[1]=a=>e.enquiry.address=a),label:"Address",hint:"Address","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.city,"onUpdate:modelValue":a[2]||(a[2]=a=>e.enquiry.city=a),label:"City",hint:"City","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.state,"onUpdate:modelValue":a[3]||(a[3]=a=>e.enquiry.state=a),label:"State",hint:"State","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",type:"number",modelValue:e.enquiry.pincode,"onUpdate:modelValue":a[4]||(a[4]=a=>e.enquiry.pincode=a),label:"Pincode",hint:"Pincode","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type the Pincode",e=>e>1e5&&e<999999||"Please type 6 digit Pincode"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.country,"onUpdate:modelValue":a[5]||(a[5]=a=>e.enquiry.country=a),label:"Country",hint:"Country","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",modelValue:e.enquiry.email,"onUpdate:modelValue":a[6]||(a[6]=a=>e.enquiry.email=a),label:"Email",hint:"Email","lazy-rules":"",rules:[e=>e&&e.length>0||"Please type something"]},null,8,["modelValue","rules"]),(0,n.Wm)(i,{class:"feedback-form-item q-mb-md",filled:"",type:"number",modelValue:e.enquiry.phone,"onUpdate:modelValue":a[7]||(a[7]=a=>e.enquiry.phone=a),label:"Phone",hint:"Phone","lazy-rules":"",rules:[e=>null!==e&&""!==e||"Please type the Phone Number",e=>e>1e9&&e<9999999999||"Please type 10 digit Phone number"]},null,8,["modelValue","rules"]),(0,n._)("div",E,[(0,n.Wm)(m,{push:"",label:"Submit",type:"submit",color:"brown-10"}),(0,n.Wm)(m,{push:"",label:"Reset",type:"reset",color:"negative",class:"q-ml-sm"})])])])),_:1},8,["onSubmit","onReset"]),(0,n.Wm)(c,{onResize:e.onFeedbackCardResize},null,8,["onResize"])])),_:1})}const K=(0,n.aZ)({name:"FeedbackFormComponent",props:{colors:{type:Object,default(){return{bg:"",infobg:"",infotext:"",contactbg:"",contacttext:""}}},displayArea:{type:Object,default(){return{width:256,height:256,"font-size":16}}},dark:{type:Boolean,default:!1}},setup(e){const a=(0,c.Z)(),r=(0,d.iH)(e.displayArea.width/e.displayArea["font-size"]),s=(0,d.iH)({name:"",address:"",city:"",state:"",pincode:"",country:"",phone:"",email:""});function l(n){r.value=n.width/e.displayArea["font-size"],console.log("screen width = ",a.screen.width/16),console.log("resized formWidth = ",r.value)}function t(e){console.log("Document Update!")}function o(){console.log("enquiry = ",s.value)}function i(){s.value={name:"",address:"",city:"",state:"",pincode:"",country:"",phone:"",email:""}}return(0,n.bv)((()=>{})),{enquiry:s,onSubmit:o,onReset:i,onFeedbackCardResize:l,documentUpdateDim:t}}});var Y=r(8326),G=r(2296),X=r(9379);const $=(0,S.Z)(K,[["render",J],["__scopeId","data-v-3f9e92d2"]]),ee=$;Q()(K,"components",{QCard:A.Z,QForm:Y.Z,QInput:G.Z,QBtn:X.Z,QResizeObserver:I.Z});var ae=r(6917);const re=(0,n.aZ)({name:"ContactUsPage",components:{PersonCardComponent:T,FeedbackFormComponent:ee,LocationComponent:ae.Z},setup(){const e=(0,c.Z)(),a=(e.screen.width,e.screen.height,(0,d.iH)({width:e.screen.width,height:e.screen.height,"font-size":16})),r=[{no:1,image:"../assets/photo_placeholder.jpg",title:"Operations Manager",name:"V.Madhavan",phone:"+91 8925021222",email:"madhavanv@spaashippinglog.com"}];return{persons:r,displayArea:a}}});var ne=r(9885);const se=(0,S.Z)(re,[["render",m],["__scopeId","data-v-13c7099a"]]),le=se;Q()(re,"components",{QPage:ne.Z})}}]);