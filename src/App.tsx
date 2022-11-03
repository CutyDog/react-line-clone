import './App.css';
import Line from './components/Line';
import SignIn from './components/SignIn';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth as any);
  return <div className="App">{ user ? <Line /> : <SignIn /> }</div>;
}

export default App;
