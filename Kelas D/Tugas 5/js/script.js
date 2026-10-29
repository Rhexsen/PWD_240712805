function fn_ValForm() {
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKat = document.getElementById("kategori").value;
    var oRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    // 1. Validasi field kosong + email 
    if (sNama == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (sEmail == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!oRegex.test(sEmail)) {
        sMsg += "\n* Format email tidak valid";
    }

    // 2. Validasi umur dengan if-else
    if (sUmur == "") {
        sMsg += "\n* Anda belum mengisikan umur";
    } else if (isNaN(sUmur)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        var iUmur = parseInt(sUmur);
        if (iUmur > 60) {
            sMsg += "\n* Umur harus antara 15 sampai 60 tahun";
        } else if (iUmur >= 15) {
            if (iUmur > 25) {
            sInfo = "Peserta Umum";
            } else {
            sInfo = "Peserta Mahasiswa";
            }
        } else {
            sMsg += "\n* Umur harus antara 15 sampai 60 tahun";
        }
    }

    if (sKat == "") {
        sMsg += "\n* Anda belum memilih jenis acara";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    // 3. Switch-case untuk pilihan
    switch (sKat) {
    case "W":
        sPilihan = "Workshop";
        break;
    case "S":
        sPilihan = "Seminar";
        break;
    case "L":
        sPilihan = "Lomba Coding";
        break;
    }
    
    alert("Terima kasih " + sNama + "! Anda terdaftar di acara " + sPilihan + " (" + sInfo + ").");
    return true;
}
