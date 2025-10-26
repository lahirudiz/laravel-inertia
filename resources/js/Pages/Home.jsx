import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <div>
            <h1 className="text-center">Hello</h1>
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-small text-slate-600">
                            <span>
                                Posted on:{" "}
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <p className="font-medium">{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="py-12 px-4">
                {posts.links.map((link, i) =>
                    link.url ? (
                        <Link
                            key={link.url ?? i}
                            href={link.url}
                            className="p-1"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={link.url ?? i}
                            className="p-1 text-gray-400"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
            </div>
        </div>
    );
}
