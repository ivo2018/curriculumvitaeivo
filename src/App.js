
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/About';
import Work from './components/Work';
function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>

   <Route path="/Work" element={<Work/> }/>
   


</Routes>
</BrowserRouter>
  );
}

export default App;
