import {Link} from "react-router-dom";

function LandingFrame() {
   const style = {
      "background-image": `url("images/background.jpeg")`,
      "background-repeat": "no-repeat",
      "background-size": "cover",
      position: "absolute",
      height: "100%",
      fit: "1",
      width: null,
   }

   return <div style={style}> <LandingFrameMessage /> </div>
}

function HomePage() {
   return <div>
      <LandingFrame />
   </div>
}

export default HomePage

function LandingFrameMessage() {
   const style = {
      margin: "auto",
      padding: "10% 35% 10% 15%",
      color: "black"
   }

   return <div style={style}>
      <div style={{"font-size": "96px"}}>
         Hello World!
      </div>

      <div style={{"font-size" : "36px"}}>
         This is the landing page and here's some content.
         How much wood would a woodchuck chuck
         if a woodchuk would chuck wood?
      </div>

      <br />

      <LandPageButton />
   </div>
}

function LandPageButton() {
   return <Link to="/about" class="nav-link">
      <button class="btn btn-primary">
         <span style={{"font-size" : "24px"}}>
            About Page
         </span>
      </button>
   </Link>
}