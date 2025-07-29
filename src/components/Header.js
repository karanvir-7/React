import { authActions } from './../store/auth'; // Importing the auth actions
import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);   
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isAuthenticated && 
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>
      </nav>}

    </header>
  );
};

export default Header;
