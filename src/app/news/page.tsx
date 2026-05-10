import { Metadata } from "next";
import { NewsClient } from "@/components/pages/NewsClient";

export const metadata: Metadata = {
  title: "Hospital News & Medical Insights | Carmel Hospital",
  description: "Stay updated with the latest medical advancements, hospital news, and health tips from Carmel Hospital.",
};

export default function NewsPage() {
  return <NewsClient />;
}
