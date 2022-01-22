import './App.css';
import AComponent from "./components/AComponent"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <div className="App">
      {
      /* 
      wrap your root component on UserProvide component to share values in all components.
      we have to pass value prop and value that we want to share
      */
      }
      <UserProvider value="Shared value">
        <AComponent />
      </UserProvider>
    </div>
  );
}

export default App;
