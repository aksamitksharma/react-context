import { UserCosumer } from "../context/UserContext";

const EComponent = () => {
  return (
    // wrap you component element in to consumer and it needed a function that will receive shared value.
    // consumer function need a return statement along with your elements
    <UserCosumer>
      {
        // consumer function
        (shared_value) => {
          // needed return
          return <div>
            <h2>
              E Component and Shared value is - {shared_value}
            </h2>
          </div>
        }
      }
    </UserCosumer>
  )
}

export default EComponent;
