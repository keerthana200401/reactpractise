import {Route,Router,Link,Outlet} from 'react-router-dom'

function Tech(){
    return(
        <div>
            <ul className="nav justify-content-end">
  
  <li className="nav-item">
    <Link className="nav-link" to="html">Html</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="java">Java</Link>
  </li>
 
</ul>


<Outlet></Outlet>
        </div>
    )
}
export default Tech