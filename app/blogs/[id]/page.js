import { notFound } from "next/navigation";

export default function BlogsPage({params}){
    const {  id } = params;
    if(id>3){
        notFound();
    }
    return (
        <div className="mt-6">Blog details: blog id:{id}</div>
    )
}