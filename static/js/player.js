function loliClass(className, strength, weakness, color, multiplier){
    this.className = className;
    this.strength = strength;
    this.weakness = weakness;
    this.color = color;
    this.multiplier = multiplier;
}

let yandere = new loliClass('Yandere', 'tsundere', 'tsundere', '#de215b');
let tsundere = new loliClass('Tsundere', 'yandere', 'yandere', '#ffac75');

function move(moveName, damage, statsChange, effect){
    this.moveName = moveName;
    this.damage = damage;
    this.statsChange = statsChange;
    this.effect = effect;
}

let flyingChappal = new move('Flying Chappal', 50, { stat:'attack', target:'enemy', addition:-0.5 }, null);

function loli(loliName, loliCategory, loliClass, hp, attack, defence, speed, moveSet, lore, imgLink, ){
    this.loliName = loliName;
    this.loliCategory = loliCategory,
    this.loliClass = loliClass;
    this.hp = hp;
    // this.attack = attack;
    // this.defence = defence;
    // this.speed = speed;
    this.stats = {
        attack,
        defence,
        speed,
    };
    this.moveSet = moveSet;
    this.lore = lore;
    this.imgLink = imgLink;
}


let ryuAkasuki = new loli('Ryu Akasuki', 'The maid loli', yandere, 2000, { attack:3 , defence:3, speed:4}, [flyingChappal],  'nothing here', './images/Ryu Akasuki' );