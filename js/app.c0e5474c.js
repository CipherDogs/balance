(()=>{var e={7053:(e,t,n)=>{"use strict";n(6992),n(8674),n(9601),n(7727),n(2772);var a=n(144),r=n(9669),s=n.n(r),o=n(2346),c=n(8345),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chains"},[t("div",{staticClass:"address"},[t("span",[e._v(" EVM: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.ethAddress,expression:"ethAddress"}],domProps:{value:e.ethAddress},on:{input:function(t){t.target.composing||(e.ethAddress=t.target.value)}}})]),t("span",[e._v(" EOS: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.eosAddress,expression:"eosAddress"}],domProps:{value:e.eosAddress},on:{input:function(t){t.target.composing||(e.eosAddress=t.target.value)}}})]),t("span",[e._v(" Waves: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.wavesAddress,expression:"wavesAddress"}],domProps:{value:e.wavesAddress},on:{input:function(t){t.target.composing||(e.wavesAddress=t.target.value)}}})])]),t("h2",[e._v("EVM-based network")]),e.ethAddress?t("EVM",{attrs:{address:e.ethAddress}}):e._e(),t("h2",[e._v("EOS")]),e.eosAddress?t("EOS",{attrs:{address:e.eosAddress}}):e._e(),t("h2",[e._v("Waves")]),e.wavesAddress?t("Waves",{attrs:{address:e.wavesAddress}}):e._e()],1)},u=[],d=(n(8309),function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[e._m(0),e._l(e.balances,(function(n){return t("div",{key:n.name,staticClass:"item"},[t("span",[e._v(e._s(n.name))]),t("span",[e._v(e._s(n.balance)+" "+e._s(n.ticker))])])}))],2)}),l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"head"},[t("span",[e._v("Chain")]),t("span",[e._v("Balance")])])}],p=n(9567),v=n(5617),h=(n(9554),n(1539),n(4747),n(7658),n(5345)),m=n(5553);const f={name:"EVM",data:function(){return{networks:[{name:"Ethereum",ticker:"ETH",url:"https://main-light.eth.linkpool.io"},{name:"Rinkeby",ticker:"ETH",url:"https://rinkeby-light.eth.linkpool.io"},{name:"Goerli",ticker:"ETH",url:"https://goerli-light.eth.linkpool.io"},{name:"Moonbeam",ticker:"GLMR",url:"https://rpc.ankr.com/moonbeam"},{name:"Moonriver",ticker:"MOVR",url:"https://moonriver.public.blastapi.io"},{name:"Polygon",ticker:"MATIC",url:"https://polygon-rpc.com/"},{name:"Polygon Mumbai Testnet",ticker:"MATIC",url:"https://rpc-mumbai.matic.today"},{name:"Binance Smart Chain",ticker:"BNB",url:"https://bsc-dataseed.binance.org/"},{name:"Binance Smart Chain Testnet",ticker:"BNB",url:"https://data-seed-prebsc-1-s1.binance.org:8545/"},{name:"Evmos Mainnet",ticker:"EVMOS",url:"https://eth.bd.evmos.org:8545"},{name:"Astar Network",ticker:"ASTR",url:"https://evm.astar.network"}],balances:[]}},props:["address"],mounted:function(){var e=this;return(0,v.Z)((0,p.Z)().mark((function t(){return(0,p.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.networks.forEach((function(t){e.getBalance(e.address,t.name,t.url,t.ticker)}));case 1:case"end":return t.stop()}}),t)})))()},methods:{getBalance:function(e,t,n,a){var r=this;return(0,v.Z)((0,p.Z)().mark((function s(){var o;return(0,p.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:o=h.yl(n),o.getBalance(e).then((function(e){var n=m.dF(e);r.balances.push({name:t,balance:n,ticker:a})}));case 2:case"end":return s.stop()}}),s)})))()}}},w=f;var b=n(3736),_=(0,b.Z)(w,d,l,!1,null,"89cd760e",null);const k=_.exports;var g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[e._m(0),e._l(e.balances,(function(n){return t("div",{key:n.name,staticClass:"item"},[t("span",[e._v(e._s(n.name))]),t("span",[e._v(e._s(n.balance)+" "+e._s(n.ticker))])])}))],2)},x=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"head"},[t("span",[e._v("Token")]),t("span",[e._v("Balance")])])}];const A={name:"EOS",data:function(){return{nodeURL:"https://api.eosn.io",balances:[]}},props:["address"],mounted:function(){var e=this;return(0,v.Z)((0,p.Z)().mark((function t(){return(0,p.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s().post("".concat(e.nodeURL,"/v1/chain/get_account"),{account_name:e.address}).then((function(t){e.balances.push({name:"EOS",balance:t.data.core_liquid_balance,ticker:""})}))["catch"]((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),t)})))()}},Z=A;var y=(0,b.Z)(Z,g,x,!1,null,"3461b4e5",null);const O=y.exports;var E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[e._m(0),e._l(e.balances,(function(n){return t("div",{key:n.name,staticClass:"item"},[t("span",[e._v(e._s(n.name))]),t("span",[e._v(e._s(n.balance)+" "+e._s(n.ticker))])])}))],2)},M=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"head"},[t("span",[e._v("Asset")]),t("span",[e._v("Balance")])])}];n(2222);function S(e,t){return C.apply(this,arguments)}function C(){return C=(0,v.Z)((0,p.Z)().mark((function e(t,n){var a;return(0,p.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=!1,e.next=3,s().get("".concat(t,"/addresses/validate/").concat(n)).then((function(e){a=e.data.valid}))["catch"]((function(e){console.error(e)}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function B(e,t){return P.apply(this,arguments)}function P(){return P=(0,v.Z)((0,p.Z)().mark((function e(t,n){var a;return(0,p.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=void 0,e.next=3,s().get("".concat(t,"/alias/by-alias/").concat(n)).then((function(e){a=e.data.address}))["catch"]((function(e){console.error(e)}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),P.apply(this,arguments)}function T(e,t){return R.apply(this,arguments)}function R(){return R=(0,v.Z)((0,p.Z)().mark((function e(t,n){var a,r;return(0,p.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S(t,n);case 2:if(a=e.sent,!a){e.next=7;break}return e.abrupt("return",n);case 7:return e.next=9,B(t,n);case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}const I={name:"Waves",data:function(){return{nodeURL:"https://nodes.wavesnodes.com",wavesDecimals:Math.pow(10,8),balances:[]}},props:["address"],mounted:function(){var e=this;return(0,v.Z)((0,p.Z)().mark((function t(){var n;return(0,p.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,T(e.nodeURL,e.address);case 2:return n=t.sent,t.next=5,e.getWavesBalance(n);case 5:return t.next=7,e.getAssets(n);case 7:case"end":return t.stop()}}),t)})))()},methods:{getWavesBalance:function(e){var t=this;return(0,v.Z)((0,p.Z)().mark((function n(){return(0,p.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(t.nodeURL,"/addresses/balance/").concat(e)).then((function(e){t.balances.push({name:"Waves",balance:e.data.balance/t.wavesDecimals,ticker:"WAVES"})}))["catch"]((function(e){console.error(e)}));case 2:case"end":return n.stop()}}),n)})))()},getAssets:function(e){var t=this;return(0,v.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(t.nodeURL,"/assets/balance/").concat(t.address)).then((function(e){for(var n=e.data.balances,a=0;a<n.length;a++){var r=Math.pow(10,n[a].issueTransaction.decimals);t.balances.push({name:n[a].issueTransaction.name,balance:n[a].balance/r,ticker:n[a].issueTransaction.name})}}))["catch"]((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})))()}}},W=I;var j=(0,b.Z)(W,E,M,!1,null,"4a1e2051",null);const V=j.exports,L={name:"Home",data:function(){return{ethAddress:"",eosAddress:"",wavesAddress:""}},components:{EVM:k,EOS:O,Waves:V},mounted:function(){this.ethAddress=window.localStorage.getItem("ethAddress"),this.eosAddress=window.localStorage.getItem("eosAddress"),this.wavesAddress=window.localStorage.getItem("wavesAddress")},watch:{ethAddress:function(e){window.localStorage.setItem("ethAddress",e)},eosAddress:function(e){window.localStorage.setItem("eosAddress",e)},wavesAddress:function(e){window.localStorage.setItem("wavesAddress",e)}}},U=L;var N=(0,b.Z)(U,i,u,!1,null,"27a41979",null);const H=N.exports;var D=[{path:"/",name:"home",component:H}],F=new c.ZP({history:!0,mode:"history",routes:D});const G=F;var q=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"main_container"}},[t("router-view")],1)])},z=[];const J={name:"Index"},K=J;var Q=(0,b.Z)(K,q,z,!1,null,null,null);const X=Q.exports;a.ZP.router=G,a.ZP.use(c.ZP),a.ZP.use(o.Z,s()),(window.location.href.indexOf("balance.cipherdogs.net")>-1||window.location.href.indexOf("ost:")>-1)&&new a.ZP({render:function(e){return e(X)},el:"#app",router:G})},6601:()=>{}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,(()=>{n.amdO={}})(),(()=>{var e=[];n.O=(t,a,r,s)=>{if(!a){var o=1/0;for(d=0;d<e.length;d++){for(var[a,r,s]=e[d],c=!0,i=0;i<a.length;i++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(c=!1,s<o&&(o=s));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,r,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[o,c,i]=a,u=0;if(o.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var d=i(n)}for(t&&t(a);u<o.length;u++)s=o[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunkbalance"]=self["webpackChunkbalance"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[998],(()=>n(7053)));a=n.O(a)})();
//# sourceMappingURL=app.c0e5474c.js.map