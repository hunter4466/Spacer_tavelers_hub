import { React } from 'react';
import { useSelector } from 'react-redux';

const ProfileComponent = () => {
  const missionData = useSelector((state) => state.missionReducer);
  const rocketData = useSelector((state) => state.rocketReducer);
  const filteredMissionData = missionData.filter((item) => item.mission_status === true);
  const filteredRocketData = rocketData.filter((item) => item.rocket_status === true);

  return (
    <div className="profile-section-container">
      <div className="profile-container">
        <h1 className="profile-title roboto-bold">My Missions</h1>
        <ul className={filteredMissionData.length === 0 ? 'profile-table-none' : 'profile-table'}>
          {filteredMissionData.map((data) => (
            <li className="profile-list montserrat-light" key={data.mission_name}>{data.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="profile-container">
        <h1 className="profile-title roboto-bold">My Rockets</h1>
        <ul className={filteredRocketData.length === 0 ? 'profile-table-none' : 'profile-table'}>
          {filteredRocketData.map((data) => (
            <li className="profile-list montserrat-light" key={data.rocket_name}>{data.rocket_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileComponent;
