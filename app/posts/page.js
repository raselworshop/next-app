import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link"

export default async function Posts() {
    const posts = await getAllPosts()
    console.log(posts)

    return (
        <div className='m-6'>
            <h2>All Posts</h2>
            <ul className="my-6">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}
                            className="hover:underline hover:text-blue-600"
                        >{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

