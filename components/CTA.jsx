"use client"
import CustomButton from "./CustomButton";
import { CiCalendar } from "react-icons/ci";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#7A000D] to-[#9A1A27]">
      <div className="container text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ready to Experience Premium Auto Service?
        </h2>
        <p className="max-w-2xl mx-auto text-zinc-200">
          Schedule an appointment today and see why we're the most trusted auto
          repair shop in the area.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <CustomButton
            title={"Book Appointment"}
            prefix={<CiCalendar/>}
            customStyle={"!bg-white !text-primary"}
          />
        </div>
      </div>
    </section>
  );
}
