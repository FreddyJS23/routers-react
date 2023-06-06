import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({children,userExiste,redirectTo}) => {
/* <h1>protected</h1> */

if(!userExiste) return <Navigate to={redirectTo} />

else return children

}
