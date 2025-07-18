import { useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";

const DashBoardLayout = () => {


    const {userId, isLoaded} = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLoaded && !userId){
            navigate('/sign-in')
        }
    }, [isLoaded, userId, navigate]);

    if(!isLoaded) return "Loading..."
    return (
        <div className="dashboardlayout">
            <div className="menu">MENU</div>
            <div className="contact">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoardLayout;
