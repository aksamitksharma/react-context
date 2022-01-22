import { ChannelConsumer } from "../context/ChannelContext";
import { UserCosumer } from "../context/UserContext";

const EComponent = () => {
  return (
    // wrap you component element in to consumer and it needed a function that will receive shared value.
    // consumer function need a return statement along with your elements
    // -------
    // now if we want o consume multiple context values as we have now User and Channel we have to next consumers like below
    <UserCosumer>
      {
        // consumer function
        user_value => {
          // needed return
          return (
            <ChannelConsumer>
              {
                channel_value => {
                  return (
                    <div>
                      <h2>
                       <p> E Component and User value is - {user_value} </p>
                       <p> E Component and Channel value is - {channel_value} </p>
                      </h2>
                    </div>
                  )
                }
              }
            </ChannelConsumer>
          )
        }
      }
    </UserCosumer>
  )
}

export default EComponent;
