(this["webpackJsonptwitch-bot"]=this["webpackJsonptwitch-bot"]||[]).push([[0],{35:function(e,t){},41:function(e){e.exports=JSON.parse('{"a":"0.3.0"}')},46:function(e,t,a){},56:function(e,t){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(10),r=a(13),c=a(12),o=a(21),i=a.n(o),u=a(28),l=a(4),d=a(5),m=a(3),h=a.n(m),p=a(15),b=a(18),j=a(37),g=a(26),f=1,v=2,O=3,y=function(){function e(t){var a=this;Object(n.a)(this,e),this.updateLastMessageTime=function(e){a.lastMessageTimes=Object(l.a)(Object(l.a)({},a.lastMessageTimes),{},Object(b.a)({},e,Date.now()))},this.minsSinceLastChatMessage=function(e){return Math.floor((Date.now()-a.lastMessageTimes[e])/6e4)},this.getChatters=function(){return g("https://thingproxy.freeboard.io/fetch/https://tmi.twitch.tv/group/user/".concat(a.channel,"/chatters")).then((function(e){return e.json()})).then((function(e){return e&&e.chatters?[].concat(Object(p.a)(e.chatters.moderators),Object(p.a)(e.chatters.viewers),Object(p.a)(e.chatters.staff),Object(p.a)(e.chatters.admins),Object(p.a)(e.chatters.global_mods)):null})).catch((function(e){return null}))},this.channel=t,this.lastMessageTimes={},this.getStatusPromise=this.getStatusPromise.bind(this)}return Object(s.a)(e,[{key:"getStatusPromise",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==this.channel){e.next=2;break}return e.abrupt("return",f);case 2:if(!(this.lastMessageTimes[t]&&this.minsSinceLastChatMessage(t)<10)){e.next=4;break}return e.abrupt("return",f);case 4:return e.abrupt("return",this.getChatters().then((function(e){return e&&e.includes(t)?v:O})));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=(a(46),a(38)),k=a.p+"static/media/lock.6857c469.svg",N=a(2),G=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).deleteRequest=function(e){s.props.onDelete(s.props.gameName)},s.getFormattedTimeDiff=function(e){var t="minute",a=Math.floor((Date.now()-e)/6e4);return 0===a?"just now":(a>=60&&(t="hour",(a=Math.floor(a/60))>=24&&(t="day",a=Math.floor(a/24))),"".concat(a," ").concat(t).concat(1===a?"":"s"," ago"))},s.getTooltipContents=function(){var e="";switch(s.state.activityStatus){case f:e="active";break;case v:e="idle";break;case O:e="disconnected"}return'\n            <div class="tooltip">\n                <p class="tooltipText">\n                    Requested '.concat(s.state.timeDiff," by ").concat(s.props.metadata.username,'\n                </p>\n                <div class="status ').concat(e,'" />\n            </div>')},s.toggleLock=function(){s.props.toggleLock(s.props.gameName)},s.updateStatus=function(){s.props.getActivity(s.props.metadata.username).then((function(e){s.setState((function(){return Object(l.a)(Object(l.a)({},s.state),{},{timeDiff:s.getFormattedTimeDiff(s.props.metadata.time),activityStatus:e})}))}))},s.state={timeDiff:0,activityStatus:null},s.deleteRequest=s.deleteRequest.bind(Object(d.a)(s)),s.getFormattedTimeDiff=s.getFormattedTimeDiff.bind(Object(d.a)(s)),s.getTooltipContents=s.getTooltipContents.bind(Object(d.a)(s)),s.toggleLock=s.toggleLock.bind(Object(d.a)(s)),s.updateStatus=s.updateStatus.bind(Object(d.a)(s)),s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.metadata.locked?"lock locked":"lock unlocked",t=this.props.metadata.chosen?"chosen":"pending";return Object(N.jsxs)("div",{className:"game-request-wrapper",children:[Object(N.jsx)(x.a,{effect:"solid",place:"right"}),Object(N.jsx)("div",{id:"baseDiv",className:"game-request ".concat(t),"data-tip":this.getTooltipContents(),"data-html":!0,onMouseEnter:this.updateStatus,children:Object(N.jsxs)("div",{className:"game-request-body",children:[this.props.gameName,Object(N.jsxs)("div",{className:"options",children:[Object(N.jsx)("img",{src:k,alt:"lock",className:e,onClick:this.toggleLock}),Object(N.jsx)("button",{type:"button",className:"deleteButton",onClick:this.deleteRequest,children:"X"})]})]})})]})}}]),a}(m.Component),S=a(43),w=a(30),M=a.n(w),C=a.p+"static/media/JackboxGames.39ad7cd1.yaml",P=a(26),q=a(54),_="!request",R=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).isModOrBroadcaster=function(e){return s.props.channel===e||s.props.modList.includes(e.toLowerCase())},s.checkForMiscCommands=function(e,t){if(e.startsWith("!gamelist")||e.startsWith("!gameslist"))return s.sendMessage("/me @".concat(t,", click here for a list of valid Jackbox games: ").concat("https://asukii314.github.io/twitch-request-wheel/#","/gamelist")),!0;if("!wheelcommands"===e)return s.sendMessage("/me @".concat(t,", click here to read about all supported commands: https://github.com/asukii314/twitch-request-wheel/blob/master/src/Commands.yaml")),!0;if(e.startsWith("!whichpack")){var a=e.replace("!whichpack","").trim();if(""===a)return s.sendMessage("/me @".concat(t,", please specify the game you would like to look up the party pack for: e.g. !whichpack TMP 2")),!0;var n=s.findGame(a,t);return n&&s.sendMessage("/me @".concat(t,", ").concat(n.name," is a ").concat(n.partyPack," game.")),!0}if("!advancenextgame"===e||"!nextgamefwd"===e||"!nextgameforward"===e)return s.isModOrBroadcaster(t)?(s.props.changeNextGameIdx(1)?s.props.upcomingGames.length>0?s.sendMessage("/me @".concat(t,", the next game has been changed to ").concat(s.props.upcomingGames[0].name,".")):s.sendMessage("/me @".concat(t,', the next game has been marked as "TBD".')):s.sendMessage("/me @".concat(t,", there are no more games in the queue to advance to!")),!0):(s.sendMessage("/me @".concat(t,", only channel moderators can use this command.")),!0);if("!nextgameback"===e||"!nextgamebackward"===e)return s.isModOrBroadcaster(t)?(s.props.changeNextGameIdx(-1)?s.sendMessage("/me @".concat(t,", the next game has been changed to ").concat(s.props.upcomingGames[0].name,".")):s.sendMessage("/me @".concat(t,", there are no previous games in the queue to go back to!")),!0):(s.sendMessage("/me @".concat(t,", only channel moderators can use this command.")),!0);if(e.startsWith("!setnextgame")||e.startsWith("!redeemgame")){if(!s.isModOrBroadcaster(t))return s.sendMessage("/me @".concat(t,", only channel moderators can use the ").concat(e.startsWith("!s")?"!setNextGame":"!redeemgame"," command.")),!0;var r=e.replace("!setnextgame","").replace("!redeemgame","").trim();if(""===r)return s.sendMessage("/me @".concat(t,", please specify the game you would like to insert in the queue: for example, ").concat(e.startsWith("!s")?"!setNextGame":"!redeemgame"," TMP 2")),!0;var c=s.findGame(r,t);if(c){var o=s.props.setNextGame(c);0===o?s.sendMessage("/me @".concat(t,", ").concat(c.name," has been inserted as the next game in the queue.")):s.sendMessage("/me @".concat(t,", ").concat(c.name," has been inserted in the queue following ").concat(o," other manual game request").concat(o>1?"s":"","."))}return!0}var i,u;if("!caniplay"===e||"!new"===e)return null===(i=s.props)||void 0===i||i.caniplayHandler(t,{sendConfirmationMsg:"!new"!==e}),!0;if(e.startsWith("!priorityseat")||e.startsWith("!redeemseat")){var l;if(!s.isModOrBroadcaster(t))return s.sendMessage("/me @".concat(t,", only channel moderators can use this command.")),!0;var d=e.replace("!priorityseat","").replace("!redeemseat","").replace("@","").trim();return""===d?(s.sendMessage("/me @".concat(t,", please specify the user who has redeemed a priority seat in the next game: for example, ").concat(e.startsWith("!p")?"!priorityseat":"!redeemseat"," @asukii314")),!0):(null===(l=s.props)||void 0===l||l.caniplayHandler(d,{sendConfirmationMsg:!0,isPrioritySeat:!0}),!0)}if("!leave"===e||"!murd"===e)return null===(u=s.props)||void 0===u||u.playerExitHandler(t),!0;if("!clear"===e){var m;if(s.isModOrBroadcaster(t))null===(m=s.props)||void 0===m||m.clearQueueHandler();return!0}if("!open"===e){var h;if(s.isModOrBroadcaster(t))null===(h=s.props)||void 0===h||h.openQueueHandler();return!0}if("!close"===e){var p;if(s.isModOrBroadcaster(t))null===(p=s.props)||void 0===p||p.closeQueueHandler();return!0}return"!startgame"===e?s.isModOrBroadcaster(t)?(s.props.startGame()?s.sendMessage("/me @".concat(t,", the game has been started.")):s.sendMessage("/me @".concat(t,", the game was already started.")),!0):(s.sendMessage("/me @".concat(t,", only channel moderators can use this command.")),!0):e.startsWith("!redeem")?(s.sendMessage("/me @".concat(t,", this command is no longer supported: please specify either !redeemgame or !redeemseat.")),!0):void 0},s.findGame=function(e,t){for(var a in s.state.validGames)for(var n=s.state.validGames[a],r=0,c=Object.entries(n);r<c.length;r++){var o,i=Object(S.a)(c[r],2),u=i[0],d=i[1];if(null===d||void 0===d||null===(o=d.Variants)||void 0===o?void 0:o.includes(e))return Object(l.a)({name:u,longName:"".concat(u," (").concat(a,")"),partyPack:a},d)}s.sendMessage("/me @".concat(t,", ").concat(e," could not be found in the list of valid Jackbox games. Click here for a list of valid games: ").concat("https://asukii314.github.io/twitch-request-wheel/#","/gamelist"))},s.checkForGameCommand=function(e,t){if(e.startsWith(_)){var a=e.replace(_,"").trim();return""===a?(s.sendMessage("/me @".concat(t,", please specify the game you would like to request: for example, !request TMP 2")),null):s.findGame(a,t)}},s.onMessage=function(e,t,a,n){if(!n)if(s.props.onMessage(a,t.username,t),"!nextgame"!==a.trim()){var r=a.trim().toLowerCase();if(!s.checkForMiscCommands(r,t.username)){var c=s.checkForGameCommand(r,t.username);if(c)if(s.props.messages[c.longName])s.sendMessage("/me @".concat(t.username,", ").concat(c.name," has already been requested!"));else{for(var o=null,i=0,u=Object.values(s.props.messages);i<u.length;i++){var l=u[i];if(l.username===t.username){o=l.longName;break}}o?s.props.channel===t.username?s.sendMessage("/me @".concat(t.username,", ").concat(c.name," has been added to the request queue. Your previous game request(s) weren't deleted, since you have special broadcaster privilege :P")):(s.props.onDelete(o),s.sendMessage("/me @".concat(t.username,", your previous request of ").concat(o," has been replaced with ").concat(c.name,"."))):s.sendMessage("/me @".concat(t.username,", ").concat(c.name," has been added to the request queue.")),s.props.addGameRequest(c,t.username)}}}else if(s.props.upcomingGames&&s.props.upcomingGames.length>0){var d=s.props.upcomingGames[0].name;if(s.props.upcomingGames.length>1){d+=", followed by ".concat(s.props.upcomingGames[1].name);for(var m=2;m<s.props.upcomingGames.length;m++)d+=" and ".concat(s.props.upcomingGames[m].name)}s.sendMessage("/me @".concat(t.username,", the next game up is ").concat(d,"!"))}else s.sendMessage("/me @".concat(t.username,", the next game hasn't been decided yet - feel free to !request one :)"))},s.sendMessage=function(e){s.state.client.say(s.props.channel,e)},s.state={client:null,validGames:[]},s.isModOrBroadcaster=s.isModOrBroadcaster.bind(Object(d.a)(s)),s.checkForMiscCommands=s.checkForMiscCommands.bind(Object(d.a)(s)),s.findGame=s.findGame.bind(Object(d.a)(s)),s.checkForGameCommand=s.checkForGameCommand.bind(Object(d.a)(s)),s.onMessage=s.onMessage.bind(Object(d.a)(s)),s.sendMessage=s.sendMessage.bind(Object(d.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(e){var t=this,a=new q.client({identity:{username:this.props.channel,password:this.props.access_token},channels:[this.props.channel]});a.on("message",this.onMessage),a.connect(),P(C).then((function(e){return e.text()})).then((function(e){t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{client:a,validGames:M.a.parse(e)})}))}))}},{key:"render",value:function(){return null}}]),a}(m.Component),I=(a(70),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).getHistoryList=function(e){return 0===e.length?Object(N.jsx)("li",{children:"No games yet"},"placeholder"):e.map((function(e,t){return Object(N.jsx)("li",{children:s.printGame(t)},t)}))},s.getNextGameName=function(){return s.hasNextGame()?s.props.history[s.props.nextGameIdx].name:"not yet decided"},s.getNextGamePartyPack=function(){return s.hasNextGame()?s.props.history[s.props.nextGameIdx].partyPack:null},s.hasNextGame=function(){return s.props.history.length>s.props.nextGameIdx},s.moveNextGameFwd=function(){return s.props.changeNextGameIdx(1)},s.moveNextGameBack=function(){return s.props.changeNextGameIdx(-1)},s.printGame=function(e){return e===s.props.nextGameIdx?Object(N.jsx)("b",{children:s.props.history[e].name}):s.props.history[e].name},s.state={index:0},s.getHistoryList=s.getHistoryList.bind(Object(d.a)(s)),s.getNextGameName=s.getNextGameName.bind(Object(d.a)(s)),s.getNextGamePartyPack=s.getNextGamePartyPack.bind(Object(d.a)(s)),s.hasNextGame=s.hasNextGame.bind(Object(d.a)(s)),s.moveNextGameBack=s.moveNextGameBack.bind(Object(d.a)(s)),s.moveNextGameFwd=s.moveNextGameFwd.bind(Object(d.a)(s)),s.printGame=s.printGame.bind(Object(d.a)(s)),s}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this.hasNextGame();switch(this.props.requestMode){case"game":e=Object(N.jsx)("button",{className:"open-seat-requests",disabled:!t,onClick:this.props.togglePlayerSelect,children:"OPEN SEAT REQUESTS"});break;case"seat":e=Object(N.jsx)("button",{className:"return-to-wheel",onClick:this.props.togglePlayerSelect,children:"RETURN TO WHEEL"})}return Object(N.jsxs)("div",{id:"sidebar",className:this.props.requestMode,children:[Object(N.jsx)("div",{className:"sidebar-panel",children:Object(N.jsxs)("div",{className:"p sidebar-panel-up-next",children:[" Up Next:",Object(N.jsx)("p",{className:"next-game-name",children:this.getNextGameName()}),Object(N.jsx)("p",{className:"next-game-party-pack",children:Object(N.jsx)("i",{children:this.getNextGamePartyPack()})}),e]})}),Object(N.jsxs)("div",{className:"nav-wrapper",children:[Object(N.jsx)("button",{className:"move-next-game-back",onClick:this.moveNextGameBack,children:" \u21e6 "}),Object(N.jsx)("button",{className:"move-next-game-fwd",onClick:this.moveNextGameFwd,children:" \u21e8 "})]}),Object(N.jsxs)("div",{className:"sidebar-panel",children:[Object(N.jsx)("p",{className:"sidebar-panel-history",children:" History "}),Object(N.jsx)("p",{className:"sidebar-panel-history-list",children:this.getHistoryList(this.props.history)})]})]})}}]),a}(m.Component)),L=(a(71),a.p+"static/media/dice.021a7158.svg"),T=a.p+"static/media/star.de82f684.svg",Q=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).updateColumnSizes=function(){s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{columnWidth:s.firstColumn.current.offsetWidth})}))},s.handleNewPlayerRequest=function(e,t){var a,n,r,c,o,i,u,l,d,m=t.isPrioritySeat,h=void 0!==m&&m;if(h){var p=s.state.isQueueOpen?"playing":"interested";return s.updateColumnForUser({username:e,isPrioritySeat:h},p)?"you have been successfully added to the lobby.":"there was an error adding you to the lobby."}return(null===(a=s.state)||void 0===a||null===(n=a.interested)||void 0===n||null===(r=n.map((function(e){return e.username})))||void 0===r?void 0:r.includes(e))||(null===(c=s.state)||void 0===c||null===(o=c.playing)||void 0===o||null===(i=o.map((function(e){return e.username})))||void 0===i?void 0:i.includes(e))||(null===(u=s.state)||void 0===u||null===(l=u.joined)||void 0===l||null===(d=l.map((function(e){return e.username})))||void 0===d?void 0:d.includes(e))?"you are already in the lobby.":s.state.isQueueOpen?s.updateColumnForUser({username:e},"interested")?"you have successfully joined the lobby.":"there was an error adding you to the lobby.":"the queue is currently closed; users have already been selected for this game."},s.updateColumnForUser=function(e,t){return!(!s.state||!s.state[t])&&(s.removeUser(e.username),s.setState((function(a){return Object(l.a)(Object(l.a)({},a),{},Object(b.a)({},t,[].concat(Object(p.a)(a[t]),[e])))})),!0)},s.removeUser=function(e){return s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{interested:t.interested.filter((function(t){return t.username!==e})),playing:t.playing.filter((function(t){return t.username!==e})),joined:t.joined.filter((function(t){return t.username!==e}))})}))},s.clearQueue=function(){return s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{interested:[],playing:[],joined:[]})}))},s.openQueue=function(){return s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{isQueueOpen:!0})}))},s.closeQueue=function(){return s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{isQueueOpen:!1})}))},s.playerCount=function(){return s.state.playing.length+s.state.joined.length+(s.state.streamerSeat?1:0)},s.toggleStreamerSeat=function(){s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{streamerSeat:!e.streamerSeat})}))},s.canStartGame=function(){var e,t;return(null===(e=s.props.game)||void 0===e?void 0:e["Max players"])>=s.playerCount()&&(null===(t=s.props.game)||void 0===t?void 0:t["Min players"])<=s.playerCount()},s.startGame=function(){s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{interested:[],playing:[],joined:[]})})),s.props.startGame()},s.randomizePlayers=function(){for(var e,t,a=Math.min(s.props.game["Max players"]-s.playerCount(),s.state.interested.length),n=[],r=[],c=s.state.playing;n.length<a;)e=Math.floor(Math.random()*s.state.interested.length),n.includes(e)||(n.push(e),t=s.state.interested[e].username,r.push(t),c=[].concat(Object(p.a)(c),[s.state.interested[e]]));s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{interested:e.interested.filter((function(e){return!r.includes(e.username)})),playing:c})}))},s.renderPlayerCard=function(e,t,a){return Object(N.jsxs)("div",{className:"playerCard",children:[Object(N.jsxs)("div",{className:"playerCard-username",children:[!0===e.isPrioritySeat&&Object(N.jsx)("img",{src:T,alt:"Priority seat redemption"}),Object(N.jsx)("p",{className:"playerName",style:{maxWidth:s.state.columnWidth-25},children:e.username})]}),Object(N.jsxs)("div",{className:"changeColButtonsContainer",children:["interested"!==a&&Object(N.jsx)("button",{className:"changeCol",onClick:s.updateColumnForUser.bind(Object(d.a)(s),e,"interested"),children:"Interested"}),"playing"!==a&&Object(N.jsx)("button",{className:"changeCol",onClick:s.updateColumnForUser.bind(Object(d.a)(s),e,"playing"),children:"Playing"}),Object(N.jsx)("button",{className:"changeCol",onClick:s.removeUser.bind(Object(d.a)(s),e.username),children:"X"})]})]},t)},s.renderStreamerSeatToggle=function(){return Object(N.jsxs)("div",{className:"my-toggle-group",children:[Object(N.jsx)("p",{className:"toggle-label",children:"Reserve seat for streamer?"}),Object(N.jsxs)("div",{className:"my-toggle",children:[Object(N.jsx)("input",{type:"checkbox",defaultChecked:!0,onChange:s.toggleStreamerSeat}),Object(N.jsx)("div",{className:"my-toggle-text no","aria-hidden":"true",children:"No"}),Object(N.jsx)("div",{className:"my-toggle-text yes","aria-hidden":"true",children:"Yes"}),Object(N.jsx)("div",{className:"my-toggle-orb"})]})]})},s.renderPlayerCount=function(){var e,t,a="playerCount";return(null===(e=s.props.game)||void 0===e?void 0:e["Max players"])<s.playerCount()&&(a+=" overlimit"),Object(N.jsxs)("p",{className:a,children:[s.playerCount()," of ",null===(t=s.props.game)||void 0===t?void 0:t["Max players"]," seats claimed"]})},s.firstColumn=h.a.createRef(),s.state={interested:[],playing:[],joined:[],streamerSeat:!1,isQueueOpen:!0},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.updateColumnSizes(),window.addEventListener("resize",this.updateColumnSizes)}},{key:"render",value:function(){var e,t,a,n=this,s="startGame";return this.playerCount()<(null===(e=this.props.game)||void 0===e?void 0:e["Min players"])&&(s+=" disabled"),Object(N.jsxs)("div",{className:"playerSelectContainer",children:[Object(N.jsxs)("div",{className:"header",children:[this.renderStreamerSeatToggle(),Object(N.jsxs)("div",{className:"game-name",children:[Object(N.jsx)("b",{children:null!==(t=null===(a=this.props.game)||void 0===a?void 0:a.name)&&void 0!==t?t:"TBD"}),this.renderPlayerCount()]}),Object(N.jsx)("button",{className:s,onClick:this.startGame,disabled:!this.canStartGame(),children:"Start Game"})]}),Object(N.jsxs)("div",{className:"playerCardContainer",children:[Object(N.jsxs)("div",{ref:this.firstColumn,className:"playerCardColumn interested",children:[Object(N.jsx)("p",{className:"playerCardColumn-header",children:"Interested"}),this.state.interested.filter((function(e){return e.isPrioritySeat})).map((function(e,t){return n.renderPlayerCard(e,t,"interested")})),this.state.interested.filter((function(e){return!e.isPrioritySeat})).map((function(e,t){return n.renderPlayerCard(e,t,"interested")}))]}),Object(N.jsxs)("div",{className:"playerCardColumn playing",children:[Object(N.jsxs)("p",{className:"playerCardColumn-header",children:["Playing",Object(N.jsx)("button",{className:"dice",onClick:this.randomizePlayers,children:Object(N.jsx)("img",{src:L,alt:"dice icon"})})]}),this.state.playing.filter((function(e){return e.isPrioritySeat})).map((function(e,t){return n.renderPlayerCard(e,t,"playing")})),this.state.playing.filter((function(e){return!e.isPrioritySeat})).map((function(e,t){return n.renderPlayerCard(e,t,"playing")}))]})]})]})}}]),a}(m.Component),B=(a(72),a(73)),F=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeNextGameIdx=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return!(s.state.nextGameIdx+e>s.state.history.length)&&(!(s.state.nextGameIdx+e<0)&&(s.setState((function(t){return Object(l.a)(Object(l.a)({},s.state),{},{nextGameIdx:t.nextGameIdx+e})})),!0))},s.moveNextGameFwd=function(){return s.changeNextGameIdx()},s.moveNextGameBack=function(){return s.changeNextGameIdx(-1)},s.addGameRequest=function(e,t){s.setState((function(a){return Object(l.a)(Object(l.a)({},a),{},{messages:Object(l.a)(Object(l.a)({},s.state.messages),{},Object(b.a)({},e.longName,Object(l.a)(Object(l.a)({},e),{},{username:t,time:Date.now(),locked:!1,chosen:!1}))),counter:s.state.counter+1})}))},s.toggleLock=function(e){var t=Object(l.a)({},s.state.messages[e]);t.locked=!t.locked,s.setState((function(){return Object(l.a)(Object(l.a)({},s.state),{},{messages:Object(l.a)(Object(l.a)({},s.state.messages),{},Object(b.a)({},e,t))})}))},s.setNextGame=function(e){for(var t=s.state.nextGameIdx;t<s.state.history.length&&(null===(a=s.state.history[t])||void 0===a?void 0:a.override);){var a;t++}return s.setState((function(a){return Object(l.a)(Object(l.a)({},a),{},{history:[].concat(Object(p.a)(a.history.slice(0,Math.max(0,t))),[Object(l.a)(Object(l.a)({},e),{},{override:!0})],Object(p.a)(a.history.slice(t)))})})),t-s.state.nextGameIdx},s.addGameToQueue=function(e){s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{history:[].concat(Object(p.a)(s.state.history),[Object(l.a)(Object(l.a)({},e),{},{override:!1})]),messages:Object(l.a)(Object(l.a)({},t.messages),{},Object(b.a)({},e.longName,Object(l.a)(Object(l.a)({},t.messages[e.longName]),{},{chosen:!0})))})}))},s.onWheelSpun=function(e){var t,a=null===(t=s.state.messages)||void 0===t?void 0:t[e];if(a){var n=a.username;return s.addGameToQueue(a),s.state.messages[e].locked||setTimeout((function(){s.removeGame(e)}),2500),s.chatActivity.getStatusPromise(n).then((function(e){var t="";switch(e){case O:t="/me ".concat(a.name," just won the spin, but it doesn't seem like @").concat(n," is still around. Hope someone else wants to play!");break;case f:t="/me @".concat(n,", good news - ").concat(a.name," just won the spin!");break;case v:default:t="/me @".concat(n,", good news - ").concat(a.name," just won the spin! (I hope you're still around!)")}return s.messageHandler.sendMessage(t)}))}},s.removeGame=function(e){var t=Object(l.a)({},s.state.messages);delete t[e],s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{messages:t,counter:s.state.counter+1})}))},s.onMessage=function(e,t,a){s.chatActivity.updateLastMessageTime(t)},s.togglePlayerSelect=function(){s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{showPlayerSelect:!e.showPlayerSelect})}))},s.routePlayRequest=function(e,t){var a,n,r=t.sendConfirmationMsg,c=void 0===r||r,o=t.isPrioritySeat,i=void 0!==o&&o,u=s.state.showPlayerSelect?null===(a=s.playerSelector)||void 0===a?void 0:a.handleNewPlayerRequest(e,{isPrioritySeat:i}):"sign-ups are currently closed; try again after this game wraps up!";c&&(null===(n=s.messageHandler)||void 0===n||n.sendMessage("/me @".concat(e,", ").concat(u)))},s.routeLeaveRequest=function(e){var t;null===(t=s.playerSelector)||void 0===t||t.removeUser(e)},s.routeOpenQueueRequest=function(){var e;s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{showPlayerSelect:!0})})),null===(e=s.playerSelector)||void 0===e||e.openQueue()},s.routeCloseQueueRequest=function(){var e;null===(e=s.playerSelector)||void 0===e||e.closeQueue()},s.routeClearQueueRequest=function(){var e;null===(e=s.playerSelector)||void 0===e||e.clearQueue()},s.startGame=function(){return!!s.state.showPlayerSelect&&(s.state.showPlayerSelect=!1,s.moveNextGameFwd(),!0)},s.setMessageHandlerRef=function(e){s.messageHandler=e},s.setPlayerSelectRef=function(e){s.playerSelector=e},s.chatActivity=new y(s.props.channel),s.state={messages:{},colors:B({count:99,luminosity:"light",hue:"blue"}),counter:0,history:[],nextGameIdx:0,showPlayerSelect:!1},s.playerSelector=null,s.messageHandler=null,s.changeNextGameIdx=s.changeNextGameIdx.bind(Object(d.a)(s)),s.moveNextGameFwd=s.moveNextGameFwd.bind(Object(d.a)(s)),s.moveNextGameBack=s.moveNextGameBack.bind(Object(d.a)(s)),s.addGameRequest=s.addGameRequest.bind(Object(d.a)(s)),s.toggleLock=s.toggleLock.bind(Object(d.a)(s)),s.setNextGame=s.setNextGame.bind(Object(d.a)(s)),s.addGameToQueue=s.addGameToQueue.bind(Object(d.a)(s)),s.onWheelSpun=s.onWheelSpun.bind(Object(d.a)(s)),s.removeGame=s.removeGame.bind(Object(d.a)(s)),s.onMessage=s.onMessage.bind(Object(d.a)(s)),s.togglePlayerSelect=s.togglePlayerSelect.bind(Object(d.a)(s)),s.routePlayRequest=s.routePlayRequest.bind(Object(d.a)(s)),s.routeLeaveRequest=s.routeLeaveRequest.bind(Object(d.a)(s)),s.routeOpenQueueRequest=s.routeOpenQueueRequest.bind(Object(d.a)(s)),s.routeCloseQueueRequest=s.routeCloseQueueRequest.bind(Object(d.a)(s)),s.routeClearQueueRequest=s.routeClearQueueRequest.bind(Object(d.a)(s)),s.startGame=s.startGame.bind(Object(d.a)(s)),s.setMessageHandlerRef=s.setMessageHandlerRef.bind(Object(d.a)(s)),s.setPlayerSelectRef=s.setPlayerSelectRef.bind(Object(d.a)(s)),s}return Object(s.a)(a,[{key:"render",value:function(){var e,t=this,a=Object.keys(this.state.messages);"function"===typeof this.props.onLogout&&(e=Object(N.jsx)("button",{className:"logout",onClick:this.props.onLogout,children:"Logout \u27a7"}));var n,s,r,c=this.state.showPlayerSelect?"player-select":"game-select",o=this.state.showPlayerSelect?Object(N.jsxs)("span",{className:"subheading-player",children:["Type ",Object(N.jsx)("b",{children:"!new"})," in ",this.props.channel,"'s chat if you want to join the next game"]}):Object(N.jsxs)("span",{className:"subheading-game",children:["Type e.g. ",Object(N.jsx)("b",{children:'"!request Blather Round"'})," in ",this.props.channel,"'s chat to add"]});this.state.showPlayerSelect?n=Object(N.jsx)(Q,{game:null===(r=this.state.history)||void 0===r?void 0:r[this.state.nextGameIdx],startGame:this.startGame,ref:this.setPlayerSelectRef}):(n=a.map((function(e,a){return Object(N.jsx)(G,{gameName:e,metadata:t.state.messages[e],onDelete:t.removeGame,toggleLock:t.toggleLock.bind(e),getActivity:t.chatActivity.getStatusPromise},a)})),s=Object(N.jsx)("div",{className:"right-column",width:"50px",children:Object(N.jsx)("div",{className:"wheel-wrapper",children:Object(N.jsx)(j.a,{segments:a,segColors:this.state.colors,onFinished:this.onWheelSpun,isOnlyOnce:!1,size:250,upDuration:100,downDuration:1e3,primaryColor:"white",contrastColor:"black",fontFamily:"Arial"},this.state.counter)})}));return Object(N.jsxs)("div",{id:"main-screen",className:c,children:[Object(N.jsx)(R,{addGameRequest:this.addGameRequest,setNextGame:this.setNextGame,changeNextGameIdx:this.changeNextGameIdx,startGame:this.startGame,messages:this.state.messages,channel:this.props.channel,modList:this.props.modList,access_token:this.props.access_token,onMessage:this.onMessage,onDelete:this.removeGame,upcomingGames:this.state.history.slice(this.state.nextGameIdx),caniplayHandler:this.routePlayRequest,playerExitHandler:this.routeLeaveRequest,openQueueHandler:this.routeOpenQueueRequest,closeQueueHandler:this.routeCloseQueueRequest,clearQueueHandler:this.routeClearQueueRequest,ref:this.setMessageHandlerRef}),Object(N.jsxs)("div",{className:"left-column",children:[Object(N.jsx)("h2",{children:this.state.showPlayerSelect?"Seat Requests":"Game Requests"}),Object(N.jsx)("h4",{children:o}),Object(N.jsxs)("div",{className:"left-column-body",children:[Object(N.jsx)(I,{history:this.state.history,nextGameIdx:this.state.nextGameIdx,changeNextGameIdx:this.changeNextGameIdx,moveNextGameFwd:this.moveNextGameFwd,moveNextGameBack:this.moveNextGameBack,togglePlayerSelect:this.togglePlayerSelect,requestMode:this.state.showPlayerSelect?"seat":"game"}),Object(N.jsx)("div",{className:"left-column-inner-body",children:n})]})]}),s,e]})}}]),a}(m.Component),D=a(7),H=a(39),W=a.n(H),A=a(26),U=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={username:localStorage.getItem("__username"),access_token:localStorage.getItem("__access_token"),failed_login:!1},e.getAuth=e.getAuth.bind(Object(d.a)(e)),e.logOut=e.logOut.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;return this._isMounted=!0,this.state.access_token?A("https://api.twitch.tv/helix/users",{headers:{"Client-ID":"u172q64ekv1j8nxy1r48mb8vn4kk7v",Authorization:"Bearer ".concat(this.state.access_token)}}).then((function(e){return e.json()})).then((function(t){return localStorage.setItem("__username",t.data[0].login),A("https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=".concat(t.data[0].id),{headers:{"Client-ID":"u172q64ekv1j8nxy1r48mb8vn4kk7v",Authorization:"Bearer ".concat(e.state.access_token)}}).then((function(e){return e.json()})).then((function(a){var n=a.data?a.data.map((function(e){return e.user_name.toLowerCase()})):null;e._isMounted&&e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:t.data[0].login,modList:n})}))}))})).catch((function(t){return e.getAuth})):this.getAuth()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"logOut",value:function(){localStorage.removeItem("__username"),localStorage.removeItem("__access_token");var e=new URLSearchParams({client_id:"u172q64ekv1j8nxy1r48mb8vn4kk7v",token:this.state.access_token,redirect_uri:"https://asukii314.github.io/twitch-request-wheel/#"});A("https://id.twitch.tv/oauth2/revoke?".concat(e),{method:"POST",headers:{Accept:"application/vnd.twitchtv.v5+json"}}).then((function(){window.location.reload()}))}},{key:"getAuth",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,s=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&console.error(t),localStorage.removeItem("__username"),localStorage.removeItem("__access_token"),a=W.a.parse(this.props.location.search),n=new URLSearchParams({grant_type:"authorization_code",code:a.code,client_id:"u172q64ekv1j8nxy1r48mb8vn4kk7v",client_secret:"7yfmbc5ka6t7frki5g8m0qsboltp2p",redirect_uri:"https://asukii314.github.io/twitch-request-wheel/#"}),e.next=7,A("https://id.twitch.tv/oauth2/token?".concat(n),{method:"POST",headers:{Accept:"application/vnd.twitchtv.v5+json"}}).then((function(e){return e.json()})).then((function(e){if(e.access_token)return localStorage.setItem("__access_token",e.access_token),s._isMounted&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{access_token:e.access_token})})),A("https://api.twitch.tv/helix/users",{headers:{"Client-ID":"u172q64ekv1j8nxy1r48mb8vn4kk7v",Authorization:"Bearer ".concat(e.access_token)}}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("__username",e.data[0].login),A("https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=".concat(e.data[0].id),{headers:{"Client-ID":"u172q64ekv1j8nxy1r48mb8vn4kk7v",Authorization:"Bearer ".concat(s.state.access_token)}}).then((function(e){return e.json()})).then((function(t){var a=t.data?t.data.map((function(e){return e.user_name.toLowerCase()})):null;s._isMounted&&s.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{username:e.data[0].login,modList:a})}))}))}));s._isMounted&&s.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{failed_login:!0})}))}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.failed_login?Object(N.jsx)(D.a,{to:"/login"}):(this.state.username&&(e=Object(N.jsx)(F,{channel:this.state.username,modList:this.state.modList,access_token:this.state.access_token,onLogout:this.logOut})),Object(N.jsx)("div",{id:"authenticated-app",children:e}));var e}}]),a}(m.Component),z=Object(D.g)(U),E=a(23),J=(a(81),a(26)),V=function(e){var t=Object.keys(e.metadata);return Object(N.jsxs)("div",{className:"partyPackCard",children:[Object(N.jsxs)("p",{className:"partyPackName",children:[e.partyPackName," "]}),t.map((function(t,a){var n,s;return Object(N.jsx)(X,{gameName:t,possibleMatches:null===(n=e.metadata)||void 0===n||null===(s=n[t])||void 0===s?void 0:s.Variants},a)}))]})},X=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("p",{className:"gameName",children:[e.gameName," "]}),e.possibleMatches.map((function(t,a){return Object(N.jsxs)("li",{className:"possibleGameMatch",children:["!request ",t]},"".concat(e.gameName,"-").concat(a))}))]})},Y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={validGames:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(e){var t=this;J(C).then((function(e){return e.text()})).then((function(e){t.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{validGames:M.a.parse(e)})}))}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.validGames);return Object(N.jsx)("div",{className:"partyPackList",children:t.map((function(t,a){return Object(N.jsx)(V,{partyPackName:t,metadata:e.state.validGames[t]},a)}))})}}]),a}(m.Component),K=a(41),Z=(a(82),function(){var e="https://id.twitch.tv/oauth2/authorize"+"?client_id=".concat("u172q64ekv1j8nxy1r48mb8vn4kk7v")+"&response_type=code&scope=".concat("chat:read chat:edit moderation:read")+"&redirect_uri=".concat("https://asukii314.github.io/twitch-request-wheel/%23");return Object(N.jsxs)("div",{id:"login-screen",children:[Object(N.jsxs)("a",{href:e,children:["Log In With ",Object(N.jsx)("strong",{children:"Twitch"})]}),Object(N.jsx)("br",{}),Object(N.jsx)("small",{children:"v".concat(K.a)})]})}),$=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(N.jsx)(E.b,{basename:"/",children:Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("header",{className:"App-header",children:Object(N.jsxs)(D.d,{children:[Object(N.jsx)(D.b,{exact:!0,path:"/login",children:Z()}),Object(N.jsx)(D.b,{exact:!0,path:"/gamelist",component:Y}),Object(N.jsx)(D.b,{path:"/",component:z})]})})})})}}]),a}(m.Component),ee=a(42),te=a(20),ae=function(e){e&&e instanceof Function&&(Object(te.a)(e),Object(te.c)(e),Object(te.b)(e),Object(te.d)(e),Object(te.e)(e))};a(86);Object(ee.render)(Object(N.jsx)(h.a.StrictMode,{children:Object(N.jsx)(E.a,{children:Object(N.jsx)($,{})})}),document.getElementById("root")),ae()}},[[87,1,2]]]);
//# sourceMappingURL=main.1a637a0a.chunk.js.map