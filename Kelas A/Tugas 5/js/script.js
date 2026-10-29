function fn_ValForm() {
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";

    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKat = document.getElementById("kategori").value;
    var oRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    //validasi field kosong + email
    if (sNama == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (sEmail == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }else if (!oRegex.test(sEmail)) {
        sMsg += "\n* Format email tidak valid";
    }

    //validasi umur
    if (sUmur == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    }else if (isNaN(sUmur)) {
        sMsg += "\n* Umur harus berupa angka";
    }else {
        var iUmur = parseInt(sUmur);
        if (iUmur > 18) {
            sMsg += "\n* Umur harus antara 10 sampai 18 tahun";
        }else if (iUmur >= 10) {
            if (iUmur > 14) {
                sInfo = "Kategori Senior";
            }else {
                sInfo = "Kategori Junior";
            }
        }else{
            sMsg += "\n* Umur harus antara 10 sampai 18 tahun";
        }
    }

    if (sKat == "") {
        sMsg += "\n* Anda belum memilih lomba";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    //switch-case
    switch (sKat) {
        case "C":
            sPilihan = "Cerdas Cermat";
            break;
        case "P":
            sPilihan = "Puisi";
            break;
        case "D":
            sPilihan = "Desain Poster";
            break;
    }
    
    alert("Terima kasih " + sNama + "! Anda terdaftar di lomba " + sPilihan + " (" + sInfo + ").");
    return true;
}
