"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
    return (
        <SectionWrapper id="pricing" className="py-20 md:py-28 bg-white">

            <SectionHeader
                title="Simple & Transparent Pricing"
                subtitle="Start free, scale as you grow"
                description="Nexora offers flexible pricing for schools of all sizes."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                {/* FREE */}
                <div className="border rounded-2xl p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Free</h3>
                    <p className="text-3xl font-bold mb-4">₹0</p>
                    <ul className="text-sm text-gray-600 space-y-2 mb-6">
                        <li>Basic School Management</li>
                        <li>Limited Teacher Access</li>
                        <li>Manual Attendance</li>
                    </ul>
                    <Button className="w-full">Get Started</Button>
                </div>

                {/* PRO */}
                <div className="border-2 border-blue-600 rounded-2xl p-6 text-center shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Pro</h3>
                    <p className="text-3xl font-bold mb-4">₹499/mo</p>
                    <ul className="text-sm text-gray-600 space-y-2 mb-6">
                        <li>All Free Features</li>
                        <li>Smart Attendance</li>
                        <li>Teacher Hiring</li>
                        <li>Analytics Dashboard</li>
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Upgrade Now
                    </Button>
                </div>

                {/* ENTERPRISE */}
                <div className="border rounded-2xl p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                    <p className="text-3xl font-bold mb-4">Custom</p>
                    <ul className="text-sm text-gray-600 space-y-2 mb-6">
                        <li>All Pro Features</li>
                        <li>Custom Integrations</li>
                        <li>Dedicated Support</li>
                    </ul>
                    <Button className="w-full" variant="outline">
                        Contact Us
                    </Button>
                </div>

            </div>
        </SectionWrapper>
    );
};