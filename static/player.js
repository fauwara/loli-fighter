function loliClass(className, strength, weakness, color){
    this.className = className;
    this.strength = strength;
    this.weakness = weakness;
    this.color = color;
    this.multiplier = 1.5;
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

function loli(loliName, loliCategory, loliClass, hp, attack, defence, speed, moveSet, lore, imgLink ){
    this.loliName = loliName;
    this.loliCategory = loliCategory,
    this.loliClass = loliClass;
    // this.attack = attack;
    // this.defence = defence;
    // this.speed = speed;
    this.stats = {
        hp,
        attack,
        defence,
        speed,
    };
    this.moveSet = moveSet;
    this.lore = lore;
    this.imgLink = imgLink;
}


let ryuAkasuki = new loli('Ryu Akasuki', 'The maid loli', yandere, 2000, 3, 3, 4, [flyingChappal, flyingChappal, flyingChappal, flyingChappal],  'nothing here', './static/images/Ryu Akasuki.jpg' );

// console.log(ryuAkasuki);

let loliList = [ryuAkasuki, ryuAkasuki]