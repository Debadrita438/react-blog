import { useHistory, useParams } from "react-router-dom";
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const redirect = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => redirect.push('/'));

    }

    return (
        <div className="blog-details">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p><em>--Written By { blog.author }</em></p>
                    <div>{ blog.body }</div>
                    <button onClick={ handleDelete }>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;