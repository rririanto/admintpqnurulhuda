# admintpqnurulhuda

Admin TPQ Nurul Huda - management panel untuk [Buku Penilaian Online TPQ Nurul Huda Banyuwangi](https://github.com/jimmyromanticdevil/bpo-tpq)

Tujuan adalah untuk mentransformasikan Buku fisik menjadi buku penilaian elektronik agar proses laporan pembelajaran santri di TPQ bisa terpantau dengan baik oleh Orang Tua/Wali santri maupun wali kelas santri. 


* Bobot halaman ringan: pertama load 34.2 KB atau kurang, load kedua dan selanjutnya hanya 76 B.
* Skor [PageSpeed](https://developers.google.com/speed/pagespeed/insights): 100 dengan kecepatan load 0.8 detik.
* _Load time_ (menurut [Pingdom](https://tools.pingdom.com/#5cc7b539c8000000)): 453 milidetik 
* Support PWA bisa di install pada device Android dan berjalan seperti layaknya aplikasi android. 
* Karena sudah suport PWA maka Bisa di convert menjadi .apk dan diupload di playstore menggunakan [bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap) ataupun [PWABuilder](https://www.pwabuilder.com/)
* UI admin simple dan enak dipandang karena menggunakan framework CSS [tailwindcss](https://tailwindcss.com/)
* Zero Cost: Tidak ada biaya server hosting, database maupun domain karena semua menggunakan layanan SaaS free dari [netlify hosting](https://netlify.com/) dan [heroku](http://heroku.com/) sebagai hosting database. 
* Menggunakan [Strapi API](http://strapi.io/) agar perancangan API bisa cepat dan stabil. 

**CATATAN**: Folder Api/ berisikan Strapi models yang bisa digunakan untuk membuat database admintpqnurulhuda. Silahkan copy dan replace di folder API strapi Anda.

<hr>

