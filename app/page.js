'use client'

import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import 'react-toastify/dist/ReactToastify.css';

// Dynamically import components with SSR disabled
const BlogList = dynamic(() => import("@/components/BlogList"), {
  loading: () => <div className="text-4xl">...Loading</div>, 
  ssr: false
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Home() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}

