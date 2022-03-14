
const gameModes = {
    easy : "1",
    medium : "2",
    hard : "3"
};

$(function () {

    
    startGame = () => {
        let gameMode = $('input[name="game-mode"]:checked').val();
        localStorage.setItem('gameMode',gameMode);
        $('#select-game-mode').hide();

    gameOn = function () {

        (checkAppleFloor(apple1) || checkAppleBasket(apple1)) 
        ? setAppleBegin(apple1) 
        : downApple(apple1);
            

        (checkAppleFloor(apple2) || checkAppleBasket(apple2)) 
        ? setAppleBegin(apple2) 
        : downApple(apple2);

        (checkAppleFloor(apple3) || checkAppleBasket(apple3)) 
        ? setAppleBegin(apple3) 
        : downApple(apple3);

        if (life > 0) 
            animationId = requestAnimationFrame(gameOn);
        else {
            stopGame();
            var keys = Object.keys(gameModes);
            let currSelectedGameMode;
            keys.forEach(function(key){
                if(gameModes[key] === localStorage.getItem('gameMode')){
                    currSelectedGameMode = key;
                }
            });
            if(parseInt(localStorage.getItem(currSelectedGameMode)) < score) {
                localStorage.setItem(currSelectedGameMode,score);
            }
            life = 0;
        }
    };

    animationId = requestAnimationFrame(gameOn);
    }
});