
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/About';
import Work from './components/Work';
//import SelectionPage from "./components/SelectionPage";
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>

   <Route path="/work" element={<Work/> }/>

</Routes>
</BrowserRouter>
  );

  
}

export default App;
