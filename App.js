import React from "react";

function App(params) {
    let curDate= new Date();
curDate=curDate.getHours();
let greeting =``;
const cssStyle={};

if (curDate>=1 && curDate<12) {
    greeting=`Good Morning`;
    cssStyle.color=`pink`
} else if(curDate>=12 && curDate<18){
    greeting=`Good Afternoon`;
    cssStyle.color=`orange`
}else{
    greeting=`Good Evening`;
    cssStyle.color=`black`
}


return (
    <>
        <div>
            <h1>Hellow Sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    </>
)
    
} 
export default App;