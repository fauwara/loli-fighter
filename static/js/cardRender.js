function renderCard(list, iterator){

    //-------------------------------------- card - template -------------------------------------- 
    let cardTemplate = document.createElement('div');
    cardTemplate.setAttribute('class', 'card');
    cardTemplate.style.border = `5px solid ${list[iterator].loliClass.color}`


    //----------------------------------------- card - img ----------------------------------------
    cardTemplate.style.backgroundImage = `url('${list[iterator].imgLink}')`;
    
    //------------------------------------------ card - bio --------------------------------------
    let cardBio = document.createElement('div');
    cardBio.setAttribute('class', 'card-bio');
    cardTemplate.appendChild(cardBio);

    // top part of card
    let cardTop = document.createElement('div');
    cardTop.setAttribute('class', 'card-Top');
    cardBio.appendChild(cardTop);

    // ----------------------------------------- card - header ----------------------------------
    let cardHeader = document.createElement('div');
    cardHeader.setAttribute('class', 'card-header');
    cardTop.appendChild(cardHeader);
    
    // name - element
    let cardNameElement = document.createElement('div');
    cardNameElement.setAttribute('class', 'card-name-element');
    cardHeader.appendChild(cardNameElement);

    // card - name
    let cardLoliName = document.createElement('div');
    cardLoliName.setAttribute('class', 'card-header-loliname');
    cardNameElement.appendChild(cardLoliName);
    cardLoliName.innerText = list[iterator].loliName;
    
    // card - category
    let cardLoliCategory = document.createElement('div');
    cardLoliCategory.setAttribute('class', 'card-header-lolicategory');
    cardNameElement.appendChild(cardLoliCategory);
    cardLoliCategory.innerText = list[iterator].loliCategory;
    
    // card - class
    let cardLoliClass = document.createElement('div');
    cardLoliClass.setAttribute('class', 'card-header-loliclass');
    cardHeader.appendChild(cardLoliClass);
    cardLoliClass.innerText = list[iterator].loliClass.className;
    cardLoliClass.style.color = list[iterator].loliClass.color;
    

    // loli - stats
    //--------------------------------------------- card - stats ----------------------------------
    let cardStats = document.createElement('div');
    cardStats.setAttribute('class', 'card-stats');
    cardTop.appendChild(cardStats);
    // card - attack
    let cardStatsAttack = document.createElement('div');
    cardStatsAttack.setAttribute('class', 'card-stats-attack');
    cardStats.appendChild(cardStatsAttack);
    cardStatsAttack.innerText = `attack: ${list[iterator].stats.attack}`;
    // card - defence
    let cardStatsDefence = document.createElement('div');
    cardStatsDefence.setAttribute('class', 'card-stats-defence');
    cardStats.appendChild(cardStatsDefence);
    cardStatsDefence.innerText = `defence: ${list[iterator].stats.defence}`;
    // card - speed
    let cardStatsSpeed = document.createElement('div');
    cardStatsSpeed.setAttribute('class', 'card-stats-speed');
    cardStats.appendChild(cardStatsSpeed);
    cardStatsSpeed.innerText = `speed: ${list[iterator].stats.speed}`;
    
    
    

    // -------------------------------------- card - bottom half ------------------------------
    let bottomCard = document.createElement('div');
    bottomCard.setAttribute('class', 'bottom-card');
    cardBio.appendChild(bottomCard);

    // card - hp
    let cardStatsHp = document.createElement('div');
    cardStatsHp.setAttribute('class', 'card-stats-hp');
    bottomCard.appendChild(cardStatsHp);
    cardStatsHp.innerText = `HP: ${list[iterator].stats.hp}`;
    
    // ----------------------------------------- card - moveset --------------------------------
    let cardMoveSet = document.createElement('div');
    cardMoveSet.setAttribute('class','card-moveset');
    bottomCard.appendChild(cardMoveSet);

    // loli - moves
    for(let j = 0; j < 4; j++){
        let cardMoveElement = document.createElement('button');
        cardMoveElement.setAttribute('class', 'card-move');
        cardMoveElement.innerText = list[iterator].moveSet[j].moveName;
        cardMoveSet.appendChild(cardMoveElement);
        cardMoveElement.style.border = `${list[iterator].loliClass.color} 5px solid`
        cardMoveElement.style.backgroundColor = `${list[iterator].loliClass.color}`
    }

    document.getElementsByClassName('loli-list')[0].appendChild(cardTemplate);

}
