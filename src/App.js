import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import FlappyBird from "./games/flappyBird/FlappyBird";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/flappy-bird' element={<FlappyBird/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
