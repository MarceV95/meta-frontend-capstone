import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import Home from '../../pages/Home';
import Reservation from "../../pages/Reservation"
import ConfirmedBooking from "../../pages/ConfirmedBooking";

import {fetchAPI} from "../../utils/api"

const updateTimes = (state, action) =>{
    const date = new Date(action.date);
    return fetchAPI(date)
}

const Main = () =>{

    const initializeTimes = () =>{
        return fetchAPI(new Date());
    }

    const [availableTimes, dispatch]  = useReducer(updateTimes, initializeTimes());

    return(
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reservation' element={<Reservation times={availableTimes} dispatch={dispatch}/>} />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </main>
    )
}

export default Main;