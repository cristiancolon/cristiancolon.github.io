import {create} from 'zustand'

export default create((set) =>
{
    return {
        modalSettings: [
            '/fotoJuntos.jpeg', 
            'Helloooo', 
            'Como no puedo estar contigo en tu día, te hice un regalito virtual. Un virtual scavenger hunt. Begin by clicking on Mofin the Corgi.', 
            'secondary', 
            'Good Luck y Happy Bday ♡',
            true,
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


        torusRotX: 0,
        torusRotY: 0,
        torusRotZ: 0,
        slideTorusX: (rotX) =>
        {
            set(()=> {
                return { torusRotX: rotX }
            })
        },
        slideTorusY: (rotY) =>
        {
            set(()=> {
                return { torusRotY: rotY }
            })
        },
        slideTorusZ: (rotZ) =>
        {
            set(()=> {
                return { torusRotZ: rotZ }
            })
        },
        
        boxRotX: 0,
        boxRotY: 0,
        boxRotZ: 0,
        slideBoxX: (rotX) =>
        {
            set(()=> {
                return { boxRotX: rotX }
            })
        },
        slideBoxY: (rotY) =>
        {
            set(()=> {
                return { boxRotY: rotY }
            })
        },
        slideBoxZ: (rotZ) =>
        {
            set(()=> {
                return { boxRotZ: rotZ }
            })
        },

        lightLocation: [3,0],
        slideLight: (rot)=>
        {
            set(() => {
                return {lightLocation: [Math.cos(rot)*3,-Math.sin(rot)*3]}
            })
        },

        mouseFov: 80,
        changeFov: (val) =>
        {
            set(() => {
                return {mouseFov: val}
            })
        },
    }
})