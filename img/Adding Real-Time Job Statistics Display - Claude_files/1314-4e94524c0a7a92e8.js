"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1314],{51314:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(58936),s=n(27573),r=n(16096),a=n(91600),o=n(89937),l=n(96111),c=n(92472),u=n(56109),h=n(43316),d=n(41911),p=n(71875),m=n(54603),f=n(7653),y=n(70913);function g(){let e=(0,i._)(["text-lg mb-6"]);return g=function(){return e},e}let x={poll_for_invoice:1e4,poll_for_payment:8e3,poll_for_capability:5e3};function _(e,t){let n=window.setTimeout(e,t);return()=>{window.clearTimeout(n)}}function v(e){let t,{onComplete:n,productCapability:i,refetchOrganization:c,isLoadingOrganization:u,organization:d}=e,{account:g,refetch:v,isLoading:N,activeOrganization:E}=(0,r.useCurrentAccount)(),{state:F,stateTakingTooLong:P}=function(e){var t;let{productCapability:n,refetch:i,isLoading:s,organization:r}=e,[o,l]=(0,f.useState)("poll_for_invoice"),[c,u]=(0,f.useState)(!1);(0,f.useEffect)(()=>_(()=>{l(e=>"success"===e||"payment_failed"===e?e:"timed_out")},6e4),[]),(0,f.useEffect)(()=>{u(!1);let e=x[o];if(e)return _(()=>{u(!0)},e)},[o]);let d=null==r?void 0:r.capabilities.includes(n),[m]=(0,f.useState)(()=>p.ou.now()),{data:g,refetch:v,isFetching:C,isError:j}=(0,y.MH)({limit:1,createdSince:m.minus({minute:30}),organizationUUID:null==r?void 0:r.uuid});(0,f.useEffect)(()=>{if(("poll_for_invoice"===o||"poll_for_payment"===o||"payment_requires_confirmation"===o)&&!C&&!j)return _(()=>{v()},2e3)},[o,v,C,j]),(0,f.useEffect)(()=>{if("poll_for_capability"===o&&!s)return _(()=>{i().catch(e=>{(0,h.Tb)(e)})},2e3)},[o,i,s]);let b=null==g?void 0:g[0],w=null==b?void 0:b.status,k=null==b?void 0:null===(t=b.payment_intent)||void 0===t?void 0:t.status;return(0,f.useEffect)(()=>{switch(o){case"poll_for_invoice":if("void"===w)return _(()=>{l("payment_failed")},Math.max(m.plus(6e3).diffNow().milliseconds,0));w&&l("poll_for_payment");return;case"poll_for_payment":if("paid"===w)l("poll_for_capability");else{if("requires_confirmation"===k)return _(()=>{l("payment_requires_confirmation")},6e3);("void"===w||"requires_payment_method"===k)&&l("payment_failed")}return;case"payment_requires_confirmation":"paid"===w?l("poll_for_capability"):("void"===w||"requires_payment_method"===k)&&l("payment_failed");return;case"poll_for_capability":d&&("claude_pro"===n?(0,a.bq)("event","pro_subscription_purchase"):"raven"===n&&(0,a.bq)("event","team_subscription_started"),l("success"));return}},[o,w,k,d,n,m]),{state:o,stateTakingTooLong:c}}({productCapability:i,refetch:null!=c?c:v,isLoading:null!=u?u:N,organization:null!=d?d:E}),L=(0,m.usePathname)(),T=(0,m.useRouter)(),q=(0,o.K)();if((0,f.useEffect)(()=>{q.track("payment_state_".concat(F))},[q,F]),(0,f.useEffect)(()=>{"payment_failed"===F&&T.replace(L)},[F,T,L]),"timed_out"===F)return(0,s.jsxs)(C,{title:"Unable to confirm payment",children:[(0,s.jsx)(b,{children:"This may be because of network issues. You can try reloading the page."}),(0,s.jsx)(b,{children:"We’re still trying to confirm your payment: you’ll get an email if it is successfully processed."}),(0,s.jsxs)(b,{children:["If the problem persists please"," ",(0,s.jsx)("a",{href:"https://support.anthropic.com/",className:"underline",target:"_blank",children:"contact support"}),"."]})]});if("payment_failed"===F)return(0,s.jsxs)(C,{title:"Payment failed",children:[(0,s.jsx)(b,{children:"Looks like that payment didn’t go through."}),(0,s.jsx)(l.Z,{size:"lg",onClick:()=>n({retry:!0,success:!1}),children:"Try another payment method"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("button",{className:"text-lg font-semibold hover:underline",onClick:()=>n({retry:!1,success:!1}),children:"Try again later"})})]});if("success"===F)return(0,s.jsxs)(j,{children:[(0,s.jsx)(w,{}),(0,s.jsx)(k,{product:i,name:null==g?void 0:g.display_name,orgName:null==d?void 0:d.name,onComplete:()=>n({retry:!1,success:!0})})]});let W="Processing payment...";return P?t=(0,s.jsxs)(s.Fragment,{children:["Taking a bit longer than usual. If the problem persists please"," ",(0,s.jsx)("a",{href:"https://support.anthropic.com/",className:"underline",target:"_blank",children:"contact support"}),"."]}):"poll_for_invoice"===F?t=(0,s.jsx)(s.Fragment,{children:"Don’t navigate away from this page yet"}):"poll_for_payment"===F?t=(0,s.jsx)(s.Fragment,{children:"Nearly done, just confirming the payment on our end."}):"poll_for_capability"===F?t=(0,s.jsx)(s.Fragment,{children:"Payment confirmed, activating your subscription."}):"payment_requires_confirmation"===F&&(W="Seems to be taking a while...",t=(0,s.jsxs)(s.Fragment,{children:["You might have received an email that requires you to approve the payment. If that isn’t the case, please"," ",(0,s.jsx)("a",{href:"https://support.anthropic.com/",className:"underline",target:"_blank",children:"contact support"}),"."]})),(0,s.jsxs)(j,{children:[(0,s.jsx)(w,{}),(0,s.jsx)("h2",{className:"font-styrene-display mb-1 mt-4 text-2xl font-medium",children:W}),(0,s.jsx)(b,{children:t})]})}let C=e=>{let{title:t,children:n}=e;return(0,s.jsxs)(j,{children:[(0,s.jsx)("div",{className:"bg-oncolor-100/10 inline-block rounded-full p-5",children:(0,s.jsx)(u.v,{size:40,className:"-translate-y-px"})}),(0,s.jsx)("h2",{className:"font-styrene-display mb-1 mt-3 text-2xl font-medium",children:t}),n]})},j=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:"absolute inset-0 z-30 flex h-full w-full items-center justify-center text-center text-white",children:[(0,s.jsx)(d.E.div,{className:"bg-accent-pro-100/90 absolute inset-0",exit:{opacity:0},transition:{duration:.35}}),(0,s.jsx)(d.E.div,{className:"relative z-10 mb-4 min-h-[250px] max-w-3xl pl-4 pr-4",exit:{opacity:0,scale:.9},transition:{duration:.25},children:t})]})},b=c.Z.p(g()),w=()=>(0,s.jsx)("svg",{className:"inline-block",width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{className:"origin-center animate-spin",d:"M77 40C77 60.4345 60.4345 77 40 77C19.5655 77 3 60.4345 3 40C3 19.5655 19.5655 3 40 3",stroke:"currentColor",strokeWidth:"4"})}),k=e=>{let{name:t,orgName:n,onComplete:i,product:r}=e;(0,f.useEffect)(()=>_(i,3500),[i]);let a="claude_pro"===r?(0,s.jsx)(s.Fragment,{children:"Welcome to Pro"}):t&&n?(0,s.jsxs)(s.Fragment,{children:["Welcome to ",n,", ",t]}):n?(0,s.jsxs)(s.Fragment,{children:["Welcome to ",n]}):t?(0,s.jsxs)(s.Fragment,{children:["Welcome to the Team Plan, ",t]}):(0,s.jsx)(s.Fragment,{children:"Welcome to the Team"});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"absolute left-0 top-0 w-full",children:(0,s.jsxs)("svg",{className:"inline-block",width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(d.E.circle,{cx:"40",cy:"40",r:"37",stroke:"currentColor",strokeWidth:"4",strokeDasharray:"0 1",initial:{pathLength:0},animate:{pathLength:1},transition:{duration:.65,ease:"easeInOut"}}),(0,s.jsx)(d.E.path,{d:"M26 40L36 51L56 29",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"0 1",initial:{pathLength:0,opacity:0},animate:{pathLength:1,opacity:[0,1,1,1,0]},transition:{duration:.35,delay:.5,ease:"easeInOut",opacity:{duration:1.25}}}),(0,s.jsxs)("g",{children:[(0,s.jsx)(d.E.path,{d:"M30.7075 22.75L19.0001 54.2499H25.5625L27.925 47.6349H40.21L42.5987 54.2499H49.1612L37.4275 22.75H30.7075ZM30.0775 41.7812L34.0675 30.7037L38.0837 41.7812H30.0775Z",fill:"currentColor",initial:{opacity:0,x:-6},animate:{opacity:1,x:0},transition:{ease:[.075,.82,.165,1],duration:.5,delay:1.75}}),(0,s.jsx)(d.E.path,{d:"M42.8613 22.75H49.2926L61 54.2499H54.5688L42.8613 22.75Z",fill:"currentColor",initial:{opacity:0,x:6},animate:{opacity:1,x:0},transition:{ease:[.075,.82,.165,1],duration:.5,delay:1.75}})]})]})}),(0,s.jsx)(d.E.h2,{className:"font-styrene-display mt-2 text-4xl font-medium",initial:{opacity:0,x:-24},animate:{opacity:1,x:0},transition:{ease:[.075,.82,.165,1],duration:1,delay:.75},children:a})]})}},83243:function(e,t,n){var i,s;n.d(t,{DF:function(){return a},iw:function(){return r}}),(s=i||(i={})).GoogleTagManager="google_tag_manager",s.GoogleEnhancedConversions="google_enhanced_conversions";let r={analytics:!1,marketing:!1},a={analytics:!0,marketing:!0}},89937:function(e,t,n){n.d(t,{K:function(){return a}});var i=n(87050),s=n(11492),r=n(21728);let a=()=>{let{segmentKey:e,segmentCdnHost:t,segmentApiHost:n}=(0,s.useConfiguration)(),{value:a}=(0,i.F)("requires_explicit_consent");return r.u.loadIfNecessary({segmentKey:e,segmentCdnHost:t,segmentApiHost:n,requiresExplicitConsent:a})}},21728:function(e,t,n){n.d(t,{u:function(){return p}});var i=n(14983),s=n(70478),r=n(39625),a=n(43316),o=n(27794),l=n.n(o),c=n(83243),u=n(23532);class h{constructor(){this.name="RemoveUserAgent",this.version="1.0.0",this.type="before",this.isLoaded=()=>!0,this.load=()=>Promise.resolve(),this.redactPiiFromContext=e=>{var t;return(null==e?void 0:null===(t=e.event)||void 0===t?void 0:t.context)&&(delete e.event.context.userAgent,delete e.event.context.email,e.event.context.ip="REDACTED"),e},this.track=this.redactPiiFromContext,this.identify=this.redactPiiFromContext,this.page=this.redactPiiFromContext,this.group=this.redactPiiFromContext,this.alias=this.redactPiiFromContext,this.screen=this.redactPiiFromContext}}class d{constructor(){this.consentChangedCallback=l(),this.preferences=d.mapConsentPreferences(c.iw),this.analyticsBrowser=null,this.loadIfNecessary=e=>{let{segmentKey:t,segmentCdnHost:n,segmentApiHost:i,requiresExplicitConsent:s}=e;return this.analyticsBrowser||(this.analyticsBrowser=new r.b,this.loadInitialConsentPreferences(s),this.wrapAnalyticsWithConsent(this.analyticsBrowser).load({writeKey:t,cdnURL:"https://".concat(n),plugins:[new h]},{disableClientPersistence:!0,integrations:{"Segment.io":{apiHost:"".concat(i,"/v1"),protocol:"https"}}}).catch(e=>{(0,a.Tb)(e,{extra:{message:"Failed to load analytics"}})})),this.analyticsBrowser},this.registerOnConsentChanged=e=>{this.consentChangedCallback=e},this.getCategories=()=>this.preferences,this.loadInitialConsentPreferences=e=>{let t;try{t=u.browserCookieStore.get(i.cn.CONSENT_PREFERENCES)}catch(e){(0,a.Tb)(e,{extra:{message:"Failed to get consent preferences cookie"}})}if(t)try{let e=JSON.parse(t);this.preferences=d.mapConsentPreferences(e)}catch(e){console.warn("Malformed consent preferences cookie",t)}else e||(this.preferences=d.mapConsentPreferences(c.DF))},this.updateCategories=e=>{this.preferences=d.mapConsentPreferences(e),this.consentChangedCallback(this.preferences)},this.wrapAnalyticsWithConsent=e=>(0,s.K)({registerOnConsentChanged:this.registerOnConsentChanged,getCategories:this.getCategories})(e)}}d.mapConsentPreferences=e=>({marketing:e.marketing,analytics:e.analytics,necessary:!0});let p=new d}}]);