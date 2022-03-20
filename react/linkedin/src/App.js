import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUsers, faBriefcase, faCommentDots, faBell, faTh, faTimes } from '@fortawesome/free-solid-svg-icons';

import Navbar from './containers/Navbar';

import Home from './containers/pages/Home';
import MyNetwork from './containers/pages/MyNetwork';
import Jobs from './containers/pages/Jobs';
import Messaging from './containers/pages/Messaging';
import Notifications from './containers/pages/Notifications';
import Me from './containers/pages/Me';
import Work from './containers/pages/Work';
import Connections from './components/Connections.js';
import ViewPost from './components/home/ViewPost.js';

const App = () => {
  library.add(fab, faHome, faUsers, faBriefcase, faCommentDots, faBell, faTh, faTimes);
  return (
    <Fragment>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/my-network" exact component={MyNetwork} />
        <Route path="/connections" exact component={Connections} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/messaging" exact component={Messaging} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/me" exact component={Me} />
        <Route path="/work" exact component={Work} />
        <Route path="/view-post" exact component={ViewPost} />
      </Switch>
    </Fragment>
  );
};

export default App;
