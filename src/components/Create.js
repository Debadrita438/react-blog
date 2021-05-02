import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const redirect = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        const blog = { title, body, author };
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(() => {
                setIsPending(false);
                redirect.push('/');
            });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={ handleSubmit } action="">
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={event => setTitle(event.target.value)}
                />

                <label>Blog Author:</label>
                <input 
                    type="text"
                    required
                    value={ author }
                    onChange={event => setAuthor(event.target.value)}
                />

                <label>Blog Body:</label>
                <textarea 
                    required
                    value={ body }
                    onChange={event => setBody(event.target.value)}
                ></textarea>

                {!isPending ? <button>Add Blog</button> : <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;
