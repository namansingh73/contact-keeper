import React, {useReducer} from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import {v4 as uuid} from "uuid"; 

import {
   SET_ALERT,
   REMOVE_ALERT,
} from '../types';

const AlertState = (props) => {
    const initialState = [];

    const [state,dispatch] = useReducer(alertReducer,initialState);

    const setAlert = (msg,type) => {
        const id = uuid();
        dispatch({
            type:SET_ALERT,
            payload:{
                id,
                msg,
                type
            }
        });
        setTimeout(()=>{
            dispatch({
                type:REMOVE_ALERT,
                payload:id
            });
        },5000);
    };

    return (
        <AlertContext.Provider
            value={{
              alerts: state,
              setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
};

export default AlertState;