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
 
 That's it
 
 Thanks!


