import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateImage} from '../../ducks/reducer';

class StepTwo extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //         image: ''
    //     }
    // }

    // updateImage(val){
    //     this.setState({
    //         image: val
    //     })
    // }
    
render(){
    const {updateImage} = this.props;
    return(
        <div>
            <div className='inputs'>
            <h3>Image URL:</h3>
            <input type="text" onChange={(e)=> updateImage(e.target.value)}/>
            </div>
        </div>
    )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.updateImage)
    return {
        image: state.image
    }
}
export default connect(mapStateToProps, {updateImage})(StepTwo);