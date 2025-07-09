function getTimeAndWeather() {
  const info = document.getElementById('info');
  const now = new Date().toLocaleTimeString();
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current=temperature_2m')
    .then(res => res.json())
    .then(data => {
      const temp = data.current.temperature_2m;
      info.innerHTML = `Waktu sekarang: ${now}<br/>Cuaca: ${temp}°C di Jakarta`;
    })
    .catch(() => {
      info.innerHTML = `Waktu sekarang: ${now}<br/>Cuaca tidak tersedia`;
    });
}

function tampilkanDataPeserta() {
  const nik = document.getElementById('nik').value;
  const nama = document.getElementById('nama').value;
  const alamat = document.getElementById('alamat').value;
  const jk = document.getElementById('jk').value;
  document.getElementById('output-peserta').innerHTML = `
    <h3>Data Pendaftar:</h3>
    NIK: ${nik}<br/>
    Nama: ${nama}<br/>
    Alamat: ${alamat}<br/>
    Jenis Kelamin: ${jk}
  `;
}

function tampilkanJadwal() {
  const nama = document.getElementById('nama-jadwal').value;
  const hari = document.getElementById('hari').value;
  const jam = document.getElementById('jam').value;
  document.getElementById('output-jadwal').innerHTML = `
    <h3>Jadwal Kursus:</h3>
    Nama: ${nama}<br/>
    Hari: ${hari}<br/>
    Jam: ${jam}
  `;
}
