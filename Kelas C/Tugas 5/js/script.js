function fn_ValForm() {
    var sMsg = "";
    var sInfo = "";
    var sPilihan = "";
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKat = document.getElementById("kategori").value;
    var oRegex = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    // form validation
    if (sNama == "") {
        sMsg += "\n* Nama belum diisi";
    }
    if (sEmail == "") {
        sMsg += "\n* Email belum diisi";
    } else if (!oRegex.test(sEmail)) {
        sMsg += "\n* Format email tidak valid";
    }

    // if-else untuk umur
    if (sUmur == "") {
        sMsg += "\n* Umur belum diisi";
    } else if (isNaN(sUmur)) {
        sMsg += "\n* Umur harus berupa angka";
    } else {
        var iUmur = parseInt(sUmur);
        if (iUmur > 70) {
            sMsg += "\n* Umur harus antara 7 sampai 70 tahun";
        } else if (iUmur >= 7) {
            if (iUmur > 17) {
                sInfo = "Anggota Umum";
            } else {
                sInfo = "Anggota Pelajar";
            }
        } else {
            sMsg += "\n* Umur harus antara 7 sampai 70 tahun";
        }
    }

    if (sKat == "") {
        sMsg += "\n* Koleksi Favorit belum dipilih";
    }

    if (sMsg != "") {
        alert("Peringatan:" + sMsg);
        return false;
    }

    // switch-case
    switch (sKat) {
        case "F":
            sPilihan = "Fiksi";
            break;
        case "N":
            sPilihan = "Non-Fiksi";
            break;
        case "J":
            sPilihan = "Jurnal Ilmiah";
            break;
    }

    alert("Terima kasih " + sNama + " ! Anda terdaftar di koleksi " + sPilihan + " (" + sInfo + ").");
    return true;
}
