// src/hooks/useDarkMode.js
import { useEffect } from "react";

const useDarkMode = () => {
  useEffect(() => {
    const handleSystemThemeChange = (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Cek preferensi awal saat komponen dipasang
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    handleSystemThemeChange(prefersDark);

    // Tambahkan event listener untuk perubahan preferensi sistem
    prefersDark.addEventListener("change", handleSystemThemeChange);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      prefersDark.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);
}

export default useDarkMode;
