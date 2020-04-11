import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './accounts.reducer';
import { IAccounts } from 'app/shared/model/accounts.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IAccountsUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const AccountsUpdate = (props: IAccountsUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { accountsEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/accounts');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.expiredDate = convertDateTimeToServer(values.expiredDate);

    if (errors.length === 0) {
      const entity = {
        ...accountsEntity,
        ...values
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="investApplicationApp.accounts.home.createOrEditLabel">Create or edit a Accounts</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : accountsEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="accounts-id">ID</Label>
                  <AvInput id="accounts-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="loginLabel" for="accounts-login">
                  Login
                </Label>
                <AvField id="accounts-login" type="text" name="login" />
              </AvGroup>
              <AvGroup>
                <Label id="isDeletedLabel" for="accounts-isDeleted">
                  Is Deleted
                </Label>
                <AvField id="accounts-isDeleted" type="string" className="form-control" name="isDeleted" />
              </AvGroup>
              <AvGroup>
                <Label id="passwordLabel" for="accounts-password">
                  Password
                </Label>
                <AvField id="accounts-password" type="text" name="password" />
              </AvGroup>
              <AvGroup>
                <Label id="expiredDateLabel" for="accounts-expiredDate">
                  Expired Date
                </Label>
                <AvInput
                  id="accounts-expiredDate"
                  type="datetime-local"
                  className="form-control"
                  name="expiredDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.accountsEntity.expiredDate)}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/accounts" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  accountsEntity: storeState.accounts.entity,
  loading: storeState.accounts.loading,
  updating: storeState.accounts.updating,
  updateSuccess: storeState.accounts.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(AccountsUpdate);
