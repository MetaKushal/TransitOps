import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Check, Shield, Search, Calendar, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
    { id: 1, name: 'Select Service', icon: Search },
    { id: 2, name: 'Choose Data', icon: FileText },
    { id: 3, name: 'Purpose & Duration', icon: Calendar },
    { id: 4, name: 'Review & Grant', icon: Shield },
];

const NewConsent = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        requester: '',
        dataType: '',
        purpose: '',
        duration: '24h'
    });

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else {
            // Submit
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate('/dashboard'); // Go back to dashboard mocked
            }, 2000);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <DashboardLayout>
            <div className="max-w-3xl mx-auto">
                {/* Stepper */}
                <div className="mb-12">
                    <div className="flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 -z-10"></div>
                        {steps.map((step) => {
                            const Icon = step.icon;
                            const isCompleted = step.id < currentStep;
                            const isCurrent = step.id === currentStep;

                            return (
                                <div key={step.id} className="flex flex-col items-center bg-slate-50 px-2">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${isCompleted ? 'bg-green-500 border-green-500 text-white' :
                                            isCurrent ? 'bg-white border-brand-blue text-brand-blue' :
                                                'bg-white border-slate-300 text-slate-300'
                                        }`}>
                                        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                                    </div>
                                    <span className={`mt-2 text-xs font-medium ${isCurrent ? 'text-brand-blue' : 'text-slate-500'}`}>
                                        {step.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                    <div className="p-8">
                        {currentStep === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Who is requesting access?</h2>
                                <div className="relative mb-6">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <input type="text" placeholder="Search for banks, hospitals, or agencies..." className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:outline-none" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {['HDFC Bank', 'Apollo Hospitals', 'LIC India', 'Income Tax Dept'].map(org => (
                                        <button
                                            key={org}
                                            onClick={() => setFormData({ ...formData, requester: org })}
                                            className={`p-4 border rounded-lg text-left hover:bg-slate-50 transition-colors flex items-center gap-3 ${formData.requester === org ? 'border-brand-blue ring-1 ring-brand-blue bg-blue-50' : 'border-slate-200'}`}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                                                {org[0]}
                                            </div>
                                            <span className="font-semibold text-slate-900">{org}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">What data do you want to share?</h2>
                                <div className="space-y-3">
                                    {[
                                        { id: 'kyc', title: 'KYC Documents', desc: 'Aadhaar, PAN Card details' },
                                        { id: 'financial', title: 'Financial Statements', desc: 'Bank statements, ITR (Last 3 years)' },
                                        { id: 'health', title: 'Health Records', desc: 'Prescriptions, Lab Reports, Vaccination History' },
                                    ].map(type => (
                                        <button
                                            key={type.id}
                                            onClick={() => setFormData({ ...formData, dataType: type.title })}
                                            className={`w-full p-4 border rounded-lg text-left hover:bg-slate-50 transition-colors ${formData.dataType === type.title ? 'border-brand-blue ring-1 ring-brand-blue bg-blue-50' : 'border-slate-200'}`}
                                        >
                                            <h3 className="font-semibold text-slate-900">{type.title}</h3>
                                            <p className="text-sm text-slate-500">{type.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Purpose & Duration</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Purpose of Access</label>
                                        <select
                                            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-brand-blue focus:outline-none"
                                            value={formData.purpose}
                                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                        >
                                            <option value="">Select a purpose...</option>
                                            <option value="Loan Processing">Loan Processing</option>
                                            <option value="Medical Consultation">Medical Consultation</option>
                                            <option value="Identity Verification">Identity Verification</option>
                                            <option value="Employment Check">Background/Employment Check</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Validity Duration (TTL)</label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {['1h', '24h', '7d', '30d'].map(dur => (
                                                <button
                                                    key={dur}
                                                    onClick={() => setFormData({ ...formData, duration: dur })}
                                                    className={`py-2 border rounded-lg font-medium text-sm ${formData.duration === dur ? 'bg-brand-blue text-white border-brand-blue' : 'hover:bg-slate-50 text-slate-700 border-slate-300'}`}
                                                >
                                                    {dur}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-2">
                                            *Token will automatically expire after this duration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Shield className="w-8 h-8 text-brand-blue" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to Grant Consent?</h2>
                                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                                    You are about to share <strong>{formData.dataType}</strong> with <strong>{formData.requester}</strong> for <strong>{formData.duration}</strong>.
                                </p>

                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left max-w-md mx-auto mb-8">
                                    <h4 className="font-semibold text-slate-800 mb-2 text-sm uppercase tracking-wider">Consent Summary</h4>
                                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                        <dt className="text-slate-500">Requester:</dt> <dd className="font-medium text-slate-900">{formData.requester}</dd>
                                        <dt className="text-slate-500">Data Type:</dt> <dd className="font-medium text-slate-900">{formData.dataType}</dd>
                                        <dt className="text-slate-500">Purpose:</dt> <dd className="font-medium text-slate-900">{formData.purpose || 'Not specified'}</dd>
                                        <dt className="text-slate-500">Expiry:</dt> <dd className="font-medium text-slate-900">{formData.duration}</dd>
                                    </dl>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-between items-center">
                        <button
                            onClick={handleBack}
                            className={`text-slate-600 font-medium hover:text-slate-900 ${currentStep === 1 ? 'invisible' : ''}`}
                        >
                            Back
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentStep === 1 && !formData.requester || currentStep === 2 && !formData.dataType || loading}
                            className={`flex items-center gap-2 px-6 py-2.5 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-all ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Generating Token...' : currentStep === 4 ? 'Confirm & Grant' : 'Continue'}
                            {!loading && currentStep !== 4 && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default NewConsent;
