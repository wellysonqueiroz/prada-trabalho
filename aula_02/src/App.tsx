import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Sobre } from "./pages/Sobre/index";
import { Contatos} from "./pages/Contatos/index"
import { Menu } from "./components/Menu";
import { Form } from "./pages/Form";



function App() {
  return (
   <BrowserRouter>
   <Menu />
  <Routes>
    <Route  path='/' element={<Home/>} />
    <Route  path='/sobre' element={<Sobre/>} />
    <Route path='/contatos' element={<Contatos/>} />
    <Route path="/form" element={<Form />} />
  </Routes>
<Outlet />
   </BrowserRouter>
  );
};

export default App;
