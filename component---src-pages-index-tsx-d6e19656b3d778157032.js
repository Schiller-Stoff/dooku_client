(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[691],{4381:function(e,t,l){"use strict";var n=l(2122),r=l(1253),a=l(7294),o=l(5505),i=l(638),c=l(7055),s=l(1008),d=l(1291),m=l(8582),u=l(3935),p="undefined"==typeof window?a.useEffect:a.useLayoutEffect,b=a.forwardRef((function(e,t){var l=e.alignItems,i=void 0===l?"center":l,b=e.autoFocus,f=void 0!==b&&b,E=e.button,g=void 0!==E&&E,v=e.children,h=e.classes,Z=e.className,y=e.component,k=e.ContainerComponent,x=void 0===k?"li":k,w=e.ContainerProps,N=(w=void 0===w?{}:w).className,C=(0,r.Z)(w,["className"]),S=e.dense,z=void 0!==S&&S,F=e.disabled,L=void 0!==F&&F,R=e.disableGutters,T=void 0!==R&&R,H=e.divider,M=void 0!==H&&H,I=e.focusVisibleClassName,D=e.selected,G=void 0!==D&&D,V=(0,r.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=a.useContext(m.Z),j={dense:z||B.dense||!1,alignItems:i},A=a.useRef(null);p((function(){f&&A.current&&A.current.focus()}),[f]);var W=a.Children.toArray(v),_=W.length&&(0,s.Z)(W[W.length-1],["ListItemSecondaryAction"]),P=a.useCallback((function(e){A.current=u.findDOMNode(e)}),[]),O=(0,d.Z)(P,t),U=(0,n.Z)({className:(0,o.Z)(h.root,Z,j.dense&&h.dense,!T&&h.gutters,M&&h.divider,L&&h.disabled,g&&h.button,"center"!==i&&h.alignItemsFlexStart,_&&h.secondaryAction,G&&h.selected),disabled:L},V),$=y||"li";return g&&(U.component=y||"div",U.focusVisibleClassName=(0,o.Z)(h.focusVisible,I),$=c.Z),_?($=U.component||y?$:"div","li"===x&&("li"===$?$="div":"li"===U.component&&(U.component="div")),a.createElement(m.Z.Provider,{value:j},a.createElement(x,(0,n.Z)({className:(0,o.Z)(h.container,N),ref:O},C),a.createElement($,U,W),W.pop()))):a.createElement(m.Z.Provider,{value:j},a.createElement($,(0,n.Z)({ref:O},U),W))}));t.Z=(0,i.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(b)},4722:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(7294);var r=l(5444),a=function(){return n.createElement("ul",{className:"styles-module--mainList--285lH"},n.createElement("li",null,n.createElement("div",null,n.createElement(r.rU,{to:"/doc/gamsjs/gamsjs-api"},"GamsJS API"),n.createElement("p",null,"Documentation for gamsJs"))),n.createElement("li",null,n.createElement("div",null,n.createElement(r.rU,{to:"/doc/gams-projekt-template"},"GAMS Project Template"),n.createElement("p",null,"GAMS project setup template files needed to initialize a project on gamsdev. Display of different versions and currently recommended setup"))))}},3391:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return D}});var n=l(7294),r=l(8956),a=l(4722),o=l(5444),i=l(8063),c=l(791),s=l(4381),d=l(1293),m=l(453),u=function(){var e=(0,o.K2)("705899181");return n.createElement(i.Z,{style:{border:"2px solid darkblue"},square:!0,elevation:5},n.createElement(c.Z,{style:{maxHeight:"70vh",overflowY:"auto"}},e.allGoogleDocs.edges.map((function(e,t){return n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement(d.Z,null,n.createElement("small",{style:{color:"lightgrey"}},e.node.breadcrumb[e.node.breadcrumb.length-1].slug,".gdoc"),n.createElement(m.Z,{style:{margin:0}},t+1,". ",n.createElement("i",{className:"far fa-file-alt"})," ",n.createElement(o.rU,{style:{color:"darkblue",textDecoration:"underline"},to:e.node.breadcrumb[e.node.breadcrumb.length-1].slug},e.node.name,".gdoc")),n.createElement("p",{style:{fontSize:"12px",margin:0}},"Updated ",e.node.modifiedTime," (from last build)"),n.createElement("p",{style:{fontSize:"12px",margin:0}},"( Word count: ",e.node.childMarkdownRemark.wordCount.words," ) |"," ",n.createElement("small",null,n.createElement("a",{target:"_blank",style:{color:"darkblue"},href:"https://drive.google.com/drive/folders/"+e.node.parents[0]},"Gdrive folder"))))))}))))},p=l(2122),b=l(1253),f=(l(8812),l(5505)),E=l(638),g=n.forwardRef((function(e,t){var l=e.cellHeight,r=void 0===l?180:l,a=e.children,o=e.classes,i=e.className,c=e.cols,s=void 0===c?2:c,d=e.component,m=void 0===d?"ul":d,u=e.spacing,E=void 0===u?4:u,g=e.style,v=(0,b.Z)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return n.createElement(m,(0,p.Z)({className:(0,f.Z)(o.root,i),ref:t,style:(0,p.Z)({margin:-E/2},g)},v),n.Children.map(a,(function(e){if(!n.isValidElement(e))return null;var t=e.props.cols||1,l=e.props.rows||1;return n.cloneElement(e,{style:(0,p.Z)({width:"".concat(100/s*t,"%"),height:"auto"===r?"auto":r*l+E,padding:E/2},e.props.style)})})))})),v=(0,E.Z)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(g),h=l(7329),Z=l(1510),y=l(1008),k=function(e,t){var l,n,r,a;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((l=e.classList).remove.apply(l,(0,h.Z)(t.imgFullWidth.split(" "))),(n=e.classList).add.apply(n,(0,h.Z)(t.imgFullHeight.split(" ")))):((r=e.classList).remove.apply(r,(0,h.Z)(t.imgFullHeight.split(" "))),(a=e.classList).add.apply(a,(0,h.Z)(t.imgFullWidth.split(" ")))))};var x=n.forwardRef((function(e,t){var l=e.children,r=e.classes,a=e.className,o=(e.cols,e.component),i=void 0===o?"li":o,c=(e.rows,(0,b.Z)(e,["children","classes","className","cols","component","rows"])),s=n.useRef(null);return n.useEffect((function(){!function(e,t){e&&(e.complete?k(e,t):e.addEventListener("load",(function(){k(e,t)})))}(s.current,r)})),n.useEffect((function(){var e=(0,Z.Z)((function(){k(s.current,r)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[r]),n.createElement(i,(0,p.Z)({className:(0,f.Z)(r.root,a),ref:t},c),n.createElement("div",{className:r.tile},n.Children.map(l,(function(e){return n.isValidElement(e)?"img"===e.type||(0,y.Z)(e,["Image"])?n.cloneElement(e,{ref:s}):e:null}))))})),w=(0,E.Z)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(x),N=n.forwardRef((function(e,t){var l=e.classes,r=e.className,a=e.raised,o=void 0!==a&&a,c=(0,b.Z)(e,["classes","className","raised"]);return n.createElement(i.Z,(0,p.Z)({className:(0,f.Z)(l.root,r),elevation:o?8:1,ref:t},c))})),C=(0,E.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(N),S=n.forwardRef((function(e,t){var l=e.classes,r=e.className,a=e.component,o=void 0===a?"div":a,i=(0,b.Z)(e,["classes","className","component"]);return n.createElement(o,(0,p.Z)({className:(0,f.Z)(l.root,r),ref:t},i))})),z=(0,E.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(S),F=l(920),L=l(838),R=(0,l(9123).Z)(n.createElement(n.Fragment,null,n.createElement("path",{d:"M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"}),n.createElement("path",{d:"M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"})),"DynamicFeed"),T=l(4473),H=l(4236),M=l(5046),I=(0,F.Z)({gridTile:{"&:hover":{background:"lightgreen",cursor:"pointer",color:"lightgreen !important"},transition:"all .15s ease-in"}}),D=function(){var e=I();return n.createElement(r.Z,{center:n.createElement(n.Fragment,null,n.createElement("h1",null,"Frontend Dooku "),n.createElement("p",null,"Welcome to the ",n.createElement("b",null,"frontend documentation")," portal for DH research at ",n.createElement("b",null,"ZIM Graz!")),n.createElement("hr",null),n.createElement("h2",null,"Tools"),n.createElement("p",null,"Overview of the intended ",n.createElement("b",null,"main features")," of this webpage:"),n.createElement(L.Z,{sm:12,lg:10},n.createElement(i.Z,{square:!0,elevation:5},n.createElement(v,{cols:3,cellHeight:180},n.createElement(w,{style:{border:"2px solid darkblue"},className:e.gridTile,onClick:function(){return(0,o.c4)("/search")}},n.createElement(C,{style:{border:"none"},elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement(T.Z,{style:{display:"block",fontSize:".5em"}}),n.createElement("b",{style:{fontSize:".5em",color:"darkblue",letterSpacing:"-1px"}},"search")),n.createElement(m.Z,{variant:"body2",component:"p"},"find relevent material like packages, documentation, demos or examples.",n.createElement("br",null),n.createElement("br",null))))),n.createElement(w,{className:e.gridTile,style:{borderTop:"2px solid darkblue",borderRight:"2px solid darkblue",borderBottom:"2px solid darkblue"},onClick:function(){return(0,o.c4)("/packages")}},n.createElement(C,{elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement("i",{style:{display:"block",fontSize:".5em"},className:"fab fa-npm"}),n.createElement("b",{style:{fontSize:".5em",color:"darkblue",letterSpacing:"-1px"}},"reuse")),n.createElement(m.Z,{variant:"h5",component:"h2"}),n.createElement(m.Z,{variant:"body2",component:"p"},"discover all published, ready to use ",n.createElement("b",null,"packages on npmjs.com"),n.createElement("br",null),n.createElement("br",null))))),n.createElement(w,{className:e.gridTile,style:{borderTop:"2px solid darkblue",borderBottom:"2px solid darkblue",borderRight:"2px solid darkblue"},onClick:function(){return(0,o.c4)("/refimpls")}},n.createElement(C,{elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement(H.Z,{style:{display:"block",fontSize:".5em"}}),n.createElement("b",{style:{fontSize:".5em",color:"darkblue",letterSpacing:"-1px"}},"how to")),n.createElement(m.Z,{variant:"h5",component:"h2"}),n.createElement(m.Z,{variant:"body2",component:"p"},"find ",n.createElement("b",null,"best practices")," for using libraries, documentation, demos and examples",n.createElement("br",null),n.createElement("br",null))))),n.createElement(w,{className:e.gridTile,style:{borderRight:"2px solid darkblue",borderLeft:"2px solid darkblue",borderBottom:"2px solid darkblue"},onClick:function(){return(0,o.c4)("/overview")}},n.createElement(C,{elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement("i",{style:{display:"block",fontSize:".5em"},className:"fab fa-google-drive"}),n.createElement("b",{style:{fontSize:".5em",color:"darkblue",letterSpacing:"-1px"}},"doc")),n.createElement(m.Z,{variant:"body2",component:"p"},"explore ",n.createElement("b",null,"documentation")," and notes created in the shared tooling.",n.createElement("br",null),n.createElement("br",null))))),n.createElement(w,{className:e.gridTile,style:{borderRight:"2px solid darkblue",borderBottom:"2px solid darkblue"},onClick:function(){return(0,o.c4)("/overview")}},n.createElement(C,{elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement(R,{style:{display:"block",fontSize:".5em"}}),n.createElement("b",{style:{fontSize:".5em",letterSpacing:"-1px",color:"darkblue"}},"feed")),n.createElement(m.Z,{variant:"body2",component:"p"},"explore documentation and notes created in the shared tooling.",n.createElement("br",null),n.createElement("br",null))))),n.createElement(w,{className:e.gridTile,style:{borderRight:"2px solid darkblue",borderBottom:"2px solid darkblue"},onClick:function(){return(0,o.c4)("/overview")}},n.createElement(C,{elevation:0},n.createElement(z,null,n.createElement(m.Z,{variant:"h3",component:"h3"},n.createElement(M.Z,{style:{display:"block",fontSize:".5em"}}),n.createElement("b",{style:{fontSize:".5em",letterSpacing:"-1px",color:"darkblue"}},"inform")),n.createElement(m.Z,{variant:"body2",component:"p"},"basic information ",n.createElement("b",null,"about this portal"),".",n.createElement("br",null),n.createElement("br",null)))))))),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("h2",null,"Ongoing documentation"),n.createElement("p",null,"Last changed documents in ZIM Frontend folder in Google Drive: "),n.createElement(u,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null)),left:n.createElement(a.Z,null)})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d6e19656b3d778157032.js.map