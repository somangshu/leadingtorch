import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Careers from './Careers';
import Contact from './Contact';
import GenericNotFound from './GenericNotFound';
import Home from './Home';
import ServiceWrapper from './ServiceWrapper';
import ServiceDetail from './ServiceDetail';
import BlogDetail from './BlogDetail';
import BlogDetail1 from './BlogDetail1';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/services' component={ServiceWrapper} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/contact-us' component={Contact} />
      <Route path='/careers' component={Careers} />
      <Route path='/service/:slug' component={ServiceDetail} />
      <Route path='/blog/legal-ai' component={BlogDetail} />
      <Route path='/blog/automation-engineering' component={BlogDetail1} />
      <Route component={GenericNotFound} />
    </Switch>
  </main>
)

export default Main
