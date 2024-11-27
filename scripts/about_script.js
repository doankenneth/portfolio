function toggleAnswer(n) {
    const answer = document.getElementById('answer' + n);
    const answericon = document.getElementById('answericon' + n)
    answer.classList.toggle('active');
    
    if (answer.className.localeCompare("answer active")) {
        answericon.innerHTML = "+";
    } else {
        answericon.innerHTML = "-";
    }
    
}