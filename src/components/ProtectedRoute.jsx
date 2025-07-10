import {Navigate} from 'react-router'
import useAuth from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute