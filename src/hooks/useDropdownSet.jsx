import { useState, useCallback } from 'react';

/**
 * Custom hook for managing a set of open indices (e.g., for dropdown/accordion)
 * @returns {[Set<number>, (idx: number) => void]}
 */
const useDropdownSet = () => {
    const [openIndices, setOpenIndices] = useState(new Set());

    const handleDropdown = useCallback((idx) => {
        setOpenIndices((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(idx)) {
                newSet.delete(idx);
            } else {
                newSet.add(idx);
            }
            return newSet;
        });
    }, []);

    return [openIndices, handleDropdown];
};

export default useDropdownSet;
