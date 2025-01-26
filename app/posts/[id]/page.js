import getPosts from "@/lib/getPost";

export async function generateMetadata({params}) {
    const {id} = params;
    console.log(id)
    const post = await getPosts(id);
    return {
        title: post.title,
        description: post.body,
    }
}

export default async function postDetails ({ params }) {
    // console.log(params)
    const {id} = params;
    console.log(id)
    const post = await getPosts(id);

  return (
    <div className="m-6">
        <h2 className="mb-3 font-semibold">{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

