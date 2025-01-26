import getAllPosts from "@/lib/getAllPosts";
import getPosts from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";

export async function generateMetadata({params}) {
    const {id} =await params;
    console.log(id)
    const post = await getPosts(id);
    return {
        title: post.title,
        description: post.body,
    }
}

export default async function postDetails ({ params }) {
    // console.log(params)
    const {id} = await params;
    console.log(id)
    const postPromise = getPosts(id);
    const commentsPromise = getPostComment(id);
    const [post, comments] = await Promise.all([postPromise, commentsPromise])

  return (
    <div className="m-6">
        <h2 className="mb-3 font-semibold">{post.title}</h2>
        <p>{post.body}</p>
        <hr />
        <div className="mt-6">
            <h2>Comments</h2>
            <hr/>
            <ul>
                {comments.map(comment=>(
                    <div key={comment.id}>
                        <li>{comment.name}</li>
                        <li>{comment.body}</li>
                    </div>
                ))}
            </ul>
        </div>
    </div>
  )
}

export async function generateStaticParams() {
    const posts = await getAllPosts()

    return posts.map(post=> ({
        id: post.id.toString(),
    }))
}
