function renderCard(list, iterator){

    //-------------------------------------- card - template -------------------------------------- 
    let cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('class', 'card');


    //----------------------------------------- card - img ----------------------------------------
    let cardImage = document.createElement('img');
    cardImage.setAttribute('class', 'card-img');
    cardTemplate.appendChild(cardImage);
    cardImage.setAttribute('src',list[iterator].imgLink);
    
    //------------------------------------------ card - bio --------------------------------------
    let cardBio = document.createElement('div');
    cardBio.setAttribute('class', 'card-bio');
    cardTemplate.appendChild(cardBio);

    // ----------------------------------------- card - header ----------------------------------
    let cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'card-header');
    cardBio.appendChild(cardHeader);
    
    // card - name
    let cardLoliName = document.createElement('div');
    cardLoliName.setAttribute('class', 'card-header-loliname');
    cardHeader.appendChild(cardLoliName);
    cardLoliName.innerText = list[iterator].loliName;
    
    // card - category
    let cardLoliCategory = document.createElement('div');
    cardLoliCategory.setAttribute('class', 'card-header-lolicategory');
    cardHeader.appendChild(cardLoliCategory);
    cardLoliCategory.innerText = list[iterator].loliCategory;
    
    // card - class
    let cardLoliClass = document.createElement('div');
    cardLoliClass.setAttribute('class', 'card-header-loliclass');
    cardHeader.appendChild(cardLoliClass);
    cardLoliClass.innerText = list[iterator].loliClass.className;

    // loli - stats
    //--------------------------------------------- card - stats ----------------------------------
    let cardStats = document.createElement('div');
    cardStats.setAttribute('class', 'card-stats');
    cardBio.appendChild(cardStats);
    // card - hp
    let cardStatsHp = document.createElement('div');
    cardStatsHp.setAttribute('class', 'card-stats-Hp');
    cardStats.appendChild(cardStatsHp);
    cardStatsHp.innerText = list[iterator].stats.hp;
    // card - attack
    let cardStatsAttack = document.createElement('div');
    cardStatsAttack.setAttribute('class', 'card-stats-attack');
    cardStats.appendChild(cardStatsAttack);
    cardStatsAttack.innerText = list[iterator].stats.attack;
    // card - defence
    let cardStatsDefence = document.createElement('div');
    cardStatsDefence.setAttribute('class', 'card-stats-defence');
    cardStats.appendChild(cardStatsDefence);
    cardStatsDefence.innerText = list[iterator].stats.defence;
    // card - speed
    let cardStatsSpeed = document.createElement('div');
    cardStatsSpeed.setAttribute('class', 'card-stats-speed');
    cardStats.appendChild(cardStatsSpeed);
    cardStatsSpeed.innerText = list[iterator].stats.speed;

    // ----------------------------------------- card - moveset --------------------------------
    let cardMoveSet = document.createElement('div');
    cardMoveSet.setAttribute('class','card-moveset');
    cardBio.appendChild(cardMoveSet);

    // loli - moves
    for(let j = 0; j < 4; j++){
        let cardMoveElement = document.createElement('button');
        cardMoveElement.setAttribute('class', 'card-move');
        cardMoveElement.innerText = list[iterator].moveSet[j].moveName;
        cardMoveSet.appendChild(cardMoveElement);
    }

    document.getElementsByClassName('loli-page')[0].appendChild(cardTemplate);

}

// for(let i = 0; i < loliList.length; i++){
//     renderCard(loliList);
// }
