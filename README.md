# react-context

This code will show you howto implement context API in react JS with a simple example.

**React Context**
### What is context?

*Context* provides a way to pass data through the component tree without having to pass props down manually at every level.

Assume that we have a component tree A,B,C,D,E and you want to pass data from A to E.
Without using context API we have to do prop drilling it means we have to pass data at every level of components like A->B->C->D->E and it become more challenging if components have siblings. Also, may be component B,C,D does not needed that data but they have be aware of it.

To solve this propblem we are using react context, it is in build feature of react js.

Let's start!
### Where to start?

To start implementing context in react we have follow following steps:

1. **Create the context**
2. **Provide a context value**
3. **Consume the context value in necessary components**