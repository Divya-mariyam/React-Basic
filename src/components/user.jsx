// const User = (props) => { //first letter capital
// return(
//     <div>
//         <h1>{props.name}</h1>
//         <h4>{props.description }</h4>
//     </div>
// );
// };

// //module.exports = User; => old js version with node
// export default User; //react supports ES6

// //props=> properties or parameters


//-------------------class-----------------        //no body is using
import React from "react";
class User extends React.Component{     
    constructor(props){                 //constructor is required when there is props 
    super(props);

// creating a state
this.state={
    planet :"earth",
};


    }
render(){
    //view
    //logic
    return(
        <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.description}</p>
        </div>
    );
}
}