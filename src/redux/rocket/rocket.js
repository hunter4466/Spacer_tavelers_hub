const GET_INFO = 'redux/rocket/GET_INFO';
const API_CALL = 'redux/rocket/API_CALL';
const SET_STATE = 'redux/rocket/SET_STATE';
let firstLoadState = true;
const initialState = [];

const getInformation = (payload) => ({
  type: GET_INFO,
  payload,
});
const APICall = (payload) => ({
  type: API_CALL,
  payload,
});
const setReservationState = (payload) => ({
  type: SET_STATE,
  payload,
});

const rocketReducer = (state = initialState, action) => {
  const payloadHolder = action.payload;
  const stateHolder = state;
  const stateArray = [];
  const logic = (item) => {
    if (item.rocket_id === action.payload) {
      if (item.rocket_status) {
        return false;
      }
      return true;
    }
    return item.rocket_status;
  };
  switch (action.type) {
    case GET_INFO:
      return state;
    case API_CALL:
      return payloadHolder;
    case SET_STATE:
      stateHolder.forEach((item) => {
        stateArray.push({
          rocket_id: item.rocket_id,
          description: item.description,
          rocket_name: item.rocket_name,
          rocket_type: item.rocket_type,
          flickr_images: item.flickr_images,
          rocket_status: logic(item),
        });
      });
      return stateArray;
    default:
      return state;
  }
};

const getRocketMiddleware = (store) => (next) => (action) => {
  if (firstLoadState) {
    firstLoadState = false;
    fetch('https://api.spacexdata.com/v3/rockets',
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => store.dispatch(APICall(json)));
  }
  next(action);
};

export {
  rocketReducer,
  getInformation,
  APICall,
  getRocketMiddleware,
  setReservationState,
};
