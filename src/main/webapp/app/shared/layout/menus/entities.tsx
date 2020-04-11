import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/accounts">
      Accounts
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee">
      Employee
    </MenuItem>
    <MenuItem icon="asterisk" to="/lots">
      Lots
    </MenuItem>
    <MenuItem icon="asterisk" to="/orders">
      Orders
    </MenuItem>
    <MenuItem icon="asterisk" to="/packages">
      Packages
    </MenuItem>
    <MenuItem icon="asterisk" to="/documents">
      Documents
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
