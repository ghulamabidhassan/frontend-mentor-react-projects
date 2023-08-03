import { useGlobalContext } from "./Context";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const { dark } = useGlobalContext();

  return (
    <section className={`${dark ? "main main-dark" : "main "}`}>
      <div>
        <Navbar />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </section>
  );
};

export default SharedLayout;
