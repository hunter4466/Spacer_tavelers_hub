import { React, useState} from 'react';
import store from '../redux/configureStore';

const MissionComponent = () => {
    const [missionData, updateMissionData] = useState([]);
    const updateData = () => {
        updateMissionData(store.getState().missionReducer)
    }
    store.subscribe(updateData);
    return (
    <div>
        
    </div>
)
};

export default MissionComponent;
