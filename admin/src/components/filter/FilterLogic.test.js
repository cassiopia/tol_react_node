import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import FilterLogic from "./FilterLogic";
//import * as TestUtils from 'react-dom/test-utils';
//const { getItemMock, setItemMock } = TestUtils();


test('Test FilterLogic', () => {
    const {result} = renderHook(() => FilterLogic());

    expect(result.current.nameFilterToUpperCase('uuu')).toBe('UUU');
    expect(result.current.nameFilterToLowerCase('uUu')).toBe('uuu');

    const testArray = {
        '1': false,
        '2': true,
        '3': false
    };

    localStorage.setItem('filter', JSON.stringify(testArray));
    expect(result.current.isFilterInLocalStorage()).toBe(true);

});

