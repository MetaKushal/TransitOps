import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Clock, AlertCircle, Ban, ArrowRight, Shield } from 'lucide-react';

const Dashboard = () => {
    // Mock Data
    const [consents, setConsents] = useState([
        {
            id: 1,
            requester: "HDFC Bank Ltd.",
            purpose: "Home Loan Application #LA-8821",
            datatype: "Income Tax Returns (2023-24)",
            status: "active",
            expiry: "23h 15m",
            grantedAt: "2024-01-10T10:00:00",
            token: "tok_8x92...a1b2"
        },
        {
            id: 2,
            requester: "Apollo Hospitals",
            purpose: "Second Opinion Verification",
            datatype: "Health Records (Q4 2023)",
            status: "active",
            expiry: "47h 30m",
            grantedAt: "2024-01-09T14:30:00",
            token: "tok_7z81...c3d4"
        },
        {
            id: 3,
            requester: "Axis Bank",
            purpose: "KYC Update",
            datatype: "Aadhaar e-KYC Data",
            status: "expired",
            expiry: "Expired",
            grantedAt: "2024-01-01T09:00:00",
            token: "tok_9y12...f5g6"
        }
    ]);

    const handleRevoke = (id) => {
        // Mock revoke
        setConsents(consents.map(c => c.id === id ? { ...c, status: 'revoked', expiry: 'Revoked' } : c));
    };

    return (
        <DashboardLayout>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Active Consents</h3>
                        <Shield className="h-5 w-5 text-brand-blue" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{consents.filter(c => c.status === 'active').length}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Pending Requests</h3>
                        <Clock className="h-5 w-5 text-orange-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">1</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-slate-500 font-medium">Revoked Access</h3>
                        <Ban className="h-5 w-5 text-red-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900">{consents.filter(c => c.status === 'revoked').length}</p>
                </div>
            </div>

            {/* Consents List */}
            <h2 className="text-lg font-bold text-slate-800 mb-6">Your Data Consents</h2>
            <div className="grid gap-6">
                {consents.map((consent) => (
                    <div key={consent.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-xl">
                                        {consent.requester[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">{consent.requester}</h3>
                                        <p className="text-slate-500 text-sm mb-1">{consent.purpose}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                                                {consent.datatype}
                                            </span>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${consent.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' :
                                                    consent.status === 'revoked' ? 'bg-red-50 text-red-700 border-red-200' :
                                                        'bg-slate-50 text-slate-600 border-slate-200'
                                                }`}>
                                                {consent.status.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end gap-3 min-w-[150px]">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-400 uppercase font-semibold">Expires In</div>
                                        <div className={`text-lg font-mono font-medium ${consent.status === 'active' ? 'text-slate-900' : 'text-slate-400'
                                            }`}>
                                            {consent.expiry}
                                        </div>
                                    </div>

                                    {consent.status === 'active' && (
                                        <button
                                            onClick={() => handleRevoke(consent.id)}
                                            className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                                        >
                                            <Ban className="w-4 h-4" />
                                            Revoke Access
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 font-mono">
                            <span>Token: {consent.token}</span>
                            <span>Granted: {new Date(consent.grantedAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
