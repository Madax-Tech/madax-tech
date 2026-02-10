const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DiszhS0B.js","assets/index-DCvVJOBh.js","assets/index-B8ruX9TP.css","assets/About-CxpVmnDV.js","assets/index-B0uEw1zm.js","assets/Projects-DlXJLLmh.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-DCvVJOBh.js";const r=e(()=>o(()=>import("./Home-DiszhS0B.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-CxpVmnDV.js"),__vite__mapDeps([3,1,2,4]))),s=e(()=>o(()=>import("./Projects-DlXJLLmh.js"),__vite__mapDeps([5,1,2]))),_=i("main")`
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    @media (max-width: 1000px) {
        width: 100%;
    }
`,n=()=>t(_,{get children(){return[t(r,{id:"home"}),t(s,{id:"projects"}),t(a,{id:"about"})]}});export{n as default};
