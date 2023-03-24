import React, { useState } from 'react'
import image from '../나이키 로고.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'


const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']
  const navigate = useNavigate()
  const goToLogin = ()=> {
   navigate('/login')
  }


  // onkeypress 유저가 키를 눌렀을 때 발생한다.
  // alt , ctrl, shift, ESC 키에는 onkeypress 먹지 않는다.
  // Enter(조건문)

  // const [useInput, setUseInput] = useState('');

  // const getValue = (e) => {
  //   setUseInput(e.target.value)
  // }

  const search = (e) => {
    if(e.key === 'Enter') {

    } 
  }

  return (
    <div>
      <div className='login'>
        <ul className='login-nav'>
         {
          loginList.map((item, i) => {
           if(i === loginList.length - 1) {
            return (
              <li className='login-item' key={i} onClick={goToLogin}>{item}</li>
            ) 
           } else {
            return  <li className='login-item' key={i}>{item}</li>
           }
          })
         }
        </ul>
      </div>

      <div className='nav'>
        <img width={120} src={image} alt="" onClick={() => navigate('/')}/>

        <ul className='gnb-list'>
          {
            menuList.map((menu, i) => {
              return (
                <li className='gnb-item' key={i}>{menu}</li>
              )
            })
          }
        </ul>

        <div className='icon-list'>
          <div className='search-box'>
            <FontAwesomeIcon  className='ic-search' icon={faMagnifyingGlass} />
            <input type="search" placeholder='검색' onKeyPress={search}/>
          </div>

          <div>
           <FontAwesomeIcon className='icon' icon={faHeart} />
           <FontAwesomeIcon className='icon' icon={faCartShopping} />
          </div>

        </div> 

      </div>


    </div>
  )
}

export default Nav