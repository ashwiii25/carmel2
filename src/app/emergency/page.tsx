import { Metadata } from "next";
import { EmergencyClient } from "@/components/pages/EmergencyClient";

export const metadata: Metadata = {
  title: "24/7 Emergency & Trauma | Carmel Hospital Aluva",
  description: "Immediate life-saving care when every second counts. Our trauma response team is available 24/7.",
};

export default function EmergencyPage() {
  return <EmergencyClient />;
}
