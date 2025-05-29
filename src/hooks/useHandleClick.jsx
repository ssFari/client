import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

/**
 * Custom hook untuk mendeteksi klik di luar elemen tertentu.
 * @param {Array<React.RefObject>|React.RefObject} refsArg - Array atau satu ref yang dianggap sebagai area klik dalam.
 * @param {boolean} [closeOnInsideClick=false] - Jika true, akan menutup jika klik terjadi di dalam salah satu ref yang diberikan.
 * @returns {Object} - State dan fungsi untuk mengelola klik di luar elemen.
 */
const useHandleClick = (refsArg = [], closeOnInsideClick = false) => {
    const [isOpen, setOpen] = useState(false); // State untuk mengelola apakah elemen terbuka atau tertutup.

    // Ref untuk menyimpan referensi yang stabil di seluruh render.
    // Menggunakan useRef untuk menyimpan array refs agar tidak berubah setiap render.
    const stableRefs = useRef([]);

    useEffect(() => {
        // Memastikan refsArg disimpan secara stabil di stableRefs.current.
        if (Array.isArray(refsArg)) {
            stableRefs.current = refsArg.map((r) => r);
        } else {
            stableRefs.current = [refsArg];
        }
    }, [refsArg]); // Hanya dijalankan ulang jika refsArg berubah

    useEffect(() => {
        // Fungsi untuk mendeteksi klik di luar elemen.
        const handleClickOutside = (event) => {
            let clickedInsideAnyRef = false;
            for (const ref of stableRefs.current) {
                if (ref.current && ref.current.contains(event.target)) {
                    clickedInsideAnyRef = true;
                    break;
                }
            }

            if (closeOnInsideClick && clickedInsideAnyRef) {
                setOpen(false); // Jika closeOnInsideClick true dan klik di dalam ref, tutup
            } else if (!closeOnInsideClick && !clickedInsideAnyRef && isOpen) {
                // Jika closeOnInsideClick false, dan klik di luar semua ref, dan elemen terbuka, tutup
                setOpen(false);
            }
            // Jika closeOnInsideClick false dan klik di dalam, biarkan tetap terbuka (default)
            // Jika closeOnInsideClick true dan klik di luar, tidak melakukan apa-apa
        };

        // Tambahkan event listener hanya jika isOpen
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        // Bersihkan event listener saat elemen ditutup atau hook dilepas.
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen, closeOnInsideClick, stableRefs]); // Bergantung pada isOpen dan stableRefs untuk menambahkan/menghapus event listener.

    // handleMenuClick bisa digunakan untuk menutup menu secara eksplisit dari dalam komponen yang menggunakan hook ini
    const handleMenuClick = () => setOpen(false);

    return {
        isOpen, // Status apakah elemen terbuka atau tertutup.
        setOpen, // Fungsi untuk mengubah status isOpen.
        refs: stableRefs.current, // Array referensi yang stabil (untuk debugging/informasi, biasanya tidak digunakan secara langsung)
        handleMenuClick, // Fungsi untuk menutup elemen secara manual.
    };
};

useHandleClick.propTypes = {
    refsArg: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
        ),
        PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
    ]),
    closeOnInsideClick: PropTypes.bool,
};

export default useHandleClick;
