import { Metadata } from "next";
import { DoctorsClient } from "@/components/pages/DoctorsClient";

export const metadata: Metadata = {
  title: "Meet Our Specialists | Carmel Hospital",
  description: "Find the right medical expert for your care. Browse our team of board-certified doctors and specialists.",
};

export default function DoctorsPage() {
  return <DoctorsClient />;
}
