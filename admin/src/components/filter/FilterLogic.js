export default function FilterLogic() {
    const nameFilterToUpperCase = (nameFilter) => {
        return nameFilter.toUpperCase();
    };

    const nameFilterToLowerCase = (nameFilter) => {
        return nameFilter.toLowerCase();
    };

    const isFilterInLocalStorage = () => {
        const localStorageKeys = Object.keys(localStorage);
        return localStorageKeys.includes('filter');
    };

    return {nameFilterToUpperCase, nameFilterToLowerCase, isFilterInLocalStorage};
}