export default function Show({ post }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Post {post.id}
                </h1>
                <span>
                    Posted on: {new Date(post.created_at).toLocaleTimeString()}
                </span>
                <p className="text-gray-700 text-lg">{post.body}</p>
            </div>
        </>
    );
}
