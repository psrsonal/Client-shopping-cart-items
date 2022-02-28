import { Menu } from 'antd'
import { RouterState } from 'connected-react-router'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { AppState } from '../../store/reducers'

function useActive (currentPath: string, path: string) {
    return currentPath === path ? "ant-menu-item-selected" : ""
}

const Navigation = () => {
  const router = useSelector<AppState, RouterState>(state => state.router)
  const pathname = router.location.pathname
  const isHome = useActive(pathname, "/")
  const isShop = useActive(pathname, "/shop")
  const isSignin = useActive(pathname, "/signin")
  const isSignup = useActive(pathname, "/signup")
  const isDashboard = useActive(pathname, getDashboarUrl())

  function getDashboarUrl () {
      let url = "/user/dashboard"
      if (isAuth()) {
          const {
              user: { role }
          } = isAuth() as Jwt

          if(role === 1) {
              url = "/admin.dashboard"
          }
      }
      return url
  }

  return <Menu mode="horizontal" selectable={false}>
      <Menu.Item className={isHome}>
          <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop}>
          <Link to="/shop">商城</Link>
      </Menu.Item>
      {
          !isAuth() && (
          <>
            <Menu.Item className={isSignin}>
                <Link to="/signin">登录</Link>
            </Menu.Item>
            <Menu.Item className={isSignup}>
                <Link to="/signup">注册</Link>
            </Menu.Item>
          </>
      )}
      {
          isAuth() && (
          <Menu.Item className={isDashboard}>
            <Link to={getDashboarUrl()}>dashboard</Link>
        </Menu.Item>
      )}
  </Menu>
}

export default Navigation