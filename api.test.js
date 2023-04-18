const pokemons = require('./pokemons')
const bulbasaur = require('./bulbasaur')
const rickandmorty_characters = require('./rickandmorty_characters')
const harold = require('./harold')

describe('Testing our simple API', () => {
    test('http://localhost:8000/api should return Hello Word', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve('Hello World')
            })
        )
        const response = await fetch('http://localhost:8000/api')
        const jsonData = await response.json();

        expect(jsonData).toBe("Hello World")
        expect(jsonData.length).toBe(11)
    })

    test('http://localhost:8000/api/pokemons should return some Pokemons info', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(pokemons)
            })
        )
        const response = await fetch('http://localhost:8000/api/pokemons')
        const jsonData = await response.json();

        expect(jsonData.count).toBe(1281)
        expect(jsonData.results.length).toBe(20)

    })

    test('http://localhost:8000/api/pokemons/bulbasaur should return Balbasaur info', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(bulbasaur)
            })
        )
        const response = await fetch('http://localhost:8000/api/pokemons/bulbasaur')
        const jsonData = await response.json();

        expect(jsonData.weight).toBe(69)
        expect(jsonData.name).toEqual("bulbasaur")

    })

    test('http://localhost:8000/api/rickandmorty_characters should return some Rick and Morty characters', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(rickandmorty_characters)
            })
        )
        const response = await fetch('http://localhost:8000/api/rickandmorty_characters')
        const jsonData = await response.json();

        expect(jsonData.results.length).toBe(20)
        expect(jsonData.info.count).toEqual(826)

    })

    test('http://localhost:8000/api/rickandmorty_characters/harold should return some Harold info', async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(harold)
            })
        )
        const response = await fetch('http://localhost:8000/api/rickandmorty_characters/harold')
        const jsonData = await response.json();

        expect(jsonData.name).toEqual("Harold")
        expect(jsonData.status).toEqual("Alive")
        expect(jsonData.species).toEqual("Cronenberg")
    })
})
