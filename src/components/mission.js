import { React, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../redux/configureStore';
import { retrieveInfo } from '../redux/mission/mission';

const MissionComponent = () => {
  const dispatch = useDispatch();
  const [missionData, updateMissionData] = useState([]);
  const updateData = () => {
    updateMissionData(store.getState().missionReducer);
  };
  useEffect(() => {
    dispatch(retrieveInfo([]));
  }, []);

  store.subscribe(updateData);
  return (
    <div>
      {missionData.map((data) => (
        <div key={data.mission_id}>
          <div>{data.mission_name}</div>
          <div>{data.description}</div>
          <div><div>Status</div></div>
          <div><button type="button" id="member_btn">Join Mission</button></div>
        </div>
      ))}
    </div>
  );
};

export default MissionComponent;
