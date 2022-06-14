import { Link } from "react-router-dom"

function Header() {
   return (
      <nav class="navbar navbar-light bg-light">
         <div class="container-fluid">
            <div>Simple Landing Page</div>

            <ul class="nav-item">
               <li class="nav-item">
                  <Link to="/" class="nav-link">Home</Link>
               </li>

               <li class="nav-item">
                  <Link to="/about" class="nav-link">About</Link>
               </li>

            </ul>

         </div>
      </nav>
   )
}

export default Header;