//it's an app for calculating foodcost
//coded by Emperor

function food(){
    var foodcost = prompt("What is the total amount?");
        document.write("Total cost of food is = ", foodcost, "<br>");
    var no = prompt("No. of People..");
        document.write("Each one of you has to pay = ", (foodcost/no).toFixed(2), "<br>");
}

food()