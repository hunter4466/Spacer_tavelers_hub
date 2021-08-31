import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveInfo, updateState } from '../redux/mission/mission';

const MissionComponent = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missionReducer);
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

  return (
    <div className="mission_grid">
      <div className="mission_wrapper">
        <div className="montserrat-regular title_item">Mission</div>
        <div className="montserrat-regular title_item">Description</div>
        <div className="montserrat-regular title_item">Status</div>
        <div className="montserrat-regular title_item"> </div>
      </div>
      {missionData.map((data) => (
        <div className="mission_wrapper" key={data.mission_id}>
          <div className="montserrat-regular mission_item"><p>{data.mission_name}</p></div>
          <div className="montserrat-regular mission_item_text">{data.description}</div>
          <div className="montserrat-regular mission_item"><div className={data.mission_status ? 'active_member' : 'not_member'}>{data.mission_status ? 'Active Member' : 'NOT A MEMBER'}</div></div>
          <div className="montserrat-regular mission_item"><button className={data.mission_status ? 'active_member_btn' : 'not_member_btn'} onClick={() => { handleMissionStateClick(data.mission_id, data.mission_status); }} type="button" id="member_btn">{data.mission_status ? 'Leave Mission' : 'Join Mission'}</button></div>
        </div>
      ))}
    </div>
  );
};

export default MissionComponent;
