import logo from './logo.svg';
import './App.css';
import {AuthComponet} from "./pages/Auth/Auth"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import  {ExpenseTracker} from "../src/pages/ExpenseTracker/ExpenseTracker"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<AuthComponet/>} ></Route>
          <Route path='/expensetracker' exact element={<ExpenseTracker/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
