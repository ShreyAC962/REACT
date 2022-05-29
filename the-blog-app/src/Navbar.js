import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Blog App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#45a6dd",
                    borderRadius:"8px"
                }}>New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;