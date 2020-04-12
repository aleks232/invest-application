import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';
import { getUrlParameter } from 'react-jhipster';

import { IRootState } from 'app/shared/reducers';
import { activateAction, reset } from './activate.reducer';

const successAlert = (
  <Alert color="success">
    <strong>Ваш пользователь был активирован.</strong> Пожалуйста
    <Link to="/login" className="alert-link">
      Авторизуйтесь
    </Link>
    .
  </Alert>
);

const failureAlert = (
  <Alert color="danger">
    <strong>Ваш пользователь не может быть активирован.</strong> Пожалуйста используйте форму регистрации для авторизации.
  </Alert>
);

export interface IActivateProps extends StateProps, DispatchProps, RouteComponentProps<{ key: any }> {}

export const ActivatePage = (props: IActivateProps) => {
  useEffect(() => {
    const key = getUrlParameter('key', props.location.search);
    props.activateAction(key);
    return () => {
      props.reset();
    };
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h1>Activation</h1>
          {props.activationSuccess ? successAlert : undefined}
          {props.activationFailure ? failureAlert : undefined}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = ({ activate }: IRootState) => ({
  activationSuccess: activate.activationSuccess,
  activationFailure: activate.activationFailure
});

const mapDispatchToProps = { activateAction, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ActivatePage);
