function createqr(){
    let txt=document.getElementById('qr-text').value;
document.getElementById('img').src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${txt}`
}
