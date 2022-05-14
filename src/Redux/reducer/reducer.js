import {initialState} from "../states/state";
import {ADDITEMS, REMOVEITEMS} from "../actions/actions";


const reducer = (state = initialState , action) =>{
    switch (action.type){
        case ADDITEMS : {
            return {
                ...state,
                items: [...state.items,{
                    id: state.items.length > 0 ? state.items[state.items.length - 1].id+1 : 0 ,
                    title:action.val.title,
                    desc:action.val.desc,
                    price:action.val.price,
                    status:action.val.status
                }]
            }

            }
        case REMOVEITEMS:{
            return {
                ...state,
                items: [...state.items.filter(item=>item.id != action.id)]
            }
        }
        }








    return state
}


export default reducer;