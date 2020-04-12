import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Таблицы" id="entity-menu" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/accounts">
      Учетные записи
    </MenuItem>
    <MenuItem icon="asterisk" to="/employee">
      Сотрудники
    </MenuItem>
    <MenuItem icon="asterisk" to="/lots">
      Лоты
    </MenuItem>
    <MenuItem icon="asterisk" to="/orders">
      Заказы
    </MenuItem>
    <MenuItem icon="asterisk" to="/packages">
      Пакеты документов
    </MenuItem>
    <MenuItem icon="asterisk" to="/documents">
      Документы
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
