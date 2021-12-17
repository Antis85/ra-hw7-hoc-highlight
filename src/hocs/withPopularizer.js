import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';

const withPopularizer =
  (Component) =>
  ({ ...props }) => {
    if (props.views > 999) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    if (props.views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }
    return <Component {...props} />;
  };

  export default withPopularizer;
