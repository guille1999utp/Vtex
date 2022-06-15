import routes from '../config/Routes'
import { BrowserRouter as Router,Route,Switch,RouteComponentProps, Redirect } from 'react-router-dom'

export default function Rutas() {
    return (
    <Router>
        <Switch>
            {
                routes.map((route,index)=>{
                    return <Route
                     key={index}
                     exact={route.exact}
                     path={route.path}
                     component={ route.component }
                     render={(props:RouteComponentProps<any>)=>(
                        <route.component
                        name={route.name}
                        {...props}
                        {...route.props}
                        />
                     )}
                     />
                })
            }
            <Redirect from='/' to='/'/>
        </Switch>
    </Router>
    )
}