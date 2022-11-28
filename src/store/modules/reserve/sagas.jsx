import {select, call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { addReserveSuccess, updateAmountSuccess } from './actions';


function* addToReserve({id}){
    
  
    //const history = useNavigate();
    const tripExist = yield select(
        state => state.reserve.find(trip => trip.id === id)
    );

    const travelStock = yield call(api.get, `/stock/${id}`);
    const stockAmount = travelStock.data.amount; //tamanho do estoque
    const currentStock = tripExist ? tripExist.amount : 0;
    const amount = currentStock + 1;

    if(amount > stockAmount){
        alert('Quantidade em estoque excedida');
        return;
    }

    if(tripExist){       
        yield put(updateAmountSuccess(id, amount))

    }else{
        const response = yield call(api.get, `trips/${id}`);
        const data = {
            ...response.data,
            amount: 1
        }
        //disparar actions no redux-saga
        yield put(addReserveSuccess(data))
        history.push('/reservas')
        
    }   
}

function* updateAmount({id, amount}){
    if(amount <= 0) return;
    const travelStock = yield call(api.get, `/stock/${id}`);
    const stockAmount = travelStock.data.amount;

    if(amount > stockAmount){
        alert('A quantidade máxima do estoque foi excedida');
        return;
    }

    yield put(updateAmountSuccess(id, amount))

}

export default all([
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)

])