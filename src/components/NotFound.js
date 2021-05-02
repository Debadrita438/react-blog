import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oops!</h2>
            <p>Sorry, the page is not found!</p>
            <p>Error code: 404</p>
            <Link to='/'>Go Back to Home</Link>
        </div>
    );
}
 
export default NotFound;