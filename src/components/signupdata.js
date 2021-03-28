import React,{Component} from 'react';
import axios from 'axios';


class signupdata extends Component{
       constructor(props){
           super(props)
       this.state  =  {
            value: []
    }
       }
     
    componentDidMount() {
        axios.get(`assets/samplejson/signup.json`)
        .then(res=>{
            console.log(res);
            this.setState({value: res.data});
            console.log(this.state.value)
            
        });
    }
    testfun(){
        alert(this.state.value.role + '\n'+
            this.state.value.status +'\n'+
            this.state.value.message +'\n'+
            this.state.value.isUserExists)
    
    
    }
    
    render(){
        return(
            
            <center>
        <div className='panel panel-primary'>
        <div className="panel-heading">
         <div className="panel-body">
          State:  {this.state.value.status}
         <div>Role: {this.state.value.role}</div>
         <div>Message:  {this.state.value.message}</div>
         <div>IsuserExists:   {this.state.value.isUserExists}</div>
     </div>
    </div>
    </div>
    <button onClick={()=>this.testfun()}>show</button>
   </center>
            
        ) 
        
    }
}
export default signupdata
