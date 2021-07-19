import React, { Suspense, lazy } from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import AccountDetail from '../AccountDetail'
import CustomerDetail from '../CustomerDetail'

import Setting from '../Settings'
import { ProtectedRoute } from '../../components/ProtectedRoute'

import GlobalServiceMessage from '../../components/Settings/GlobalServiceMessage'
import DailyUserLimitsMaintenance from '../../components/Settings/DailyUserLimitsMaintenance'
import BankLevelLimitsMaintenance from '../../components/Settings/BankLevelLimitsMaintenance'
import Settings from '../../components/Settings'
import Edit from '../../components/Settings/Edit'
import CreateMessage from '../../components/Settings/GlobalServiceMessage/CreateMessage'


const Auth = lazy(() => import('../Auth'))
const Home = lazy(() =>import('../Home'))
const Routes:React.FC = () => {
    return (
     <Router>
         <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
                <Route exact component={Auth} path="/" />
                <ProtectedRoute exact path="/dashboard" component={Home}></ProtectedRoute>
                <Route component={Home} path="/home" />
                <Route component={CustomerDetail} path="/customer-detail"></Route>
                <Route component={AccountDetail} path="/account-detail"></Route>

                <Route  path={"/settings"} 
                    render={({match:{path}})=>(
                        <Setting>
                            <Switch>
                            <Route 
                                exact
                                path={path+"/"}
                                component={Settings}
                            />
                            <Route path={`${path}/bank-level-limits-maintenance`} component={BankLevelLimitsMaintenance}/>
                            <Route path={`${path}/daily-user-limits-maintenace`} component={DailyUserLimitsMaintenance} />
                            <Route path={`${path}/global-service-message`} component={GlobalServiceMessage} />
                            <Route path={'/settings/settings-edit'} component={Edit} />
                            <Route path={'/settings/create-global-service-message'} component={CreateMessage} />
                            <Redirect exact from={path+"/*"} to={path}/>
                            </Switch>
                        </Setting>
                    )}
                />

                

               
                {/* <Redirect to={"/dashboard/settings"} /> */}
                {/* not found route */}
                {/* <Route component={Setting} path="*"> </Route> */}
            </Switch>
         </Suspense>
     </Router> 
    )
}

export default Routes