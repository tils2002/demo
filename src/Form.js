import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {

    const message = useSelector(state=>state.message)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type:"SET_MESSAGE"})
    }

    return(
        <>
            <h1>{message}</h1>
            <button type="button" onClick={handleClick}>Click Here!</button>
        </>
    );
}

export default Form;