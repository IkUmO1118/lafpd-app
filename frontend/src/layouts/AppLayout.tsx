import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="h-screen bg-neutral-50">
      <Header />
      <main className="bg-neutral-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
