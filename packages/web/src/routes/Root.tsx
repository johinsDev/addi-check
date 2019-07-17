import map from 'ramda/es/map'
import * as React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Header from '../modules/shared/Header'
import CreateUsersView from '../modules/users/create/CreateUserView'
import ListUsersView from '../modules/users/list/ListUserView'

export interface IRoute {
  layout: string
  name: string
  path: string
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
}

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'List Users',
    component: ListUsersView,
    layout: '/users',
  },
  {
    path: '/create',
    name: 'Create Users',
    component: CreateUsersView,
    layout: '/users',
  },
]

const switchRoutes = (
  <Switch>
    {map(
      (route: IRoute) => (
        <Route
          exact={true}
          path={`${route.layout}${route.path}`}
          component={route.component}
          key={route.name}
        />
      ),
      routes
    )}
  </Switch>
)

export default function Root({ location }: RouteComponentProps) {
  return (
    <>
      <Header />
      <main className="builder bg-white flex h-screen">
        <TransitionGroup className="h-full w-full">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="page-slide"
          >
            {switchRoutes}
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  )
}
