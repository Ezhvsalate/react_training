(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3i-XY",close:"Drawer_close__s4EKF",active:"Drawer_active__2KEkH"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__27Mo1",success:"FinishedQuiz_success__1JIed",error:"FinishedQuiz_error__1NK2Y"}},,function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__1L-Zp",open:"MenuToggle_open__2OCEZ"}},,,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__2wya1",QuizWrapper:"Quiz_QuizWrapper__191J4"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__3VjB-",Question:"ActiveQuiz_Question__pSzK-"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__BfScg",success:"AnswerItem_success__33WEN",error:"AnswerItem_error__wq5cF"}},function(e,t,n){e.exports={Button:"Button_Button__1hbkP",success:"Button_success__vUGQE",error:"Button_error__15lok",primary:"Button_primary__31y4A"}},function(e,t,n){e.exports={Auth:"Auth_Auth__38lIP",AuthForm:"Auth_AuthForm__2w9p_"}},function(e,t,n){e.exports={Input:"Input_Input__2GEbV",invalid:"Input_invalid__1tSLi"}},,,,,function(e,t,n){e.exports={Layout:"Layout_Layout__38ghg"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3wxm3"}},,,function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2CRBX"}},function(e,t,n){e.exports={QuizList:"QuizList_QuizList__1ru--"}},,function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__24ZAX"}},function(e,t,n){e.exports={Select:"Select_Select__11aP5"}},function(e,t,n){e.exports=n(50)},,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(30),s=n.n(i),o=(n(45),n(3)),l=n(4),u=n(6),c=n(5),m=n(31),d=n.n(m),h=n(18),v=n.n(h),p=function(e){var t=[v.a.MenuToggle,"fa",e.isOpen?"fa-times "+v.a.open:"fa-bars"];return r.a.createElement("i",{onClick:e.onToggle,className:t.join(" ")})},f=n(15),_=n.n(f),g=n(32),E=n.n(g),w=function(e){return r.a.createElement("div",{className:E.a.Backdrop,onClick:e.onClick})},b=n(9),C=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1},{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}],y=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).clickHandler=function(){e.props.onClose()},e}return Object(l.a)(n,[{key:"renderLinks",value:function(){var e=this;return C.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(b.c,{to:t.to,exact:t.exact,activeClassName:_.a.active,onClick:e.clickHandler},t.label))}))}},{key:"render",value:function(){var e=[_.a.Drawer,this.props.isOpen?null:_.a.close];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks())),this.props.isOpen?r.a.createElement(w,{onClick:this.props.onClose}):null)}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.Layout},r.a.createElement(y,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),r.a.createElement(p,{isOpen:this.state.menu,onToggle:this.toggleMenuHandler}),r.a.createElement("main",null,this.props.children))}}]),n}(a.Component),z=n(14),Q=n(21),A=n.n(Q),j=n(22),O=n.n(j),x=n(35),q=n.n(x),S=n(23),F=n.n(S),H=function(e){var t=[F.a.AnswerItem];return e.state&&t.push(F.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},I=function(e){return console.log(e),r.a.createElement("ul",{className:q.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(H,{onAnswerClick:e.onAnswerClick,key:n,answer:t,state:e.state?e.state[t.id]:null})})))},N=function(e){return r.a.createElement("div",{className:O.a.ActiveQuiz},r.a.createElement("p",{className:O.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),r.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(I,{answers:e.answers,onAnswerClick:e.onAnswerClick,state:e.state}))},L=n(16),M=n.n(L),B=n(24),V=n.n(B),D=function(e){var t=[V.a.Button,V.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},T=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:M.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","success"===e.results[t.id]?"fa-check "+M.a.success:"fa-times "+M.a.error];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1),".\xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e: ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(D,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(b.b,{to:"/"},r.a.createElement(D,{type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},W=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[{id:1,question:"\u0427\u0435 \u043a\u0430\u0432\u043e, \u0435\u043f\u0442?",rightAnswerId:3,answers:[{text:"\u041d\u0435, \u043d\u0438\u0447\u043e",id:1},{text:"\u041e\u0442\u0432\u0430\u043b\u0438",id:2},{text:"\u0412\u0441\u0435 \u043e\u0433\u043e\u043d\u044c",id:3},{text:"\u0412\u0441\u0435, \u043f\u043e\u043a\u0430",id:4}]},{id:2,question:"\u041a\u0442\u043e \u0447\u0430\u0432\u043e, \u0435\u043f\u0442?",rightAnswerId:1,answers:[{text:"\u042f \u0445\u0437",id:1},{text:"\u0422\u044b \u0434\u043e\u0441\u0442\u0430\u043b",id:2},{text:"\u041e\u0439 \u0432\u0441\u0435",id:3},{text:"\u041d\u0443 \u0443\u0440\u0430",id:4}]}]},e.onAnswerClickHandler=function(t){if(console.log(t),e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],r=e.state.results;if(a.rightAnswerId===t){r[a.id]||(r[a.id]="success"),e.setState({answerState:Object(z.a)({},t,"success"),results:r});var i=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(i)}),1e3)}else r[a.id]="error",e.setState({answerState:Object(z.a)({},t,"error"),results:r})},e.retryHandler=function(){e.setState({results:{},isFinished:!1,activeQuestion:0,answerState:null})},e}return Object(l.a)(n,[{key:"isQuizFinished",value:function(){return!(this.state.activeQuestion+1<this.state.quiz.length)}},{key:"componentDidMount",value:function(){console.log("Quiz ID ="+this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",{className:A.a.Quiz},r.a.createElement("div",{className:A.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.state.isFinished?r.a.createElement(T,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):r.a.createElement(N,{question:this.state.quiz[this.state.activeQuestion].question,answers:this.state.quiz[this.state.activeQuestion].answers,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),n}(a.Component),J=n(36),K=n.n(J),P=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"renderQuizes",value:function(){return[1,2,3].map((function(e,t){return r.a.createElement("li",null,r.a.createElement(b.c,{to:"/quiz/"+e},"\u0422\u0435\u0441\u0442 ",e))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:K.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),r.a.createElement("ul",null,this.renderQuizes())))}}]),n}(a.Component),R=n(10),X=n(25),Z=n.n(X),G=n(26),Y=n.n(G);function U(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var $=function(e){var t=e.type||"text",n=[Y.a.Input],a="".concat(t,"-").concat(Math.random());return U(e)&&n.push(Y.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{id:a,type:t,value:e.value,onChange:e.onChange}),U(e)?r.a.createElement("span",null,e.errorMessage||"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e"):null)},ee=n(37),te=n.n(ee),ne=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=function(){},e.registerHandler=function(){},e.submitHandler=function(){event.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(R.a)({},e.state.formControls),r=Object(R.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validateControl(r.value,r.validation),a[n]=r;var i=!0;Object.keys(a).forEach((function(e){i=i&&a[e].valid})),e.setState({formControls:a,isFormValid:i})},e}return Object(l.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=te.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement($,{key:t+n,type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,errorMessage:a.errorMessage,shouldValidate:!!a.validation,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:Z.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{className:Z.a.AuthForm,onSubmit:this.submitHandler},this.renderInputs(),r.a.createElement(D,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(D,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))}}]),n}(a.Component),ae=n(38),re=n.n(ae);function ie(e,t){return Object(R.a)(Object(R.a)({},e),{},{validation:t,valid:!t,touched:!1,value:""})}function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=e.trim()&&n),n}function oe(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=t&&e[n].valid&&t);return t}var le=n(39),ue=n.n(le),ce=function(e){var t="".concat(e.label,"__").concat(Math.random());return r.a.createElement("div",{className:ue.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:"".concat(e.value,"__").concat(t)},e.text)}))))};function me(e){return ie({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0})}function de(){return{question:ie({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:me(1),option2:me(2),option3:me(3),option4:me(4)}}var he=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:de()},e.submitHandler=function(e){e.preventDefault()},e.addQuestionHandler=function(t){t.preventDefault();var n=e.state.quiz.concat(),a=n.length+1,r={question:e.state.formControls.question.value,id:a,rightAnswerId:e.state.rightAnswerId,answers:[{text:e.state.formControls.option1.value,id:e.state.formControls.option1.id},{text:e.state.formControls.option2.value,id:e.state.formControls.option2.id},{text:e.state.formControls.option3.value,id:e.state.formControls.option3.id},{text:e.state.formControls.option4.value,id:e.state.formControls.option4.id}]};n.push(r),e.setState({quiz:n,isFormValid:!1,rightAnswerId:1,formControls:de()})},e.createQuizHandler=function(t){t.preventDefault(),console.log(e.state.quiz)},e.changeHandler=function(t,n){var a=Object(R.a)({},e.state.formControls),r=Object(R.a)({},a[n]);r.touched=!0,r.value=t,r.valid=se(r.value,r.validation),a[n]=r,e.setState({formControls:a,isFormValid:oe(a)})},e.selectChangeHandler=function(t){console.log(t.target.value),e.setState({rightAnswerId:+t.target.value})},e}return Object(l.a)(n,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(r.a.Fragment,{key:"".concat(t,"__").concat(n)},r.a.createElement($,{key:"".concat(t,"__").concat(n),label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:re.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderInputs(),r.a.createElement(ce,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]}),r.a.createElement(D,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(D,{type:"success",onClick:this.createQuizHandler,disabled:0===!this.state.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),n}(a.Component),ve=n(11);var pe=function(){return r.a.createElement(k,null,r.a.createElement(ve.c,null,r.a.createElement(ve.a,{path:"/auth",component:ne}),r.a.createElement(ve.a,{path:"/quiz-creator",component:he}),r.a.createElement(ve.a,{path:"/quiz/:id",component:W}),r.a.createElement(ve.a,{path:"/",component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(pe,null)));s.a.render(fe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.de748386.chunk.js.map