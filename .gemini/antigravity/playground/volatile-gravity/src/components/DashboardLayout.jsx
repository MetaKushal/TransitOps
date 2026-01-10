import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, History, UserCircle, LogOut, ShieldCheck } from 'lucide-react';

const DashboardLayout = ({ children }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-10 transition-transform md:translate-x-0 -translate-x-full md:relative">
                <div className="h-16 flex items-center px-6 border-b border-slate-800">
                    <Link to="/" className="flex items-center gap-2 text-white">
                        <ShieldCheck className="h-6 w-6 text-brand-blue" />
                        <span className="font-bold text-lg">iDCM</span>
                    </Link>
                </div>

                <div className="flex-1 py-6 px-3 space-y-1">
                    <Link
                        to="/dashboard"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive('/dashboard') ? 'bg-brand-blue text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                    >
                        <LayoutDashboard className="h-5 w-5" />
                        <span className="font-medium">Active Consents</span>
                    </Link>
                    <Link
                        to="/dashboard/new"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive('/dashboard/new') ? 'bg-brand-blue text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                    >
                        <PlusCircle className="h-5 w-5" />
                        <span className="font-medium">Grant New Consent</span>
                    </Link>
                    <Link
                        to="/dashboard/history"
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive('/dashboard/history') ? 'bg-brand-blue text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                    >
                        <History className="h-5 w-5" />
                        <span className="font-medium">History & Logs</span>
                    </Link>
                    <div className="pt-4 mt-4 border-t border-slate-800">
                        <Link
                            to="/dashboard/profile"
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive('/dashboard/profile') ? 'bg-brand-blue text-white' : 'hover:bg-slate-800 text-slate-400 hover:text-white'}`}
                        >
                            <UserCircle className="h-5 w-5" />
                            <span className="font-medium">My Profile</span>
                        </Link>
                    </div>
                </div>

                <div className="p-4 border-t border-slate-800">
                    <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors">
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Logout</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto w-full">
                <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 shadow-sm">
                    <h1 className="text-xl font-semibold text-slate-800">
                        {location.pathname === '/dashboard' ? 'Dashboard' :
                            location.pathname === '/dashboard/new' ? 'New Consent' :
                                location.pathname === '/dashboard/history' ? 'Consent History' : 'Profile'}
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">Welcome, <strong>Piyush Lakhwani</strong></span>
                        <div className="h-8 w-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold">
                            PL
                        </div>
                    </div>
                </header>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
