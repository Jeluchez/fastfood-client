import { FC} from 'react';
import { Route, Redirect } from 'react-router-dom';

type Props = {
    isLoggedIn: boolean
    path:string
    component: any
}

export const PublicRoute:FC<Props> = ({ isLoggedIn, component: Component, ...rest })=> {
    
    return (
        <Route {...rest}
            component={(props:any) => (
                (isLoggedIn)
                    ? (<Redirect to="/" />)
                    :  (<Component {...props} />)

            )}

        />
    )
}

