import { createBrowserHistory } from 'history'
import * as React from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import Root from './routes/Root'

const hist = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={Root} />
        <Redirect from="/" to="/users" />
      </Switch>
    </Router>
  )
}

export default App
