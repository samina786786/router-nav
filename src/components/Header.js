import { Link } from "react-router-dom"
const Header =() => {
    return(
        <div>
<h1>ESWAR COLLEGE OF ENGINEERING</h1>
<ul className="nav">
    <li className="list">
    <Link to='/'>Home</Link>
    </li>
    <li>
    <Link to='/About'>About</Link>
    </li>
    <li>
    <Link to='/Profile'>Profile</Link>
    </li>
    <li>
    <Link to='/Contact'>Contact</Link>
    </li>
</ul>

</div>
    
    )
}
export default Header