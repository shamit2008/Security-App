(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);n(66);var a=n(0),o=n.n(a),r=n(54),i=n.n(r),s=n(30),c=n(34),l=n(11),u=n(12),m=n(14),d=n(13),h=n(4),w=n(31),f=n.n(w),p=n(2),y=(n(73),n(25),n(15)),g=n.n(y),A=n(20),v=n(55),b=n.n(v),k=n(22),E=n.n(k);function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(e){Object(m.a)(n,e);var t=S(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onClick_elHotspot=Object(A.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.props.appActions.goToScreen("home",{transitionId:"fadeIn"});case 1:case"end":return e.stop()}},e)})),a.state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t={},n={};this.props.transitionId&&this.props.transitionId.length>0&&this.props.atTopOfScreenStack&&this.props.transitionForward&&(n.animation="0.25s ease-in-out "+this.props.transitionId),this.props.atTopOfScreenStack||(t.height="100vh",t.overflow="hidden");return o.a.createElement("div",{className:"AppScreen InfoScreen",style:n},o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"containerMinHeight elBackground",style:{backgroundColor:"#f6f6f6"}},o.a.createElement("div",{className:"appBg",style:{width:"100%",height:"100%"}}))),o.a.createElement("div",{className:"layoutFlow",style:t},o.a.createElement("div",{className:"elText"},o.a.createElement("div",{className:"headlineFont",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.info_text_294234))),o.a.createElement("div",{className:"elText7"},o.a.createElement("div",{className:"baseFont",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.info_text7_599168))),o.a.createElement("div",{className:"elText3"},o.a.createElement("div",{className:"baseFont",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.locStrings.info_text3_252590.replace(/\n/g,"<br>")}})))),o.a.createElement("div",{className:"elText5"},o.a.createElement("div",{className:"baseFont",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.info_text5_177104))),o.a.createElement("div",{className:"elText2"},o.a.createElement("div",{className:"baseFont",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.info_text2_136248))),o.a.createElement("div",{className:"elSpacer"},o.a.createElement("div",null))),o.a.createElement(E.a,{className:"navBar"},o.a.createElement("div",{className:"title"},"Info"),"  ",o.a.createElement("div",{className:"backBtn",onClick:function(t){e.props.appActions.goBack()}},o.a.createElement("img",{src:b.a,alt:"",style:{width:"50%"}}))),o.a.createElement("div",{className:"screenFgContainer"},o.a.createElement("div",{className:"foreground"},o.a.createElement("div",{className:"baseFont elText6",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",{className:"bottomAlignedContent"},this.props.locStrings.info_text6_519256)),o.a.createElement("div",{className:"actionFont containerMinHeight elHotspot",style:{display:"block",textTransform:"uppercase",backgroundColor:"transparent",cursor:"pointer",pointerEvents:"auto"},onClick:this.onClick_elHotspot}))))}}]),n}(a.Component),I=n(56),B=n.n(I),_=n(57),N=n.n(_),T=n(58),O=n.n(T);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var F=function(e){Object(m.a)(a,e);var t=C(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).onClick_elButton=Object(A.a)(g.a.mark(function e(){var t,a,o,r,i,s,c,l,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(135),a=t.DynamoDB,o=t.UpdateItemCommand,r=new a({region:"us-east-2"}),i={TableName:"FirstTest",Key:{FirstName:"Shaurya"},UpdateExpression:"SET SiteLength = :newsecondsLeft",ExpressionAttributeValues:{":newsecondsLeft":8},ReturnValues:"UPDATED_NEW"},r.send(new o(i)).then(function(e){console.log("data:"+e)}).catch(function(e){console.log("err",e)}),s=["www.scetchysite.com","www.reddit.com","www.craiglist.com","www.quora.com","www.urbandictionary.com","www.wikihow.com","www.genius.com","www.tmall.com","www.tiktok.com","www.macys.com","www.chaturbate.com","www.pornhub.com","www.nordstrom.com","www.baidu.com","www.qq.com","www.jd.com","www.sina.com","www.weibo.com","www.xinhuanet.com","www.okezone.com","www.vk.com","www.tianya.com","www.huanqui.com","www.yy.com"],c=document.getElementById("WebsiteTextField").value,l=["www.fb.com","www.google.com","www.twitter.com","www.facebook.com","www.instagram.com","www.webkinz.com","www.wikipedia.com","www.yelp.com","www.indeed.com","www.imdb.com","www.espn.com","www.gamepedia.com","www.yelp.com","www.homedepot.com","www.rottentomatoes.com","www.theguardian.com","www.msn.com","www.foxnews.com","www.allrecepies.com","www.cnet.com","www.retailmenot.com","www.wiktionary.com","www.wayfair.com","www.investopedia.com","www.apartments.com","www.bbb.com","www.macys.com","www.nordstrom.com","www.amazon.com","www.healthway.com","www.saksfifthavenue.com","www.espn.com","www.youtube.com","www.bankofamerica.com","www.senorwooly.com","www.minecraft.net","www.hypixel.net","www.glutenfreeonashoestring.com","www.wattpad.com"],c=c.toLowerCase(),u=c.split("."),console.log(c),console.log(u),"www"!=u[0]?(document.getElementById("resultTextId").innerHTML="This is not in the valid format. (www.examplesite.com)",document.getElementById("resultTextId").style.color="red",document.getElementById("resultTextId").style.textAlign="center",console.log("1st")):"www.example.com"==c?(document.getElementById("resultTextId").innerHTML="You didn't write anything",document.getElementById("resultTextId").style.color="red",document.getElementById("resultTextId").style.textAlign="center"):s.includes(c)?(document.getElementById("resultTextId").innerHTML="This site is not secure. Please refrain from using it.",document.getElementById("resultTextId").style.color="red",document.getElementById("resultTextId").style.textAlign="center"):l.includes(c)?(document.getElementById("resultTextId").innerHTML="This site is secure, but contains data tracking. For any minors, please exercise caution while using.",document.getElementById("resultTextId").style.color="darkgoldenrod",document.getElementById("resultTextId").style.textAlign="center"):(document.getElementById("resultTextId").innerHTML="This site is safe!",document.getElementById("resultTextId").style.color="green",document.getElementById("resultTextId").style.textAlign="center"),e.abrupt("return",null);case 13:case"end":return e.stop()}},e)})),o.textInputChanged_elField=function(e){o.setState({field:e.target.value}),o.props.appActions.updateDataSlot("ds_websiteField",e.target.value)},o.getValue_elField=function(){return void 0!==o.state.field?o.state.field:o.props.webName},o.onClick_elHotspot=Object(A.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.props.appActions.goToScreen("info",{transitionId:"slideIn_right"});case 1:case"end":return e.stop()}},e)})),o.state={},o}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t={},n={};this.props.transitionId&&this.props.transitionId.length>0&&this.props.atTopOfScreenStack&&this.props.transitionForward&&(n.animation="0.25s ease-in-out "+this.props.transitionId),this.props.atTopOfScreenStack||(t.height="100vh",t.overflow="hidden");this.props.resultColor;return o.a.createElement("div",{className:"AppScreen HomeScreen",style:n},o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"containerMinHeight elBackground",style:{backgroundColor:"#f6f6f6"}},o.a.createElement("div",{className:"appBg",style:{width:"100%",height:"100%"}}))),o.a.createElement("div",{className:"layoutFlow",style:t},o.a.createElement("div",{className:"elSpacer"},o.a.createElement("div",null)),o.a.createElement("div",{className:"elText"},o.a.createElement("div",{className:"systemFontBold",style:{fontSize:27.5,color:"black",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.start_text_502855))),o.a.createElement("div",{className:"elText2"},o.a.createElement("div",{className:"systemFontRegular",style:{fontSize:21.8,color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",null,this.props.locStrings.home_text2_229629))),o.a.createElement("div",{className:"elButton"},o.a.createElement(N.a,{type:"submit",className:"actionFont",style:{display:"block",color:"(null)",textAlign:"center",cursor:"pointer",pointerEvents:"auto"},color:"accent",onClick:this.onClick_elButton},this.props.locStrings.home_button_234835)),o.a.createElement("div",{className:"elField"},o.a.createElement(O.a,{id:"WebsiteTextField",className:"baseFont",style:{display:"block",paddingTop:0,textAlign:"left",pointerEvents:"auto"},type:"text",placeholder:this.props.locStrings.home_field_889680,onChange:this.textInputChanged_elField,value:this.getValue_elField()})),o.a.createElement("h3",{id:"resultTextId",value:this.props.locStrings.home_text4_464719})),o.a.createElement(E.a,{className:"navBar"},o.a.createElement("div",{className:"title"},"Home"),"  ",o.a.createElement("div",{className:"backBtn",onClick:function(t){e.props.appActions.goBack()}},o.a.createElement("img",{src:B.a,alt:"",style:{width:"50%"}}))),o.a.createElement("div",{className:"screenFgContainer"},o.a.createElement("div",{className:"foreground"},o.a.createElement("div",{className:"actionFont containerMinHeight elHotspot",style:{display:"block",textTransform:"uppercase",backgroundColor:"transparent",cursor:"pointer",pointerEvents:"auto"},onClick:this.onClick_elHotspot}),o.a.createElement("div",{className:"baseFont elText3",style:{color:"rgba(0, 0, 0, 0.8500)",textAlign:"center"}},o.a.createElement("div",{className:"bottomAlignedContent"},this.props.locStrings.home_text3_554928)))))}}]),a}(a.Component),j=n(23);function R(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw r}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function M(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw r}}}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var L=function(e){Object(m.a)(n,e);var t=z(n);function n(e,a){var o;return Object(l.a)(this,n),(o=t.call(this,e,a)).getStringsByLanguage=function(){var e,t={},n=M(o.items);try{for(n.s();!(e=n.n()).done;){var a=e.value,r=a.key;for(var i in a)if("key"!==i){var s=t[i]||{};s[r]=a[i],t[i]=s}}}catch(c){n.e(c)}finally{n.f()}return t},o.requestedKeyPath="",o}return Object(u.a)(n,[{key:"makeDefaultItems",value:function(){var e;e={},this.items.push(e),e.key="start_text_688206",e.en="New text. Double-click to edit",e={},this.items.push(e),e.key="start_text_502855",e.en="Website Security Scanner",e={},this.items.push(e),e.key="home_text2_229629",e.en="Enter a website:",e={},this.items.push(e),e.key="home_field_442316",e.en="www.example.com",e={},this.items.push(e),e.key="home_button_234835",e.en="SUBMIT",e={},this.items.push(e),e.key="home_button2_79823",e.en="Info",e={},this.items.push(e),e.key="home_text3_948447",e.en="Info",e={},this.items.push(e),e.key="info_text_294234",e.en="How this site works",e={},this.items.push(e),e.key="info_text2_136248",e.en="4. Google Safety Checker. Google has a safety checker, which is super simple to use and it is one of the easiest ways to get a brief checking of the website.",e={},this.items.push(e),e.key="info_text3_252590",e.en="2. Cookies. Cookies are little bits of information that are stored and then sent to the server about the user. \n",e={},this.items.push(e),e.key="info_text4_1004406",e.en="New text. Double-click to edit",e={},this.items.push(e),e.key="info_text5_177104",e.en="3. Ads. The number of ads is not the best indicator of how safe a website is, but is still fairly useful.",e={},this.items.push(e),e.key="info_text6_519256",e.en="Developed by Shaurya Mittal uisng React and JSX",e={},this.items.push(e),e.key="info_text7_599168",e.en="1. OpenWPM - The main way we check web security is through a web-crawler called openwpm. This web crawler internally runs the website and then tracks the data pulls.",e={},this.items.push(e),e.key="home_text3_554928",e.en="Developed by Shaurya Mittal using React and JSX",e={},this.items.push(e),e.key="home_validator_755553",e.en=" ",e={},this.items.push(e),e.key="home_text4_110877",e.en=" ",e={},this.items.push(e),e.key="home_field_889680",e.en="www.example.com",e={},this.items.push(e),e.key="home_text4_464719",e.en="if u see this then booo",e={},this.items.push(e),e.key="home_textblock_101429",e.en=" ",e={},this.items.push(e),e.key="comp1_button_588602",e.en="SUBMIT";var t=localStorage.getItem(this.id);null!=t&&(this.items=JSON.parse(t))}},{key:"addItem",value:function(e,t){Object(j.a)(Object(h.a)(n.prototype),"addItem",this).call(this,e,t),localStorage.setItem(this.id,JSON.stringify(this.items))}},{key:"removeItem",value:function(e,t){Object(j.a)(Object(h.a)(n.prototype),"removeItem",this).call(this,e,t),localStorage.setItem(this.id,JSON.stringify(this.items))}},{key:"replaceItemByRowIndex",value:function(e,t,a){Object(j.a)(Object(h.a)(n.prototype),"replaceItemByRowIndex",this).call(this,e,t,a),localStorage.setItem(this.id,JSON.stringify(this.items))}}]),n}(function(){function e(t,n){Object(l.a)(this,e),this.lastAvailableKey=function(e){for(var t=0,n=0;n<e.length;n++)void 0!==e[n].key&&e[n].key>t&&(t=e[n].key);return++t},this.id=t,this.updateCb=n,this.items=[],this.requestedKeyPath="",this.makeDefaultItems()}return Object(u.a)(e,[{key:"makeDefaultItems",value:function(){}},{key:"addItem",value:function(e,t){e.key=this.lastAvailableKey(this.items),this.items.push(e)}},{key:"removeItem",value:function(e,t){this.items=this.items.filter(function(t){return t.key!==e.key})}},{key:"replaceItemByRowIndex",value:function(e,t,n){e<0||e>=this.items.length||this.items.splice(e,1,t)}},{key:"replaceItemByKey",value:function(e,t,n){var a=this.rowIndexForKey(e);if(!(a<0))return this.replaceItemByRowIndex(a,t,n)}},{key:"rowIndexForKey",value:function(e){for(var t=0;t<this.items.length;t++)if(this.items[t].key===e)return t;return-1}},{key:"loadFromJson",value:function(e){var t=this,n=function(e){for(var n=t.lastAvailableKey(e),a=0;a<e.length;a++)void 0===e[a].key&&(e[a].key=n++)};if(Array.isArray(e))n(e),this.items=e;else if(e){var a=this.requestedKeyPath;if(!a||a.length<1)e.key||(e.key=0),this.items=[e];else{var o,r=R(a.split("."));try{for(r.s();!(o=r.n()).done;){var i=o.value;if(!e.hasOwnProperty(i))break;e=e[i]}}catch(s){r.e(s)}finally{r.f()}Array.isArray(e)?(n(e),this.items=e):(e.key||(e.key=0),this.items=[e])}}else this.items=[]}},{key:"expandSlotTemplateString",value:function(e,t,n){if(e.length<1)return"";for(var a=0,o="";a<e.length;){var r=e.indexOf("$slot(",a);if(-1===r&&(r=e.length),o+=e.substring(a,r),a=r,r===e.length)break;if(a+="$slot(".length,-1!==(r=e.indexOf(")",a))){var i=e.substring(a,r),s=i.charAt(0);"'"!==s&&'"'!==s||(i=i.substring(1,i.length-1)),o+=t[i]||"",r+=")".length,n&&!n.includes(i)&&n.push(i)}a=-1===r?e.length:r}return o}}]),e}());function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return Object(d.a)(this,n)}}var U=function(e){Object(m.a)(n,e);var t=Q(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).windowDidResize=function(){var e,t=window.innerWidth;(e=t<576?"narrow-phone":t<768?"wide-phone":t<1024?"narrow-tablet":"wide-tablet")!==a.state.screenFormatId&&a.setState({screenFormatId:e})},a.goToScreen=function(e,t){a.props.history.push("/"+e,Object(c.a)({},t,{appActions:null,locStrings:null,dataSheets:null})),window.scrollTo(0,0)},a.goBack=function(){a.props.history.goBack()},a.getDataSheet=function(e){return a.dataSheets[e]},a.addToDataSheet=function(e,t,n){var o=a.dataSheets[e];if(o&&t){var r=o.addItem(t,a["serviceOptions_"+e]||{});return a.setState({}),r}},a.updateInDataSheet=function(e,t,n){var o=a.dataSheets[e];if(o&&t){var r=o.replaceItemByKey(t.key,t,a["serviceOptions_"+e]||{});return a.setState({}),r}},a.removeFromDataSheet=function(e,t){var n=a.dataSheets[e];if(n&&t){var o=n.removeItem(t,a["serviceOptions_"+e]||{});return a.setState({}),o}},a.updateDataSlot=function(e,t,n){t!==a.dataSlots[e]&&(a.dataSlots[e]=t,"ds_activeLang"===e&&a.locStrings.setLanguage(t),a.setState({}))},a.dataSheetDidUpdate=function(e){a.setState({})},a.updateLocalizationFromDataSheet=function(e){var t=e.getStringsByLanguage();t&&Object.keys(t).length>0?a.locStrings=new f.a(t):a.locStrings=new f.a({en:{}}),a.locStrings.setLanguage(a.dataSlots.ds_activeLang)},a.createImageUrlFromProp=function(e){return e instanceof Object&&null!=e.type&&"image"===e.type&&null!=e.path?"(null)"+e.path:e},a.dataSheets={},a.dataSheets.localizationSheet=new L("localizationSheet",a.dataSheetDidUpdate),a.dataSheetLoaded={},a.dataSlots={},a.dataSlots.ds_activeLang="en",a.dataSlots.ds_websiteField="",a.updateLocalizationFromDataSheet(a.dataSheets.localizationSheet),a.state={screenTransitionForward:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.windowDidResize(),window.addEventListener("resize",this.windowDidResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.windowDidResize)}},{key:"isLoading",value:function(){return this.state.loading}},{key:"render",value:function(){var e=this,t=function(t,n,a,r){var i=Object(c.a)({},n,{atTopOfScreenStack:a,transitionForward:r,appActions:e,dataSheets:e.dataSheets,locStrings:e.locStrings,deviceInfo:{screenFormatId:e.state.screenFormatId},ds_activeLang:e.dataSlots.ds_activeLang,ds_websiteField:e.dataSlots.ds_websiteField});switch(t){default:return null;case"info":return o.a.createElement(x,i);case"home":return o.a.createElement(F,i)}};return o.a.createElement("div",{className:"App"},o.a.createElement(p.c,null,o.a.createElement(p.a,{path:"/Security-App/",render:function(e){return t("home",e.location.state,!0,!0)},exact:!0}),o.a.createElement(p.a,{path:"/info",render:function(e){return t("info",e.location.state,!0,!0)}}),o.a.createElement(p.a,{path:"/home",render:function(e){return t("home",e.location.state,!0,!0)}})))}}]),n}(a.Component),V=Object(p.f)(U);n(134),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(s.a,{basename:"/Security-App/"},o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){},55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMaADAAQAAAABAAAAMQAAAABCOazFAAABV0lEQVRoBe1YuwoCMRD0gYVPVNDC6vwGe+3t/T4L/8HCJ2In2mhjeVjYWtloobNgQIKSg/NMNuzCkGRvE3ZmlyN3qZSYKCAKiAKiQEIKZBM6Vx1bwiQH3JWD21hDwtsX6tySp3wVgQfmhB3Aigi10OqVvCJB4whgYXoFFIkDsm9yYCAEbFdJKiAViKmAty20hzCsX6NEoBGzun/Z/q2FrBNIR6RfRNwY6GrxJ6z7wFnz/3J5xWG3uAd+q4C6UiQ9DkwEMoaACp5TBTqGOKuPTSToo4k+apw2E4kLsu8BdLVmb1Uw2AB6/x/ha3FiR2+o5QciIXxtgI15RWQB2fXWCuFjVZECEhYiEMEZo4rMAS9ay3sigTN9EyERaq0Z8Km1ggj7nQnxhkgZkq4BvSJDZ6SOmEgecdM3IjQnHztTRCbInCUBpTj9Iaf7lpgoIAqIAqKAKGBNgSdKMraNwwEnewAAAABJRU5ErkJggg=="},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAMaADAAQAAAABAAAAMQAAAABCOazFAAABV0lEQVRoBe1YuwoCMRD0gYVPVNDC6vwGe+3t/T4L/8HCJ2In2mhjeVjYWtloobNgQIKSg/NMNuzCkGRvE3ZmlyN3qZSYKCAKiAKiQEIKZBM6Vx1bwiQH3JWD21hDwtsX6tySp3wVgQfmhB3Aigi10OqVvCJB4whgYXoFFIkDsm9yYCAEbFdJKiAViKmAty20hzCsX6NEoBGzun/Z/q2FrBNIR6RfRNwY6GrxJ6z7wFnz/3J5xWG3uAd+q4C6UiQ9DkwEMoaACp5TBTqGOKuPTSToo4k+apw2E4kLsu8BdLVmb1Uw2AB6/x/ha3FiR2+o5QciIXxtgI15RWQB2fXWCuFjVZECEhYiEMEZo4rMAS9ay3sigTN9EyERaq0Z8Km1ggj7nQnxhkgZkq4BvSJDZ6SOmEgecdM3IjQnHztTRCbInCUBpTj9Iaf7lpgoIAqIAqKAKGBNgSdKMraNwwEnewAAAABJRU5ErkJggg=="},65:function(e,t,n){e.exports=n(136)},66:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.2963fecc.chunk.js.map