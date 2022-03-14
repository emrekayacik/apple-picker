$(document).on('mousemove', (e) => {
    basket.css('left', e.pageX-120);
});

downApple = (apple) => {
    currApplePos = parseInt(apple.css('top'));
    apple.css('top', currApplePos + speed);
}

checkAppleFloor = (apple) => {
    if (isFell(apple, floor)) {
        showFallen(apple);
        decrLife();
        return true;
    }
    return false;
}

setAppleBegin = (apple) => {
    apple.css('top', appleBeginPos);
}

showFallen = (apple) => {
    fallenNo= apple.attr('data-fallen');
    $('#fallen' + fallenNo).show();
    hideFallen(fallenNo);
}

hideFallen = (fallenNo) => {
    setTimeout(function () {
        $('#fallen' + fallenNo).hide();
    }, 800);
}

decrLife = () => {
    life--;
    lifeSpan.text(life);
}

checkAppleBasket = (apple) => {
    if (isFell(apple, basket)) {
        appleTop = parseInt(apple.css('top'));
        if (appleTop < basketTop) {
            updateScore();
            return true;
        }
    }
    return false;
}

updateScore = ()=> {
    score++;
    if (score % 5 === 0 && speed <= speedMax) {
        let currGameMode = localStorage.getItem('gameMode');
        speed += parseInt(currGameMode);
    }
    scoreSpan.text(score);
    score1.text(score);
}

stopGame = () => {
    cancelAnimationFrame(animationId);
    restart.slideDown();
}

showHighScores = () => {
    let easyHigh = localStorage.getItem('easy');
    let mediumHigh = localStorage.getItem('medium');
    let hardHigh = localStorage.getItem('hard');

    alert(`Easy: ${easyHigh} \nMedium: ${mediumHigh} \nHard: ${hardHigh}`)
}

restart.click(() => {
    location.reload();
});

