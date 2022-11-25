import { useRouter } from 'next/router';

const BlogPostPage = () => {
    const router = useRouter();
    console.log(router.query); // {blog_id: ['2022', '11', 'awesome']}
    return (
        <div>
            <h1>Blog Post Page</h1>
        </div>
    );
};

export default BlogPostPage;