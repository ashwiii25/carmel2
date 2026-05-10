import { Metadata } from "next";
import { ServicesClient } from "@/components/pages/ServicesClient";

export const metadata: Metadata = {
  title: "Infrastructure & Care Facilities | Carmel Hospital",
  description: "Explore our world-class medical setup, from modular OTs to advanced diagnostic imaging and patient support.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
