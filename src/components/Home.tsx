import { useNavigate } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import '../style/style.css';

const Home = () =>  {

    const navigate = useNavigate();

    const logout = () => {
      localStorage.setItem('logged', '0')
  
      navigate('/');
    }

    if (localStorage.getItem('logged')=='0') {
    return (
        <div>
        <Homepage />
        </div>
    );
    }
    return (
    <div>
        <button className="logout" onClick={logout}>Logout</button>
        <Homepage />
    </div>
    );
}


  export { Home }