function openEmail() {
    window.open('mailto:doankenneth@gmail.com');
}


let counter = 0;
document.getElementById("counter").innerHTML = counter;

function clickerCounterUp() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}
