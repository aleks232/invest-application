import React from 'react';

import { Row, Col, Alert } from 'reactstrap';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <Alert color="danger">Страница не найдена.</Alert>
      </div>
    );
  }
}

export default PageNotFound;
