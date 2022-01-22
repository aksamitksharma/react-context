import { createContext } from "react";

// create the context
const UserContext = createContext()

// creating provider and consumer
// provider is going to provide shared data to the top level of the application
// consumer will going to access that value in needed components
const UserProvider = UserContext.Provider
const UserCosumer = UserContext.Consumer

// export provide and cosumer
export {UserProvider, UserCosumer}

