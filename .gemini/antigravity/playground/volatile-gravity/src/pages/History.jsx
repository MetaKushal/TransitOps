import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FileText, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

const History = () => {
    const logs = [
        { id: 1, action: "CONSENT_GRANTED", details: "Health Records shared with Apollo Hospitals", time: "2 hours ago", user: "You", status: "success" },
        { id: 2, action: "DATA_ACCESSED", details: "HDFC Bank accessed Income Tax Returns", time: "5 hours ago", user: "HDFC Bank", status: "success" },
        { id: 3, action: "CONSENT_REVOKED", details: "Revoked access for Axis Bank KYC", time: "1 day ago", user: "You", status: "warning" },
        { id: 4, action: "TOKEN_EXPIRED", details: "Travel Insurance verification token expired", time: "2 days ago", user: "System", status: "neutral" },
    ];

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-brand-blue" />
                    Audit Logs & History
                </h2>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                        <h3 className="font-semibold text-slate-700">Recent Activity</h3>
                        <button className="text-sm text-brand-blue font-medium hover:underline">Download Report</button>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {logs.map((log) => (
                            <div key={log.id} className="p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                                <div className={`mt-1 h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${log.status === 'success' ? 'bg-green-100 text-green-600' :
                                        log.status === 'warning' ? 'bg-red-100 text-red-600' :
                                            'bg-slate-100 text-slate-600'
                                    }`}>
                                    {log.status === 'success' ? <ShieldCheck className="w-5 h-5" /> :
                                        log.status === 'warning' ? <AlertCircle className="w-5 h-5" /> :
                                            <FileText className="w-5 h-5" />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-semibold text-slate-900">{log.action}</h4>
                                        <span className="text-sm text-slate-500">{log.time}</span>
                                    </div>
                                    <p className="text-slate-600">{log.details}</p>
                                    <p className="text-xs text-slate-400 mt-2">Initiated by: {log.user}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default History;
