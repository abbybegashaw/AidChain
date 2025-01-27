import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar"

function AppLayout ({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="w-screen">
            {/* <div className="w-full flex justify-between bg-gray-100 px-8 py-4">
                <span className="text-2xl font-bold">
                    <h1>AidChain</h1>
                </span>
                <span>
                    <ul className="flex justify-between gap-3 items-center font-semibold">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Donors</li>
                        <li>Volunteers</li>
                        <li>Admin</li>
                    </ul>
                </span>
                <span>ABC</span>
            </div> */}
            <Navbar/>
            <div className="grid grid-cols-[300px_1fr] h-[calc(100vh_-_64px)]">
                <div>
                    <Sidebar />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )

}

export default AppLayout;
