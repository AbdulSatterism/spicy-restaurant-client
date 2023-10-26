import React from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default AdminRoute;