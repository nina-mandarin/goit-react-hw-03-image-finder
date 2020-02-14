(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,a,t){e.exports={Overlay:"Modal_Overlay__2fmic",Modal:"Modal_Modal__1izMi"}},11:function(e,a,t){e.exports={Loader:"Spinner_Loader__1nA8u",LoaderText:"Spinner_LoaderText__1H2a1"}},24:function(e,a,t){e.exports={Layout:"Layout_Layout__TsHk2"}},25:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__a3LQs"}},26:function(e,a,t){e.exports={Button:"Button_Button__2YWUF"}},30:function(e,a,t){e.exports=t(76)},35:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(23),c=t.n(o),l=(t(35),t(13)),s=t(3),i=t(4),u=t(6),m=t(5),h=t(7),g=t(24),p=t.n(g),d=function(e){var a=e.children;return r.a.createElement("div",{className:p.a.Layout},a)},f=t(8),y=t.n(f),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.handleChange=function(e){t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSearch(t.state.value)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("header",{className:y.a.Searchbar},r.a.createElement("form",{className:y.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:y.a.SearchFormButton},r.a.createElement("span",{className:y.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:y.a.SearchFormInput,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,disabled:this.props.disabled})))}}]),a}(n.Component),v=t(25),_=t.n(v),S=t(9),I=t.n(S),E=function(e){var a=e.src,t=e.alt,n=e.onClick;return r.a.createElement("li",{className:I.a.ImageGalleryItem},r.a.createElement("img",{src:a,alt:t,className:I.a.ImageGalleryItemImage,onClick:n}))},L=function(e){var a=e.images,t=e.onClickImg;return r.a.createElement("ul",{className:_.a.ImageGallery},a.map((function(e){var a=e.id,n=e.webformatURL,o=e.largeImageURL;return r.a.createElement(E,{key:a,src:n,alt:"There is a picture",onClick:function(){return t(o)}})})))},k=t(26),w=t.n(k),O=function(e){var a=e.onLoadMore;return r.a.createElement("button",{className:w.a.Button,type:"button",onClick:a},"Load more")},j=t(10),C=t.n(j),M=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleEscape=function(e){"Escape"===e.code&&t.props.onClose()},t.closeModal=function(e){e.target===e.currentTarget&&t.props.onClose()},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){return r.a.createElement("div",{className:C.a.Overlay,onClick:this.closeModal},r.a.createElement("div",{className:C.a.Modal},r.a.createElement("img",{src:this.props.img,alt:""})))}}]),a}(n.Component),x=t(27),F=t.n(x),G=(t(57),t(11)),N=t.n(G),B=function(){return r.a.createElement("div",{className:N.a.Loader},r.a.createElement(F.a,{type:"Triangle",color:"#3f51b5",height:100,width:100}),r.a.createElement("span",{className:N.a.LoaderText},"Loading ..."))},Q=t(12),T=t.n(Q),U=t(28),A=t(29),D=t.n(A),H={getImages:function(){var e=Object(U.a)(T.a.mark((function e(a,t){var n,r,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("https://pixabay.com/api/","?key=").concat("14230040-8f4217119aa6e0fd5b0363ac7","&q=").concat(a,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12"),e.next=3,D.a.get(n);case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},P=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:[],searchQuery:"",page:1,totalPage:0,isLoading:!1,error:null,largeImage:""},t.fetchImages=function(){var e=t.state,a=e.searchQuery,n=e.page;t.setState({isLoading:!0}),H.getImages(a,n).then((function(e){var a=e.hits;return t.setState((function(n){return{images:[].concat(Object(l.a)(n.images),Object(l.a)(a)),page:n.page+1,totalPage:e.totalHits-12*t.state.page}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))},t.handleSearchQuery=function(e){t.setState({searchQuery:e,page:1,images:[],totalPage:0})},t.handleLoadMore=function(){t.fetchImages()},t.toggleModal=function(e){t.setState({largeImage:e||""})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchImages(),a.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.images,t=e.isLoading,n=e.error,o=e.totalPage,c=e.showModal,l=e.largeImage;return r.a.createElement(d,null,r.a.createElement(b,{onSearch:this.handleSearchQuery,disabled:c}),n&&r.a.createElement("p",null,"Whoops, something went wrong: ",n.message),a.length>0&&r.a.createElement(L,{images:a,onClickImg:this.toggleModal}),t&&r.a.createElement(B,null),o>0&&r.a.createElement(O,{onLoadMore:this.handleLoadMore}),l&&r.a.createElement(M,{img:l,onClose:this.toggleModal}))}}]),a}(n.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2LNRS",SearchForm:"Searchbar_SearchForm__3Yxnd",SearchFormButton:"Searchbar_SearchFormButton__2kUFG",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__38q2n",SearchFormInput:"Searchbar_SearchFormInput__1vOyG"}},9:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3jsGC",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2Qg1c"}}},[[30,1,2]]]);
//# sourceMappingURL=main.b1351fe7.chunk.js.map