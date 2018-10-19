import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';
import './Dashboard.css';

export default class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            houses:[]
        }
    }
    componentDidMount(){
        axios.get('/api/houses').then(res=>{
            console.log(res)
            this.setState({
                houses: res.data
            })
        })
    }
    deleteHouse(id){
        axios.delete(`/api/houses/:${id}`).then(res=>{
        console.log(res)
        })
    }
render(){
    const {houses} = this.state;
    let showHouses = houses.map((house)=>{
        return(
            <House deleteHouse={this.deleteHouse} id={houses.id} name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} />
        )
    })
    return(
        <div className='dashBox'>
            <div className='subheader'><h1>Dashboard</h1>
            <Link to='/wizard'><button className='addProp'>Add New Property</button></Link>
            </div>
            {showHouses}
            
        </div>
    )
    }
}