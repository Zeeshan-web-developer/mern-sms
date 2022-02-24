import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { options } from '../utils/index';
import './App.css';
import Routes from '../routes/Routes';
import { Container } from 'reactstrap';
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <>
        <Routes />
      </>
    </AlertProvider>
  );
}

export default App;
