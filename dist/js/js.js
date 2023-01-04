document.getElementById('form-validation').addEventListener('submit', function(event) {
    event.preventDefault(); // menghentikan submit form secara default
  
    // mengambil nilai dari semua input yang dibutuhkan
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

  
    // menyimpan semua pesan error
    var errors = [];
  
     // menghapus semua pesan error sebelumnya
     document.querySelector('#email-error').innerHTML = '';
     document.querySelector('#password-error').innerHTML = '';

     document.querySelector('#email').style.borderColor = '';
     document.querySelector('#password').style.borderColor = '';
  
    // validasi form disini
    // validasi form disini
    if (email === '') {
        errors.push("Email tidak boleh kosong");
         document.getElementById("email-error").innerHTML = "Email tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
         document.getElementById('email').style.borderColor = "red";
    }
  
    if (password === '') {
        errors.push("Password tidak boleh kosong");
         document.getElementById("password-error").innerHTML = "password tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
        document.getElementById('password').style.borderColor = "red";
    }
  
  // mengecek apakah email memiliki format yang benar
    if (email !== '') {
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(email)) {
        errors.push("Email Format salah");
        document.getElementById("email-error").innerHTML = "Email Format salah";
        
      // Tandai elemen dengan warna merah
        document.getElementById('email').style.borderColor = "red";
        }
    }
  
  // jika tidak ada error, tampilkan inputan di bawah form
  if(email =="admin123@gmail.com" && password =="123"){
    alert('Login sukses');
    location.href = "home.html"
  }else{
    alert('Login gagal username atau password salah');
}
  
});
  