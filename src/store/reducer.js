import { combineReducers } from "redux";
import homeReducer from '../components/Home/reducer'
import categoryReducer from '../components/Category/reducer'
import detailreducer from '../components/Detail/reducer'
var reducer = combineReducers({
    home:homeReducer,
    categorytit:categoryReducer,
    detailshop:detailreducer
})
export default reducer;