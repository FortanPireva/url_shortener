import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";
import styles from "./layout.module.css";
export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
