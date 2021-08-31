import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveInfo } from '../redux/mission/mission';

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missionReducer);
  const rocketData = useSelector((state) => state.rocketReducer);
  const filteredMissionData = missionData.filter((item) => item.mission_status === true);
  const filteredRocketData = rocketData.filter((item) => item.rocket_status === true);
 
  console.log(missionData);
  console.log(rocketData);
  console.log(filteredMissionData);
  console.log(filteredRocketData);

  useEffect(() => {
    dispatch(retrieveInfo([]));
  }, []);

  return (
    <div>
      <div>
        <h1>My Missions</h1>
        {filteredMissionData.map((data) => (
          <div key={data.mission_name}><h2>{data.mission_name}</h2></div>
        ))}
      </div>
      <div>
        <h1>My Rockets</h1>
        {filteredRocketData.map((data) => (
          <div key={data.rocket_name}><h2>{data.rocket_name}</h2></div>
        ))}
      </div>
    </div>
  );
};

export default ProfileComponent;
