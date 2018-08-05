var homeScore = 0;
var awayScore = 0;

$("#home-1").click(function(){
    homeScore=homeScore+2;
    $("#home-score").text(homeScore);
});

$("#away-1").click(function(){
    awayScore=awayScore+2;
    $("#away-score").text(awayScore);
});

$("#threeP").click(function(){
    homeScore=homeScore+3;
    $("#home-score").text(homeScore);
});

$("#threP").click(function(){
    awayScore=awayScore+3;
    $("#away-score").text(awayScore);
});

$("#freeThrow").click(function(){
    homeScore=homeScore+1;
    $("#home-score").text(homeScore);
});

$("#freeT").click(function(){
    awayScore=awayScore+1;
    $("#away-score").text(awayScore);
});
