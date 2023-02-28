function golfScore(par, hits){
    if (hits == 1) {
        return 'Hole in one'
    } else if(hits <= par -2){
        return 'Eagle'
    }else if(hits == par -1){
        return 'Birdie'
    }else if(hits == par){
        return 'Par'
    }else if(hits == par + 1){
        return 'Bogey'
    }else if(hits == par + 2){
        return 'Double Bogey'
    }else if (hits >= 3){
        return 'Go home'
    }
}

console.log(golfScore(5,2))


// par 3
/*
par 5
hits 2

2 <= 5-2
*/

