var today = moment().format("MMMM Do YYYY");
document.getElementById("currentDay").append(today);

var currentHour = moment().hour();
console.log(currentHour);

var getHourClass = function(hour){
    if (hour < currentHour){
        return "past"
    }
    else if (hour > currentHour){
        return "future"
    }
    else {
        return "present"
    }
};

var setHourBlock = function(hourBlock){
    var hourID = Number.parseInt(hourBlock.id)//turning id of hour block into number
    console.log(hourID);


var saveBtn = hourBlock.querySelector(".btn")
var textArea = hourBlock.querySelector("textarea")
var hourClass = getHourClass(hourID);
textArea.classList.add(hourClass);//adding class to each hour class based on if/else statements


var saveText = localStorage.getItem(hourID)
textArea.value = saveText


saveBtn.addEventListener("click", function(){
    let textInput = textArea.value;
    console.log(textInput);
    localStorage.setItem(hourID, (textInput));
})
};


document.querySelectorAll(".row").forEach(setHourBlock); //loop


