import { Link } from "react-router-dom";

const PageNotFound = () => {
  return(
    <div>
      <h1>Page Not Found</h1>
      <h3>This url is not correct</h3>
      <div>
        <span className="inline-block">
          Go back to &nbsp;
        </span>
        <Link to='/' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          Home Page
        </Link>
      </div>

    </div>
  );
}

export default PageNotFound;