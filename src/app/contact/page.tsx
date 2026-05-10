import { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Carmel Hospital Aluva",
  description: "Get in touch with Carmel Hospital for appointments, inquiries, or 24/7 emergency support. We're here to help.",
};

export default function ContactPage() {
  return <ContactClient />;
}
