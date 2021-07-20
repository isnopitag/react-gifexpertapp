import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas sobre el hook useFetchGifs', () => {
    
    test('Debe de retonar el estado inicial', async  () => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('Evangelion'));
        
        const {data,loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('debe de retonar un arrelgo de imgs y el loading en false', async () => {
        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs('Evangelion'));
        await waitForNextUpdate();
        const {data,loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    
    
})
