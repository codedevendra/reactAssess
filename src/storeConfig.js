import {createStore} from "redux";
import rootReducer from "./Reducers/rootReducer";

function configStore(state={isLogin:false,members:[]})
{
    return createStore(rootReducer,state);
}

export default configStore;