import { useContext } from 'react';
import { ChannelContext } from '../context/ChannelContext';
import { UserContext } from '../context/UserContext';
import EComponent from './EComponent';

const DComponent = () => {
  const user_value = useContext(UserContext)
  const channel_value = useContext(ChannelContext)
  return (
    <div>
      <EComponent />
      <hr />
      <h2>
        <p> D Component and User value is - {user_value} </p>
        <p> D Component and Channel value is - {channel_value} </p>
      </h2>
    </div>
  )
}

export default DComponent;
