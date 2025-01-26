import Link from "next/link"

export default function Blogs() {

    const blogs = [{
        id: 1,
        title: "Title 1",
        description: "Blog 1 description"
    }, {
        id: 2,
        title: "title 2",
        description: "blogs 2 descrption"
    }]

    return (
        <main>
            <h2 className="mb-4">This is blogs page</h2>
            <ul>
                {blogs.map(blog=> (
                    <li key={blog.id}>
                       <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> 
                        </li>
                    ))}
            </ul>
        </main>
    )
}