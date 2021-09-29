(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{17:function(t,e,a){},28:function(t,e,a){"use strict";a.r(e);var n,o,c,s=a(9),i=a.n(s),l=a(11),r=a.n(l),u=(a(17),a(0)),h=a(1),d=a(5),v=a(3),j=a(2),m=a(12),b=a(7);window.addEventListener("keydown",(function(t){switch(t.code){case"KeyA":O("C".concat(n),o,c);break;case"KeyW":O("C#".concat(n),o,c);break;case"KeyS":O("D".concat(n),o,c);break;case"KeyE":O("D#".concat(n),o,c);break;case"KeyD":O("E".concat(n),o,c);break;case"KeyF":O("F".concat(n),o,c);break;case"KeyT":O("F#".concat(n),o,c);break;case"KeyG":O("G".concat(n),o,c);break;case"KeyY":O("G#".concat(n),o,c);break;case"KeyH":O("A".concat(n),o,c);break;case"KeyU":O("A#".concat(n),o,c);break;case"KeyJ":O("B".concat(n),o,c)}}),!1);var O=function(t,e,a){var n=new m.a;n.toDestination(),n.volume.value=5*(a-10),n.partials=2,n.triggerAttackRelease(t,"".concat(e,"n"))},x=function(t){return n=t.note.slice(-1),o=t.duration,c=t.volume,Object(b.jsx)("div",{className:t.color,onClick:function(){return O(t.note,t.duration,t.volume)},children:t.note.slice(0,-1)})},g=function(t){Object(v.a)(a,t);var e=Object(j.a)(a);function a(){var t;return Object(u.a)(this,a),(t=e.call(this)).state={volume:7,duration:8,octave:2},t.handleVolumeChange=t.handleVolumeChange.bind(Object(d.a)(t)),t.handleOctaveChange=t.handleOctaveChange.bind(Object(d.a)(t)),t.handleDurationChange=t.handleDurationChange.bind(Object(d.a)(t)),t}return Object(h.a)(a,[{key:"handleVolumeChange",value:function(t){this.setState({volume:t.target.value})}},{key:"handleOctaveChange",value:function(t){this.setState({octave:t.target.value})}},{key:"handleDurationChange",value:function(t){this.setState({duration:t.target.value})}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"controls",children:[Object(b.jsxs)("div",{className:"volume sld-container",children:[Object(b.jsx)("h1",{children:"Volume"}),Object(b.jsx)("input",{type:"range",id:"volume-sld",className:"sld",name:"volume",min:"0",max:"10",defaultValue:"7",step:"1",onChange:this.handleVolumeChange}),Object(b.jsx)("h3",{children:this.state.volume})]}),Object(b.jsxs)("div",{className:"duration sld-container",children:[Object(b.jsx)("h1",{children:"Duration"}),Object(b.jsx)("input",{type:"range",id:"duration-sld",className:"sld",name:"duration",min:"1",max:"16",defaultValue:"8",step:"1",onChange:this.handleDurationChange}),Object(b.jsx)("h3",{children:this.state.duration})]}),Object(b.jsxs)("div",{className:"octave sld-container",children:[Object(b.jsx)("h1",{children:"Octave"}),Object(b.jsx)("input",{type:"range",id:"octave-sld",className:"sld",name:"octave",min:"0",max:"7",defaultValue:"2",step:"1",onChange:this.handleOctaveChange}),Object(b.jsx)("h3",{children:this.state.octave})]})]}),Object(b.jsxs)("div",{className:"piano-container",children:[Object(b.jsx)(x,{color:"white",note:"C".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"black",note:"C#".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"D".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"black",note:"D#".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"E".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"F".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"black",note:"F#".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"G".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"black",note:"G#".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"A".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"black",note:"A#".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume}),Object(b.jsx)(x,{color:"white",note:"B".concat(this.state.octave),duration:this.state.duration,volume:this.state.volume})]})]})}}]),a}(i.a.Component);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8d3b38f9.chunk.js.map