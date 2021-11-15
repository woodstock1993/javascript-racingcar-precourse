function getLength(carName) {
    return carName.length;
}

function noInput(carArr) {
    if (carArr.includes("") && carArr.length === 1) {
        alert('자동차 이름을 5자 이하로 한대이상 입력해주세요.');
        return true;
    }
}

function makeCarList(carList, carArr) {
    for (let i = 0; i < carArr.length; i++) {
        if (getLength(carArr[i]) <= 0 || getLength(carArr[i]) > 5) {
            alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.')
            carList = [];
            return;
        } else {
            carList.push(carArr[i])
        }
    }
}

function showBlock(carList, carNumber) {
    let section2 = document.querySelector('.section-2')
    section2.style.display = "block";
}

export default function getCarName() {
    let carList = [];
    let carNamesInput = document.querySelector('#car-names-input').value;
    let carArr = carNamesInput.split(',');
    if (noInput(carArr) === true) {
    } else {
        makeCarList(carList, carArr);
        if (carList.length === carArr.length) {
            showBlock();
        }
    }
}