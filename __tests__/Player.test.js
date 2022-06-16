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

test("gets player's health value", () => {
    const player = new Player('Ben');

    //makes sure that our string contains the player's health
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive or not', () => {
    const player = new Player('Dave');
    expect(player.isAlive()).toBeTruthy();
    player.health =0;
    expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () =>{
    const player = new Player('Ben');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});

test("gets player's attack value", () =>{
    const player = new Player("Ben");
    player.strength = 10;

    expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("adds a potion to the inventory", () =>{
    const player = new Player("Ben");
    const oldCount = player.inventory.length;

    player.addPotion(new Potion());

    expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test("use a potion from the inventory", () =>{
    const player = new Player("Ben");
    player.inventory = [new Potion(), new Potion(), new Potion()];
    const oldCount = player.inventory.length;

    player.usePotion(1);

    expect(player.inventory.length).toBeLessThan(oldCount);
});