import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center items-center gap-2 mb-6">
                    <ShieldCheck className="h-10 w-10 text-brand-blue" />
                </Link>
                <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-2 text-center text-sm text-slate-600">
                        {subtitle}
                    </p>
                )}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-200">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
