import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Second from "./Second";


export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element = {<Home/>}>
        </Route>
        <Route path="/second" element = {<Second/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}