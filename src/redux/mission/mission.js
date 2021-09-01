const UPDATE_ALL = 'redux/mission/UPDATE_ALL';
const UPDATE_FROM_API = 'redux/mission/UPDATE_FROM_API';
const SET_MISSION_STATE = 'redux/mission/SET_MISSION_STATE';
let firstLoadState = true;
const initialState = [];

const retrieveInfo = (payload) => ({
  type: UPDATE_ALL,
  payload,
});
const loadFromAPI = (payload) => ({
  type: UPDATE_FROM_API,
  payload,
});
const updateState = (payload) => ({
  type: SET_MISSION_STATE,
  payload,
});
// -------------- Reducer ----------------------------
const missionReducer = (state = initialState, action) => {
  const payloadHolder = action.payload;
  const stateHolder = state;
  const stateArray = [];
  const logic = (item) => {
    if (item.mission_id === action.payload) {
      if (item.mission_status) {
        return false;
      }
      return true;
    }
    return item.mission_status;
  };
  switch (action.type) {
    case UPDATE_ALL:
      return state;
    case UPDATE_FROM_API:
      return payloadHolder;
    case SET_MISSION_STATE:
      stateHolder.forEach((item) => {
        stateArray.push({
          mission_id: item.mission_id,
          mission_name: item.mission_name,
          description: item.description,
          mission_status: logic(item),
        });
      });
      return stateArray;
    default:
      return state;
  }
};
// -------------- Middlewares ----------------------------
const getMissionsMiddleware = (store) => (next) => (action) => {
  if (firstLoadState) {
    firstLoadState = false;
    fetch('https://api.spacexdata.com/v3/missions',
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
      .then((json) => store.dispatch(loadFromAPI(json)));
  }
  next(action);
};

export {
  missionReducer,
  retrieveInfo,
  loadFromAPI,
  getMissionsMiddleware,
  updateState,
};
