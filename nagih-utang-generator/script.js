



const eksekusi = document.querySelector("#eksekusi");
const salin = document.querySelector('#salin');


const getData = () => {
    const mode = document.querySelector('#mode');
    const nama = document.querySelector('#nama');
    const penghutang = document.querySelector('#penghutang');
    const nominal = document.querySelector('#nominal');
    const tujuan = document.querySelector('#tujuan');
    let salam;
    if (document.querySelector('#salam').checked){
        salam = `Assalamualaikum Wr. Wb. `;
    }
    else {
        salam = null;
    }   
    
    return {
        mode : mode.value,
        nama : nama.value,
        penghutang : penghutang.value,
        nominal : nominal.value,
        tujuan : tujuan.value,
        salam
    };
};

eksekusi.addEventListener('click',event => {
    event.preventDefault();

    const data = getData();
    let text;

    if(data.mode == 1){
        if(data.salam==null){
            data.salam = "Permisi. ";
        }
        text = `${data.salam}Ini saya ${data.nama}, sebelumnya mohon maaf apabila saya mengganggu. Tujuan saya menghubungi anda adalah untuk mengharapkan itikad baik anda. Untuk saat ini saya ${data.tujuan} dan sangat membutuhkan biaya sebesar ${data.nominal}. Apakah ${data.penghutang} bersedia untuk melunasi hutang sebesar ${data.tujuan} yang saya bebankan kepada anda? Terimakasih`;
        
    } else {
        if(data.salam==null){
            data.salam = `woi ${data.penghutang}!!!!`;
        }
        text = `${data.salam} masih hidup kau ${data.penghutang}??!... bayarlah itu hutang kau!!!.. jangan kau ngutang saja bisa, tapi bayar tidak bisa!!... macam mana kau ini ha?!! kau tau tidak?? aku ni ${data.tujuan}!!.. jadi kau ${data.penghutang} kapan mau bayar hutang ${data.nominal} ha?!! cepatla!!! aku ni butuh sekali uang itu, tolonglah kau ${data.penghutang} bayar itu hutang ${data.nominal} secepatnya.. janganlah aku tunggu sampai diri kau mati dulu ${data.penghutang} baru kau bayar itu hutang kau!! atau kalau kau masih lama biar kujual biji dan ginjal kau itu  ${data.penghutang}!!... macam mana hahh!!???... kutunggu malam ini bayarlah hutang ${data.nominal} itu!!`.toUpperCase();
    }
        
        // .toUpperCase(caps)

    console.log(text);
    const text_el = document.querySelector('#hasil');
    text_el.innerText = text;

});

salin.addEventListener('click',event => {
    const hasil = document.querySelector('#hasil');
    hasil.select();
    hasil.setSelectionRange(0,10000);
    document.execCommand("copy");

    document.querySelector('#salinx').innerText = 'Berhasil disalin!';
});