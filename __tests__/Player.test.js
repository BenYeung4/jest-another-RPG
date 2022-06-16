const Potion = require('../lib/Potion');
//replaces the constructiors' implementing with fake data
jest.mock('../lib/Potion');

console.log(new Potion());


const Player = require('../lib/Player');
//imports potion() constructor into the test

test('creates a player object', () =>{
    const player = new Player('Ben');

    expect(player.name).toBe('Ben');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
});