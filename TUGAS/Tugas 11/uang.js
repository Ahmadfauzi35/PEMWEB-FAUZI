function kursRupiah() {
    const jumlahDollar = document.getElementById("jumlahDollar").value;
    const kurs = 15500;

    const nilaiRupiah = jumlahDollar * kurs;
    document.getElementById("nilaiRupiah").innerText = "Rp. " + nilaiRupiah;a
}