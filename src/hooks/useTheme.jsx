// import { useState, useEffect } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme") || "light";
//   });

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return { theme, toggleTheme };
// }
