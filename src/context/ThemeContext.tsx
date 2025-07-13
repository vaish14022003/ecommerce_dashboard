// // 1. === Create the Theme Context ===
// // File: src/context/ThemeContext.tsx

// import React, { createContext, useContext, useEffect, useState } from "react";

// interface ThemeContextType {
//     theme: "light" | "dark";
//     toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//     theme: "light",
//     toggleTheme: () => { },
// });

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const [theme, setTheme] = useState<"light" | "dark">(
//         localStorage.getItem("theme") === "dark" ? "dark" : "light"
//     );

//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (theme === "dark") {
//             root.classList.add("dark");
//         } else {
//             root.classList.remove("dark");
//         }
//         localStorage.setItem("theme", theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme((prev) => (prev === "light" ? "dark" : "light"));
//     };

//     return (
//         <ThemeContext.Provider value={{ theme, toggleTheme }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export const useTheme = () => useContext(ThemeContext);
