import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Palm",
  description: "tutorial",
  keywords: "Thai",
};

const layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        {/* <div className="sidebar">
          <Navbar />
        </div> */}     
          {children}
      </body>
    </html>
  );
};
export default layout;
