import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// export const NavigateUser = ({ user, loginPath, children, ...restProps }) => {
//   return (
//     <Routes>
//       <Route
//         {...restProps}
//         render={() => {
//           if (!user) {
//             return children;
//           }
//           if (user) {
//             return <Navigate replace to={{ pathname: loginPath }} />;
//           }
//           return null;
//         }}
//       />
//     </Routes>
//   );
// };

export function ProtectedRoute({ user, children, ...restProps }) {
  
  let location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
