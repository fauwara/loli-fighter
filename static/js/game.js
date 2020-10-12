function clickLoliPage(){
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('loli-page').style.display = 'block';

    for(let i = 0; i < loliList.length; i++){
        renderCard(loliList,i);
    }
}
