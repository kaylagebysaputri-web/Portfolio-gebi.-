// RUMUS 4: Mengaktifkan Menu Navigasi Seluler

// 1. Dapatkan Elemen (RUMUS 4.1)
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav').querySelector('ul');

// 2. Tambahkan Event Listener (RUMUS 4.2)
navToggle.addEventListener('click', function() {
    // 3. Logika Aksi: Toggle (buka/tutup) kelas 'open'
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    
    // Mengubah atribut ARIA untuk aksesibilitas
    navToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Mengubah kelas CSS (Lihat CSS di atas pada @media max-width: 768px)
    mainNav.classList.toggle('open');
});


// RUMUS LAIN: Validasi Formulir Kontak Sederhana (Opsional)

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dikirim secara default

    // Cek apakah semua input terisi (Contoh sederhana)
    const name = contactForm.querySelector('input[name="name"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    if (name.length > 0 && message.length > 0) {
        alert('Pesan berhasil dikirim! (Simulasi. Anda perlu backend untuk mengirim email)');
        // Di lingkungan nyata, Anda akan mengirim data ini ke server (backend) menggunakan Fetch API atau Axios.
        contactForm.reset();
    } else {
        alert('Mohon lengkapi semua bidang.');
    }
});

