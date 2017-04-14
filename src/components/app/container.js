// High-order container to isolate App component from react-router API
import React from 'react';
import PropTypes from 'prop-types';
import ContainedApp from './App';
const hoc = (AppComponent) => {
  const App = (props, {router}) => {
    const {viewportPath, numberfactPath} = props.config.toObject();
    const viewportActive = router.isActive(viewportPath);
    const numberfactActive = router.isActive(numberfactPath);
    return (
      <AppComponent
      {...props}
      viewportActive={viewportActive}
      numberfactActive={numberfactActive} />
    );
  };
  App.contextTypes = {
    router: PropTypes.object
  };
  App.propTypes = {
    config: PropTypes.object.isRequired
  };
  return App;
};

export default hoc(ContainedApp);
