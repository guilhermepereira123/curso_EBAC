document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-drawer').addEventListener('submit', function(e){
        e.preventDefault();
        let maxNumber = document.getElementById('number-max').value;
        maxNumber = parseInt(maxNumber);
        
        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);


        document.getElementById('res-value').innerText = randomNumber;
        document.querySelector('.res').style.display = 'block';
    })
})