function validateForm() {
    // Reset error and result messages
    document.getElementById('error-message').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Get form values
    let nama = document.getElementById('nama').value.trim();
    let email = document.getElementById('email').value.trim();
    let jam = document.getElementById('jam').value.trim();
    let tujuan = document.getElementById('tujuan').value.trim();
    let tiket = document.getElementById('tiket').value.trim();

    // Validate Nama Pelanggan
    if (nama === '' || nama.length > 30) {
        document.getElementById('error-message').innerHTML = 'Nama Pelanggan harus diisi (maksimum 30 karakter)';
        return;
    }

    // Validate Email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('error-message').innerHTML = 'Format email tidak valid';
        return;
    }

    // Validate Jam Keberangkatan format (HH:MM)
    let jamRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!jamRegex.test(jam)) {
        document.getElementById('error-message').innerHTML = 'Format jam tidak valid (HH:MM)';
        return;
    }

    // Validate Tujuan Keberangkatan
    if (tujuan === '') {
        document.getElementById('error-message').innerHTML = 'Tujuan Keberangkatan harus diisi';
        return;
    }

    // Validate Jumlah Tiket
    let jumlahTiket = parseInt(tiket, 10);
    if (isNaN(jumlahTiket) || jumlahTiket < 1 || jumlahTiket > 10) {
        document.getElementById('error-message').innerHTML = 'Jumlah Tiket harus berupa bilangan bulat antara 1 dan 10';
        return;
    }

    // Display the result
    let resultMessage = 'Data Form Valid:<br>';
    resultMessage += 'Nama Pelanggan: ' + nama + '<br>';
    resultMessage += 'Email: ' + email + '<br>';
    resultMessage += 'Jam Keberangkatan: ' + jam + '<br>';
    resultMessage += 'Tujuan: ' + tujuan + '<br>';
    resultMessage += 'Jumlah Tiket: ' + jumlahTiket;

    document.getElementById('result').innerHTML = resultMessage;
}
