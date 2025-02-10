"use client";
import { useState, useRef } from "react";
import { SendEmail } from "./sendMail";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const formData = new FormData(formRef.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const userMessage = formData.get("message");

        try {
            const data = await SendEmail(email, name, userMessage, phone);
            if (data) {
                setMessage({ type: "success", text: "Message sent successfully! We will contact you soon." });
                formRef.current.reset();
            }
        } catch (error) {
            setMessage({ type: "error", text: "Failed to send message. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400" placeholder="Your Name" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400" placeholder="your@email.com" />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400" placeholder="Your Phone Number" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400" placeholder="Tell us about your project"></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-[#6C63FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5b54ff] transition-colors">
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {message && (
                    <p className={`mt-4 text-center ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                        {message.text}
                    </p>
                )}
            </form>
        </>
    );
}
