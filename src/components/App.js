import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const App = function({config, children}, {router}) {
  const {viewportPath, numberfactPath} = config.toObject();
  const viewportClass = router.isActive(viewportPath) ? 'active' : 'inactive';
  const numberfactClass = router.isActive(numberfactPath) ? 'active' : 'inactive';
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <nav>
          <Link className={viewportClass} to={viewportPath}>Show Viewport Values</Link>
          <Link className={numberfactClass} to={numberfactPath}>Show a Number Fact</Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

App.contextTypes = {
  router: PropTypes.object
};

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  config: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({config: state.get('config')});
export default connect(mapStateToProps)(App);
