import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/post");
    }

    console.log(errors);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Create
                </h1>
                {data.body}
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>
                    {errors.body && <p>{errors.body}</p>}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
