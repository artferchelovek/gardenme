import { Outlet } from "react-router-dom";

import ChangelogModal from "../ChangelogModal/ChangelogModal";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
      <ChangelogModal />
    </div>
  );
}
