export default function getRacingCount () {
    let tryNumber = document.querySelector('#racing-count-input').value;
    if (tryNumber <= 0) {
        return
    } else {
        return tryNumber;
    };
}