import getCarName from "/src/input/getCarNames.js";
import getRacingCount from "../input/getRacingCounts.js";

let carNamesSubmitButton = document.querySelector('#car-names-submit');
let carMovesSubmitButton = document.querySelector("#racing-count-submit");

class Car {
    constructor(carName) {
        this.carName = carName;
        this.distanceStatus = 0;
    }
}

function pushCarInstancesInArray() {
    let carClassArray = [];
    let carList = document.querySelector('#car-names-input').value.split(',');

    for(let i = 0; i < carList.length; i++) {
        carList[i] = new Car(carList[i])
        carClassArray.push(carList[i])
    }
    return carClassArray;
}

function tryNumberConfirmButton() {
    if (getRacingCount() > 0) {
        return true
    } else {
        alert('자연수를 입력하시오');
        return false;
    }
}

function makeTemplate(carClassArray, carSection) {
    for (let i = 0; i < carClassArray.length; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        let codeSnippet = document.createElement("div");
        codeSnippet.innerHTML = `${carClassArray[i].carName}: `;
        if (randomNumber >= 4) {
            carClassArray[i].distanceStatus += 1
            codeSnippet.innerHTML += `${"-".repeat(carClassArray[i].distanceStatus)}`;
        } else {
            codeSnippet.innerHTML += `${"-".repeat(carClassArray[i].distanceStatus)}`;
        }
        carSection.append(codeSnippet);
    }
}

function makeTemplates(carClassArray) {
    let carList = document.querySelector('#car-names-input').value.split(',');
    let tryNumber = document.querySelector('#racing-count-input').value;
    let carSection = document.querySelector('.section-4');
    carSection.innerHTML = "";
    for(let h = 0; h < tryNumber; h++) {
        makeTemplate(carClassArray, carSection);
        carSection.innerHTML += `<br>`;
    }
}

function getWinner(carClassArray) {
    let finalSnippet = document.body;
    let arr = []
    let codeSnippet = document.createElement("div");
    codeSnippet.innerHTML = `최종 우승자: `
    for(let i = 0; i < carClassArray.length; i++) {
        arr.push(carClassArray[i].distanceStatus);
    }
    const maxValue = Math.max(...arr);
    for(let i = 0; i < carClassArray.length; i++) {
        if (maxValue === carClassArray[i].distanceStatus) {
            codeSnippet.innerHTML += `${carClassArray[i].carName}, `;
        };
    }
    codeSnippet = codeSnippet.innerHTML.slice(0, codeSnippet.innerHTML.length-2);
    finalSnippet.append(codeSnippet);
}

function isProperNumberThenDrawPage() {
    let carClassArray;
    if (tryNumberConfirmButton() === true){
        carClassArray = pushCarInstancesInArray();
        document.querySelector('.section-3').style.display = "block";
        makeTemplates(carClassArray);
        getWinner(carClassArray);
    }
}

carNamesSubmitButton.addEventListener("click", getCarName);
carMovesSubmitButton.addEventListener("click", isProperNumberThenDrawPage);