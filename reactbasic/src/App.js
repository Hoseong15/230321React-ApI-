import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Nav from './component/Nav';



// 1. 전체상품(ProductAll), 로그인, 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속시, 로그인페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지(ProductDetail)를 보여준다
// 4. 로그인하면 로그아웃 버튼이 보이고, 로그아웃하면 로그인 버튼이 보인다.

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
