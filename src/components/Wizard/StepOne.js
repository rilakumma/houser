import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import {updateName, updateAddy, updateCity, updateState, updateZip} from '../../ducks/reducer';


class StepOne extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         name:'',
    //         address:'',
    //         city:'',
    //         state:'',
    //         zip: 0
    //     }
    // }

    // updateName(val){
    //     this.setState({
    //         name: val
    //     })
    // }
    // updateAddy(val){
    //     this.setState({
    //         address: val
    //     })
    // }
    // updateCity(val){
    //     this.setState({
    //         city: val
    //     })
    // }
    // updateState(val){
    //     this.setState({
    //         state: val
    //     })
    // }
    // updateZip(val){
    //     this.setState({
    //         zip: val
    //     })
    // }
    
render(){
    const {updateName, updateAddy, updateCity, updateState, updateZip} = this.props;
    return(
        <div>

            <div className='inputs'>
            <h3>Propert Name:</h3>
            <input type="text" onChange={(e)=> updateName(e.target.value)}/>
            <h3>Address</h3>
            <input type="text" onChange={(e)=> updateAddy(e.target.value)}/>
            <h3>City:</h3>
            <input type="text" onChange={(e)=> updateCity(e.target.value)}/>
            <h3>State:</h3>
            <input type="text" onChange={(e)=> updateState(e.target.value)}/>
            <h3>Zip: </h3>
            <input type="text" onChange={(e)=> updateZip(e.target.value)}/>
            
            </div>
        </div>
    )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.updateName)
    console.log(state.updateAddy)
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddy, updateCity, updateState, updateZip})(StepOne);