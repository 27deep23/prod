import { Component } from "react";
// class One extends Component{
//     render(){
//         return(
//             <>
//             <h1 style={{color:"red"}}>
//                 {this.props.name}
//                 {/* {this.props.age} */}
//             </h1>
//             </>
//         )        
//     }
// // }
// function One({kite}){
//     return(<>
//     <h1>
//         <ul>
//             {kite.map((subject.index)=>(
//                 <li key={index}>
//                     {subject}
//                 </li>
//             ))}
//         </ul>
//     </h1>
//     </>)
// // }
// passing boolean values as props
function One({islogin}){
return(<>
<h1>
    <ul>
        <h1>{islogin?"passed":"Failed"}</h1>
    </ul>
</h1>
</>)
}
export default One