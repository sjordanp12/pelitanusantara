// document.querySelector('.btn').addEventListener('click', function () {
//   swal('Terimakasih', ' pesan anda sudah dikirim', 'success');
// });

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  let nameInput = document.getElementById('email').value;
  let commentInput = document.getElementById('comment').value;

  if (nameInput && commentInput === '') {
    Swal.fire({
      title: 'Oops...',
      text: 'Form tidak boleh kosong!',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  } else {
    // Jika form diisi, lakukan tindakan lain (misalnya kirim data)
    Swal.fire({
      title: 'Berhasil!',
      text: 'Form telah dikirim!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    // Di sini Anda bisa menambahkan logika untuk mengirim data
  }
});
