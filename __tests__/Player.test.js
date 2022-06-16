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

test("gets player's stats as an object", () => {
    const player = new Player('Ben');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test("gets inventory from player or returns false",() => {
    const player = new Player('Ben');
    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
});