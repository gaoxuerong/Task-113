
function main(distance,time){
    let money = 0;
    if((0<distance)&&(distance<=2)){
        if(time===0){
            money = 6;
        }else {
            money = 6+  time*0.25;
        }
    }else if((2<distance)&&(distance<=8)){
        if(time===0){
            money = 6+ (distance-2)*0.8;
        }else {
            money = 6+ (distance-2)*0.8+ time*0.25;
        }
    }else{
        if(time===0){
            money = 6+ 4.8+(distance-8)*1.2;
        }else {
            money = 6+ 4.8+(distance-8)*1.2+ time*0.25;
        }
    }
    money = Math.round(money);
    return money;
}
module.exports =  main;