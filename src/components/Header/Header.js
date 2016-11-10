import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Standard
    </IndexLink>
    {' · '}
    <IndexLink to='/fibanacci' activeClassName='route--active'>
      Fibanacci
    </IndexLink>
  </div>
)

export default Header
