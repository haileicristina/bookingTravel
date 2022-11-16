import React from 'react';
import { useDispatch } from 'react-redux';
import{useState, useEffect} from 'react';

import api from '../../services/api';
import {addReserve} from '../../store/modules/reserve/actions';
import {MdFlightTakeoff} from 'react-icons/md';
import './styles.css';

function Home() {

    const [trips, setTrips] = useState([]);
    const dispatch = useDispatch();

    useEffect(() =>{
        async function loadApi(){
            const response = await api.get('trips');
            let tripData = response.data;
            setTrips(tripData);
            console.log(tripData);
        }
        loadApi();
    },[]);


    function handleAdd(trip){
        dispatch(addReserve(trip))
    }


    return (
        <div>
            <div className="box">
                {trips.map(trip => (
                    <li key={trip.id}>
                        <img src={trip.image} alt={trip.title}/>
                        <strong>{trip.title}</strong>
                        <span> Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

                        <button
                        type='button'
                        onClick={() => handleAdd(trip)}
                        >
                        <div>
                            <MdFlightTakeoff size={16} color='#fff'/>
                        </div>
                       <span>Reservar Travel</span>
                        </button>
                   </li>
                ))}
            </div>
        </div>
    );
}

export default Home;