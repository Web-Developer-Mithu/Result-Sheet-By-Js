

function result() {
    let banfmark = parseFloat(document.getElementById("bfullmark").value) || 0;
    let banmark = parseFloat(document.getElementById("bobtaiedmark").value) || 0;

    let efmark = parseFloat(document.getElementById("efullmark").value) || 0;
    let emark = parseFloat(document.getElementById("eobtaiedmark").value) || 0;

    let mfmark = parseFloat(document.getElementById("mfullmark").value) || 0;
    let mmark = parseFloat(document.getElementById("mobtaiedmark").value) || 0;

    let rfmark = parseFloat(document.getElementById("rfullmark").value) || 0;
    let rmark = parseFloat(document.getElementById("robtaiedmark").value) || 0;

    // Full Mark Update In Table
    document.getElementById("tbanfull").innerHTML = banfmark || 0;
    document.getElementById("tengfull").innerHTML = efmark || 0;
    document.getElementById("tmfullmark").innerHTML = mfmark || 0;
    document.getElementById("trfull").innerHTML = rfmark || 0;

    //Obtained Mark Update In Table
    document.getElementById("tbanobt").innerHTML = banmark || 0;
    document.getElementById("tengobt").innerHTML = emark || 0;
    document.getElementById("tmathobt").innerHTML = mmark || 0;
    document.getElementById("trelobt").innerHTML = rmark || 0;

    //Total Obtaide Mark Update
    let totalObtaidend = banmark + emark + mmark + rmark;
    document.getElementById("tobtaidend").innerHTML = totalObtaidend || 0;

    // Average Mark Update
    let avg = totalObtaidend / 4;
    document.getElementById("avgmark").innerHTML = avg;

    let fullMark = banfmark + efmark + mfmark + rfmark;
    document.getElementById("fullmark").innerHTML = fullMark;

    let grade;
    let gpa;
    if (((banmark / banfmark * 100) < 33) || ((emark / efmark * 100) < 33)
        || ((mmark / mfmark * 100) < 33) || ((rmark / rfmark * 100) < 33)) {
        grade = "F";
        gpa = 0;
    } else if (avg >= 80) {
    grade = "A+";
    gpa = 5.00;
}
else if (avg >= 70) {
    grade = "A";
    gpa = 4.00;
}
else if (avg >= 60) {
    grade = "A-";
    gpa = 3.50;
}
else if (avg >= 50) {
    grade = "B";
    gpa = 3.00;
}
else if (avg >= 40) {
    grade = "C";
    gpa = 2.00;
}
else if (avg >= 33) {
    grade = "D";
    gpa = 1.00;
}
else {
    grade = "F";
    gpa = 0;
}

    document.getElementById("grade").innerHTML=grade;
    document.getElementById("gpa").innerHTML=gpa;



}