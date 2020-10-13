function loliClass(className, strength, weakness, color){
    this.className = className;
    this.strength = strength;
    this.weakness = weakness;
    this.color = color;
    this.multiplier = 1.5;
}


function move(moveName, moveDescription, damage, manaCost, statsChange, effect){
    this.moveName = moveName;
    this.moveDescription = moveDescription;
    this.damage = damage;
    this.manaCost = manaCost;
    this.statsChange = statsChange;
    this.effect = effect;
}


function loli(loliName, loliCategory, loliClass, hp, attack, defence, speed, moveSet, imgLink ){
    this.loliName = loliName;
    this.loliCategory = loliCategory,
    this.loliClass = loliClass;
    this.stats = {
        hp,
        attack,
        defence,
        speed
    };
    this.moveSet = moveSet;
    this.imgLink = imgLink;
}

//----------------------------------------------------- Loli classes ----------------------------------------------
let yandere = new loliClass('Yandere', 'Tsundere', 'Tsundere', '#de215b');
let tsundere = new loliClass('Tsundere', 'Yandere', 'Yandere', '#ffac75');
let dandere = new loliClass('Dandere', 'Kuudere', 'Saodere', '#1dd27b')

// --------------------------------------------------- loli - moves ----------------------------------------------
// common - moves
let takeDown = new move('Take Down', 'The user tackles the enemy dealing damage.', 175, 100, {statChange:false}, {effect:false});
let moonlight = new move('Moonlight', 'The users </b>attack</b> and <b>speed</b>.', 0, 100,{statChange:true, target:'user', stat: ['attack','speed'], addition: [3,3]}, {effect:false});
// Ryu Akasuki -moves
let flyingChappal = new move('Flying Chappal', 'A flying chappal is on the way.', 150, 100, { statChange:true ,target:'enemy', stat: ['attack'], addition: [-1] }, {effect:false});
// Dr.Kiyomi -moves
let anesthetic = new move('Anesthetic', 'The enemy target is affected by <b>Sleep</b> for <b>3 turns</b>.', 0, 500, {statChange:false}, {effectStatus:true, effect:'sleep', turns:3});
let healPulse = new move('Heal Pulse', '<b>50%</b> of the ealth lost is <b>healed.</b>', 0, 250, {stats:true, target:'user', stat:['hp'], addition:0}, {effect:false});

// ------------------------------------------------------ LOLIS --------------------------------------------------
let ryuAkasuki = new loli('Ryu Akasuki', 'The maid loli', yandere, 2000, 6, 6, 8, [flyingChappal, flyingChappal, flyingChappal, flyingChappal], './static/images/Ryu Akasuki.jpg' );
let drKiyomi = new loli('Dr. Kiyomi', 'The Dr. loli', dandere, 2500, 4, 8, 6, [anesthetic, healPulse, takeDown, moonlight], './static/images/Dr. Kiyomi.jpg' );
// console.log(ryuAkasuki);

let loliList = [ryuAkasuki, drKiyomi, ryuAkasuki]
