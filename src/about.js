import React from 'react'



export default class About extends React.Component{

    constructor() 
    {
        super();
        this.state={
            show:true,
            name :"turab",
            email :"turab12@gmail.com"
        }
    }
        updateState() 
        {
            this.setState({
                show:false,
            });
        }
        

    
  render(){
    return(
        <div>
            { this.state.show?
              <h1>this is owais</h1>
              :null
            
            }

            
            <button onClick={()=>{this.updateState()}} >update state</button>
            
        </div>
    )
  }
}

