import React from 'react';
import AuthUserContext from '../Session/context';

import { withAuthorization } from '../Session';

const HomePage = props => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <AuthUserContext.Consumer>
      {authUser => (
        <div>
          <h1>
            User email: <span className='text-danger'>{authUser.email}</span>
          </h1>
          <h1>
            User id: <span className='text-success'>{authUser.uid}</span>
          </h1>
          {console.log(authUser)}
        </div>
      )}
    </AuthUserContext.Consumer>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
