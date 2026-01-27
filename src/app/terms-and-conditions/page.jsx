
import React from 'react';

export const metadata = {
    title: "Terms and Conditions | Calico",
    description: "Terms and Conditions for Calico Pet Care LLP.",
};

const TermsAndConditions = () => {
    return (
        <section className="w-full bg-[#FFFBF5] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-[#1C1B1F] mb-8 text-center">
                    Terms and Conditions
                </h1>

                <div className="space-y-6 font-poppins text-[#1C1B1F]/80 leading-relaxed text-sm md:text-base">

                    <p>
                        Calico Pet Care LLP ("Calico") operates a technology platform that allows pet parents to discover veterinary clinics, book appointments, make payments, manage subscriptions, and access pet medical records, while allowing clinics and doctors to manage rosters, appointments, and records. Calico is not a veterinary service provider and does not offer medical care. All medical services, including diagnosis, treatment, prescriptions, and clinical decisions, are provided solely by independent veterinary clinics and doctors using the platform.
                    </p>

                    <p>
                        Users must be at least 18 years old and must provide accurate and complete information when creating an account. Access to Calico is provided through OTP-based login, and no passwords are stored. Users may access their accounts from multiple devices. Calico reserves the right to suspend or terminate any account that engages in fraud, abuse, fake bookings, payment manipulation, excessive rescheduling misuse, or any other activity that harms the platform or other users.
                    </p>

                    <p>
                        Appointment availability on Calico depends entirely on the rosters created by clinics and doctors. A booking fee of ₹149 is required to confirm an appointment. Bookings cannot be rescheduled unless the clinic cancels the appointment, and no rescheduling is allowed after the appointment time has passed. Late arrivals or no-shows do not result in penalties. If a clinic cancels an appointment, a full refund will be issued through Razorpay. If a user cancels or misses an appointment, no refund will be provided. All refunds are processed through Razorpay and are subject to its settlement timelines.
                    </p>

                    <p>
                        Calico offers a Pet Parent Pro subscription for ₹11 per month, billed automatically through Razorpay. This subscription allows unlimited rescheduling but is non-refundable. Calico also offers a Hospital Subscription for ₹8,000 per month, billed through Razorpay auto-debit. Hospital subscriptions are strictly non-refundable, invoices are issued monthly, and a 10-day grace period is provided. If payment is not received within the grace period, access to the platform may be blocked until renewal.
                    </p>

                    <p>
                        All payments on Calico, including appointment fees, subscriptions, and in-app bill payments, are processed through Razorpay. Calico does not store any card, bank, or UPI details. When users pay clinic bills through the app, the amount is entered manually by the user, and the payment is first received into Calico's company account before being transferred to the clinic. Calico acts only as a payment intermediary and does not provide the medical service. Any refunds related to clinic bills must be handled directly by the clinic, and Calico does not process such refunds.
                    </p>

                    <p>
                        Calico is not responsible for medical advice, diagnosis, treatment, prescriptions, clinical errors, delays, outcomes, or the quality of care provided by clinics or doctors. All medical responsibility lies entirely with the clinic and the doctor treating the pet. Clinics and users are responsible for the accuracy of all data they enter into the system, including medical records, billing amounts, and appointment information, and Calico is not liable for errors or omissions in such data.
                    </p>

                    <p>
                        Calico does not guarantee uninterrupted or error-free service. The platform may be unavailable due to maintenance, technical issues, or other operational reasons. All software, designs, databases, branding, workflows, user interface elements, and code associated with Calico belong exclusively to Calico Pet Care LLP and may not be copied, reused, modified, or distributed without written permission. Users may not misuse the platform, including creating fake bookings, abusing rescheduling, manipulating payments, harassing clinics, extracting data, or attempting to reverse engineer the app. Calico reserves the right to terminate accounts that violate these rules.
                    </p>

                    <p>
                        All user data is handled in accordance with Calico's Privacy Policy. These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of courts in Bengaluru. Calico may update these Terms from time to time, and continued use of the platform indicates acceptance of the updated terms.
                    </p>

                    <p>
                        Calico may update these Terms & Conditions from time to time. Any material changes will be communicated to users through email or in-app notifications. The version of the Terms & Conditions that is in effect at the time of any dispute, claim, or use of the platform shall apply and shall govern such dispute or claim.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
