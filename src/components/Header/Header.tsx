import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import LayoutContainer from '../LayoutContainer'

import ButtonPanel from './ButtonPanel'
import Nav from './Nav'
import YourCity from './YourCity'
import headerStyle from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={headerStyle.header}>
      <LayoutContainer>
        <div className={headerStyle.inner}>
          <YourCity />
          <Link to={'/'} className={headerStyle.logo}>
            TeamUp Group
          </Link>
          <Nav />
          <ButtonPanel />
        </div>
      </LayoutContainer>
    </header>
  )
}

export default Header
