import { useEffect, useCallback } from 'react';
import { debounce } from "lodash";

export function useDebounce(cb: Function, delay: number, dependency: any) {

    const delayedEvent = useCallback(debounce(() => {
        cb()
    }, delay), [dependency]);

    useEffect(() => {
        delayedEvent();
  
        // Cancel the debounce on useEffect cleanup
        return delayedEvent.cancel;
    }, [dependency, delayedEvent]);
}

// e.j. useDebounce(() => mutateAsync(searchquery), 500, searchquery)