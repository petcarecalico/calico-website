
import React from 'react';

export const metadata = {
    title: "Refund & Cancellation Policy | Calico",
    description: "Refund, Cancellation & Rescheduling Policy for Calico Pet Care LLP.",
};

const RefundPolicy = () => {
    return (
        <section className="w-full bg-[#FFFBF5] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-[1000px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-[#1C1B1F] mb-8 text-center">
                    Refund, Cancellation & Rescheduling Policy
                </h1>

                <div className="space-y-6 font-poppins text-[#1C1B1F]/80 leading-relaxed text-sm md:text-base">

                    <p>
                        Calico charges a ₹149 booking fee to confirm veterinary appointments. If a clinic cancels an appointment, the user will receive a full refund through Razorpay. If a user cancels an appointment, misses the appointment, or attempts to cancel after the appointment time, no refund will be issued. All refunds are processed through Razorpay and are subject to bank settlement timelines, typically within three to five business days.
                    </p>

                    <p>
                        Rescheduling of appointments is allowed only if the clinic cancels the original appointment. Users who have an active Pet Parent Pro subscription for ₹11 per month may reschedule without creating a new booking. Rescheduling is not allowed after the scheduled appointment time has passed.
                    </p>

                    <p>
                        The Pet Parent Pro subscription is billed monthly via Razorpay auto-debit and may be cancelled at any time, but no refunds are provided for unused time. The Hospital Subscription of ₹8,000 per month is also billed via Razorpay auto-debit, is strictly non-refundable, and includes a ten-day grace period for renewal. If payment is not received, hospital access may be blocked until renewal is completed.
                    </p>

                    <p>
                        When users pay clinic bills through Calico, the amount is entered manually by the user and paid through Calico's payment system. Calico transfers the funds to the clinic, but any bill refunds must be handled directly by the clinic and not by Calico. No refunds will be issued in cases of fraud, fake bookings, payment abuse, or violation of Calico's Terms.
                    </p>

                    <p>
                        If a user enters an incorrect amount while making an in-app bill payment, the user is solely responsible for the entered amount, and Calico shall not be liable for any loss, excess payment, or incorrect transaction resulting from such entry. Calico does not verify or validate clinic bill amounts entered by users before processing payment.
                    </p>

                    <p>
                        Refunds for clinic bill payments are the responsibility of the respective clinic. However, in cases where the payment amount is still held by Calico due to an in-app transaction, any refund will be processed in accordance with Calico's refund policy and only in coordination with the clinic. Calico is not obligated to issue a refund without confirmation from the clinic.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
