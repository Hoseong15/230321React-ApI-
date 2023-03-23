import React from 'react'
import { useState } from 'react'


const Login = () => {
  const selectList = [
    '가나','가봉','가이아나','감비아','과테말라','그레나다','그루지야','그리스','기니','기니비사우',  '나미비아','나우루','나이지리아','남아프리카 공화국','네덜란드','네팔','노르웨이','뉴질랜드',   '니제르','니카라과','대한민국','덴마크','도미니카','도미니카 공화국','독일','동티모르','라오스','라이베리아','라트비아','러시아'];
  const [select, setSelect] = useState('대한민국');
  const [showSelect, setShowSelect] = useState();

  const handleSelect = (e) => {setSelect(e.target.value);};
  const toggleSelect = () => {setShowSelect(!showSelect);};


  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  // if (inputValue === '') {
  //   <input className='input-email' type="email" placeholder='이메일' />
  // } else (
  //   <input className='input-email' type="email" placeholder='이메일' />
  // )
  
  return (
    <div>
      <div className="login-wrapper">
        <div className='nav'>
          <img src="https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/redstormsports.com/images/2019/7/9/nike_transparent_6.png" alt=""  width={120}/>
        </div>

        <p className='login-text'>가입 또는 로그인을 위해 이메일을 입력하세요.</p>

        <div className='nation'>
          <p>{select}</p>
          <button onClick={toggleSelect} className='changeButton'>
            변경
          </button>
          {showSelect && (
            <select onChange={handleSelect} className='select'>
              {selectList.map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          )}
           
        </div>

        <input className='input-email' type="email" placeholder='이메일' />
        

        <p className='text-nike'>계속 진행하면 나이키의 <span>개인 정보 처리 방침</span> 및 <span>이용약관</span>에 동의하게 됩니다</p>

        <button className='final-button'>계속</button>
        

      </div>
    </div>
  )
}

export default Login