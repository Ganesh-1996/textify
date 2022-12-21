import React from 'react'
import ReactDOM from 'react-dom/client';
function Hi(props){
   return(<h1>wassup {props.name}</h1>); 
}

function Nigga(){
    return(<p>bye nigga</p>);
}
function Temp() {
  return (
    <>
    <div>Good morning</div>
    <Hi name='ganesh'/>
    <Nigga/>
</>
  )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Temp/>
);

