import './App.css';
import Adress from './Component/Profile/Adress';
import Fullname from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Fullname/>
      <Adress/>


    </div>
  );
}

export default App;
