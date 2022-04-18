import {useRouter} from "next/router";
const BlogPostPage = () => {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>What is going on at BragHouse</h1>
        </div>
    );
}


export default BlogPostPage;