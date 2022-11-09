import { Link, useOutlet, Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Outlet />
    </>
  );
};

export default Index;
