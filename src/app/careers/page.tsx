import { Metadata } from "next";
import { CareersClient } from "@/components/pages/CareersClient";

export const metadata: Metadata = {
  title: "Join Our Team | Careers at Carmel Hospital",
  description: "Work with Aluva's premier medical institution. Explore open positions for doctors, nurses, and medical staff.",
};

export default function CareersPage() {
  return <CareersClient />;
}
