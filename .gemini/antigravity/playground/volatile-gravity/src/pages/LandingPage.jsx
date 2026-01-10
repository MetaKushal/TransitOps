import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Lock, Shield, FileText, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
                            <Shield className="w-4 h-4" />
                            DPDP Act 2023 Compliant
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                            Privacy-First Digital <br />
                            <span className="text-brand-blue">Consent Management</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Empowering citizens and enterprises with secure, tokenized, and time-bound data access control. Aligned with India's Digital Personal Data Protection Act.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/signup" className="flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                                Request Demo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-100 rounded-full blur-3xl opacity-50"></div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="py-24 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge: Data Privacy in the Digital Age</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                With the DPDP Act 2023, managing user consent is no longer optional—it's a legal mandate. Traditional "agree to all" checkboxes are insufficient and expose enterprises to massive liabilities.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Lack of granular purpose limitation",
                                    "No centralized mechanism to revoke consent",
                                    "Permanent data storage without expiry",
                                    "Risk of heavy penalties (up to ₹250 Cr)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 min-w-5 min-h-5 rounded-full bg-red-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-brand-green" />
                                The Solution: Granular Consent Engine
                            </h3>
                            <p className="text-slate-600 mb-6">
                                Our platform provides a zero-trust, token-based architecture ensuring data is shared only for a specific purpose and duration.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: "Time-Bound Access", desc: "Set strict expiry for every data token." },
                                    { title: "Purpose Limitation", desc: "Data used only for declared purpose." },
                                    { title: "Immutable Audit Logs", desc: "Every access request is cryptographically logged." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <div className="p-2 bg-blue-50 rounded-lg h-fit text-brand-blue">
                                            {i === 0 ? <Lock className="w-5 h-5" /> : i === 1 ? <FileText className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                            <p className="text-sm text-slate-500">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Compliance Table */}
            <section className="py-24 bg-slate-50 border-y border-slate-200" id="compliance">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Aligned with DPDP Act, 2023</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We translate complex legal mandates into enforceable technical controls.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-100 border-b border-slate-200">
                                        <th className="p-5 font-semibold text-slate-700">DPDP Principle</th>
                                        <th className="p-5 font-semibold text-slate-700">System Implementation</th>
                                        <th className="p-5 font-semibold text-slate-700">Compliance Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5 text-slate-900 font-medium">Purpose Limitation</td>
                                        <td className="p-5 text-slate-600">Data tokens are cryptographically bound to specific purpose codes.</td>
                                        <td className="p-5"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Compliant</span></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5 text-slate-900 font-medium">Storage Limitation</td>
                                        <td className="p-5 text-slate-600">Automated "TTL (Time To Live)" expiry on all access tokens.</td>
                                        <td className="p-5"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Compliant</span></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5 text-slate-900 font-medium">Right to Erasure</td>
                                        <td className="p-5 text-slate-600">One-click "Revoke & Purge" signals sent to data processors.</td>
                                        <td className="p-5"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Compliant</span></td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-5 text-slate-900 font-medium">Data Fiduciary Accountability</td>
                                        <td className="p-5 text-slate-600">Immutable, tamper-proof audit logs for every transaction.</td>
                                        <td className="p-5"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Compliant</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real-World Applications */}
            <section className="py-24 bg-white" id="impact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Real-World Applications</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Healthcare",
                                desc: "Patients share medical history with specialists for 24 hours only.",
                                icon: "🏥",
                                color: "bg-blue-50 border-blue-100"
                            },
                            {
                                title: "Fintech",
                                desc: "Users grant one-time access to bank statements for loan processing.",
                                icon: "💳",
                                color: "bg-indigo-50 border-indigo-100"
                            },
                            {
                                title: "Government",
                                desc: "Citizens approve address verification for Digital ID without exposing details.",
                                icon: "🏛️",
                                color: "bg-orange-50 border-orange-100"
                            }
                        ].map((app, i) => (
                            <div key={i} className={`p-8 rounded-2xl border ${app.color} hover:shadow-lg transition-shadow`}>
                                <div className="text-4xl mb-4">{app.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.title}</h3>
                                <p className="text-slate-600">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-brand-dark text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to secure your data ecosystem?</h2>
                    <p className="text-lg text-slate-300 mb-10">
                        Start enforcing privacy principles today. Free for individual citizens, enterprise plans available.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/signup" className="px-8 py-4 bg-brand-blue hover:bg-blue-600 rounded-lg font-bold text-lg transition-colors">
                            Get Started Now
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 rounded-lg font-bold text-lg transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
