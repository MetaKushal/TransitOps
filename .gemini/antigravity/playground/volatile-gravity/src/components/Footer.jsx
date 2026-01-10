import React from 'react';
import { ShieldCheck, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <ShieldCheck className="h-6 w-6 text-brand-blue" />
                            <span className="text-lg font-bold">Digital Consent Manager</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            Enterprise-grade privacy management ensuring compliance with India's DPDP Act 2023.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Compliance</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Security</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Enterprise</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">API Reference</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Legal Guide</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">DPDP Compliance</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2024 Digital Consent Manager. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
