
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/About';
import Work from './components/Work';
import Contact from "./components/Contact";
//import SelectionPage from "./components/SelectionPage";
function App() {
  return (
    
<BrowserRouter>
<Routes>

  <Route path="/" element={<Home/>}/>

   <Route path="/work" element={<Work/> }/>
   <Route path="/contact" element={<Contact/> }/>

</Routes>
</BrowserRouter>
  );

  
}

export default App;
