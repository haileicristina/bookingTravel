import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reservas from './pages/Reservas';

import React from 'react';

export default function RoutesApp() {
    return (        
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/reservas' element={ <Reservas /> } />
            </Routes>        
    );
}

