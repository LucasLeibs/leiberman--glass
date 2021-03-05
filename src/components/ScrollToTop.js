import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop({ children }) {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === "/work") window.scrollTo(0, 0);
      }, [pathname]);
    return children
}
