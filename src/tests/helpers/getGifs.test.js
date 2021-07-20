import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifgs Fetch', () => {

    test('debe tener 10 elementos', async () => {
        const gifs = await getGifs('Evangelion');
        expect(gifs.length).toBe(10)
        
    })

    test('debe si no se manda nada que mande 0', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
        
    })
    
})
