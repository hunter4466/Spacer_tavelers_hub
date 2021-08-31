import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import { retrieveInfo, updateState } from '../redux/mission/mission';

const MissionComponent = () => {
  const dispatch = useDispatch();
  const [missionData, updateMissionData] = useState([]);
  const updateData = () => {
    updateMissionData(store.getState().missionReducer);
  };
  useEffect(() => {
    dispatch(retrieveInfo([]));
  }, []);

  const handleMissionStateClick = (key, status) => {
    if (status) {
      dispatch(updateState({
        id: key,
        value: false,
      }));
    } else {
      dispatch(updateState({
        id: key,
        value: true,
      }));
    }
  };

  const retrieveStatus = (data) => {
    if (data.mission_status) {
      return 'Active Member';
    }
    return 'NOT A MEMBER';
  };
  const retrieveBtnStatus = (data) => {
    if (data.mission_status) {
      return 'Leave Mission';
    }
    return 'Join Mission';
  };

  store.subscribe(updateData);
  return (
    <div>
      {missionData.map((data) => (
        <div key={data.mission_id}>
          <div>{data.mission_name}</div>
          <div>{data.description}</div>
          <div><div>{ retrieveStatus(data) }</div></div>
          <div><button onClick={() => { handleMissionStateClick(data.mission_id, data.mission_status); }} type="button" id="member_btn">{ retrieveBtnStatus(data) }</button></div>
        </div>
      ))}
    </div>
  );
};

export default MissionComponent;
