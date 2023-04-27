for(const stat in statistics) {
    if(stat.charAt(0) == 'r' || statistics[stat] % 2 ==1) {
        console.log(statistics[stat]);
    }
}