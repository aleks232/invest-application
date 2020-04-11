import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './packages.reducer';
import { IPackages } from 'app/shared/model/packages.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPackagesDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PackagesDetail = (props: IPackagesDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { packagesEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Packages [<b>{packagesEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{packagesEntity.title}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{packagesEntity.description}</dd>
          <dt>Lot</dt>
          <dd>{packagesEntity.lotId ? packagesEntity.lotId : ''}</dd>
        </dl>
        <Button tag={Link} to="/packages" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/packages/${packagesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ packages }: IRootState) => ({
  packagesEntity: packages.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PackagesDetail);
