import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

export default function Navigation() {
  const history = useHistory();

  return (
    <Container className="d-flex justify-content-center">
      <button
        type="button"
        onClick={() => history.push('/team')}
        className="btn btn-light border border-dark"
      >
        Team
      </button>
      <button
        type="button"
        onClick={() => history.push('/new')}
        className="btn btn-light border border-dark"
      >
        New
      </button>
    </Container>
  );
}
