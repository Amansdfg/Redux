import Counter from './components/Counter';
import Header from "./components/Header";
import UserProfile from "./components/UserProfile"
import Auth from './components/Auth'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const isAuth=useSelector(state=>state.auth.isAuthentificated);
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;
