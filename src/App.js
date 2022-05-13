import Header from './componenets/Header/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./componenets/Body/Home"
const  App=() =>{
  return (
   <BrowserRouter>
     <Header/>

   <Routes>
<Route path= "/" element ={<Home/>}/>
   </Routes>

   </BrowserRouter>
  
  );
}

export default App;
