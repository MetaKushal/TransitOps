import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, CheckCircle, XCircle, Activity, Users, FileCode } from 'lucide-react';

const AdminDashboard = () => {
    const [tokenSearch, setTokenSearch] = useState('');
    const [verificationResult, setVerificationResult] = useState(null);

    const handleVerify = () => {
        // Mock verification
        if (tokenSearch.length > 5) {
            setVerificationResult({
                valid: true,
                details: {
                    requester: "HDFC Bank Ltd.",
                    purpose: "Home Loan Processing",
                    scope: "ITR 2023-24",
                    grantedBy: "Piyush Lakhwani (Citizen)",
                    expiresAt: "2024-01-12T10:00:00Z"
                }
            });
        } else {
            setVerificationResult(null);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex">
            {/* Admin Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col fixed h-full z-10">
                <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
                    <div className="flex items-center gap-2 text-white">
                        <ShieldCheck className="h-6 w-6 text-brand-green" />
                        <span className="font-bold text-lg tracking-wide">DCM Admin</span>
                    </div>
                </div>
                <div className="flex-1 py-6 px-3 space-y-1">
                    <div className="px-3 py-2 bg-slate-800 text-white rounded-lg flex items-center gap-3">
                        <Activity className="h-5 w-5" />
                        <span className="font-medium">Token Verification</span>
                    </div>
                    <div className="px-3 py-2 hover:bg-slate-800 text-slate-400 rounded-lg flex items-center gap-3 cursor-pointer">
                        <Users className="h-5 w-5" />
                        <span className="font-medium">Fiduciary Registry</span>
                    </div>
                    <div className="px-3 py-2 hover:bg-slate-800 text-slate-400 rounded-lg flex items-center gap-3 cursor-pointer">
                        <FileCode className="h-5 w-5" />
                        <span className="font-medium">Audit Trail</span>
                    </div>
                </div>
            </aside>

            {/* Main Admin Content */}
            <main className="flex-1 ml-64 p-8">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Enterprise Validator Panel</h1>
                        <p className="text-slate-500">Zero-Trust Verification Gateway</p>
                    </div>
                    <Link to="/login" className="text-slate-500 hover:text-slate-700 font-medium">Logout</Link>
                </header>

                {/* Token Check Module */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 max-w-3xl">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Validate Consent Token</h2>
                    <div className="flex gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Paste consent token (e.g. tok_8x92...)"
                                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue font-mono"
                                value={tokenSearch}
                                onChange={(e) => setTokenSearch(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleVerify}
                            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                        >
                            Verify Access
                        </button>
                    </div>

                    {verificationResult && (
                        <div className="animate-fade-in">
                            {verificationResult.valid ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <CheckCircle className="h-6 w-6 text-green-600" />
                                        <h3 className="text-lg font-bold text-green-800">Token Valid & Active</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase font-bold mb-1">Grantor</span>
                                            <span className="text-slate-900 font-medium">{verificationResult.details.grantedBy}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase font-bold mb-1">Requester</span>
                                            <span className="text-slate-900 font-medium">{verificationResult.details.requester}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase font-bold mb-1">Scope / Data</span>
                                            <span className="text-slate-900 font-medium">{verificationResult.details.scope}</span>
                                        </div>
                                        <div>
                                            <span className="block text-slate-500 text-xs uppercase font-bold mb-1">Expiry</span>
                                            <span className="text-slate-900 font-mono font-medium">{verificationResult.details.expiresAt}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-center gap-3">
                                    <XCircle className="h-6 w-6 text-red-600" />
                                    <h3 className="text-lg font-bold text-red-800">Invalid or Expired Token</h3>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
