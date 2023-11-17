


function depositou(){
    let nome = document.getElementById('name').value
    let conta = document.getElementById('conta').value
    let valor = document.getElementById('valor').value
    
    res.innerHTML = (`${nome} depositou ${valor}€ na conta ${conta}`)
    
    return false;
}