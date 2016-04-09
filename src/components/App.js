/* eslint no-invalid-this: 0 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {pathPref} from '../config';

const viewportPath = `${pathPref}/viewport`;
const numberfactPath = `${pathPref}/numberfact`;

const App = function({children}, {router}) {
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
  ])
};

export default App;
