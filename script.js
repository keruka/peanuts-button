function add() {
    count+=1;
    if (count % 10 === 0) {
        const item = "ピーナッツ"
        console.log(item);
        document.getElementById("peanutsBox").innerHTML = item;
    } else {
        const item =""
        console.log(item);
        document.getElementById("peanutsBox").innerHTML = item;
    }

    console.log(count);
    document.getElementById("countBox").innerHTML = count;

}

function subtract() {
    count-=1;
    if (count % 10 === 0) {
        const item = "ピーナッツ"
        console.log(item);
        document.getElementById("peanutsBox").innerHTML = item;
    } else {
        const item =""
        console.log(item);
        document.getElementById("peanutsBox").innerHTML = item;
    }

    console.log(count);
    document.getElementById("countBox").innerHTML = count;
    
}

