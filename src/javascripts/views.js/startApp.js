import navBar from '../components/navbar';
import domBuilder from './domBuilder';
// import logoutButton from '../components/logoutButton';
import home from './home';

const startApp = () => {
  domBuilder();
  home();
  navBar();
};

export default startApp;
