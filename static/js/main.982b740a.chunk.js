(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1614:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(41),c=a.n(l),o=(a(335),a(24)),i=a(25),s=a(27),u=a(26),m=a(28),d=(a(336),a(20)),p=a(1630),h=a(300),E=a(1626),f=a(1615),g=a(1634),C=a(1625),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={quantity:"0",open:!1},a.changeQuantity=function(e){a.setState({quantity:e.target.innerText})},a.addCart=function(e){a.props.addToCart(e),setTimeout(function(){a.openModal()},590)},a.openModal=function(){a.setState(function(e){return{open:!e.open}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product,a=this.state.open;return r.a.createElement(p.a,{link:!0},r.a.createElement(h.a,{src:t.image,wrapped:!0,ui:!1}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Header,null,t.name),r.a.createElement(p.a.Meta,null,r.a.createElement("span",{className:"date"},"$",t.price)),r.a.createElement(p.a.Description,null,t.description)),r.a.createElement(E.a,{open:a,dimmer:"inverted",trigger:r.a.createElement(f.a,{onClick:function(){return e.openModal()}},"Show More")},r.a.createElement(E.a.Header,null,"Add to cart"),r.a.createElement(E.a.Content,{image:!0},r.a.createElement(h.a,{wrapped:!0,size:"medium",src:t.image}),r.a.createElement(E.a.Description,null,r.a.createElement(g.a,null,t.name," 20g"),r.a.createElement("p",null,t.description),r.a.createElement("p",null,"$",t.price),r.a.createElement(C.a,null,r.a.createElement(C.a.Button,{onClick:function(){return e.addCart(t)}},"Add to cart"))))))}}]),t}(r.a.Component),b=Object(d.b)(null,function(e){return{addToCart:function(t){e({type:"ADD_TO_CART",payload:t})}}})(y),v=a(1623);var w=Object(d.b)(function(e){return{categories:e.category}})(function(e){return r.a.createElement(v.a,null,r.a.createElement(g.a,{as:"h2",content:e.category,subheader:"All our strains are reputably sourced and licensed by the Bureau of Cannabis Control"}),r.a.createElement(p.a.Group,null,e.categories.filter(function(t){return t.category_name===e.category}).map(function(e){return e.products.map(function(e){return r.a.createElement(b,{key:e.id,product:e})})})))}),O=a(1627),k=a(1624),j=a(1632),S=a(1635),A=a(1622),N=a(46),D=a(134),I=a.n(D),T=a(135),F=a.n(T),x=a(1631),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",streetAddr:"",usState:"",telephone:"",password:"",confirmPass:""},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.dropDown=function(e){a.setState({usState:e.target.innerText})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=I.a.definitions.address,a=F.a.map(t.state,function(e,a){return{key:t.state_abbr[a],text:e,value:t.state_abbr[a]}});return r.a.createElement(r.a.Fragment,null,this.props.user?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{error:!1,success:!1},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"firstName",placeholder:"First Name"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"lastName",placeholder:"Last Name"})),r.a.createElement(C.a.Input,{onChange:function(t){return e.onChange(t)},name:"email",label:"Email",placeholder:"joe@schmoe.com"}),r.a.createElement(x.a,{success:!0,header:"Form Completed",content:"Welcome, please login with your email and password"}),r.a.createElement(x.a,{error:!0,header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Delivery Address"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"streetAddr",placeholder:"Street Address"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"State"),r.a.createElement(O.a,{onChange:function(t){return e.dropDown(t)},name:"usState",placeholder:"State",search:!0,selection:!0,options:a})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Contact Telephone"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"telephone",placeholder:"telephone"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"password",type:"password",placeholder:"password"}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"confirmPass",type:"password",placeholder:"confirm password"}))),r.a.createElement(f.a,{onClick:function(){return e.props.createNewCustomer(e.state)}},"Submit"))))}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.submitClicked=function(e){a.props.login(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password;return r.a.createElement(v.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"email"),r.a.createElement("input",{name:"email",onChange:function(t){return e.onChange(t)},value:a,placeholder:"email",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"password"),r.a.createElement("input",{name:"password",onChange:function(t){return e.onChange(t)},value:n,placeholder:"password",type:"password"}))),r.a.createElement(f.a,{onClick:function(){return e.submitClicked(e.state)}},"Submit")))}}]),t}(r.a.Component),R=a(1628),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.total=function(){return a.props.cart.products.length>=1?a.props.cart.products.map(function(e){return parseFloat(e.price)}).reduce(function(e,t){return e+t}):"0"},a.quantity=function(e){var t=0;return a.props.cart.products.forEach(function(a){return a.id===e?t++:null}),t},a.uniq=function(){return Array.from(new Set(a.props.cart.products.map(function(e){return e.id}))).map(function(e){return a.props.cart.products.find(function(t){return t.id===e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,null,r.a.createElement(g.a,null,"Your Cart"),r.a.createElement(R.a,{singleLine:!0},r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Row,null,r.a.createElement(R.a.HeaderCell,null,"Product"),r.a.createElement(R.a.HeaderCell,null,"Price"),r.a.createElement(R.a.HeaderCell,null,"Quantity"),r.a.createElement(R.a.HeaderCell,null,"Subtotal"))),r.a.createElement(R.a.Body,null,this.props.cart.products?this.uniq().map(function(t){return r.a.createElement(R.a.Row,{key:t.id},r.a.createElement(R.a.Cell,null,t.name),r.a.createElement(R.a.Cell,null,"$",Number(t.price).toFixed(2)),r.a.createElement(R.a.Cell,null,e.quantity(t.id)),r.a.createElement(R.a.Cell,null,Number(t.price*e.quantity(t.id)).toFixed(2)))}):null)),r.a.createElement(g.a,{floated:"right"},"Total $",this.props.cart.products?Number(this.total()).toFixed(2):null," "),r.a.createElement(f.a,{content:"Secure Checkout",onClick:this.props.cart.products.length>=1?function(){return e.props.secureCheckout(e.props.cart.products,Number(e.total()).toFixed(2))}:null,icon:"lock"}),r.a.createElement(f.a,{content:"Save Order",onClick:this.props.cart.products.length>=1?function(){return e.props.saveOrder(e.props.cart.products)}:null,icon:"save"}))}}]),t}(r.a.Component),H=Object(d.b)(function(e){return{cart:e.cart}})(B);var L=function(e){console.log(e);var t=["Order created at ".concat(e.order.purchases.created_at),"Order No:".concat(e.order.purchases.id),"Total:$".concat(e.order.total)];return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(x.a,{info:!0},r.a.createElement(x.a.Header,null,e.order.purchases.created_at?"Order succesful":"Something went wrong"),r.a.createElement(x.a.List,{items:e.order.purchases.created_at?t:e.order.purchases.name}),r.a.createElement(f.a,{onClick:function(){return window.print()}},"Print"),r.a.createElement(f.a,{onClick:function(){return e.clearOrderState()}},"Close"))))},M=a(48),J=a(44),W=a(23),q=Object(d.b)(null,function(e){return{allTodaysSales:function(t){e({type:"DAILY_SALES",payload:t})}}})(function(e){var t=function(t){var a=[{name:"0",sph:0},{name:"1",sph:0},{name:"2",sph:0},{name:"3",sph:0},{name:"4",sph:0},{name:"5",sph:0},{name:"6",sph:0},{name:"7",sph:0},{name:"8",sph:0},{name:"9",sph:0},{name:"10",sph:0},{name:"11",sph:0},{name:"12",sph:0},{name:"13",sph:0},{name:"14",sph:0},{name:"15",sph:0},{name:"16",sph:0},{name:"17",sph:0},{name:"18",sph:0},{name:"19",sph:0},{name:"20",sph:0},{name:"21",sph:0},{name:"22",sph:0},{name:"23",sph:0}],n=[],r={};e.allTodaysSales(t),t.forEach(function(e){var t;n.push((t=e.created_at,new Date(t).getHours()))});for(var l=0;l<n.length;l++){var c=n[l];r[c]=r[c]?r[c]+1:1}return a.forEach(function(e){r[e.name]&&(e.sph=r[e.name])}),a};return r.a.createElement(W.b,{width:700,height:500,data:function(e){var a=(new Date).toDateString(),n=[];return e.forEach(function(e){var t;t=e.created_at,new Date(t).toDateString()===a&&n.push(Object(J.a)({},e))}),t(n)}(e.orders),margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(W.c,{strokeDasharray:"3 3"}),r.a.createElement(W.k,{dataKey:"name"}),r.a.createElement(W.l,{yAxisId:"left",orientation:"left",stroke:"#8884d8"}),r.a.createElement(W.j,{content:r.a.createElement(function(e){e.orders;var t=e.payload;return e.label,e.active?r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",{className:"label"},t[0].value," Sale/s"),r.a.createElement("p",{className:"intro"}),r.a.createElement("p",{className:"desc"})):null},{orders:e.orders})}),r.a.createElement(W.e,null),r.a.createElement(W.a,{yAxisId:"left",dataKey:"sph",fill:"#8884d8"}))}),G=a(97),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,lineDataObject:[]},a.checkTotal=function(){a.setState({lineDataObject:a.props.dailyData})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=["Blue","Teal","red","orange","olive","green","purple"],t=Math.PI/180,a=this.state.lineDataObject;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:this.checkTotal}," Check total "),r.a.createElement("div",null,r.a.createElement(G.a,{as:"a",color:"purple"},"2019"),r.a.createElement(G.a,{as:"a",color:"blue"},"Amsterdams Finest"),r.a.createElement(G.a,{as:"a",color:"green"},"New Strains"),r.a.createElement(G.a,{as:"a",color:"olive"},"Homegrown"),r.a.createElement(G.a,{as:"a",color:"teal"},"Brooklyn Baby"),r.a.createElement(G.a,{as:"a",color:"red"},"Cali Cup"),r.a.createElement(G.a,{as:"a",color:"orange"},"Canna Cup")),r.a.createElement(W.i,{width:400,height:400},r.a.createElement(W.h,{data:a,cx:200,cy:200,labelLine:!1,label:function(e){var a=e.cx,n=e.cy,l=e.midAngle,c=e.innerRadius,o=e.outerRadius,i=e.percent,s=(e.index,c+.5*(o-c)),u=a+s*Math.cos(-l*t),m=n+s*Math.sin(-l*t);return r.a.createElement("text",{x:u,y:m,fill:"white",textAnchor:u>a?"start":"end",dominantBaseline:"central"},"".concat((100*i).toFixed(0),"%"))},outerRadius:180,fill:"#8884d8",dataKey:"total"},a.map(function(t,a){return r.a.createElement(W.d,{key:"cell-".concat(a),fill:e[a%e.length]})}),r.a.createElement(W.j,null))))}}]),t}(r.a.Component),Y=Object(d.b)(function(e){return{dailyData:e.dailyData}})(z),$=a(302),K=[{name:"Amsterdams Finest",total:0},{name:"Brooklyn baby",total:0},{name:"Cali Cup",total:0},{name:"Canna Cup",total:0},{name:"Homegrown small-batch",total:0},{name:"New Strains",total:0},{name:"2019",total:0}],Q=Object(d.b)(function(e){return{categories:e.category,orders:e.latestOrders,daysOrders:e.daysOrders}},function(e){return{saveDailyData:function(t){e({type:"SAVE_DAILY_DATA",payload:t})}}})(function(e){return r.a.createElement("div",null," ",function(e,t){var a={};e.forEach(function(e){a[e.category_name]={products:[]}}),e.forEach(function(e){e.products.forEach(function(t){a[e.category_name].products.push(t.id)})});var n=Object.entries(a),r={};t.forEach(function(e){e.purchases.forEach(function(e){for(var t=function(){var t=l[a],n=(c=Object($.a)(t,2))[0];c[1].products.forEach(function(t){t===e.product_id&&(r[n]=r[n]?r[n]+1:1)})},a=0,l=n;a<l.length;a++){var c;t()}})}),K.forEach(function(e){r[e.name]&&(e.total=r[e.name])})}(e.categories,e.daysOrders),e.saveDailyData(K),r.a.createElement(W.g,{width:600,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(W.c,{strokeDasharray:"3 3"}),r.a.createElement(W.k,{dataKey:"name"}),r.a.createElement(W.l,null),r.a.createElement(W.j,null),r.a.createElement(W.e,null),r.a.createElement(W.f,{type:"monotone",dataKey:"total",stroke:"#8884d8",activeDot:{r:8}})))}),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:"",streetAddr:"",usState:"",telephone:"",password:"",confirmPass:"",employee:!0,admin:!1},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.dropDown=function(e){a.setState({usState:e.target.innerText})},a.admin=function(e){console.log(e.target.innerText),a.setState({admin:e.target.innerText})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=I.a.definitions.address,a=F.a.map(t.state,function(e,a){return{key:t.state_abbr[a],text:e,value:t.state_abbr[a]}});return r.a.createElement(r.a.Fragment,null,this.props.user?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{error:!1,success:!1},r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"firstName",placeholder:"First Name"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"lastName",placeholder:"Last Name"})),r.a.createElement(C.a.Input,{onChange:function(t){return e.onChange(t)},name:"email",label:"Email",placeholder:"joe@schmoe.com"}),r.a.createElement(x.a,{success:!0,header:"Form Completed",content:"Welcome, please login with your email and password"}),r.a.createElement(x.a,{error:!0,header:"Action Forbidden",content:"You can only sign up for an account once with a given e-mail address."})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Delivery Address"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"streetAddr",placeholder:"Street Address"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"State"),r.a.createElement(O.a,{onChange:function(t){return e.dropDown(t)},name:"usState",placeholder:"State",search:!0,selection:!0,options:a})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Contact Telephone"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"telephone",placeholder:"telephone"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"password",type:"password",placeholder:"password"}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{onChange:function(t){return e.onChange(t)},name:"confirmPass",type:"password",placeholder:"confirm password"}))),r.a.createElement("label",null,"Admin rights"),r.a.createElement(O.a,{name:"admin",onChange:function(t){return e.admin(t)},placeholder:"Admin",search:!0,selection:!0,options:[{key:"Yes",text:"true",value:"true"},{key:"No",text:"false",value:"false"}]}),r.a.createElement(f.a,{onClick:function(){return e.props.createNewEmployee(e.state)}},"Submit"))))}}]),t}(r.a.Component),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",quantity:"",image:"",price:"",description:"",category:""},a.onChange=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.addNewProduct=function(e){fetch("https://secret-savannah-72600.herokuapp.com/api/v1/products",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.myJWT)},body:JSON.stringify({name:e.name,quantity:e.quantity,image:e.image,price:e.price,description:e.description,category:e.category})}).then(function(e){return e.json()}).then(function(e){a.props.addProducts(e)})},a.category=function(e){a.setState({category:e.target.innerText})},a.submitClicked=function(e){a.addNewProduct(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.quantity,l=t.image,c=t.price,o=t.description;return r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{name:"name",onChange:function(t){return e.onChange(t)},value:a,placeholder:"name",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Quantity"),r.a.createElement("input",{name:"quantity",onChange:function(t){return e.onChange(t)},value:n,placeholder:"quantity",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Image Url"),r.a.createElement("input",{name:"image",onChange:function(t){return e.onChange(t)},value:l,placeholder:"image",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Price"),r.a.createElement("input",{name:"price",onChange:function(t){return e.onChange(t)},value:c,placeholder:"price",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Description"),r.a.createElement("input",{name:"description",onChange:function(t){return e.onChange(t)},value:o,placeholder:"description",type:"text"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Category"),r.a.createElement(O.a,{name:"admin",onChange:function(t){return e.category(t)},placeholder:"Category",search:!0,selection:!0,options:[{key:"AF",text:"Amsterdams Finest",value:"Amsterdams Finest"},{key:"BB",text:"Brooklyn baby",value:"Brooklyn baby"},{key:"CLC",text:"Cali Cup",value:"Cali Cup"},{key:"CC",text:"Canna Cup",value:"Canna Cup"},{key:"HG",text:"Homegrown small-batch",value:"Homegrown small-batch"},{key:"NS",text:"New Strains",value:"New Strains"},{key:"TY",text:"2019",value:"2019"}]}))),r.a.createElement(f.a,{onClick:function(){return e.submitClicked(e.state)}},"Submit"))}}]),t}(r.a.Component),X=Object(d.b)(null,function(e){return{addProducts:function(t){e({type:"FIRST_FETCH",payload:t})}}})(V),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={activeItem:"Daily Metrics",latestOrders:[]},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.dateConversion=function(e){return new Date(e).toString()},a.orders=function(){var e=a.props.latestOrders;return e.slice(e.length-6,e.length).map(function(e){return r.a.createElement(R.a.Row,null,r.a.createElement(R.a.Cell,{collapsing:!0},r.a.createElement(M.a,{name:"barcode"}),"Order ID:",e.id),r.a.createElement(R.a.Cell,null,"Total Items:",e.purchases.length," Price :$",e.total),r.a.createElement(R.a.Cell,{collapsing:!0,textAlign:"right"},a.dateConversion(e.created_at)))})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://secret-savannah-72600.herokuapp.com/orders",{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.myJWT)}}).then(function(e){return e.json()}).then(function(t){return e.props.orderData(t)})}},{key:"render",value:function(){var e=this.state.activeItem,t=this.props,a=t.latestOrders,n=t.createNewEmployee,l=t.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,null,r.a.createElement(j.a.Item,{name:"Daily Metrics",active:"Daily Metrics"===e,onClick:this.handleItemClick},"Daily Metrics"),r.a.createElement(j.a.Item,{name:"New Product",active:"New Product"===e,onClick:this.handleItemClick},"New Product"),r.a.createElement(j.a.Item,{name:"Edit Product",active:"Edit Product"===e,onClick:this.handleItemClick},"Edit Product"),r.a.createElement(j.a.Item,{name:"New Sales Feature",active:"New Sales Feature"===e,onClick:this.handleItemClick},"New Sales Feature"),l.admin?r.a.createElement(j.a.Item,{name:"Add Employee",active:"Add Employee"===e,onClick:this.handleItemClick},"Add/Remove Employee"):null,r.a.createElement(j.a.Item,null,r.a.createElement(A.a,{icon:"search",placeholder:"Search Order By ID..."}))),"New Product"===e?r.a.createElement(X,null):null,"Add Employee"===e?r.a.createElement(U,{createNewEmployee:n}):null,"Daily Metrics"===e?r.a.createElement(S.a,{padded:!0},r.a.createElement(S.a.Row,{columns:2},r.a.createElement(S.a.Column,null,r.a.createElement(g.a,null,"Sales by Category in the last 24 hours"),r.a.createElement(Q,null)),r.a.createElement(S.a.Column,null,r.a.createElement(g.a,null,"Most Popular Categories in last 24 hours"),r.a.createElement(Y,null))),r.a.createElement(S.a.Row,{columns:2},r.a.createElement(S.a.Column,null,r.a.createElement(g.a,null,"Sales Per Hour today"),r.a.createElement(q,{orders:a})),r.a.createElement(S.a.Column,null,r.a.createElement(R.a,{celled:!0,striped:!0},r.a.createElement(R.a.Header,null,r.a.createElement(R.a.Row,null,r.a.createElement(R.a.HeaderCell,{colSpan:"3"},"Latest orders"))),r.a.createElement(R.a.Body,null,this.orders()))))):null)}}]),t}(r.a.Component),ee=Object(d.b)(function(e){return{latestOrders:e.latestOrders}},function(e){return{orderData:function(t){e({type:"ORDER_DATA",payload:t})}}})(Z),te=a(295),ae=a.n(te),ne=a(296),re=a.n(ne),le=a(297),ce=a.n(le),oe=a(298),ie=a.n(oe),se=a(299),ue=a.n(se),me=Object(d.b)(function(e){return{categories:e.category}})(function(e){console.log(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a.Group,null," ",e.categories.map(function(t){return t.products.filter(function(t){return t.name.toLowerCase().includes(e.searchTerm.toLowerCase())})}).flat().map(function(e){return r.a.createElement(b,{key:e.id,product:e})})))}),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={activeItem:"home",searchTerm:""},a.handleItemClick=function(e,t){var n=t.name;a.setState({activeItem:n,cat:e.target.getAttribute("cat")})},a.searchItem=function(e){console.log(e.target.value),a.setState({searchTerm:e.target.value,activeItem:"search"})},a.renderCategories=function(){return a.props.categories.map(function(e){return r.a.createElement(O.a.Item,{name:"products",cat:e.category_name,onClick:a.handleItemClick},e.category_name)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.activeItem,n=t.cat,l=t.searchTerm,c=this.props,o=c.secureCheckout,i=c.saveOrder,s=c.createNewEmployee;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement(j.a,{inverted:!0},r.a.createElement(j.a.Item,{name:"home",active:"home"===a,onClick:this.handleItemClick},"Little Dutch Coffee"),r.a.createElement(O.a,{item:!0,text:"Shop"},r.a.createElement(O.a.Menu,null,this.renderCategories())),r.a.createElement(j.a.Menu,{position:"right"},this.props.user&&(this.props.user.admin||this.props.user.employee)?r.a.createElement(j.a.Item,{name:"admin",active:"admin"===a,onClick:this.handleItemClick},"Staff Menu"):null,this.props.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Item,{name:"user",active:"user"===a,onClick:this.handleItemClick},this.props.user.first_name+" "+this.props.user.last_name),r.a.createElement(j.a.Item,{name:"logout",active:"logout"===a,onClick:this.props.logout},"Logout"),r.a.createElement(j.a.Item,{name:"cart",active:"cart"===a,onClick:this.handleItemClick},"Cart")):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Item,{name:"signup",active:"signup"===a,onClick:this.handleItemClick},"Sign Up"),r.a.createElement(j.a.Item,{name:"login",active:"login"===a,onClick:this.handleItemClick},"Login"),r.a.createElement(j.a.Item,{name:"cart",active:"cart"===a,onClick:this.handleItemClick},"Cart")),r.a.createElement(j.a.Item,{name:"help",active:"help"===a,onClick:this.handleItemClick},"Help")))),r.a.createElement("div",{className:"body"},r.a.createElement(S.a,null,r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:4},r.a.createElement(h.a,{size:"medium",src:ae.a,alt:"the little dutch coffee shop"}),r.a.createElement("div",{className:"padding"},"Online Dispensary")),r.a.createElement(S.a.Column,{width:11},r.a.createElement(A.a,{onChange:function(t){return e.searchItem(t)},className:"icon",placeholder:"Search..."}),r.a.createElement(h.a,{src:ue.a,size:"massive"})))),"search"===a?r.a.createElement(me,{searchTerm:l}):null,"home"===a?r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:4},r.a.createElement(h.a,{src:ce.a,alt:"CBD distributor"})),r.a.createElement(S.a.Column,{width:8},r.a.createElement(h.a,{src:re.a}),r.a.createElement("br",null),r.a.createElement(k.a,{id:"7Ivw0MACXWs",placeholder:ie.a,source:"youtube"}))),r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:3}),r.a.createElement(S.a.Column,{width:10})))):null,"products"===a?r.a.createElement(w,{category:n}):null,"signup"===a?r.a.createElement(_,{user:this.props.user,createNewCustomer:this.props.createNewCustomer}):null,"login"===a?this.props.user?r.a.createElement("div",null,"Welcome ",this.props.user.first_name):r.a.createElement(P,{login:this.props.login}):null,"cart"===a?this.props.order?r.a.createElement(L,{clearOrderState:this.props.clearOrderState,order:this.props.order}):r.a.createElement(H,{saveOrder:i,secureCheckout:o}):null,"admin"===a&&this.props.user?r.a.createElement(ee,{user:this.props.user,createNewEmployee:s}):null))}}]),t}(r.a.Component),pe=Object(d.b)(function(e){return{categories:e.category}})(de),he=a(1636),Ee=a(1629),fe=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(he.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(v.a,null,r.a.createElement(S.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(S.a.Row,null,r.a.createElement(S.a.Column,{width:3},r.a.createElement(g.a,{inverted:!0,as:"h4",content:"About"}),r.a.createElement(Ee.a,{link:!0,inverted:!0},r.a.createElement(Ee.a.Item,{as:"a"},"Sitemap"),r.a.createElement(Ee.a.Item,{as:"a"},"Contact Us"),r.a.createElement(Ee.a.Item,{as:"a"},"Religious Ceremonies"),r.a.createElement(Ee.a.Item,{as:"a"},"Gazebo Plans"))),r.a.createElement(S.a.Column,{width:3},r.a.createElement(g.a,{inverted:!0,as:"h4",content:"Services"}),r.a.createElement(Ee.a,{link:!0,inverted:!0},r.a.createElement(Ee.a.Item,{as:"a"},"Banana Pre-Order"),r.a.createElement(Ee.a.Item,{as:"a"},"DNA FAQ"),r.a.createElement(Ee.a.Item,{as:"a"},"How To Access"),r.a.createElement(Ee.a.Item,{as:"a"},"Favorite X-Men"))),r.a.createElement(S.a.Column,{width:7},r.a.createElement(g.a,{as:"h4",inverted:!0},"Footer Header"),r.a.createElement("p",null,"Extra space for a call to action inside the footer that could help re-engage users.")))))))},ge=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userData:null},a.createNewEmployee=function(e){e.password===e.confirmPass?fetch("https://secret-savannah-72600.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({first_name:e.firstName,email:e.email,last_name:e.lastName,password:e.password,street_address:e.streetAddr,telephone:e.telephone,state:e.usState,admin:e.admin,employee:e.employee})}).then(function(e){if(e.ok)return e.json().then(function(e){alert("New Employee Created")});var t=new Error(e);t.message=e.statusText,t.name=e.status,alert(t)}):alert("Confirm password does not match!")},a.createNewCustomer=function(e){e.password===e.confirmPass?fetch("https://secret-savannah-72600.herokuapp.com/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({first_name:e.firstName,email:e.email,last_name:e.lastName,password:e.password,street_address:e.streetAddr,telephone:e.telephone,state:e.usState})}).then(function(e){if(e.ok)return e.json().then(function(e){localStorage.setItem("myJWT",e.jwt),a.setState({userData:e.user})});var t=new Error(e);t.message=e.statusText,t.name=e.status,alert(t)}):alert("Confirm password does not match!")},a.logout=function(){a.setState({userData:null}),localStorage.clear()},a.loginSubmit=function(e){fetch("https://secret-savannah-72600.herokuapp.com/api/v1/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then(function(e){if(e.ok)return e.json().then(function(e){localStorage.setItem("myJWT",e.jwt),a.props.loadCart(e.auth.cart),a.setState({userData:e.auth})});var t=new Error(e);t.message=e.statusText,t.name=e.status,alert(t)})},a.saveOrder=function(e){fetch("https://secret-savannah-72600.herokuapp.com/api/v1/updateCart",{method:"PATCH",headers:{Authorization:"Bearer ".concat(localStorage.myJWT),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({user:a.state.userData,order:e})})},a.secureCheckout=function(e,t){a.state.userData?fetch("https://secret-savannah-72600.herokuapp.com/orders",{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.myJWT),"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({order:e,total:t,user:a.state.userData})}).then(function(e){return e.json()}).then(function(e){return a.setState({order:{purchases:e,total:t}})},a.props.clearCart()):alert("Please sign up or login to make an order.")},a.clearOrderState=function(){a.setState({order:null})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://secret-savannah-72600.herokuapp.com/category").then(function(e){return e.json()}).then(function(t){e.props.addProducts(t)}),localStorage.myJWT&&fetch("https://secret-savannah-72600.herokuapp.com/api/v1/profile",{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.myJWT)}}).then(function(e){return e.ok||console.log("not logged in",e),e.json()}).then(function(t){e.props.loadCart(t.user.cart),e.setState({userData:t.user})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App Site"},r.a.createElement("div",{className:"Site-content"},r.a.createElement("div",{className:"App-header"}),r.a.createElement("div",{className:"main"},r.a.createElement(pe,{logout:this.logout,user:this.state.userData,login:this.loginSubmit,secureCheckout:this.secureCheckout,order:this.state.order,clearOrderState:this.clearOrderState,saveOrder:this.saveOrder,createNewCustomer:this.createNewCustomer,createNewEmployee:this.createNewEmployee}))),r.a.createElement(fe,null))}}]),t}(r.a.Component),Ce=Object(d.b)(null,function(e){return{loadCart:function(t){e({type:"LOAD_CART",payload:t})},addProducts:function(t){e({type:"FIRST_FETCH",payload:t})},clearCart:function(){e({type:"CLEAR_CART",payload:null})}}})(ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(301),be={category:[],latestOrders:[],daysOrders:[],dailyData:[],cart:{products:[]}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_DAILY_DATA":return Object(J.a)({},e,{dailyData:t.payload});case"DAILY_SALES":return Object(J.a)({},e,{daysOrders:t.payload});case"ORDER_DATA":return Object(J.a)({},e,{latestOrders:t.payload});case"CLEAR_CART":return Object(J.a)({},e,{cart:{products:[]}});case"FIRST_FETCH":return Object(J.a)({},e,{category:t.payload});case"LOAD_CART":return Object(J.a)({},e,{cart:t.payload});case"ADD_TO_CART":return Object(J.a)({},e,{cart:Object(J.a)({},e.cart,{products:[].concat(Object(ye.a)(e.cart.products),[t.payload])})});default:return e}},we=a(130),Oe=Object(we.b)(ve);c.a.render(r.a.createElement(d.a,{store:Oe},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},295:function(e,t,a){e.exports=a.p+"static/media/dutch.3315e405.png"},296:function(e,t,a){e.exports=a.p+"static/media/sale.40ebdacb.png"},297:function(e,t,a){e.exports=a.p+"static/media/CBD.3bc40b83.png"},298:function(e,t,a){e.exports=a.p+"static/media/video.b452dc84.png"},299:function(e,t,a){e.exports=a.p+"static/media/bush.adff97c7.png"},330:function(e,t,a){e.exports=a(1614)},335:function(e,t,a){},336:function(e,t,a){}},[[330,1,2]]]);
//# sourceMappingURL=main.982b740a.chunk.js.map