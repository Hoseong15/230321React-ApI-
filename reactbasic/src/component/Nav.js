import React from 'react'
import image from '../나이키 로고.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,  faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'



const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']
  return (
    <div>
      <div className='login'>
        <ul className='login-nav'>
         {
          loginList.map((item, i) => {
            return (
              <li className='login-item' key={i}>{item}</li>
            )
          })
         }
        </ul>
      </div>

      <div className='nav'>
        <img width={120} src={image} alt="" />

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
            <input type="text" placeholder='검색' />
          </div>

          <div className='icon'>
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faCartShopping} />
          </div>

        </div> 

      </div>


    </div>
  )
}

export default Nav

