import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from '@openbanking/ui-common/lib/Header'
import ErrorBoundary from '@openbanking/ui-common/lib/ErrorBoundary'
import Loading from '@openbanking/ui-common/lib/Loading'
import Error from '@openbanking/ui-common/lib/Error'
import NotFound from '@openbanking/ui-common/lib/NotFound'
import Accounts from './Accounts'
import Dashboard from './Dashboard'
import Loader from './Loader'
import Redirecting from './Redirecting'
import PrivateRoute from './PrivateRoute'
import FlexPay from './FlexPay'
import Reccomend from './Reccomend'
import SchduledPayments from './SchduledPayments'
import './App.css'
import Fdp from './Fdp'

// views

const App = () => {
    const loading = useSelector((state) => state.common.loading)
    const error = useSelector((state) => state.common.error)
    return (
        <div className="app">
            {loading && <Loading />}
            <Header />
            <ErrorBoundary>
                {error && <Error />}
                <div className="section-content">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/loading" component={Loader} />
                            <Route
                                exact
                                path="/redirecting"
                                render={() => <Redirecting />}
                            />
                            <PrivateRoute
                                exact
                                path="/fdp"
                                render={() => <Fdp />}
                            />
                            <PrivateRoute
                                    exact
                                    path="/reccomend"
                                    render={() => <Reccomend/>}
                                 />
                             <PrivateRoute
                                exact
                                path="/illustrate"
                                render={() => <FlexPay/>}
                             />
                            <Route path="*" render={() => <Fdp />} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </ErrorBoundary>
        </div>
    )
}

export default App
