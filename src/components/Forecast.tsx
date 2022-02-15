import { useNavigate, Navigate } from 'react-router-dom';
import { Weather } from '../pages/Weather';
import '../style/style.css';

const Forecast = () =>  {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem('logged', '0')

    navigate('/');
  }

  if (localStorage.getItem('logged')=='0') {
    return (
      <Navigate
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <div>
      <Weather />
      <button className="logout" onClick={logout}>Logout</button>
    </div>
  );

}

export { Forecast }