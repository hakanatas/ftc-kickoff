# Fotoğraflar

Bu klasöre aşağıdaki adlarla fotoğraf koyduğunuzda sunum onları kendisi
yerleştirir; kod değişikliği gerekmez. Dosya yoksa o yuvada mevcut çizim
kalır. Uzantı `.jpg`, `.png` ya da `.webp` olabilir.

| Dosya | Nerede görünür | Ne olsun |
|---|---|---|
| `kapak.jpg` | Slayt 1, başlığın sağında (robot çiziminin yerine) | Takım ve robot, dikey ya da kare kadraj iyi |
| `saha.jpg` | Slayt 6, Competition Manual kartlarının üstünde | Turnuva sahası, maç anı |
| `robot.jpg` | Slayt 14, beş yapı sistemi kartlarının üstünde | Takımın robotu ya da masadaki parçalar |
| `atolye.jpg` | Slayt 21, canlı topluluk kartlarının üstünde | Atölyede çalışan takım |
| `takim.jpg` | Slayt 25, kapanışın arka planı (soluk) | Geniş takım fotoğrafı, yatay |
| `diagram.webp` | Slayt 16, elektronik dokümanları kartlarının üstünde | Kontrol sistemi bağlantı şeması; kırpılmadan beyaz zeminde gösterilir |

Yuvalar geniş bir şerit olduğu için fotoğraf dikeyde kırpılır. Kırpmanın odak
noktasını `js/slides.js` içindeki `photo` tanımına `pos: 'center 70%'` gibi bir
CSS `object-position` değeri ekleyerek kaydırabilirsiniz.

Öneriler: uzun kenar 1600 piksel, JPG, dosya başına 400 KB altı. Sayfa
GitHub Pages'ten yüklendiği için büyük dosyalar sunumu yavaşlatır.

Yüklemek için GitHub'da bu klasörü açıp **Add file → Upload files** yolunu
kullanabilirsiniz; `main` dalına yüklenen fotoğraf birkaç dakika içinde
yayında olur.
