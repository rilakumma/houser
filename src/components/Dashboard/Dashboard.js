import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

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
render(){
    const {houses} = this.state;
    let showHouses = houses.map((house)=>{
        return(
            <House name={house.name} address={house.address} city={house.city} state={house.state} zip={house.zip} />
        )
    })
    return(
        <div>
            <div>Dashboard</div>
            {showHouses}
            <Link to='/wizard'><button className='addProp'>Add New Property</button></Link>
        </div>
    )
    }
}