# react-context

This code will show you howto implement context API in react JS with a simple example.

**React Context**
### What is context?

*Context* provides a way to pass data through the component tree without having to pass props down manually at every level.

Assume that we have a component tree A,B,C,D,E and you want to pass data from A to E.
Without using context API we have to do prop drilling it means we have to pass data at every level of components like A->B->C->D->E and it becomes more challenging if components have siblings. 
Also, may be component B,C,D does not needed that data but they need to be aware about it.

To solve this propblem we are using react context, it is in-built feature of react js.

Let's start!
### Where to start?

To start implementing context in react we have to follow following steps:

1. **Create the context**
2. **Provide a context value**
3. **Consume the context value in necessary components**


**Two more extra points**
1. You can setup **default value** while creating a context 
```bash
const UserContext = createContext('default value')
```
So the default value going to be used when it does not have matching provider above it in the component tree.

2. Next is **context type property**. we can you this on class components. To do this follow below steps: 
 - In UserContext,js we need to export UserContext itself.
 - Assign this UserContext to the contextType property on the class.
 ```bash
 // import UserContext from "./UserContext"
 // now you can use shared data using this.context
 this.context
 EComponent.contextType = UserContext
 ```
 Now, you can access shared data in your class compoenent like this:
 ```bash
 class FComponent extends React.component {
    EComponent.contextType = UserContext
    render(){
        return <div>Shared value - {this.context}</div>;
    }
}
 ```
 Another way if your class support public class syntaxt that you can replace 
  ```bash
  EComponent.contextType = UserContext
 ```
 with
   ```bash
  static contextType = UserContext
 ```
 and still you can access shared data
 ```bash
 class FComponent extends React.component {
    static contextType = UserContext
    render(){
        return <div>Shared value - {this.context}</div>;
    }
}
 ```
 **Now assume we have multiple contexts, how it will work then? let's see**
 
 We have created a new context as named ChannelContext. Also, created provider and consumer of it.
 Now you can see how provider of User and Channel in <em>App.js</em> going to look like:
 ```bash
 <UserProvider value="User value">
    <ChannelProvider value="Channel value">
      <AComponent />
    </ChannelProvider>
  </UserProvider>
 ```
 Also, see consumers as well in EComponent.js
 ```bash
 import { ChannelConsumer } from "../context/ChannelContext";
import { UserCosumer } from "../context/UserContext";

const EComponent = () => {
  return (
    <UserCosumer>
      {
        user_value => {
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
 ```
 isn't it looks confusing as it's have so much nesting after using only two contexts, now think what will going to be if we will use more contexts?

**Here <code>useContext</code> hooks is going to be introduced**
useContext hooks simplifies the consuming all the values of the contexts.
So, instead of changing the code in EComponent.js let's implement useContext in DComponent.js

- First of all useContext accept context as a parameter so we have to export UserContext from UserContext.js and ChannelContext from ChannelContext.js

UserContext.js
```bash
export {UserProvider, UserCosumer, UserContext}
```

ChannelContext.js
```bash
export { ChannelProvider, ChannelConsumer, ChannelContext }
```

now we can use both the contexts in useContext hook

```bash
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
```
Now you can see how useContext simplies the consumption of shared values.
