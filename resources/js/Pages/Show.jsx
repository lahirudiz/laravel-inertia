import { useForm } from "@inertiajs/react";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    function deletePost(e) {
        e.preventDefault();
        destroy(`/post/${post.id}`);
    }
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
                <form onSubmit={deletePost}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                    </button>
                </form>
            </div>
        </>
    );
}
