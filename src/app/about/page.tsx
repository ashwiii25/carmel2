import { Metadata } from "next";
import { AboutClient } from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "Our Legacy | Carmel Hospital",
  description: "Discover the journey of Carmel Hospital, from a vision in 1998 to Aluva's leading medical institution.",
};

export default function AboutPage() {
  return <AboutClient />;
}
