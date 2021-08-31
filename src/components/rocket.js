import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInformation, setReservationState } from '../redux/rocket/rocket';

const RocketComponent = () => {
  const dispatch = useDispatch();
  const RocketData = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    dispatch(getInformation([]));
  }, []);

  const handleRocketStateClick = (key, status) => {
    if (status) {
      dispatch(setReservationState({
        id: key,
        value: false,
      }));
    } else {
      dispatch(setReservationState({
        id: key,
        value: true,
      }));
    }
  };

  return (
    <div className="rocket-section-container">
      {RocketData.map((data) => (
        <div key={data.rocket_id} className="rocket-container">
          <img src={data.flickr_images} alt={data.rocket_type} className="rocket-image" />
          <div className="rocket-description-container">
            <div className="rocket-description-name montserrat-bold">{data.rocket_name}</div>
            <p className="rocket-description roboto-bold">
              {data.rocket_status ? <span className="rocket-description-reserved roboto-bold">Reserved</span> : <span />}
              {data.description}
            </p>
            <div><button onClick={() => { handleRocketStateClick(data.rocket_id, data.rocket_status); }} className={data.rocket_status ? 'rocket-description-button' : 'rocket-description-button'} type="button">{data.rocket_status ? 'Cancel Reservation' : 'Reserve Rocket'}</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketComponent;
