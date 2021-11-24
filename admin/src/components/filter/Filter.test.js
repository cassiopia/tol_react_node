import React from 'react';
import renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';
import Filter from './Filter';

test('should increment counter', () => {
    const { result } = renderHook(() => Filter());

    // act(() => {
    //     result.current.increment();
    //    // result.current.favourite(1)
    // });

    //expect(result.current.count).toBe(1);
    expect(result.current.favourite(3)).toBe(3);

});