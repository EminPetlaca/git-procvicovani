import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <h1>Home page </h1>

    <Link to={"/Second"}>
      Second
    </Link>
<br />
    
    <Link to={"/Third"}>
      Third
    </Link>

   </>
  );
}