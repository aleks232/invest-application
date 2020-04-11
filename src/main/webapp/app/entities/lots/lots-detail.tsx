import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './lots.reducer';
import { ILots } from 'app/shared/model/lots.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILotsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const LotsDetail = (props: ILotsDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { lotsEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Lots [<b>{lotsEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{lotsEntity.description}</dd>
          <dt>
            <span id="minPrice">Min Price</span>
          </dt>
          <dd>{lotsEntity.minPrice}</dd>
          <dt>
            <span id="startDate">Start Date</span>
          </dt>
          <dd>
            <TextFormat value={lotsEntity.startDate} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="endDate">End Date</span>
          </dt>
          <dd>
            <TextFormat value={lotsEntity.endDate} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>Employee</dt>
          <dd>{lotsEntity.employeeId ? lotsEntity.employeeId : ''}</dd>
        </dl>
        <Button tag={Link} to="/lots" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/lots/${lotsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ lots }: IRootState) => ({
  lotsEntity: lots.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LotsDetail);
