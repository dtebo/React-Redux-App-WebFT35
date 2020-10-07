import axios from 'axios';

export const FETCH_CATDATA_START = 'FETCH_CATDATA_START';
export const FETCH_CATDATA_SUCCESS = 'FETCH_CATDATA_SUCCESS';
export const FETCH_CATDATA_FAILURE = 'FETCH_CATDATA_FAILURE';

export const fetchCatData = (url) => (dispatch) => {
    dispatch({ type: FETCH_CATDATA_START });

    axios.get(url)
        .then(res => {
            console.log('fetchCatData: DT: ', res.data.all);
            dispatch({ type: FETCH_CATDATA_SUCCESS, payload: res.data.all });
        })
        .catch(err => console.error(err));
};