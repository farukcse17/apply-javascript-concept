// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes. 

    
function hourToMinute(hour){
    switch(hour){
        case 1:
            let minute = hour * 60;
            console.log(minute);
            break;
        default:
            console.log(hour);
    }
}

let hour = 1;
hourToMinute(hour);


