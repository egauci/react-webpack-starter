/* eslint no-invalid-this: 0 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const App = function({children}, {router}) {
  const viewportClass = router.isActive('viewport') ? 'active' : 'inactive';
  const numberfactClass = router.isActive('numberfact') ? 'active' : 'inactive';
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <nav>
          <Link className={viewportClass} to="viewport">Show Viewport Values</Link>
          <Link className={numberfactClass} to="numberfact">Show a Number Fact</Link>
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
