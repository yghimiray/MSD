import { IItem, IBill } from './itembill'
import { PURCHASE, PURCHASE_RETURN } from './action'


export interface IAppstate {
    item: IItem,
    bill: IBill
}

export const initialState: IAppstate = {
    item: {
        name: '',
        qty: 0,
        price: 0,
        trans: {}
    },
    bill: {
        billno: '',
        name: '',
        trans: {}
    }
}



export function rootReducer(state = initialState, action: any) {
    switch(action.type){
        case PURCHASE : return state;
        case PURCHASE_RETURN : return state;

        default: return state;
    }
}