import BlogCardWrapper from "@/components/blog/blogCardWrapper";
import Link from "next/link";

export default async function RootPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;

  return (
    <main className="flex flex-col">
      <Link
        className="cursor-pointer underline hover:text-blue-500"
        href="/components"
      >
        Check out my components
      </Link>
      <div className="m-8 flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-black underline">Blog Posts</h1>
        <BlogCardWrapper
          page={parseInt(params?.["page"] || "1")}
          pageSize={2}
        />
      </div>
    </main>
  );
}
