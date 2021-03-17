(this.webpackJsonpbookmarksapp=this.webpackJsonpbookmarksapp||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(8),o=n.n(a),i=(n(14),n(9)),s=n(2),c=n(3),u=n(5),l=n(4),h=(n(15),n(16),n(0)),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={title:"",url:"",description:"",rating:1},r}return Object(c.a)(n,[{key:"titleChanged",value:function(t){this.setState({title:t})}},{key:"urlChanged",value:function(t){this.setState({url:t})}},{key:"descriptionChanged",value:function(t){this.setState({description:t})}},{key:"ratingChanged",value:function(t){this.setState({rating:t})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state,r={title:n.title,url:n.url,description:n.description,rating:n.rating},a={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json",Authorization:"Bearer $2a$10$4L5UN5kyZN14ysB7ldvUrugUVekYWm76uyPyskFVx6CiXYjtQ/GQ6"}};fetch("https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks",a).then((function(t){if(!t.ok)throw new Error("Something went wrong, please try later");return t.json()})).then((function(t){console.log(t),e.setState({title:"",url:"",description:"",rating:1}),e.props.handleAdd(r)})).catch((function(t){e.setState({error:t.message})}))}},{key:"render",value:function(){var t=this,e=this.state.error?Object(h.jsx)("div",{className:"error",children:this.state.error}):"";return Object(h.jsxs)("div",{className:"addbookmark",children:[Object(h.jsx)("h2",{children:"Add Bookmark"}),e,Object(h.jsxs)("form",{className:"addbookmark__form",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(h.jsx)("input",{type:"text",name:"title",id:"title",placeholder:"Title",value:this.state.title,onChange:function(e){return t.titleChanged(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"url",children:"Url:"}),Object(h.jsx)("input",{type:"text",name:"url",id:"url",placeholder:"url",value:this.state.url,onChange:function(e){return t.urlChanged(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(h.jsx)("textarea",{name:"description",id:"description",placeholder:"description",value:this.state.description,onChange:function(e){return t.descriptionChanged(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"rating",children:"Rating:"}),Object(h.jsx)("input",{type:"number",name:"rating",id:"rating",min:"1",max:"5",value:this.state.rating,onChange:function(e){return t.ratingChanged(e.target.value)}}),Object(h.jsxs)("div",{className:"addbookmark__buttons",children:[Object(h.jsx)("button",{onClick:function(e){return t.props.showForm(!1)},children:"Cancel"}),Object(h.jsx)("button",{type:"submit",children:"Save"})]})]})]})}}]),n}(r.Component),b=(n(18),n(7));n(19),n(20),n(21);function j(t){var e=[0,0,0,0,0].map((function(e,n){return n<t.value?Object(h.jsx)("span",{children:"\u2605"},n):Object(h.jsx)("span",{children:"\u2606"},n)}));return Object(h.jsx)("div",{className:"rating",children:e})}function m(t){return Object(h.jsxs)("div",{className:"bookmark",children:[Object(h.jsxs)("div",{className:"bookmark__row",children:[Object(h.jsx)("div",{className:"bookmark__title",children:Object(h.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:t.title})}),Object(h.jsx)(j,{value:t.rating})]}),Object(h.jsx)("div",{className:"bookmark__description",children:t.description})]})}var k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props.bookmarks.map((function(t,e){return Object(r.createElement)(m,Object(b.a)(Object(b.a)({},t),{},{key:e}))}));return Object(h.jsx)("div",{className:"bookmarkList",children:t})}}]),n}(r.Component);k.defaultProps={bookmarks:[]};var p=k,f=(n(22),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"fab",onClick:function(e){return t.props.showForm(!0)},children:"+"})}}]),n}(r.Component)),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"bookmarkApp",children:[Object(h.jsx)("h2",{children:"Bookmarks"}),Object(h.jsx)(p,{bookmarks:this.props.bookmarks}),Object(h.jsx)(f,{showForm:this.props.showForm})]})}}]),n}(r.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={bookmarks:[],showAddForm:!1},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks",{method:"GET",headers:{Authorization:"Bearer $2a$10$4L5UN5kyZN14ysB7ldvUrugUVekYWm76uyPyskFVx6CiXYjtQ/GQ6","Content-Type":"application/json"}}).then((function(t){if(!t.ok)throw new Error("Something went wrong, please try again later.");return t})).then((function(t){return t.json()})).then((function(e){t.setState({bookmarks:e,error:null})})).catch((function(e){t.setState({error:e.message})}))}},{key:"setShowAddForm",value:function(t){this.setState({showAddForm:t})}},{key:"addBookmark",value:function(t){this.setState({bookmarks:[].concat(Object(i.a)(this.state.bookmarks),[t]),showAddForm:!1})}},{key:"render",value:function(){var t=this,e=this.state.showAddForm?Object(h.jsx)(d,{showForm:function(e){return t.setShowAddForm(e)},handleAdd:function(e){return t.addBookmark(e)}}):Object(h.jsx)(O,{bookmarks:this.state.bookmarks,showForm:function(e){return t.setShowAddForm(e)}});return Object(h.jsx)("div",{className:"App",children:e})}}]),n}(r.Component);o.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e42696d6.chunk.js.map