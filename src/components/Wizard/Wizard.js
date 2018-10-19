import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';

export default class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zip: 0
        }
    }

    updateName(val){
        this.setState({
            name: val
        })
    }
    updateAddy(val){
        this.setState({
            address: val
        })
    }
    updateCity(val){
        this.setState({
            city: val
        })
    }
    updateState(val){
        this.setState({
            state: val
        })
    }
    updateZip(val){
        this.setState({
            zip: val
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
            <div className='wizheader'>
            <h1>Add New Listing</h1>
            <Link to='/'><button className='addProp'>Cancel</button></Link>
            </div>

            <div className='inputs'>
            <input type="text" onChange={(e)=> this.updateName(e.target.value)}/>
            <input type="text" onChange={(e)=> this.updateAddy(e.target.value)}/>
            <input type="text" onChange={(e)=> this.updateCity(e.target.value)}/>
            <input type="text" onChange={(e)=> this.updateState(e.target.value)}/>
            <input type="text" onChange={(e)=> this.updateZip(e.target.value)}/>
            <button className='addProp' onClick={()=> {this.postProduct(name,address,city,state,zip)}}>Complete</button>
            </div>
        </div>
    )
    }
}