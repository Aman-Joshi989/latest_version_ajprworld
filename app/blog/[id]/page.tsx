// app/blog/[id]/page.tsx
export default function BlogPage({ params }: { params: { id: string } }) {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Blog Post</h1>
            <p>Post ID: {params.id}</p>
        </main>
    );
}

// Allow dynamic params if needed
export const dynamicParams = true;
