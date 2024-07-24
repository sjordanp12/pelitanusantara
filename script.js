// Navbar

// Ambil elemen navbar
var navbar = document.querySelector('.navbar');

// Tambahkan event listener untuk saat halaman digulir
window.addEventListener('scroll', function () {
  // Periksa posisi scroll terhadap tinggi navbar
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menggunakan event listener untuk menangkap submit form
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah form untuk submit

  // Menampilkan SweetAlert
  Swal.fire({
    title: 'Info ga penting',
    text: 'Fitur ini belum diselesaikan. Tunggu developernya mood dl y.',
    icon: 'info',
    confirmButtonText: 'OK',
  }).then((result) => {
    // Jika OK ditekan, Anda bisa menambahkan tindakan tambahan di sini
    // if (result.isConfirmed) {
    //   // Misalnya, bisa redirect atau melakukan tindakan lain
    //   window.location.href = 'halaman-berikutnya.html';
    // }
  });
});

document.getElementById('myFormm').addEventListener('submit', function (event) {
  event.preventDefault(); // Menghentikan pengiriman form standar

  // Mengambil nilai dari input nama dan email
  var email = document.getElementById('exampleInputEmail1').value.trim();
  var comment = document.getElementById('floatingTextarea2').value.trim();

  // Validasi input
  if (email === '' || comment === '') {
    // Menampilkan pesan SweetAlert jika ada input yang kosong
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Mohon lengkapi semua kolom!',
    });
  } else {
    // Menampilkan pesan SweetAlert jika input valid
    Swal.fire({
      icon: 'success',
      title: 'Terima kasih!',
      text: 'Form berhasil dikirim.',
    });

    // Mengosongkan nilai input setelah submit berhasil
    document.getElementById('exampleInputEmail1').value = '';
    document.getElementById('floatingTextarea2').value = '';
  }
});
