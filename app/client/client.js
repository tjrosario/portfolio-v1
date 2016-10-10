import React from 'react';
import { render } from 'react-dom';
import 'font-awesome-sass-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '../pages/Layout';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Recommendations from '../pages/Recommendations';
import Skillset from '../pages/Skillset';

const app = document.getElementById('app')

render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ About }></IndexRoute>
      <Route path="home" component={ About }></Route>
      <Route path="experience" component={ Experience }></Route>
      <Route path="projects" component={ Projects }></Route>
      <Route path="recommendations" component={ Recommendations }></Route>
      <Route path="skillset" component={ Skillset }></Route>
    </Route>
  </Router>,
  app
)
