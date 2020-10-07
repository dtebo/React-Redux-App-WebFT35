import { FETCH_CATDATA_START, FETCH_CATDATA_SUCCESS, FETCH_CATDATA_FAILURE } from '../actions';

const initialState = {
    catData: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CATDATA_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_CATDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                catData: action.payload
            };
        case FETCH_CATDATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    };
};