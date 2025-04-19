"use client"
import Link from "next/link";
import { 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone 
} from "react-icons/fa";
import CustomButton from "./CustomButton";
import { Element } from "@node_modules/react-scroll/modules";

export default function Footer() {
  return (
    <Element name="book" className="py-20 px-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-block bg-[#7A000D] hover:bg-[#5A000A] px-3 py-1 text-white rounded-md">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-zinc-400 max-w-md">
              Have questions or ready to schedule your service? Contact us today
              and our friendly team will be happy to assist you.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <FaMapMarkerAlt className="h-5 w-5 text-[#7A000D]" />
                </div>
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-zinc-400">
                    123 Auto Repair Lane, Mechanicsville, CA 90210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <FaPhone className="h-5 w-5 text-[#7A000D]" />
                </div>
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p className="text-zinc-400">0955 188 2021</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <FaEnvelope className="h-5 w-5 text-[#7A000D]" />
                </div>
                <div>
                  <h3 className="font-bold">Email Address</h3>
                  <p className="text-zinc-400">service@turbomechanics.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <FaClock className="h-5 w-5 text-[#7A000D]" />
                </div>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-zinc-400">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-zinc-400">Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-zinc-400">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <Link
                href="#"
                className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <FaFacebookF className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </Link>
              <Link
                href="#"
                className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <FaTwitter className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Subject</label>
                <input
                  type="text"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">Message</label>
                <textarea
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-white min-h-[120px]"
                  placeholder="Tell us about your vehicle and service needs..."
                ></textarea>
              </div>
              <CustomButton className="w-full bg-[#7A000D] hover:bg-[#5A000A]">
                Send Message
              </CustomButton>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
}
