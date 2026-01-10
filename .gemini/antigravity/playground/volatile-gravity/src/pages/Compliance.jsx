import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Scale, Lock, Shield, Eye, FileDigit, Server } from 'lucide-react';

const Compliance = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="bg-slate-900 py-20 text-center text-white">
                <h1 className="text-4xl font-bold mb-4">DPDP Act 2023 Compliance</h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    How our architecture guarantees alignment with India's Digital Personal Data Protection Act.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Scale className="text-brand-blue" />
                            Core Principles
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Consent Artifacts", desc: "Every consent granted is stored as a digitally signed artifact containing purpose, duration, and scope.", icon: FileDigit },
                                { title: "Purpose Limitation", desc: "Technical controls ensure data accessed for 'Purpose A' cannot be processed for 'Purpose B'.", icon: Lock },
                                { title: "Data Minimization", desc: "We enforce field-level masking so only necessary fields (e.g., Credit Score, not full History) are revealed.", icon: Eye },
                                { title: "Storage Limitation", desc: "Automatic TTL (Time-To-Live) policies purge data caches immediately upon token expiry.", icon: Server }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">
                                        <item.icon className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Technical Implementation Mapping</h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <p className="text-xs font-bold text-blue-600 uppercase mb-1">Section 6(1): Consent</p>
                                <p className="text-sm text-slate-700">Implemented via <code className="bg-slate-100 px-1 rounded">ConsentManager</code> Service which issues JWTs signed with RS256.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <p className="text-xs font-bold text-blue-600 uppercase mb-1">Section 8(6): Security Safeguards</p>
                                <p className="text-sm text-slate-700">AES-256 Encryption at rest for all Personal Data. TLS 1.3 for data in motion.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <p className="text-xs font-bold text-blue-600 uppercase mb-1">Section 8(7): Data Breach Notification</p>
                                <p className="text-sm text-slate-700">Real-time specific anomaly detection triggers automated alerts to Data Protection Board.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4 py-2">
                                <p className="text-xs font-bold text-blue-600 uppercase mb-1">Section 12: Right to Grievance Redressal</p>
                                <p className="text-sm text-slate-700">Integrated "Raise Dispute" workflow in User Dashboard linked to Data Protection Officer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Compliance;
