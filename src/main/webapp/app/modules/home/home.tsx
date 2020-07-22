import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

import { getEntities } from 'app/entities/lots/lots.reducer';

export interface IHomeProp extends StateProps, DispatchProps {}

export const Home = (props: IHomeProp) => {
  const { account, lots, getLots } = props;

  const lastThreeLots = React.useMemo(() => lots.slice(-3), [lots]);

  React.useEffect(() => {
    if(!lots.length){
      getLots();
    }
  }, [lots])

  return (
    <Row>
      <Col md="9">
        <h2>Добро пожаловать на портал инвестирования!</h2>
        <p className="lead"></p>
        {account && account.login ? (
          <div>
            <Alert color="success">Вы залогинились как пользователь: {account.firstName} {account.lastName}.</Alert>

            <p>Последние открытые лоты:</p>
            <ul>
              {
                lastThreeLots.map((lot) => (
                  <li key={lot.id}>
                    <Link to={`/lots/${lot.id}`}>
                      Лот {lot.id}: {lot.description}
                    </Link>
                  </li>
                ))
              }
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

const mapStateToProps = (storeState: IRootState) => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
  lots: storeState.lots.entities,
});

const mapDispatchToProps = { getLots: getEntities };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
