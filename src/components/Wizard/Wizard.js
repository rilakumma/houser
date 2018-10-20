import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
// import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {Route} from 'react-router-dom';

export default class Wizard extends Component{
    
render(){
    
    return(
        <div>
            <div className='wizheader'>
            <h1>Add New Listing</h1>
            <Link to='/'><button className='addProp'>Cancel</button></Link>
            </div>
            <div className='steps'>
            <Route path='/step2' component={StepTwo}/>
            <Link to='/step2'><button className='addProp'>Next Step</button></Link>
            <Route path='/step3' component={StepThree}/>
            <Link to='/step3'><button className='addProp'>Next Step</button></Link>
            </div>
        </div>
    )
    }
}