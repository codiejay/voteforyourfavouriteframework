(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={Result:"Result_Result__2c1fl",Wrapper:"Result_Wrapper__7Z4Bm",FlexMain:"Result_FlexMain__35Zrk",Image:"Result_Image__23dlk",Mini:"Result_Mini__2AQBn",Votes:"Result_Votes__3lg3c"}},,,,,,function(e,t,a){e.exports={Vote:"Vote_Vote__1d7zp",Title:"Vote_Title__37ni2",PageTitle:"Vote_PageTitle__2K78I",Main:"Vote_Main__1hQES",Info:"Vote_Info__2e5A9",Spinner:"Vote_Spinner__2ZPTS"}},function(e,t,a){e.exports={Wrapper:"Framework_Wrapper__2YCKr",FlexMain:"Framework_FlexMain__2vksG",Image:"Framework_Image__3FXih",Audio:"Framework_Audio__3yQ2W"}},,function(e,t,a){e.exports=a.p+"static/media/react.c10c6d6d.svg"},function(e,t,a){e.exports=a.p+"static/media/vue.c27f74e4.svg"},,,,,function(e,t,a){e.exports={Button:"Button_Button__1ktQx",Custom:"Button_Custom__2AFP0"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/spinner.914933fe.gif"},function(e,t,a){e.exports=a.p+"static/media/acme.4ee99cd2.wav"},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),c=(a(29),a(2)),i=a(3),s=a(5),u=a(4),m=a(6),d=a(14),p=a(15),v=a.n(p),h=(a(30),v.a.initializeApp({apiKey:"AIzaSyDJLjU8GK6RbaZ7ISa9qk08JQRtCPp8L7M",authDomain:"frameworkvoting.firebaseapp.com",databaseURL:"https://frameworkvoting.firebaseio.com",projectId:"frameworkvoting",storageBucket:"frameworkvoting.appspot.com",messagingSenderId:"602552600472",appId:"1:602552600472:web:814b80827372362a"})),g=v.a.firestore(h),f=r.a.createContext();console.log(f);var E=function(e,t){switch(t.type){case"ADD_VOTE":return Object(d.a)({},e,{voters:t.payload});case"CHANGE_ROUTE":return Object(d.a)({},e,{route:t.payload});default:return e}},_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voters:[],route:"landing",dispatch:function(e){a.setState(function(t){return E(t,e)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=[];g.collection("votes").get().then(function(a){a.forEach(function(e){t.push(e.data())}),e.setState({voters:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),w=f.Consumer,C=a(9),N=(a(33),a(16)),b=a.n(N),y=function(e){var t=e.landingBtn,a=e.onClick,n=e.handleNewUser;return r.a.createElement("button",{className:"Custom"===t?b.a.Custom:b.a.Button,onClick:a||n}," ",e.children)},V=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={Name:"",instagramHandle:"",twitterHandle:"",voted:!1},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.handleNewUser=function(e){var t=a.state,n=t.Name,r={Name:n,instagramHandle:t.instagramHandle,twitterHandle:t.twitterHandle,voteFor:"",time:(new Date).toUTCString()};localStorage.getItem("voted")&&(a.setState({voted:!0}),setTimeout(function(){return a.setState({voted:!1})},4e3));var o=localStorage.getItem("IP");n&&(o||(e({type:"CHANGE_ROUTE",payload:"vote page"}),sessionStorage.setItem("user",JSON.stringify(r))))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.Name,n=t.instagramHandle,o=t.twitterHandle,l=t.voted;return r.a.createElement(w,null,function(t){var c=t.dispatch;return r.a.createElement("div",{className:"landingPage"},r.a.createElement("h2",null,"AYE, THERE DEV!"),r.a.createElement("p",null,"It time to vote for your fav framework. But before that, let\u2019s know your name!"),r.a.createElement("div",{className:"usersName"},r.a.createElement("input",{className:"Input",placeholder:"Your Name!",value:a,name:"Name",onChange:e.handleChange})),r.a.createElement("div",{id:"userSocialMedia"},r.a.createElement("p",null,"Optional"),r.a.createElement("section",{className:"SocialInputs"},r.a.createElement("input",{className:"Social",placeholder:"Instagram Handle",value:n,name:"instagramHandle",onChange:e.handleChange}),r.a.createElement("input",{className:"Social",placeholder:"Twitter Handle",value:o,name:"twitterHandle",onChange:e.handleChange})),r.a.createElement("div",{id:"goButton"},l?r.a.createElement("h3",{className:"error"},"Seems like You've already Voted"):null,r.a.createElement(y,{landingBtn:"Custom",handleNewUser:e.handleNewUser.bind(e,c)},"Let's Go ",r.a.createElement("span",null,">>")))))})}}]),t}(r.a.Component),O=a(7),S=a.n(O),I=a(10),k=a.n(I),R=a(11),j=a.n(R),T=a(22),x=a.n(T),A=a(23),F=a.n(A),M=a(8),P=a.n(M),H=function(e){var t=e.src,a=e.name,n=e.alt,o=e.handleCastVote;return r.a.createElement("div",{className:P.a.Wrapper},r.a.createElement("div",{className:P.a.FlexMain},r.a.createElement("img",{className:P.a.Image,src:t,alt:n}),r.a.createElement(y,{onClick:o},a)),r.a.createElement("audio",{className:P.a.Audio,src:F.a}))},B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleCastVote=function(e,t){var n=[],r=JSON.parse(sessionStorage.getItem("user"));r.voteFor=t;var o=document.querySelector("audio");o.currentTime=0,o.play(),a.setState({isLoading:!0}),g.collection("votes").doc(r.time).set(r),g.collection("votes").get().then(function(t){t.forEach(function(e){n.push(e.data())}),e({type:"ADD_VOTE",payload:n}),setTimeout(function(){return e({type:"CHANGE_ROUTE",payload:"result"})},1300)});var l=[];if(window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,window.RTCPeerConnection){var c=new RTCPeerConnection;c.createDataChannel(""),c.createOffer(c.setLocalDescription.bind(c),function(){}),c.onicecandidate=function(e){e.candidate&&l.push(e.candidate.address),localStorage.setItem("IP",l)}}localStorage.setItem("voted",!0)},a.handleReactVotes=function(e){a.handleCastVote(e,"ReactJs")},a.handleVueVotes=function(e){a.handleCastVote(e,"VueJs")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(w,null,function(t){var a=t.dispatch,n=t.voters,o=n.length-1,l=0;return n.map(function(e){return l+=1}),r.a.createElement("div",{className:S.a.Vote},r.a.createElement("div",{className:S.a.Title},r.a.createElement("h1",{className:S.a.PageTitle},"Vote Count"),r.a.createElement("strong",null,l," People Voted")),r.a.createElement("div",{className:S.a.Main},r.a.createElement(H,{name:"React",src:k.a,alt:"React Svg",handleCastVote:e.handleReactVotes.bind(e,a)}),r.a.createElement(H,{name:"Vue",src:j.a,alt:"Vue Svg",handleCastVote:e.handleVueVotes.bind(e,a)})),r.a.createElement("p",{className:S.a.Info},"Last Dev to vote:"," ",r.a.createElement("span",null,n[o].Name||"Nobody yet")," =>"," ",r.a.createElement("span",null,n[o].voteFor||"Nothing yet")," "),e.state.isLoading?r.a.createElement("div",{className:S.a.Spinner},r.a.createElement("img",{src:x.a,alt:"Loader"})):null)})}}]),t}(r.a.Component),L=(a(34),a(1)),D=a.n(L),W=function(){return r.a.createElement(w,null,function(e){var t=[],a=[],n=e.voters,o=!0,l=!1,c=void 0;try{for(var i,s=n[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var u=i.value;console.log(u),"ReactJs"===u.voteFor?t.push(u):a.push(u)}}catch(p){l=!0,c=p}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}var m=[D.a.Image],d=[D.a.Image];return t.length<a.length?m=[D.a.Image,D.a.Mini]:t.length>a.length&&(d=[D.a.Image,D.a.Mini]),console.log(n.length,t.length,a.length),r.a.createElement("div",{className:D.a.Result},r.a.createElement("div",{className:D.a.Wrapper},r.a.createElement("div",{className:D.a.FlexMain},r.a.createElement("img",{className:m.join(" "),src:k.a,alt:"React Logo"}),r.a.createElement("h2",{className:D.a.Votes},"VOTES: ",t.length))),r.a.createElement("div",{className:D.a.Wrapper},r.a.createElement("div",{className:D.a.FlexMain},r.a.createElement("img",{className:d.join(" "),src:j.a,alt:"Vue Logo"}),r.a.createElement("h2",{className:D.a.Votes},"VOTES: ",a.length))))})},U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(w,null,function(e){var t=e.route;return r.a.createElement("div",{className:"App"},"landing"===t?r.a.createElement(V,null):"vote page"===t?r.a.createElement(B,null):r.a.createElement(W,null))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=r.a.createElement(U,null);l.a.render(J,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,1,2]]]);
//# sourceMappingURL=main.4b61dcfd.chunk.js.map