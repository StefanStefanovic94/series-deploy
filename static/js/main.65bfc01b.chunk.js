(this["webpackJsonpapp-new"]=this["webpackJsonpapp-new"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports={list:"Search_list__2YLuC",image:"Search_image__2r9h3",parentList:"Search_parentList__3aLBW",text:"Search_text__3kfWk"}},function(e,t,a){e.exports={wrap:"InfoShow_wrap__3W60l",seasons:"InfoShow_seasons__1Ru3G",cast:"InfoShow_cast__1edbf",name:"InfoShow_name__1f8to"}},function(e,t,a){e.exports={wrap:"CastDetails_wrap__1mDkC",card:"CastDetails_card__1ZDAO"}},,function(e,t,a){e.exports={wrap:"SeasonsDetails_wrap__2zECk",card:"SeasonsDetails_card__3hlIv",episodes:"SeasonsDetails_episodes__1CYze"}},function(e,t,a){e.exports={wrap:"Episodes_wrap__1ZxE5",card:"Episodes_card__2qhH_"}},,function(e,t,a){e.exports={card:"Show_card__1hsIf",wraper:"Show_wraper__1DnSa"}},,,,,,,function(e,t,a){e.exports={wrap:"AllShows_wrap__3kUii",flex:"AllShows_flex__-B3Wp",all:"AllShows_all__6Oioj",check:"AllShows_check__Qa4BY"}},function(e,t,a){e.exports={wrap:"App_wrap__3_BPm"}},function(e,t,a){e.exports={header:"Header_header__1a-K8"}},function(e,t,a){e.exports={cast:"Cast_cast__3_5lp"}},,function(e,t,a){e.exports=a(46)},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),c=a.n(r),o=(a(39),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),h=a(22),p=a.n(h),d=a(33),v=function(e){var t=e.name,a=e.avatar,n=e.id,r=e.rating;return s.a.createElement("div",{className:p.a.wraper},s.a.createElement(u.b,{to:"/info-show/".concat(n)},s.a.createElement("img",{className:p.a.card,src:a,alt:"no image"}),s.a.createElement("h2",null,t),s.a.createElement("p",null,"Rating: ",r," ",s.a.createElement("span",null,s.a.createElement(d.a,null)))))},E=a(29),f=a.n(E),w=a(47),_=function(e){return fetch(e).then((function(e){return e.json()}))},g=(a(45),a(15)),b=a.n(g),S=function(){return s.a.createElement("div",null,s.a.createElement("img",{src:"./noimage.png"}))},j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).searchedSeries=function(t){var a=t.target.value;e.setState({value:a})},e.state={search:[],value:""},e}return Object(i.a)(a,[{key:"trying",value:function(){var e=this;_("".concat("https://api.tvmaze.com/search/shows?q=",this.state.value)).then((function(t){return e.setState({search:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,console.log(this.state.search),s.a.createElement("input",{onChange:this.searchedSeries,placeholder:"search..."}),this.state.value?this.trying():null,s.a.createElement("div",{className:b.a.parentList},""===this.state.value?"":this.state.search.map((function(e){return s.a.createElement(u.b,{to:"/info-show/".concat(e.show.id)},s.a.createElement("div",{className:b.a.list},s.a.createElement("img",{className:b.a.image,src:e.show.image?e.show.image.medium:s.a.createElement(S,null)}),s.a.createElement("h2",{className:b.a.text},e.show.name)))}))))}}]),a}(s.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={shows:[],sortShows:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("https://api.tvmaze.com/shows").then((function(t){return e.setState({shows:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(j,null)),s.a.createElement("div",{className:f.a.check},this.state.shows.sort((function(e,t){return e.rating.average>t.rating.average?-1:1})).map((function(e,t){if(t<52)return s.a.createElement(w.a,{sm:"12",md:"5",lg:"3"},s.a.createElement(v,{key:e.id,avatar:e.image.medium,name:e.name,id:e.id,rating:e.rating.average}))})),"S"))}}]),a}(s.a.Component),k=a(30),N=a.n(k),x=a(2),y=a(31),C=a.n(y),D=function(){return s.a.createElement("div",{className:C.a.header},s.a.createElement(u.b,{to:"/"},s.a.createElement("h2",null,"Popular Series")))},z=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={seasons:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("https://api.tvmaze.com/shows/",this.props.id,"/seasons")).then((function(t){return e.setState({seasons:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h2",null,"Seasons (",this.state.seasons.length,")")),s.a.createElement("div",null,this.state.seasons.map((function(e){return s.a.createElement("ul",null,s.a.createElement("li",null,e.premiereDate," ; ",e.endDate))}))),s.a.createElement(u.b,{to:"".concat(/info-show/,this.props.id,"/seasons")},s.a.createElement("h6",null,"...more details about season")),console.log(this.state.seasons))}}]),a}(s.a.Component),I=a(16),M=a.n(I),A=a(32),B=a.n(A),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={casts:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("https://api.tvmaze.com/shows/",this.props.id,"/cast")).then((function(t){return e.setState({casts:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:B.a.cast},s.a.createElement("h2",null,"Cast:"),this.state.casts.map((function(e,t){if(t<5)return s.a.createElement("ul",null,s.a.createElement("li",null,e.person.name))})),s.a.createElement(u.b,{to:"".concat(/info-show/,this.props.id,"/cast")},s.a.createElement("h6",null,"...more details about cast")))}}]),a}(s.a.Component),W=a(48),V=a(49),Y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderShow=function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:e.state.show.image?e.state.show.image.medium:"no image",key:e.state.show.id}),s.a.createElement("h2",{className:M.a.name},e.state.show.name)))},e.state={show:null,sesone:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("http://api.tvmaze.com/shows/",this.props.match.params.id)).then((function(t){return e.setState({show:t})}))}},{key:"render",value:function(){return s.a.createElement(W.a,null,s.a.createElement("div",{className:M.a.wrap},s.a.createElement(V.a,null,s.a.createElement(w.a,{sm:"12",md:"7",lg:"4"},s.a.createElement("div",null,this.state.show?this.renderShow():null)),s.a.createElement(w.a,{sm:"12",md:"7",lg:"4"},s.a.createElement("div",{className:M.a.seasons},this.state.show?s.a.createElement(z,{id:this.state.show.id}):null)),s.a.createElement(w.a,{sm:"12",md:"7",lg:"4"},s.a.createElement("div",{className:M.a.cast},this.state.show?s.a.createElement(L,{id:this.state.show.id}):null)),console.log(this.state.show))))}}]),a}(s.a.Component),q=a(19),H=a.n(q),J=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderSeasons=function(){return s.a.createElement("div",{className:H.a.wrap},e.state.seasons.map((function(t){return s.a.createElement("div",{className:H.a.card},s.a.createElement("img",{src:t.image?t.image.medium:"no image"}),s.a.createElement("h4",null,"Seasons: ",t.number),s.a.createElement(u.b,{to:"".concat("/info-show/",e.props.match.params.id,"/").concat(t.id,"/episodes")},s.a.createElement("h3",{className:H.a.episodes},"Episodes")))})))},e.state={seasons:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("https://api.tvmaze.com/shows/",this.props.match.params.id,"/seasons")).then((function(t){return e.setState({seasons:t})}))}},{key:"render",value:function(){return s.a.createElement("div",null,this.state.seasons?this.renderSeasons():null)}}]),a}(s.a.Component),P=a(20),R=a.n(P),Z=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).renderEpisodes=function(){return s.a.createElement("div",{className:R.a.wrap},e.state.episodes.map((function(e){return s.a.createElement("div",{className:R.a.card},s.a.createElement("img",{src:e.image?e.image.medium:"no image"}),s.a.createElement("h2",null,e.number,". ",e.name))})))},e.state={episodes:null},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("https://api.tvmaze.com/seasons/",this.props.match.params.id,"/episodes")).then(console.log(this.props.match.params.id)).then((function(t){return e.setState({episodes:t})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:R.a.wrap},this.state.episodes?this.renderEpisodes():null)}}]),a}(s.a.Component),G=a(17),K=a.n(G),Q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).changeView=function(){e.setState({char:!e.state.char})},e.state={casts:[],char:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;_("".concat("https://api.tvmaze.com/shows/",this.props.match.params.id,"/cast")).then((function(t){return e.setState({casts:t})}))}},{key:"render",value:function(){var e=this;return this.state.char?s.a.createElement("div",null,s.a.createElement("div",null),s.a.createElement("div",{className:K.a.wrap},this.state.casts.map((function(t,a){return s.a.createElement("div",{onClick:e.changeView,className:K.a.card},s.a.createElement("img",{src:t.person.image?t.person.image.medium:"no"}),s.a.createElement("h3",null,t.person.name))})))):s.a.createElement("div",null,s.a.createElement("div",null),s.a.createElement("div",{className:K.a.wrap},this.state.casts.map((function(t,a){return s.a.createElement("div",{onClick:e.changeView,className:K.a.card},s.a.createElement("img",{src:t.character.image?t.character.image.medium:"no"}),s.a.createElement("h3",null,t.character.name),s.a.createElement("h5",null,"(",t.person.name,")"))}))))}}]),a}(s.a.Component),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.call(this)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(D,null),s.a.createElement("div",{className:N.a.wrap},s.a.createElement(x.c,null,s.a.createElement(x.a,{exact:!0,path:"/",component:O}),s.a.createElement(x.a,{exact:!0,path:"/info-show/:id",component:Y}),s.a.createElement(x.a,{exact:!0,path:"/info-show/:id/seasons",component:J}),s.a.createElement(x.a,{exact:!0,path:"/info-show/:id/:id/episodes",component:Z}),s.a.createElement(x.a,{exact:!0,path:"/info-show/:id/cast",component:Q}))))}}]),a}(s.a.Component);c.a.render(s.a.createElement(u.a,null,s.a.createElement(U,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.65bfc01b.chunk.js.map