import React, { Component, Fragment } from 'react';
import '../styles/App.css';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import CreateLink from './CreateLink'
import LinkList from './LinkList'
import Login from './Login'

class App extends Component {
  render() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  )
}
  // render() {
  //   return (
  //     <Fragment>
  //       <CreateLink />
  //       <LinkList />
  //     </Fragment>
  //   );
  // }
}

export default App;
