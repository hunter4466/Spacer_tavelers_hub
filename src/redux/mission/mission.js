const UPDATE_ALL = 'redux/mission/UPDATE_ALL';
const UPDATE_FROM_API = 'redux/mission/UPDATE_FROM_API';

const initialState = [];

const retrieveInfo = (payload) => ({
  type: UPDATE_ALL,
  payload,
});
const loadFromAPI = (payload) => ({
  type: UPDATE_FROM_API,
  payload,
});

const missionReducer = (state = initialState, action) => {
  const payloadHolder = action.payload;
  switch (action.type) {
    case UPDATE_ALL:
      return payloadHolder;
    case UPDATE_FROM_API:
      return payloadHolder;
    default:
      return state;
  }
};
export { missionReducer, retrieveInfo, loadFromAPI };
