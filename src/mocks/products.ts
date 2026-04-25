export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateUrl: string;
  audience: string;
  category: string;
  status: string;
  images: string[];
  badge?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://docs.google.com/spreadsheets/d/12m1vsNOX6T4OTlJZCO2SUs8Rq8lmjoyQNeIGWHbNpUA/gviz/tq?tqx=out:json"
  );

  const text = await res.text();
  const json = JSON.parse(text.substring(47).slice(0, -2));

  const rows = json.table.rows;

  const products = rows
    .map((row: any, index: number) => ({
      id: String(row.c[0]?.v || index),
      title: row.c[7]?.v || "",
      description: row.c[6]?.v || "",
      image: row.c[8]?.v || "",
      affiliateUrl: row.c[3]?.v || "",
      status: row.c[5]?.v || "",

      // ✅ CORRIGÉ (colonnes décalées)
      images: row.c[9]?.v?.split(",") || [row.c[8]?.v],
      badge: row.c[10]?.v || undefined,
      audience: row.c[11]?.v || "",
      category: row.c[12]?.v || "",
    }))
    .filter((p: any) => p.status === "active");

  return products;
}

// POUR NE PAS CASSER TON SITE

export const productsElle: Product[] = [];
export const productsLui: Product[] = [];
export const productsDeux: Product[] = [];
export const featuredProducts: Product[] = [];