import { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "Our Legacy | Carmel Hospital",
  description: "Discover the journey of Carmel Hospital, from a vision in 1965 to Aluva's leading medical institution.",
};

export default function AboutPage() {
  return <AboutClient />;
}
