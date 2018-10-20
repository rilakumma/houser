const INITIAL_STATE={
    name: '',
    address:'',
    city:'',
    state:'',
    zip: 0,
    image:'',
    mortgage: 0,
    rent:0
}

const UPDATE_NAME ='UPDATE_NAME';
const UPDATE_ADDY ='UPDATE_ADDY';
const UPDATE_CITY ='UPDATE_CITY';
const UPDATE_STATE='UPDATE_STATE';
const UPDATE_ZIP='UPDATE_ZIP';
const UPDATE_IMAGE='UPDATE_IMAGE';
const UPDATE_MORT ='UPDATE_MORT';
const UPDATE_RENT='UPDATE_RENT';

function reducer(state= INITIAL_STATE, action){
    switch(action.type){
        case UPDATE_NAME:
        return Object.assign({}, state, {name: action.payload});
        case UPDATE_ADDY:
        return Object.assign({}, state, {address: action.payload});
        case UPDATE_CITY:
        return Object.assign({}, state, {city: action.payload});
        case UPDATE_STATE:
        return Object.assign({}, state, {state: action.payload});
        case UPDATE_ZIP:
        return Object.assign({}, state, {zip: action.payload});
        case UPDATE_IMAGE:
        return Object.assign({},state,{image: action.payload});
        case UPDATE_MORT:
        return Object.assign({}, state, {mortgage: action.payload});
        case UPDATE_RENT:
        return Object.assign({}, state, {rent: action.payload});
        default: return state;
    }
}
export function updateName(name){
    return{
        type: UPDATE_NAME,
        payload: name
    }
}
export function updateAddy(address){
    return{
        type: UPDATE_ADDY,
        payload: address
    }
}
export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateState(state){
    return{
        type: UPDATE_STATE,
        payload: state
    }
}
export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}
export function updateImage(image){
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}
export function updateMort(mortgage){
    return{
        type: UPDATE_MORT,
        payload: mortgage
    }
}
export function updateRent(rent){
    return{
        type: UPDATE_RENT,
        payload: rent
    }
}

export default reducer;