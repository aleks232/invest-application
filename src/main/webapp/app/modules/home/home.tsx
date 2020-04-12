import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
        <h2>Добро пожаловажать на портал инвестирования!</h2>
        <p className="lead"></p>
        {account && account.login ? (
          <div>
            <Alert color="success">Вы залогинились как пользователь: {account.firstName} {account.lastName}.</Alert>

            <p>Последние открытые лоты:</p>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Лот 6: Покупка партии тюльпанов
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Лот 11: Покупка партии гвоздик
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Лот 23: Покупка партии роз
                </a>
              </li>
            </ul>

            <p>
              Последние 5 пользователей получившие выплаты:
            </p>
            <ul>
              <li>
                Тобянин Сергей Семёнович
              </li>
              <li>
                Сяббарова Елена Юрьевна
              </li>
              <li>
                Бенькова Гульнара Валерьевна
              </li>
              <li>
                Танчиков Евгений Александрович
              </li>
              <li>
                Корбенко Александр Николаевич
              </li>
            </ul>
          </div>

        ) : (
          <div>
            <Alert color="warning">
              Пожалуйста авторизуйтесь для дальнейшей работы
              <Link to="/login" className="alert-link">
                {' '}
                Авторизоваться
              </Link>
              {/* , you can try the default accounts: */}
              {/* <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;) */}
              {/* <br />- User (login=&quot;user&quot; and password=&quot;user&quot;). */}
            </Alert>

            <Alert color="warning">
              Если вы не авторизованы&nbsp;
              <Link to="/account/register" className="alert-link">
                Зарегистрироваться
              </Link>
            </Alert>
          </div>
        )}
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
