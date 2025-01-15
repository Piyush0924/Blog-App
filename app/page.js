'use client';

import { useEffect } from "react";
import dynamic from "next/dynamic";
import 'react-toastify/dist/ReactToastify.css';

// Dynamically import components with SSR disabled
const BlogList = dynamic(() => import("@/components/BlogList"), {
  loading: () => <div className="text-4xl">...Loading</div>,
  ssr: false
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    // Remove Grammarly-injected attributes from the DOM
    document.querySelectorAll('[data-new-gr-c-s-check-loaded], [data-gr-ext-installed]').forEach((el) => {
      el.removeAttribute('data-new-gr-c-s-check-loaded');
      el.removeAttribute('data-gr-ext-installed');
    });

    // Error handling for asynchronous responses
    const handleUncaughtErrors = (event) => {
      console.error("Uncaught Error: ", event.reason);
    };
    const handleUnhandledRejections = (event) => {
      console.error("Unhandled Promise Rejection: ", event.reason);
    };

    // Add global listeners for better debugging
    window.addEventListener("error", handleUncaughtErrors);
    window.addEventListener("unhandledrejection", handleUnhandledRejections);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("error", handleUncaughtErrors);
      window.removeEventListener("unhandledrejection", handleUnhandledRejections);
    };
  }, []);

  return (
    <>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </>
  );
}
