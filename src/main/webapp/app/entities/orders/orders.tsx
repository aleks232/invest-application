import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './orders.reducer';
import { IOrders } from 'app/shared/model/orders.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IOrdersProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Orders = (props: IOrdersProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { ordersList, match, loading } = props;
  return (
    <div>
      <h2 id="orders-heading">
        Orders
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp; Create new Orders
        </Link>
      </h2>
      <div className="table-responsive">
        {ordersList && ordersList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Price</th>
                <th>Lot</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {ordersList.map((orders, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${orders.id}`} color="link" size="sm">
                      {orders.id}
                    </Button>
                  </td>
                  <td>
                    <TextFormat type="date" value={orders.startDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={orders.endDate} format={APP_DATE_FORMAT} />
                  </td>
                  <td>{orders.price}</td>
                  <td>{orders.lotId ? <Link to={`lots/${orders.lotId}`}>{orders.lotId}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${orders.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${orders.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${orders.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Orders found</div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ orders }: IRootState) => ({
  ordersList: orders.entities,
  loading: orders.loading
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
