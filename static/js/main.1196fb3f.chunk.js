(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{54:function(e){e.exports=JSON.parse('[{"name":"psp-disallow-service-loadbalancer","description":"A policy that prevents the creation of Service resources of type `LoadBalancer`","homepage":"https://github.com/kubewarden/disallow-service-loadbalancer-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/disallow-service-loadbalancer:v0.1.1","url":"https://github.com/kubewarden/disallow-service-loadbalancer-policy/releases/download/v0.1.1/policy.wasm"},"keywords":["Service"],"resources":["Service"],"mutation":false,"contextAware":false},{"name":"disallow-service-nodeport","description":"A policy that prevents the creation of Service resources of type `NodePort`","homepage":"https://github.com/kubewarden/disallow-service-nodeport-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/disallow-service-nodeport:v0.1.1","url":"https://github.com/kubewarden/disallow-service-nodeport-policy/releases/download/v0.1.1/policy.wasm"},"keywords":["Service"],"resources":["Service"],"mutation":false,"contextAware":false},{"name":"ingress","description":"Enforce requirements on Ingress resources","homepage":"https://github.com/kubewarden/ingress-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/ingress:v0.1.10","url":"https://github.com/kubewarden/ingress-policy/releases/download/v0.1.10/policy.wasm"},"keywords":["Ingress"],"resources":["Ingress"],"mutation":false,"contextAware":false},{"name":"pod-privileged-policy","description":"Limit the ability to create privileged containers","homepage":"https://github.com/kubewarden/pod-privileged-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/pod-privileged:v0.1.9","url":"https://github.com/kubewarden/pod-privileged-policy/releases/download/v0.1.9/policy.wasm"},"keywords":["PSP","Pod","Container","Privileged"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"pod-runtime","description":"Control Pod runtimeClass usage","homepage":"https://github.com/kubewarden/pod-runtime-class-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/pod-runtime:v0.1.3","url":"https://github.com/kubewarden/pod-runtime-class-policy/releases/download/v0.1.3/policy.wasm"},"keywords":["Pod","Runtime","Container Runtime"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-user-group","description":"A Pod Security Policy that controls the container user and groups","homepage":"https://github.com/kubewarden/psp-user-group","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-user-group:v0.1.1","url":"https://github.com/kubewarden/psp-user-group/releases/download/v0.1.1/policy.wasm"},"keywords":["PSP","Container","User","Group"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-allow-privilege-escalation","description":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","homepage":"https://github.com/kubewarden/psp-allow-privilege-escalation","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-allow-privilege-escalation:v0.1.7","url":"https://github.com/kubewarden/psp-allow-privilege-escalation/releases/download/v0.1.7/policy.wasm"},"keywords":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-allowed-fsgroups","description":"Replacement for the Kubernetes Pod Security Policy that controls the usage of fsGroup in the pod security context","homepage":"https://github.com/kubewarden/psp-allowed-fsgroups","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-allowed-fsgroups:v0.0.1","url":"https://github.com/kubewarden/psp-allowed-fsgroups/releases/download/v0.0.1/policy.wasm"},"keywords":["PSP","Container","Runtime"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-allowed-proc-mount-types","description":"Replacement for the Kubernetes Pod Security Policy that controls he usage of /proc mount types","homepage":"https://github.com/kubewarden/psp-allowed-proc-mount-types","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-allowed-proc-mount-types:v0.0.2","url":"https://github.com/kubewarden/psp-allowed-proc-mount-types/releases/download/v0.0.2/policy.wasm"},"keywords":["PSP","Container","Runtime"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/kubewarden/psp-apparmor","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-apparmor:v0.1.6","url":"https://github.com/kubewarden/psp-apparmor/releases/download/v0.1.6/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-capabilities","description":"A Pod Security Policy that controls Container Capabilities","homepage":"https://github.com/kubewarden/psp-capabilities","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-capabilities:v0.1.6","url":"https://github.com/kubewarden/psp-capabilities/releases/download/v0.1.6/policy.wasm"},"keywords":["PSP","Container","Capability","Capabilities"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-flexvolume-drivers","description":"Replacement for the Kubernetes Pod Security Policy that controls the allowed `flexVolume` drivers","homepage":"https://github.com/kubewarden/psp-flexvolume-drivers","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-flexvolume-drivers:v0.0.1","url":"https://github.com/kubwarden/psp-flexvolume-drivers/releases/download/v0.0.1/policy.wasm"},"keywords":["PSP","Container","Runtime","Flex Volume","Flex"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-host-namespaces","description":"A Pod Security Policy that controls the usage of host namespaces","homepage":"https://github.com/kubewarden/psp-host-namespaces","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-host-namespaces:v0.0.9","url":"https://github.com/kubewarden/psp-host-namespaces/releases/download/v0.0.9/policy.wasm"},"keywords":["PSP","Container","Network"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-hostpaths","description":"A Pod Security Policy that controls usage of hostPath volumes","homepage":"https://github.com/kubewarden/psp-hostpaths-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-hostpaths:v0.1.2","url":"https://github.com/kubewarden/psp-hostpaths-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Hostpaths","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-selinux","description":"Replacement for the Kubernetes Pod Security Policy that controls the usage of SELinux","homepage":"https://github.com/kubewarden/psp-selinux","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-selinux:v0.0.1","url":"https://github.com/kubewarden/psp-selinux/releases/download/v0.0.1/policy.wasm"},"keywords":["PSP","Container","Runtime","SELinux"],"resources":["Pod"],"mutation":true,"contextAware":false},{"name":"psp-sysctl","description":"A Pod Security Policy that controls usage of sysctls in pods","homepage":"https://github.com/kubewarden/psp-sysctl-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-sysctl:v0.1.4","url":"https://github.com/kubewarden/psp-sysctl-policy/releases/download/v0.1.4/policy.wasm"},"keywords":["PSP","Sysctl","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"psp-volumes","description":"Pod Security Policy that controls usage of volumes","homepage":"https://github.com/kubewarden/psp-volumes-policy","author":{"name":"Kuberwarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-volumes:v0.1.2","url":"https://github.com/kubewarden/psp-volumes-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Volumes","Pod"],"resources":["Pod"],"mutation":false,"contextAware":false},{"name":"safe-annotations","description":"A policy that validates Kubernetes\' resource annotations","homepage":"https://github.com/kubewarden/safe-annotations-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-annotations:v0.1.0","url":"https://github.com/kubewarden/safe-annotations-policy/releases/download/v0.1.0/policy.wasm"},"keywords":["Annotations"],"resources":["*"],"mutation":false,"contextAware":false},{"name":"safe-labels","description":"A policy that validates Kubernetes\' resource labels","homepage":"https://github.com/kubewarden/safe-labels-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-labels:v0.1.6","url":"https://github.com/kubewarden/safe-labels-policy/releases/download/v0.1.6/policy.wasm"},"keywords":["Labels"],"resources":["*"],"mutation":false,"contextAware":false},{"name":"trusted-repos","description":"Restrict what registries, tags and images can be used","homepage":"https://github.com/kubewarden/trusted-repos-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/trusted-repos:v0.1.6","url":"https://github.com/kubewarden/trusted-repos-policy/releases/download/v0.1.6/policy.wasm"},"keywords":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false,"contextAware":false}]')},64:function(e,t,o){},65:function(e,t,o){},85:function(e,t,o){"use strict";o.r(t);var s=o(0),r=o.n(s),a=o(5),n=o.n(a),i=(o(64),o(26)),c=o(44),l=o(45),d=o(57),u=o(55),p=(o(65),o(56)),h=o(2);function m(e){var t=e.text,o=e.highlight,s=t.toLocaleLowerCase().indexOf(o.toLocaleLowerCase());if(s<0)return Object(h.jsx)("span",{children:t},"hl");var r=t.substring(0,s),a=t.substring(s,s+o.length),n=t.substring(s+o.length,t.length);return r=r?Object(h.jsx)("span",{children:r},"m1"):null,a=a?Object(h.jsx)("span",{style:{borderRadius:"2px"},children:Object(h.jsx)("mark",{children:a})},"m2"):null,n=n?Object(h.jsx)("span",{children:n},"m3"):null,Object(h.jsxs)("span",{children:[r,a,n]},"hl")}var b=o(50),w=o.n(b),g=o(49),y=o.n(g),v=o(51),f=o.n(v),j=o(52),k=o.n(j),x=o(38),O=o.n(x),P=o(46),S=o(48),C=o.n(S),A=o(103),K=o(53),N=o.n(K),R=function(e){var t=Object(s.useState)(!1),o=Object(p.a)(t,2),r=o[0],a=o[1],n=e.policy;return Object(h.jsxs)("article",{children:[Object(h.jsx)("div",{className:"name",children:n.name}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"text-description",children:Object(h.jsx)(m,{text:n.description,highlight:e.descriptionCriteria})}),n.download.registry?Object(h.jsxs)("div",{className:"registry-wrapper",children:[Object(h.jsx)("div",{className:"text-light text-tiny text-label",children:"REGISTRY"}),Object(h.jsx)("code",{className:"text-smaller",children:n.download.registry}),Object(h.jsx)(P.CopyToClipboard,{text:n.download.registry,onCopy:function(){return a(!0),void setTimeout((function(){a(!1)}),1500)},children:Object(h.jsx)(A.a,{title:r?"Copied!":"Copy registry",arrow:!0,children:Object(h.jsx)("button",{id:"copy-registry",className:"text-small button-link",children:Object(h.jsx)(C.a,{})})})})]}):null,Object(h.jsxs)("div",{className:"links-wrapper",children:[Object(h.jsxs)("a",{className:"text-smaller link",href:n.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(y.a,{}),"Homepage"]}),Object(h.jsx)(A.a,{title:"Author",arrow:!0,children:n.author.homepage?Object(h.jsxs)("a",{className:"text-smaller link",href:n.author.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(O.a,{}),n.author.name]}):Object(h.jsxs)("span",{className:"text-smaller not-a-real-link",children:[Object(h.jsx)(O.a,{}),n.author.name]})}),n.download.url?Object(h.jsxs)("a",{className:"text-smaller link download",href:n.download.url,rel:"noopener noreferrer",children:[Object(h.jsx)(w.a,{}),"Download Policy"]}):null]}),Object(h.jsxs)("aside",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"RESOURCES"}),n.resources.map((function(t,o){return Object(h.jsx)(A.a,{title:"Filter by this resource",arrow:!0,children:Object(h.jsxs)("button",{className:"badge resource text-small",onClick:function(){return e.additionalResourceFilter(t)},children:[t,o<n.resources.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},n.name+"-"+t)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"KEYWORDS"}),n.keywords.map((function(t,o){return Object(h.jsx)(A.a,{title:"Filter by this keyword",arrow:!0,children:Object(h.jsxs)("button",{className:"badge keyword text-small",onClick:function(){return e.additionalKeywordFilter(t)},children:[t,o<n.keywords.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},n.name+"-"+t)}))]}),Object(h.jsxs)("div",{className:"icons-wrapper",children:[Object(h.jsx)(A.a,{arrow:!0,title:n.mutation?"Validation + Mutation Policy":"Validation Policy",children:Object(h.jsxs)("div",{className:"icon-badge",children:[Object(h.jsx)(f.a,{color:"primary"}),n.mutation?Object(h.jsx)(k.a,{color:"secondary"}):null]})}),n.contextAware?Object(h.jsx)(A.a,{arrow:!0,title:"Context Aware",children:Object(h.jsx)("div",{className:"icon-badge",children:Object(h.jsx)(N.a,{color:"primary"})})}):null]})]})]})]})},F=o(39),E=o(54),L=o.p+"static/media/logo-kubewarden.7337b18e.svg",D=o.p+"static/media/logo-no-text.fb9fba0c.svg";function H(){var e=document.getElementsByTagName("footer")[0].offsetHeight;console.log(e);var t=document.getElementsByTagName("header")[0].offsetHeight;console.log(t),document.getElementsByTagName("section")[0].style.minHeight=window.innerHeight-e-t-31+"px"}var T=function(e){Object(d.a)(o,e);var t=Object(u.a)(o);function o(e){var s;return Object(c.a)(this,o),(s=t.call(this,e)).state={descriptionCriteria:"",dataSet:E,resourcesOptionsSelected:[],keywordsOptionsSelected:[]},s}return Object(l.a)(o,[{key:"componentDidMount",value:function(){H()}},{key:"componentDidUpdate",value:function(){H()}},{key:"getDistinctSetOfResources",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var o;return e=(o=e).concat.apply(o,Object(i.a)(t.resources))})),Array.from(new Set(e))}},{key:"getDistinctSetOfKeywords",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var o;return e=(o=e).concat.apply(o,Object(i.a)(t.keywords))})),Array.from(new Set(e))}},{key:"additionalResourceFilter",value:function(e){var t={value:e,label:e},o=this.state.resourcesOptionsSelected;o.map((function(e){return e.value})).includes(e)||this.setState({resourcesOptionsSelected:o.concat(t)})}},{key:"additionalKeywordFilter",value:function(e){var t={value:e,label:e},o=this.state.keywordsOptionsSelected;o.map((function(e){return e.value})).includes(e)||this.setState({keywordsOptionsSelected:o.concat(t)})}},{key:"onResourcesFilterChange",value:function(e){this.setState({resourcesOptionsSelected:e})}},{key:"onKeywordsFilterChange",value:function(e){this.setState({keywordsOptionsSelected:e})}},{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this,t=this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[];return t=this.state.resourcesOptionsSelected.length>0?t.filter((function(t){return e.state.resourcesOptionsSelected.map((function(e){return e.value})).every((function(e){return t.resources.includes(e)}))})):t,t=this.state.keywordsOptionsSelected.length>0?t.filter((function(t){return e.state.keywordsOptionsSelected.map((function(e){return e.value})).every((function(e){return t.keywords.includes(e)}))})):t}},{key:"render",value:function(){var e=this,t=[];this.getDistinctSetOfResources().forEach((function(e){t=[].concat(Object(i.a)(t),[{value:e,label:e}])}));var o=[];this.getDistinctSetOfKeywords().forEach((function(e){o=[].concat(Object(i.a)(o),[{value:e,label:e}])}));var s=Object.keys(this.state.dataSet).length,r=this.filter(),a=r.length;return Object(h.jsxs)("div",{className:"Hub",children:[Object(h.jsxs)("header",{className:"Hub-header",children:[Object(h.jsxs)("div",{className:"header-links",children:[Object(h.jsxs)("a",{href:"/",className:"header-homepage",rel:"noopener noreferrer",children:[Object(h.jsx)("img",{src:D,alt:"Kubewarden Policy Hub Logo"})," POLICY HUB"]}),Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"main-site",children:"KUBEWARDEN"})]}),Object(h.jsxs)("div",{className:"filters-wrapper",children:[Object(h.jsx)("div",{className:"filter-box filter-description",children:Object(h.jsx)("input",{name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")}),Object(h.jsx)("div",{className:"filter-box resources-select-container",children:Object(h.jsx)(F.a,{value:this.state.resourcesOptionsSelected,onChange:function(t){return e.onResourcesFilterChange(t)},options:t,isMulti:!0,placeholder:"Filter by resources"})}),Object(h.jsx)("div",{className:"filter-box keywords-select-container",children:Object(h.jsx)(F.a,{value:this.state.keywordsOptionsSelected,onChange:function(t){return e.onKeywordsFilterChange(t)},options:o,isMulti:!0,placeholder:"Filter by keywords"})}),Object(h.jsxs)("div",{className:"toolbar",children:[Object(h.jsx)("b",{children:a})," ",a>1?"items":"item"," of ",Object(h.jsx)("b",{children:s})]})]})]}),Object(h.jsx)("section",{children:r.map((function(t){return Object(h.jsx)(R,{policy:t,descriptionCriteria:e.state.descriptionCriteria,additionalResourceFilter:function(t){return e.additionalResourceFilter(t)},additionalKeywordFilter:function(t){return e.additionalKeywordFilter(t)}},t.name)}))}),Object(h.jsx)("footer",{children:Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"kubewarden-logo",children:Object(h.jsx)("img",{src:L,alt:"Kubewarden main site logo"})})})]})}}]),o}(s.Component),B=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,105)).then((function(t){var o=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;o(e),s(e),r(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(T,{})}),document.getElementById("root")),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.1196fb3f.chunk.js.map