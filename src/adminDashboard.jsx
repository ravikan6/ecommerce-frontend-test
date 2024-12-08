import React from 'react';
import Dashboard from './Components/dashboard/dasboard';
import Sidebar from './Components/sidebar/sidebar';


const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                
                <div className="flex-1">
                    <Dashboard />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
