import { Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "../components/Header";
import Display from "../pages/displaystudent/Display";
import "./App.css";
import AddStudent from "../pages/addStudent/AddStudent";
import { options } from "../utils/index";
function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <AddStudent />
              <Display />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
