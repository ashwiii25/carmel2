import { Metadata } from "next";
import { DepartmentsClient } from "@/components/pages/DepartmentsClient";

export const metadata: Metadata = {
  title: "Centres of Excellence | Carmel Hospital",
  description: "Explore our specialized departments, from Cardiology to Neonatal Care, all equipped with advanced medical technology.",
};

export default function DepartmentsPage() {
  return <DepartmentsClient />;
}
