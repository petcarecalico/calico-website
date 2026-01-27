
import React from 'react';

export const metadata = {
    title: "Privacy Policy | Calico",
    description: "Privacy Policy for Calico Pet Care LLP.",
};

const PrivacyPolicy = () => {
    return (
        <section className="w-full bg-[#FFFBF5] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-[#1C1B1F] mb-8 text-center">
                    Privacy Policy
                </h1>

                <div className="space-y-6 font-poppins text-[#1C1B1F]/80 leading-relaxed text-sm md:text-base">

                    <p>
                        Calico Pet Care LLP collects and processes personal and medical data to operate its veterinary platform. This includes phone numbers used for OTP-based login, pet details and medical history, appointment records, subscription status, transaction IDs, and location data used to show nearby clinics. For clinics and doctors, Calico collects clinic and doctor details, schedules, appointment data, treatment records, subscription status, and billing information.
                    </p>

                    <p>
                        Calico does not store credit card numbers, CVV, UPI PINs, bank account details, or passwords. All payments are handled securely by Razorpay, and Calico stores only Razorpay order IDs, payment IDs, and refund IDs where applicable for accounting and audit purposes.
                    </p>

                    <p>
                        All data is stored on secure servers using MongoDB Atlas located in India (Mumbai region). Data is used to manage appointments, maintain medical records, operate clinic workflows, process payments and subscriptions, send notifications, provide customer support, and improve platform performance. Calico uses Firebase Cloud Messaging to send appointment confirmations, reminders, cancellations, and payment updates, and delivery logs may be retained to ensure reliability.
                    </p>

                    <p>
                        User data is shared only with the clinics and doctors involved in a booking, Razorpay for payment processing, Firebase for notifications, and Calico's infrastructure providers. Calico does not sell or rent user data. Data is stored for as long as an account remains active. If a user deletes their account, all personal, pet, and medical data is permanently erased and cannot be recovered.
                    </p>

                    <p>
                        Users have the right to view, update, and delete their data at any time through their account. Calico uses OTP authentication, encrypted databases, and tokenized payments to protect data. Accounts may be suspended if fraud, abuse, or misuse is detected. Calico's services are intended for adults, and minors should use the platform only through a guardian. This Privacy Policy may be updated from time to time, and continued use of Calico indicates acceptance of any updates.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
