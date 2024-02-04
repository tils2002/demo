import { createStore } from "redux";

const initistate = {
    message: ''
}

function reducer(state = initistate,action) {
    switch(action.type) {
        case "SET_MESSAGE":
            return {message: "Hello World"};
        default:
            return {state};
    }
}

const Store = createStore(reducer);

export default Store;