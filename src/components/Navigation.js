import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navigation() {
  const history = useHistory();

  return (
    <div>
      <button
        type="button"
        onClick={() => history.push('/')}
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
    </div>
  );
}
