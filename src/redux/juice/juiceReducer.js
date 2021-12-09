import { BUY_JUICE } from "./juiceTypes"

const initialState = {
    numOfJuices: 30,
}

const juiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_JUICE: return {
            ...state,
            numOfJuices: state.numOfJuices - 1
        }
        default: return state
    }
}

export default juiceReducer;