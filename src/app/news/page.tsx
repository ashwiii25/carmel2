import { Metadata } from "next";
import { NewsClient } from "@/components/pages/NewsClient";

export const metadata: Metadata = {
  title: "News & Events | Carmel Hospital",
  description: "Read the latest hospital news, medical insights, and community updates from Carmel Hospital.",
};

export default function NewsPage() {
  return <NewsClient />;
}
