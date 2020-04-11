import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './documents.reducer';
import { IDocuments } from 'app/shared/model/documents.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDocumentsDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DocumentsDetail = (props: IDocumentsDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { documentsEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          Documents [<b>{documentsEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="title">Title</span>
          </dt>
          <dd>{documentsEntity.title}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{documentsEntity.description}</dd>
          <dt>
            <span id="type">Type</span>
          </dt>
          <dd>{documentsEntity.type}</dd>
          <dt>Package</dt>
          <dd>{documentsEntity.packageId ? documentsEntity.packageId : ''}</dd>
        </dl>
        <Button tag={Link} to="/documents" replace color="info">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/documents/${documentsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ documents }: IRootState) => ({
  documentsEntity: documents.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsDetail);
