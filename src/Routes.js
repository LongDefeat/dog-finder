import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function RoutesFunc({dogs}) {
    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs}/>}>
                
            </Route>
            <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />}>
                
            </Route>
            
        </Routes>
    );
}

export default RoutesFunc;