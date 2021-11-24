import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import FilterLogic from "./FilterLogic";
//import * as TestUtils from 'react-dom/test-utils';
//const { getItemMock, setItemMock } = TestUtils();


// test('Test FilterLogic', () => {
//     const { result } = renderHook(() => FilterLogic());
//
//     // act(() => {
//     //     result.current.increment();
//     //    // result.current.favourite(1)
//     // });
//
//     //expect(result.current.count).toBe(1);
//     expect(result.current.nameFilterToUpperCase('uuu')).toBe('UUU');
//     expect(result.current.nameFilterToLowerCase('uUu')).toBe('uuu');
//     expect(result.current.testFunc('Yes! :)')).toBe('Yes! :)');
//     expect(result.current.isFilterInLocalStorage()).toBe('true');
//
// });
test('should save to localStorage', () => {
    const KEY = 'foo',
        VALUE = 'bar';
    localStorage.setItem(KEY, VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});

