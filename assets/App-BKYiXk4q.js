const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-Dhc3Cs24.js","assets/index-k2UVe7q6.js","assets/index-X47dvGoR.css","assets/About-HnurPSbp.js","assets/Projects-BJhvnkPY.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-k2UVe7q6.js";const r=e(()=>o(()=>import("./Home-Dhc3Cs24.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-HnurPSbp.js"),__vite__mapDeps([3,1,2]))),s=e(()=>o(()=>import("./Projects-BJhvnkPY.js"),__vite__mapDeps([4,1,2]))),_=i("main")`
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
