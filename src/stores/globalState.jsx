import {create} from 'zustand'

export default create((set) =>
{
    return {
        modalSettings: [
            '/fotoJuntos.jpeg', 
            'Helloooo,', 
            'Como no puedo estar contigo en tu día, te hice un regalito, un virtual scavenger hunt. Begin your journey by clicking on Mofin the Corgi.', 
            'secondary', 
            'Good Luck y Happy Bday ♡',
            true,
            false,
        ],
        setModalSettings: (array) =>
        {
            set(() =>
            {
                return { modalSettings: array }
            })
        },
        
        inputModalSettings: [
            '/oop.jpeg', 
            'Fantasma del Fantasmeo,', 
            'Vamos a ver si esas neuronas todavía se acuerdan del Great Fumble of March 19th.', 
            ['gato', 'Gato', 'cat', 'Cat'],
            false,
        ],
        setInputModalSettings: (array) =>
        {
            set(() =>
            {
                return { inputModalSettings: array }
            })
        },
    }
})