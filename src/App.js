import './App.css';
import AComponent from "./components/AComponent"
import { ChannelProvider } from './context/ChannelContext';
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <div className="App">
      {
        /* 
        wrap your root component on UserProvide component to share values in all components.
        we have to pass value prop and value that we want to share
        ---
        now if we want to use multiple contexts than you can next providers like this
  
        */
      }
      <UserProvider value="User value">
        <ChannelProvider value="Channel value">
          <AComponent />
        </ChannelProvider>
      </UserProvider>
    </div>
  );
}

export default App;
