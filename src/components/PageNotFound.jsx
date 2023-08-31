import { useRouteError } from 'react-router-dom';


const PageNotFound = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 >404: Page Not Found</h1>
        <h2>The Page you were looking for was not found</h2>
        <h3>{error.error.message}</h3>
      </div>
    </div >
  );
};

export default PageNotFound;