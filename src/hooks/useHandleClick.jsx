import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook untuk mendeteksi klik di luar elemen tertentu.
 * @param {Array|Object} refsArg - Array atau satu ref yang dianggap sebagai area klik dalam.
 * @returns {Object} - State dan fungsi untuk mengelola klik di luar elemen.
 */
const useHandleClick = (refsArg = []) => {
    const [isOpen, setOpen] = useState(false); // State untuk mengelola apakah elemen terbuka atau tertutup.

    // Ref untuk menyimpan referensi yang stabil di seluruh render.
    const stableRefs = useRef([]);

    useEffect(() => {
        // Memastikan refsArg disimpan secara stabil di stableRefs.current.
        if (Array.isArray(refsArg)) {
            stableRefs.current = refsArg.map((r) => r); // Jika refsArg adalah array, simpan semua refs.
        } else {
            stableRefs.current = [refsArg]; // Jika refsArg adalah satu ref, ubah menjadi array.
        }
    }, [refsArg]); // Hanya dijalankan ulang jika refsArg berubah.

    useEffect(() => {
        if (!isOpen) return; // Jika elemen tidak terbuka, tidak perlu menambahkan event listener.

        // Fungsi untuk mendeteksi klik di luar elemen.
        const handleClickOutside = (event) => {
            for (const ref of stableRefs.current) {
                // Jika klik terjadi di dalam salah satu ref, abaikan.
                if (ref.current && ref.current.contains(event.target)) {
                    return;
                }
            }
            setOpen(false); // Jika klik terjadi di luar semua ref, tutup elemen.
        };

        // Tambahkan event listener untuk mendeteksi klik di luar elemen.
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        // Bersihkan event listener saat elemen ditutup atau hook dilepas.
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]); // Bergantung pada isOpen untuk menambahkan/menghapus event listener.

    /**
     * Fungsi untuk menutup elemen secara manual.
     */
    const handleMenuClick = () => setOpen(false);

    return {
        isOpen, // Status apakah elemen terbuka atau tertutup.
        setOpen, // Fungsi untuk mengubah status isOpen.
        refs: stableRefs.current, // Array referensi yang stabil.
        handleMenuClick, // Fungsi untuk menutup elemen secara manual.
    };
};

// Pastikan hanya ada satu ekspor default
export default useHandleClick;
