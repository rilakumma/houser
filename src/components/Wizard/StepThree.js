import React, {Component} from 'react';
import axios from 'axios';

export default class StepThree extends Component{
    constructor(){
        super();
        this.state={
            mortgage: 0,
            rent:0
        }
    }

    updateMortgage(val){
        this.setState({
            mortgage: val
        })
    }
    updateRent(val){
        this.setState({
            rent: val
        })
    }
    postProduct(name,address,city,state,zip){
        axios.post('/api/houses', {name,address,city,state,zip}).then(res=>{
            console.log(res);
        })
    }
render(){
    const {name,address,city,state,zip} = this.state;
    return(
        <div>
            <div className='inputs'>
            <h3>Monthly Mortgage Amount</h3>
            <input type="text" onChange={(e)=> this.updateMortgage(e.target.value)}/>
            <h3>Desired Monthly Rent</h3>
            <input type="text" onChange={(e)=> this.updateRent(e.target.value)}/>
            <button className='addProp' onClick={()=> {this.postProduct(name,address,city,state,zip)}}>Complete</button>
            </div>
        </div>
    )
    }
}