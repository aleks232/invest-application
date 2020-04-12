import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { NavDropdown } from './menu-components';
import {Home} from "app/modules/home/home";

const accountMenuItemsAuthenticated = (
  <>
    <MenuItem icon="wrench" to="/account/settings">
      Настройки
    </MenuItem>
    <MenuItem icon="lock" to="/account/password">
      Пароль
    </MenuItem>
    <MenuItem icon="sign-out-alt" to="/logout">
      Выход
    </MenuItem>
  </>
);

const accountMenuItems = (
  <>
    <MenuItem id="login-item" icon="sign-in-alt" to="/login">
      Авторизация
    </MenuItem>
    <MenuItem icon="sign-in-alt" to="/account/register">
      Регистрация
    </MenuItem>
  </>
);

export const AccountMenu = ({ isAuthenticated = false}) => (

  <NavDropdown icon="user" name="Пользователь" id="account-menu">
    {isAuthenticated ? accountMenuItemsAuthenticated : accountMenuItems}
  </NavDropdown>
);

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

export type IHomeProp = StateProps;

type StateProps = ReturnType<typeof mapStateToProps>;

// export default connect(mapStateToProps)(Home);
export default connect(mapStateToProps)(AccountMenu);
