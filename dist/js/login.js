document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // menghentikan submit form secara default
  
    // mengambil nilai dari semua input yang dibutuhkan
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var retypePassword = document.getElementById('retypePassword').value;

  
    // menyimpan semua pesan error
    var errors = [];
  
     // menghapus semua pesan error sebelumnya
     document.querySelector('#fullName-error').innerHTML = '';
     document.querySelector('#email-error').innerHTML = '';
     document.querySelector('#username-error').innerHTML = '';
     document.querySelector('#password-error').innerHTML = '';
     document.querySelector('#retypePassword-error').innerHTML = '';

     document.querySelector('#fullName').style.borderColor = '';
     document.querySelector('#email').style.borderColor = '';
     document.querySelector('#username').style.borderColor = '';
     document.querySelector('#password').style.borderColor = '';
     document.querySelector('#retypePassword').style.borderColor = '';
  

    // validasi form disini
    if (fullName === '') {
        errors.push("Full Name tidak boleh kosong");
         document.getElementById("fullName-error").innerHTML = "Full Name tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
         document.getElementById('fullName').style.borderColor = "red";
    }

    if (email === '') {
        errors.push("Email tidak boleh kosong");
         document.getElementById("email-error").innerHTML = "Email tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
         document.getElementById('email').style.borderColor = "red";
    }

    if (username === '') {
        errors.push("Email tidak boleh kosong");
         document.getElementById("username-error").innerHTML = "Username tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
         document.getElementById('username').style.borderColor = "red";
    }

    if (password === '') {
        errors.push("Password tidak boleh kosong");
         document.getElementById("password-error").innerHTML = "password tidak boleh kosong";
        
    // Tandai elemen dengan warna merah
        document.getElementById('password').style.borderColor = "red";
    }

    if (password !== document.getElementById('retypePassword').value) {
        errors.push("Password dan Retype Password tidak sama");
        document.getElementById("retypePassword-error").innerHTML = "Password dan Retype Password tidak sama";
      
        // Tandai elemen dengan warna merah
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('retypePassword').style.borderColor = "red";
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
  
    if (errors.length === 0) {
        alert("Berhasil Registrasi silahkan login");
    }
  
});
  