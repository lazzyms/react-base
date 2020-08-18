import React from 'react';
import Sidebar from "react-sidebar";
import Product from './components/Product';
import Users from './components/Users';
import Home from './components/Home';
import Login from './Login';
import SidebarRoute from './components/SidebarRoute';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { userLogout } from './actions/userActions'

const mql = window.matchMedia(`(min-width: 800px)`);

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/users",
    main: () => <Users />
  },
  {
    path: "/products",
    main: () => <Product />
  },
  {
    path: "/login",
    main: () => <Login />
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      isAuthenticated: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  handleLogout() {
    this.props.onUserLogout()
  }

  render() {
    // console.log(this.props.user)
    if (!this.props.user) {
      return <Router>
        <Redirect to="/login" />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </Router>
    } else {
      return (
        <Router>
          <Sidebar
            sidebar={<SidebarRoute handleUserLogout={this.handleLogout} />}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            shadow={false}
            docked={true}

          >
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </Sidebar>
        </Router>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapActionToProps = {
  onUserLogout: userLogout
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log({ propsFromState, propsFromDispatch, ownProps })
//   return {};
// }

export default connect(mapStateToProps, mapActionToProps)(App);
