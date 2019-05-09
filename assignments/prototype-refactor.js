/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
class GameObject{
  constructor(date,name,dims){
    this.createdAt=date
    this.name=name
    this.dimensions=dims
  }
  destroy(){
    return `${this.name} was removed from the game`
  }
}
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
class CharacterStats extends GameObject{
    constructor(date,name,dims,hp){
        super(date,name,dims)
        this.healthPoints=hp
    }
    takeDamage(hp){
        this.healthPoints-=hp
        return `${this.name} took damage`
    }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  

class Humanoid extends CharacterStats{
    constructor(base){
        super(base.createdAt, base.name, base.dimensions, base.healthPoints)
        this.team=base.team
        this.weapons=base.weapons
        this.language=base.language
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    }
}
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  CharacterStats.prototype.isAlive=function(){
    return this.healthPoints>0
  }
  
  GameObject.prototype.SetRandom=function(min,max){
    this.min=min
    this.max=max
  }
  
  GameObject.prototype.RandomDamage=function(weapon,target){
    if(!this.min)
      this.min=0
    if(!this.max)
      this.max=max=4
  
    let temp=Math.floor((Math.random()*(this.max-this.min+1) )+this.min)
    if(temp>0){
      console.log(`${this.name} attacked ${target.name} for ${temp} damage using ${weapon}`)
      target.Damage(temp)
    }else{
      console.log(`${this.name} Missed ${target.name} with ${weapon}`);
    }
  }
  
  GameObject.prototype.Attack=function(weapon,target){
    if(Array.isArray(weapon)){
      weapon=weapon[Math.floor(Math.random() * (weapon.length))]
    }
  
    this.RandomDamage(weapon,target)
  }
  
  CharacterStats.prototype.Damage=function(damage){
    this.healthPoints-=damage
    console.log(`${this.name} took ${damage} hp of damage and now has ${this.healthPoints}`)
    if(this.healthPoints<=0){
      this.destroy()
    }
  }
  
  class Game{
    constructor(hero, villian){
      this.hero=hero
      this.villian=villian
    }
    runGame(){
      while(this.villian.isAlive() && this.hero.isAlive()){
        
        this.hero.Attack(this.hero.weapons, this.villian)
        if(!this.villian.isAlive())
          return "The Hero surived!"
        
        this.villian.Attack(this.villian.weapons, this.hero)
        if(!this.hero.isAlive())
          return "The Villian Prevailed!"
      }
    }
  }
  
  const Hero=new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue'
  })
  const Villian=new Humanoid({
    createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish'
  })
  
  const runtime=new Game(Hero, Villian)
  
  console.log(runtime.runGame());