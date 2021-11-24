export default function FilterLogic() {
    const nameFilterToUpperCase = (nameFilter) => {
        return nameFilter.toUpperCase();
    };

    const nameFilterToLowerCase = (nameFilter) => {
        return nameFilter.toLowerCase();
    };

    const testFunc = () => {
        return 'Yes! :)'
    };

    const isFilterInLocalStorage = () => {
        const localStorageKeys = Object.keys(localStorage);
        console.log('++++++++++++++++++', localStorageKeys.includes('filter'));
        console.log('#############', localStorage);
        return localStorageKeys.includes('filter');
    };

    return {nameFilterToUpperCase, nameFilterToLowerCase, testFunc, isFilterInLocalStorage};
}