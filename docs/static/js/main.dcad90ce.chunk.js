(this.webpackJsonplabs=this.webpackJsonplabs||[]).push([[0],{50:function(e,t){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,r,s,i,u,c,o,p=n(5),l=n.n(p),d=n(37),y=n.n(d),b=n(30),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},f=n(8),j=n(9),h=n(6),v=Object(p.createContext)({medium:null,small:null}),w=window.matchMedia("(max-width: 700px)"),O=window.matchMedia("(max-width: 420px)"),x=function(e){var t=e.children,n=Object(p.useState)(w.matches),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(p.useState)(O.matches),u=Object(j.a)(i,2),c=u[0],o=u[1];return Object(p.useEffect)((function(){var e=function(){s(w.matches),o(O.matches)};return w.addEventListener("change",e),O.addEventListener("change",e),function(){w.removeEventListener("change",e),O.removeEventListener("change",e)}}),[]),Object(h.jsx)(v.Provider,{value:{medium:r,small:c},children:t})},T=n(11),A=n(2),g=n.n(A),k=n(18),M=n(10),B=[{inputs:[{internalType:"contract IRewardToken",name:"rewardToken_",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"ClaimedReward",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"},{internalType:"uint256",name:"weight",type:"uint256"}],name:"addEntry",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"},{internalType:"uint256",name:"weight",type:"uint256"}],name:"editEntry",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"entries",outputs:[{internalType:"contract INFT",name:"nft",type:"address"},{internalType:"uint256",name:"weight",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"entriesCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"}],name:"entryExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"}],name:"getEntryWeight",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"lastCheckpoint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pendingReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract INFT",name:"nft",type:"address"}],name:"removeEntry",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardPerSecond",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rewardToken",outputs:[{internalType:"contract IRewardToken",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"rewardPerSecond_",type:"uint256"}],name:"setRewardPerSecond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"update",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],I=250,S=4002,C=137,E=43114,N="LABS",U=(i={},Object(M.a)(i,N,{addresses:(a={},Object(M.a)(a,I,"0x623d0f6a58e563C8627Da26B567269A18555aa52"),Object(M.a)(a,S,"0x880B631ED94A265cA89a8E266513017033ffD222"),Object(M.a)(a,C,"0x623d0f6a58e563C8627Da26B567269A18555aa52"),Object(M.a)(a,E,"0xed37405de14e39f72e4a405de32b6b90c96b97e5"),a),abi:[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewarder",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"rewarder_",type:"address"}],name:"setRewarder",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]}),Object(M.a)(i,"rewarder",{addresses:(r={},Object(M.a)(r,I,"0xE30c751D473DF7D8E500396d71e91f9C63656274"),Object(M.a)(r,S,"0xBaBFDD8cf3de860B8a78d3dadaBE2DCeB0F5394c"),Object(M.a)(r,C,"0xEd37405dE14e39f72e4A405DE32B6B90C96B97e5"),Object(M.a)(r,E,"0x558e89888B8F2d480C99cD1d18e31697e2Bfb687"),r),abi:B}),Object(M.a)(i,"multicall2",{addresses:(s={},Object(M.a)(s,I,"0x266557A864680A1401A3506c0eb72934BD13Bf59"),Object(M.a)(s,S,"0x434fBefE0D506e2A6af3935AB80Ac9219c751413"),Object(M.a)(s,C,"0x275617327c958bD06b5D6b871E7f491D76113dd8"),Object(M.a)(s,E,"0x623d0f6a58e563c8627da26b567269a18555aa52"),s),abi:[{inputs:[{components:[{internalType:"address",name:"target",type:"address"},{internalType:"bytes",name:"callData",type:"bytes"}],internalType:"struct Multicall2.Call[]",name:"calls",type:"tuple[]"}],name:"aggregate",outputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"},{internalType:"bytes[]",name:"returnData",type:"bytes[]"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"address",name:"target",type:"address"},{internalType:"bytes",name:"callData",type:"bytes"}],internalType:"struct Multicall2.Call[]",name:"calls",type:"tuple[]"}],name:"blockAndAggregate",outputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"},{internalType:"bytes32",name:"blockHash",type:"bytes32"},{components:[{internalType:"bool",name:"success",type:"bool"},{internalType:"bytes",name:"returnData",type:"bytes"}],internalType:"struct Multicall2.Result[]",name:"returnData",type:"tuple[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getBlockHash",outputs:[{internalType:"bytes32",name:"blockHash",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBlockNumber",outputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockCoinbase",outputs:[{internalType:"address",name:"coinbase",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockDifficulty",outputs:[{internalType:"uint256",name:"difficulty",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockGasLimit",outputs:[{internalType:"uint256",name:"gaslimit",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getEthBalance",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLastBlockHash",outputs:[{internalType:"bytes32",name:"blockHash",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"requireSuccess",type:"bool"},{components:[{internalType:"address",name:"target",type:"address"},{internalType:"bytes",name:"callData",type:"bytes"}],internalType:"struct Multicall2.Call[]",name:"calls",type:"tuple[]"}],name:"tryAggregate",outputs:[{components:[{internalType:"bool",name:"success",type:"bool"},{internalType:"bytes",name:"returnData",type:"bytes"}],internalType:"struct Multicall2.Result[]",name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bool",name:"requireSuccess",type:"bool"},{components:[{internalType:"address",name:"target",type:"address"},{internalType:"bytes",name:"callData",type:"bytes"}],internalType:"struct Multicall2.Call[]",name:"calls",type:"tuple[]"}],name:"tryBlockAndAggregate",outputs:[{internalType:"uint256",name:"blockNumber",type:"uint256"},{internalType:"bytes32",name:"blockHash",type:"bytes32"},{components:[{internalType:"bool",name:"success",type:"bool"},{internalType:"bytes",name:"returnData",type:"bytes"}],internalType:"struct Multicall2.Result[]",name:"returnData",type:"tuple[]"}],stateMutability:"nonpayable",type:"function"}]}),i),R={chainId:(u={},Object(M.a)(u,I,I),Object(M.a)(u,S,S),Object(M.a)(u,C,C),Object(M.a)(u,E,E),u),rpcUrl:(c={},Object(M.a)(c,I,"https://rpc.ftm.tools"),Object(M.a)(c,S,"https://rpc.testnet.fantom.network"),Object(M.a)(c,C,"https://polygon-rpc.com"),Object(M.a)(c,E,"https://api.avax.network/ext/bc/C/rpc"),c),scan:(o={},Object(M.a)(o,I,"https://ftmscan.com"),Object(M.a)(o,S,"https://testnet.ftmscan.com"),Object(M.a)(o,C,"https://polygonscan.com"),Object(M.a)(o,E,"https://snowtrace.io"),o)},F=S,D=(R.rpcUrl[F],R.chainId[F],R.scan[F]),L=function(e){switch(e){case I:return{chainId:Y(I),chainName:"Fantom",nativeCurrency:{name:"Fantom",symbol:"FTM",decimals:18},rpcUrls:[R.rpcUrl[I]],blockExplorerUrls:[R.scan[I]]};case S:return{chainId:Y(S),chainName:"Fantom Testnet",nativeCurrency:{name:"Fantom",symbol:"FTM",decimals:18},rpcUrls:[R.rpcUrl[S]],blockExplorerUrls:[R.scan[S]]};case C:return{chainId:Y(C),chainName:"Polygon",nativeCurrency:{name:"Matic",symbol:"MATIC",decimals:18},rpcUrls:[R.rpcUrl[C]],blockExplorerUrls:[R.scan[C]]};case E:return{chainId:Y(E),chainName:"Avalanche",nativeCurrency:{name:"Avax",symbol:"AVAX",decimals:18},rpcUrls:[R.rpcUrl[E]],blockExplorerUrls:[R.scan[E]]};default:return{chainId:Y(e),chainName:void 0,nativeCurrency:void 0,rpcUrls:void 0,blockExplorerUrls:void 0}}},Q=function(e,t){return e.addresses[t]},P=function(e){return[I,S,C,E].includes(e)},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return e.slice(0,2+t)+"..."+e.slice(-t)},Y=function(e){var t="0x".concat(e.toString(16));return console.log("toHex(".concat(e,") = ").concat(t)),t},V=function(){var e=Object(T.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_chainId"});case 3:if(n=e.sent,console.log("chainId:",n),n!==Y(t)){e.next=7;break}return e.abrupt("return");case 7:e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.t0;case 13:return e.prev=13,e.next=16,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:Y(t)}]});case 16:e.next=33;break;case 18:if(e.prev=18,e.t1=e.catch(13),4902!==e.t1.code){e.next=31;break}return e.prev=21,a=L(t),e.next=25,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:Y(t),chainName:a.chainName,nativeCurrency:a.nativeCurrency,rpcUrls:a.rpcUrls,blockExplorerUrls:a.blockExplorerUrls}]});case 25:e.next=31;break;case 27:throw e.prev=27,e.t2=e.catch(21),console.error(e.t2),e.t2;case 31:throw console.error(e.t1),e.t1;case 33:case"end":return e.stop()}}),e,null,[[0,9],[13,18],[21,27]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(T.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=2;break}return e.abrupt("return",alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"));case 2:return e.prev=2,e.next=5,V(t);case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",alert(JSON.stringify(e.t0)));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(T.a)(g.a.mark((function e(t,n,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=2;break}return e.abrupt("return",alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"));case 2:return e.prev=2,e.next=5,V(n);case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",alert(JSON.stringify(e.t0)));case 10:if(console.log(a),null!=a){e.next=20;break}return e.prev=12,e.next=15,t.send("eth_requestAccounts",[]);case 15:e.next=20;break;case 17:return e.prev=17,e.t1=e.catch(12),e.abrupt("return",alert("Please connect to a MetaMask account."));case 20:case"end":return e.stop()}}),e,null,[[2,7],[12,17]])})));return function(t,n,a){return e.apply(this,arguments)}}(),q=function(e){if(console.error(e),4001!==e.code){var t=null!=e.data?" [".concat(e.data.message,"]"):"";return alert("Error ".concat(e.code,": ").concat(e.message).concat(t))}},W=function(){var e=Object(T.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:Q(t,n),symbol:t.symbol,decimals:t.decimals,image:t.image}}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}(),J=Object(p.createContext)({provider:null,chainId:null,account:null,ethBalance:null,getAddress:null}),G=function(e){var t=e.children,n=Object(p.useState)(null),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(p.useState)(null),u=Object(j.a)(i,2),c=u[0],o=u[1],l=Object(p.useState)(null),d=Object(j.a)(l,2),y=d[0],b=d[1],m=Object(p.useState)(null),f=Object(j.a)(m,2),v=f[0],w=f[1],O=Object(p.useCallback)((function(e){return e.addresses[c]}),[c]);return Object(p.useEffect)((function(){Object(T.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=3;break}return alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"),e.abrupt("return");case 3:window.ethereum.on("accountsChanged",(function(e){window.location.reload()})),window.ethereum.on("chainChanged",(function(e){console.log("chain changed:",e),window.location.reload()})),t=new k.a.providers.Web3Provider(window.ethereum),s(t);case 7:case"end":return e.stop()}}),e)})))()}),[]),Object(p.useEffect)((function(){null!=c&&(P(c)||console.log("Chain ID is ".concat(c,". Please change to the right network.")))}),[c]),Object(p.useEffect)((function(){Object(T.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getNetwork();case 4:if(t=e.sent.chainId,P(t)){e.next=7;break}return e.abrupt("return");case 7:return o(t),e.next=10,r.listAccounts();case 10:if(null==(n=e.sent[0])){e.next=15;break}b(n),e.next=16;break;case 15:return e.abrupt("return",console.log("You need to connect to MetaMask in order to use this site."));case 16:case"end":return e.stop()}}),e)})))()}),[r,c]),Object(p.useEffect)((function(){Object(T.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r&&null!=y){e.next=3;break}return w(null),e.abrupt("return");case 3:return e.prev=3,e.t0=w,e.next=7,r.getBalance(y);case 7:e.t1=e.sent.toString(),(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(3),console.log(e.t2);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()}),[r,y]),Object(h.jsx)(J.Provider,{value:{provider:r,chainId:c,account:y,ethBalance:v,getAddress:O},children:t})},X=n(19),z=function(){var e=Object(T.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getNetwork();case 2:return n=e.sent.chainId,e.abrupt("return",new k.a.Contract(Q(U.multicall2,n),U.multicall2.abi,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(T.a)(g.a.mark((function e(t,n,a){var r,s,i,u,c,o,p,l=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>3&&void 0!==l[3]?l[3]:{requireSuccess:!0},s=r.requireSuccess,e.next=4,z(t);case 4:return i=e.sent,u=new k.a.utils.Interface(n),c=a.map((function(e){return[e.address.toLowerCase(),u.encodeFunctionData(e.name,e.params)]})),e.prev=7,e.next=10,i.tryAggregate(s,c);case 10:return o=e.sent,p=o.map((function(e,t){var n=Object(j.a)(e,2),r=n[0],s=n[1];return r?u.decodeFunctionResult(a[t].name,s):null})),e.abrupt("return",p);case 15:throw e.prev=15,e.t0=e.catch(7),console.log("[!] Multicall failed:",e.t0),console.log("[!] calls:",a),e.t0;case 20:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),$=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"minter",type:"address"},{indexed:!0,internalType:"uint256",name:"count",type:"uint256"}],name:"Minted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI_",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],ee=function(){var e=Object(T.a)(g.a.mark((function e(t,n,a,r){var s,i,u,c,o,p,l,d;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=a){e.next=2;break}return e.abrupt("return");case 2:if(null!=r){e.next=4;break}return e.abrupt("return");case 4:s=[],i=Object(X.a)(t);try{for(i.s();!(u=i.n()).done;)c=u.value,s.push({address:c,name:"balanceOf",params:[r]})}catch(y){i.e(y)}finally{i.f()}return e.next=9,_(a,n,s,{requireSuccess:!0});case 9:for(o=e.sent,p={},l=0;l<t.length;l++)d=t[l],p[d]=o[l][0].toString();return e.abrupt("return",p);case 13:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),te=function(){var e=Object(T.a)(g.a.mark((function e(t,n,a,r){var s,i,u,c,o,p,l,d,y,b,m,f,h,v,w;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=a){e.next=2;break}return e.abrupt("return");case 2:if(null!=r){e.next=4;break}return e.abrupt("return");case 4:s={},e.t0=g.a.keys(t);case 6:if((e.t1=e.t0()).done){e.next=29;break}for(i=e.t1.value,u=t[i],c=[],o=0;o<u;o++)c.push({address:i,name:"tokenOfOwnerByIndex",params:[r,o]});return e.next=13,_(a,n,c,{requireSuccess:!0});case 13:return p=e.sent,l=p.map((function(e){return Object(j.a)(e,1)[0].toString()})),e.next=17,a.getNetwork();case 17:d=e.sent.chainId,y=Q(U.rewarder,d),b=[],m=Object(X.a)(l);try{for(m.s();!(f=m.n()).done;)h=f.value,b.push({address:y,name:"lastCheckpoint",params:[i,h]})}catch(O){m.e(O)}finally{m.f()}return e.next=24,_(a,U.rewarder.abi,b,{requireSuccess:!0});case 24:v=e.sent,w=v.map((function(e){return Object(j.a)(e,1)[0].toString()})),s[i]={tokenIds:l,checkpoints:w},e.next=6;break;case 29:return e.abrupt("return",s);case 30:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ne=function(){var e=Object(T.a)(g.a.mark((function e(t,n){var a,r,s,i,u,c,o,p,l,d,y,b,m,f,h,v,w,O,x,T,A,k,M,I,S,C,E;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.getNetwork();case 4:for(a=e.sent.chainId,r=Q(U.rewarder,a),s=[],i=0;i<n;i++)s.push({address:r,name:"entries",params:[i]});return e.next=10,_(t,B,s,{requireSuccess:!0});case 10:u=e.sent,c=u.map((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1];return[n.toString(),a.toString()]})),console.log(c),o=[],p=Object(X.a)(c);try{for(p.s();!(l=p.n()).done;)d=Object(j.a)(l.value,1),y=d[0],o.push({address:y,name:"name",params:[]})}catch(g){p.e(g)}finally{p.f()}return e.next=18,_(t,$,o,{requireSuccess:!0});case 18:b=e.sent,m=b.map((function(e){return Object(j.a)(e,1)[0].toString()})),f=[],h=Object(X.a)(c);try{for(h.s();!(v=h.n()).done;)w=Object(j.a)(v.value,1),O=w[0],f.push({address:O,name:"symbol",params:[]})}catch(g){h.e(g)}finally{h.f()}return e.next=25,_(t,$,f,{requireSuccess:!0});case 25:for(x=e.sent,T=x.map((function(e){return Object(j.a)(e,1)[0].toString()})),A={},k=0;k<n;k++)M=Object(j.a)(c[k],2),I=M[0],S=M[1],C=m[k],E=T[k],A[I]={address:I,weight:S,name:C,symbol:E};return e.abrupt("return",A);case 30:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(e){for(var t,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];(t=console).log.apply(t,["[UserContext]:",e].concat(a))},re=Object(p.createContext)({pendingReward:null,ownedTokens:null,nfts:null,claim:null}),se=function(e){var t=e.children,n=Object(p.useContext)(J),a=n.account,r=n.provider,s=n.chainId,i=Object(p.useState)(null),u=Object(j.a)(i,2),c=u[0],o=u[1],l=Object(p.useState)(null),d=Object(j.a)(l,2),y=d[0],b=d[1],m=Object(p.useState)(null),f=Object(j.a)(m,2),v=f[0],w=f[1],O=Object(p.useState)(null),x=Object(j.a)(O,2),A=x[0],M=x[1];Object(p.useEffect)((function(){if(null!=a&&null!=r&&null!=s){var e=r.getSigner();o(new k.a.Contract(Q(U.rewarder,s),U.rewarder.abi,e))}}),[a,r,s]);var B=Object(p.useCallback)(Object(T.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=a){e.next=2;break}return e.abrupt("return");case 2:if(null!=r){e.next=4;break}return e.abrupt("return");case 4:if(null!=s){e.next=6;break}return e.abrupt("return");case 6:if(null!=A){e.next=8;break}return e.abrupt("return");case 8:return ae("loadOwnedTokens"),e.next=11,ee(Object.keys(A),$,r,a);case 11:return t=e.sent,e.next=14,te(t,$,r,a);case 14:n=e.sent,w(n);case 16:case"end":return e.stop()}}),e)}))),[a,r,s,A]),I=Object(p.useCallback)(Object(T.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=r){e.next=2;break}return e.abrupt("return");case 2:if(null!=s){e.next=4;break}return e.abrupt("return");case 4:if(null!=c){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,c.entriesCount();case 8:return t=e.sent.toNumber(),e.next=11,ne(r,t);case 11:return n=e.sent,M(n),e.t0=b,e.next=16,c.pendingReward();case 16:e.t1=e.sent.toString(),(0,e.t0)(e.t1);case 18:case"end":return e.stop()}}),e)}))),[r,s,c]);Object(p.useEffect)((function(){I();var e=setInterval(I,5e3);return function(){return clearInterval(e)}}),[I]),Object(p.useEffect)((function(){B();var e=setInterval(B,5e3);return function(){return clearInterval(e)}}),[B]);var S=Object(p.useCallback)(Object(T.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c.update()}catch(t){q(t)}case 1:case"end":return e.stop()}}),e)}))),[c]);return Object(h.jsx)(re.Provider,{value:{pendingReward:y,ownedTokens:v,nfts:A,claim:S},children:t})},ie=function(e){var t=e.className,n=void 0===t?"":t,a=e.href,r=e.children;return Object(h.jsx)("a",{className:n,href:a,target:"_blank",rel:"noopener noreferrer",children:r})},ue=n.p+"static/media/LABS.1b211f96.png",ce=Object(M.a)({},N,{addresses:U.LABS.addresses,decimals:18,symbol:N,name:"Potluck Labs Token",url:"",image:ue}),oe=n.p+"static/media/potluck-labs.037e0353.png",pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return k.a.utils.formatUnits(e.toString(),t)},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return k.a.utils.commify(parseFloat(e).toFixed(t))},de=function(){var e=Object(p.useContext)(J),t=e.account,n=e.provider,a=e.chainId,r=Object(p.useContext)(re),s=r.pendingReward,i=r.ownedTokens,u=r.nfts,c=r.claim,o=Object(p.useState)(!1),l=Object(j.a)(o,2),d=l[0],y=l[1],b=Object(p.useState)(null),m=Object(j.a)(b,2),f=m[0],v=m[1];Object(p.useEffect)((function(){if(null!=u&&null!=i){for(var e in u){var t,n=u[e],a=i[n.address].checkpoints,r=Object(X.a)(a);try{for(r.s();!(t=r.n()).done;){if("0"===t.value)return void v(!0)}}catch(s){r.e(s)}finally{r.f()}}v(!1)}}),[u,i]),Object(p.useEffect)((function(){null!=s&&null!=i&&null!=u&&y(!0)}),[s,i,u]);var w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),"To begin, please connect to a supported chain:",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(T,{})]})},O=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"btn",onClick:function(){return Z(n,a,t)},children:"Connect Wallet"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(T,{}),Object(h.jsx)("br",{})]})},x=function(){return d?Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{className:"btn",onClick:function(){return c()},children:[f&&"Update &"," Claim",Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"btn-amount",children:[le(pe(s),3)," $LABS"]})]}),Object(h.jsxs)("div",{children:["Connected as ",Object(h.jsx)(ie,{href:"".concat(D,"/address/").concat(t),children:H(t,4)})]}),Object(h.jsx)("br",{}),Object(h.jsx)(T,{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{className:"add-to-metamask",onClick:function(){return W(ce.LABS,a)},children:"Add $LABS to MetaMask"})}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h2",{children:"Approved NFT collections"}),Object(h.jsx)("p",{children:"Here you see which NFT collections you are able to earn rewards for, and which NFTs you own in each collection (by token ID)."})]}),f&&Object(h.jsxs)("div",{className:"have-untracked",children:["You have untracked NFTs!",Object(h.jsx)("br",{}),'Press the "Update & Claim" button to register them.']}),Object(h.jsx)("div",{className:"nfts",children:Object.values(u).map((function(e){return Object(h.jsxs)("div",{className:"nft",children:[Object(h.jsxs)("div",{className:"nft-name-symbol",children:[e.name," (",e.symbol,")"]}),Object(h.jsx)("div",{className:"nft-address",children:Object(h.jsx)(ie,{href:"".concat(D,"/token/").concat(e.address),children:H(e.address,4)})}),Object(h.jsxs)("div",{children:["Reward multiplier: ",u[e.address].weight,"x"]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:i[e.address].tokenIds.map((function(t,n){return Object(h.jsxs)("div",{children:["\xa0 ","0"===i[e.address].checkpoints[n]?"\u26a0\ufe0f":"\u2705"," Token ",t]},t)}))})]},e.address)}))})]}):Object(h.jsx)("div",{children:"Loading..."})},T=function(){return Object(h.jsxs)("div",{className:"network-options",children:[Object(h.jsxs)("span",{className:a===I?"selected":"",onClick:function(){return K(I)},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAYFBMVEUAAAAYaf8Zaf8YaP8YaP8Yaf8QcP8Zaf8Yaf8ZaP8Zaf8Zaf8Zaf8gcP8Zaf8Zaf+MtP/j7P/G2v////81fP9Sj//x9v+px/+ox/9vof8nc/9Ehf9gmP+40f+avv/U4/9Bl037AAAAD3RSTlMAgO8gYN8Qz7+Qr59QEI9D8vorAAAB5UlEQVRIx5WV27aqMAxFEVvAy95peoMC6v//5bGVM0IbxO168cE1m6aLkVRMjfg9yxoAZPcrjtUHNYcOMrUZw+01cF3eImQvdNi0H1t4K7lRRNSwo/rKrgMfdNj3u2EIe8S1sGujbwYdZBKrfuvSPgHY3mgLT93t0gd1Lgv7crTVZrAwIk5LiLyBdKxb0RgRrfM2jmSY2cUDGjeb/4/bJOBCfyuvbA6Myijbj1QiFSAAEUNm9+gVRFEJsQY0qBUSvFcjqiKMNgfAKv9CZnzaATKgW25EwPJUGIJO9gKAphIcAHDGGD8BcEBUp80KWusYAQdOVVcCo4ph9AOEiJTAuZI5MC4t90NKDZXNAVlBBnifWl2AhPgMqAvAJDsBYFUOQAlgyIEZTQHUGfCIERDgtFeYA2XT6U2nF+BSdmXT5wJIMQy2H5x+/rAcOh7cC/E+FeLBbX8a4O53B9ufxg8HSBx4DoLuG6ClEfAJoNn0U38BHNdTZhyseuwDl+inEmZ2S86kgH4qClAJnXJ+ODKk8Mp5THNgQhwjcrM0NS2QJBvG9k7HrocsG8aVYPPxluyZrnsLJdx6990K+rxJr/tLUWysXfne31K/f7lWTdcpi1w27Q05OCLa3N5xO2dOnYwny/NJcPc/+jxvpq6ZXXsAAAAASUVORK5CYII=",alt:"FTM"})," Fantom"]}),Object(h.jsxs)("span",{className:a===C?"selected":"",onClick:function(){return K(C)},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAn1BMVEUAAACBR+WBR+aCR+WBR+R/RuKGQ+SCRuWBR+SCR+WAR+WBR+SARuWBR+OAQ+OBROKFR+WAR+WBROOAR+WCR+X////9/f+DSeWjeOzz7v2GTOb8+v/7+P7p3/vw6PzMs/WQW+ithu6ba+uUYumKUuf28v3h0vndzfjczPjUwPbRu/bFqvO5mPCwiu+qgu6me+2NWOjWw/exje+ecevAofLsKd9NAAAAFHRSTlMA/I3Ynj0T2tHQpaWRZUhHMjJlZB5PNdIAAAIgSURBVFjDtdfbdqJAEAVQQGLUaKLJKVS83zXjLZP5/28bpTHYFF0NsrLfeKizmqaAaseo7VVcRNyK13GKqfpg/Gru8g8YtHKVexA0reVvsHiT611YuUL5E3J5MtU3kNNLdn0dudWy6p9RwDOvr6GQerr+BQU1hP1/5FngAVL9YnMolPAKTRjQxRw2r4YF9EkJunmX0MSdLSXGkHl8AXvSfeZZQgs380CVrZYIx6TMIHjXFzAjRW3fOU6b2JZQxc0wKviLm56KgKB6CfBxExBRwB8IBH58B0nAVO8IWwBYAHR3AaEhoGML2OPqi4gW4NqOJwescXWiyKCb0UsVMSCqWAbm3qw4rhCg9KXedB3oAWyRG1Ims1Vmb6YDdtD8IeULF9MB2woeQP+AdCvS+FbRU9cjQ8CIIt9QlkN1PZymlxQYArqDuOJ8vYjj6Mi2lAUkjqSMj59keBdP6QAXmgndG4Hp6QFu3EhsJ5LdXooBlayBJN68c3zPYoDntMFNf74rOyI5oGP4KXWhkC3A9lfjARMW4NsC1trSSAvw1UdVDqBB0oo71WnaR5XfA3+m/TC6OpBy0v8s72D467jtYhFQJJinR1eI1qTb87+rB9mKEtvMwRcWYUBKHxptwJB9Rzcf8gEjBrvDZiEOSQ8oPeYJg/ZDA3cdhdTKD9tcDUVH7YcH7kbZI0/ZQ1f5Y5+saRtu7Vow+PjNwzfXuT/+tx2T/3PvArcI3Jt0AAAAAElFTkSuQmCC",alt:"Polygon"})," Polygon"]}),Object(h.jsxs)("span",{className:a===E?"selected":"",onClick:function(){return K(E)},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAjVBMVEUAAADoQULoQULnQULnQELnQEDnQELoQELmP0HoQEDmQkLrQkLmQEDoQULmQUHmP0HoQUL////+8vL/+/vpSUr+9/f2sbLqT1DucnPqVVb97e386ur85ub739/1qanwgYLpQ0T72Nn4xsb3wcHzlpbtaWrrWVr50dH4xcb3u7zzm5zwh4jvfH3venvsYmLcMaqxAAAAEHRSTlMA/vvY0qefkI1IPjIU3GZmamcc5AAAActJREFUWMO1l+tygkAMhUEUQUBPwAverVV77/s/XkedKrskBLvT75/jnJBNNtnEE0mioIMLnSBKvMdIQ9QI09byEQRGreR9NNBX5TEU4ma9DxW/QT5AKwaSvoeW9Hh9F63pcvoMHCewZG2/XxD5sg/6+Z+JaCXHQY8/nZm3yQVYFnSmAI9+f8Z0ZaveqBhSBK+otxosJf2yB49Sf3RHqU2wvNGdvNGFITh2VGUHlmGDA0uq8t7gQgqOORmswHPuk6GQQoMleELpBJ9kMoWAZIAsZrKBBAxTsoBE4kVtHNhBIvIC1Flb+gVEAq+DGjOygEyHi+GESYEIY+BLcUA1YOvLW4fccAbUFOaVk60ZA6oDY1z5uPzQDSwt/YtheAIbO41jKYKvdOFYS2PQfICD/QdMAusqHyUHcuFSRF7S6MB3vb/4VjEZUdxIKSyM5iT2A19K4UHsDWZLe7L0e/ZkhdXSUrkKBcOl2VQ9sQq32t0AjIdlLkVwQYJlDI2nrSSDtZhbulWl9bjm1c9XYn2y9JPa4Is/ogwYKrE+IutDs8shlDFPZaAMmho9dtR1GrczPEDmOu67LhyuK4/j0uW69jkuno6r738s387r/w+Zuc6Q/Zd0EgAAAABJRU5ErkJggg==",alt:"Avalanche"})," Avalanche"]})]})};return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("img",{className:"banner",src:oe,alt:"Banner"}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h2",{children:"Hold NFTs, earn $LABS."}),Object(h.jsx)("p",{children:"For every NFT you hold from a Potluck Labs-approved collection, you gain some $LABS (Potluck Labs Token) every second."}),P(a)&&t&&Object(h.jsx)("p",{children:"In order to start earning rewards for an NFT, register it by pressing the button below."})]}),Object(h.jsx)("div",{className:"connection",children:P(a)?t?Object(h.jsx)(x,{}):Object(h.jsx)(O,{}):Object(h.jsx)(w,{})}),Object(h.jsxs)("div",{className:"contracts",children:["Contracts: ",Object(h.jsx)(ie,{href:"".concat(D,"/address/").concat(Q(U.LABS,a)),children:"LABS"})," |"," ",Object(h.jsx)(ie,{href:"".concat(D,"/address/").concat(Q(U.rewarder,a)),children:"Rewarder"})]})]})})};var ye=function(){return Object(h.jsx)(x,{children:Object(h.jsx)(G,{children:Object(h.jsx)(se,{children:Object(h.jsx)(f.c,{children:Object(h.jsx)(f.a,{path:"/",element:Object(h.jsx)(de,{})})})})})})};n(61),n(62);y.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(ye,{})})}),document.getElementById("root")),m()}},[[63,1,2]]]);
//# sourceMappingURL=main.dcad90ce.chunk.js.map