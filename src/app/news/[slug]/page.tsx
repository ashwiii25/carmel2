import { CinematicHero } from "@/components/shared/CinematicHero";
import { ARTICLES } from "@/data/news";
import { notFound } from "next/navigation";

// This is a minimal implementation of the individual news page
export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-background pb-20">
      <CinematicHero 
        title={article.title}
        subtitle={article.category + " • " + article.date}
        image={article.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/#latest-news" },
          { label: "Article" }
        ]}
      />

      <div className="container-custom mt-16 max-w-4xl">
        <div className="prose prose-lg prose-headings:text-primary max-w-none">
          <p className="text-xl leading-relaxed text-foreground/80 mb-8 border-l-4 border-secondary pl-6">
            {article.desc}
          </p>
          <p className="whitespace-pre-line text-foreground">
            {article.content}
          </p>
          <br/>
          <p className="border-t border-border pt-6 mt-8">
            Stay tuned for more updates from our medical desk. Detailed articles, statistical data, and expert interviews will be continuously published right here.
          </p>
        </div>
      </div>
    </main>
  );
}