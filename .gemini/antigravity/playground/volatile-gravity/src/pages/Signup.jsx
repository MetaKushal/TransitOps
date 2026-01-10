import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { Link } from 'react-router-dom';
import { User, Building2, ShieldAlert } from 'lucide-react';

const Signup = () => {
    const [role, setRole] = useState('citizen');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement signup logic
        window.location.href = '/dashboard';
    };

    return (
        <AuthLayout
            title="Create your account"
            subtitle={<>Already have an account? <Link to="/login" className="font-medium text-brand-blue hover:text-blue-500">Sign in</Link></>}
        >
            <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Select Account Type</label>
                <div className="grid grid-cols-3 gap-2">
                    <button
                        type="button"
                        onClick={() => setRole('citizen')}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg text-sm font-medium transition-all ${role === 'citizen' ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <User className="h-5 w-5 mb-1" />
                        Citizen
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('enterprise')}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg text-sm font-medium transition-all ${role === 'enterprise' ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <Building2 className="h-5 w-5 mb-1" />
                        Enterprise
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole('admin')}
                        className={`flex flex-col items-center justify-center p-3 border rounded-lg text-sm font-medium transition-all ${role === 'admin' ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                    >
                        <ShieldAlert className="h-5 w-5 mb-1" />
                        Admin
                    </button>
                </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {role === 'enterprise' && (
                    <div>
                        <label htmlFor="orgName" className="block text-sm font-medium text-slate-700">
                            Organization Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="orgName"
                                name="orgName"
                                type="text"
                                required
                                className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                            />
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
                            First Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
                            Last Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                        Email address
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                        Password
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="block w-full appearance-none rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-brand-blue focus:outline-none focus:ring-brand-blue sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-brand-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-colors"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default Signup;
