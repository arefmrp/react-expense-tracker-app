import {createStore} from 'redux'
import reducer from "../reducer/reducer";


export const initialState = {
    items:[

    ]
}
const Store = createStore(reducer)



export default Store