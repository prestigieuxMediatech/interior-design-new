// src/app/portfolio/[category]/page.js
import { notFound } from "next/navigation";
import {
  getCategoryData,
  getAllCategorySlugs,
} from "@/data/portfolioData";
import CategoryPageClient from "@/components/CategoryPageClient/CategoryPageClient";

// Pre-render every known category at build time.
export async function generateStaticParams() {
  return getAllCategorySlugs().map((category) => ({ category }));
}

// Dynamic, per-category SEO metadata.
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = getCategoryData(resolvedParams.category);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "This portfolio category does not exist.",
    };
  }

  return {
    title: `${category.title} | Portfolio`,
    description: category.metaDescription,
    openGraph: {
      title: `${category.title} | Portfolio`,
      description: category.metaDescription,
      images: category.heroImage?.src ? [category.heroImage.src] : [],
    },
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = getCategoryData(resolvedParams.category);

  if (!category) {
    notFound();
  }

  return <CategoryPageClient category={category} />;
}