# FTC Kaynak Haritası

AG Robotik'in (ALKEV Okulları) sezon açılışı sunumunun web hâli. Sezon
boyunca hangi soruyu kime soracağınızı gösteren, aranabilir tek sayfa.

Sunumun kendi kapanış sözü buydu: *slayttaki link tıklanmaz, sayfadaki
tıklanır.* Bu depo o sayfa.

- **Sayfa:** https://hakanatas.github.io/ftc-kickoff/
- **Sunum modu:** https://hakanatas.github.io/ftc-kickoff/?sunum=1

## Sayfada ne var

| Bölüm | Ne yapar |
|---|---|
| Bugün neredeyiz | Sezonun açıldığı gün, kickoff saati, turnuvalara kalan süre |
| İki tür kaynak | Sezonluk ve kalıcı ayrımı |
| Üç katman | Resmî FIRST, topluluk dokümanı, canlı topluluk; hangisinin kural gücü var |
| Üç programlama yolu | Blocks, OnBot Java, Android Studio |
| Atlas | 63 kaynak; anlık arama, katman ve rol filtreleri, hepsi tıklanabilir |
| Ödüller | Inspire ve diğerleri; her ödül bir role bağlı, karta basınca atlas o role daralır |
| Sipariş penceresi | Turnuvaya kalan süreye göre yurt içi mi yurt dışı mı |
| Bu hafta | Beş görev, tarayıcıda hatırlanan işaret kutuları |

Fotoğraflar `assets/photos/` klasöründen gelir; hangi dosya adının hangi
slayta düştüğü oradaki README'de yazılı. Dosya yoksa yerinde çizim kalır.

Çizimler (`js/art.js`) dışarıdan görsel kullanmaz: robot, zaman çizelgesi,
katman halkaları, dişli çifti ve sipariş pencereleri sayfayla aynı paletten
SVG olarak üretilir. Kart logoları `assets/icons/` klasöründen gelir; ayrıntı
oradaki README'de.

## Sunum modu

Başlıktaki **Sunum modu** düğmesi ya da **P** tuşu sayfayı 24 slaytlık bir
sunuma çevirir.

| Tuş | İş |
|---|---|
| `→` `Boşluk` `PageDown` | Sonraki slayt |
| `←` `PageUp` | Önceki slayt |
| `Home` / `End` | İlk / son slayt |
| `F` | Tam ekran |
| `N` | Konuşmacı notu |
| `Esc` | Sunumdan çık |

PageUp ve PageDown desteklendiği için sunum kumandaları da çalışır.
Telefonda parmakla kaydırma, masaüstünde boş alana tıklama da slayt geçer.

`?sunum=1` sunumu doğrudan açar, `?slayt=12` on ikinci slayttan başlatır.
Projeksiyon bilgisayarına yer imi olarak koymak için uygun.

Sunumdaki atlas, sipariş kaydırıcısı ve görev listesi kopya
değil: sayfanın asıl parçaları slayda taşınır, çıkışta yerine döner. Yani
sunum sırasında canlı arama yapabilirsiniz.

## Yayına alma (tek seferlik)

Depoda GitHub Pages'in bir kez elle açılması gerekiyor; iş akışının kendi
jetonu Pages sitesini oluşturma yetkisine sahip değil.

1. Depo → **Settings** → **Pages**
2. **Build and deployment** altında **Source** = **GitHub Actions**

Bu kadar. Bundan sonra `main` dalına her push yayına çıkar; `.github/workflows/pages.yml`
siteyi kendisi derleyip yükler. Açmadan önceki ilk çalıştırma
"Create Pages site failed" ile başarısız olur, normaldir.

## Yerelde çalıştırma

Sayfa ES modülleri kullandığı için dosyayı çift tıklayarak açmak yetmez,
bir sunucu gerekir.

```bash
node serve.mjs          # http://localhost:8080
node serve.mjs 3000     # başka port
```

Node yoksa:

```bash
python3 -m http.server 8080
```

## İçeriği güncelleme

Bütün metin ve kaynaklar `js/data.js` içinde. Kod dosyalarına dokunmadan
güncellenebilir.

- `RESOURCES` — atlastaki kartlar. `kind: 'sezonluk'` işaretli kayıtlar her
  eylül değişir, `kalici` olanlar yıllarca durur.
- `KICKOFF` — açılış günü bilgileri.
- `PATHS` — programlama yolları.
- `AWARDS` ve `AWARD_GROUPS` — ödüller, grupları ve karşılık geldikleri roller.
- `CHANGES` — bu sezon ne değişti kartları (iki slayt).
- `KICKOFF_WEEK` — kickoff haftası takvimi; slayt bugüne göre hesaplar.
- `TASKS` — haftanın görevleri.
- `SUPPLY` — sipariş penceresi eşikleri.

Sunumun slayt sırası ve konuşmacı notları `js/slides.js` içinde.

### Kaynak adresleri

Her kaynağın `url` alanı dolu; hepsi arama motorundan doğrulandı. Yeni bir
kaynak eklerken `url` boş bırakılırsa kart **adres bekliyor** rozetiyle
görünür ve tıklanmaz; adresi yazdığınız anda tıklanabilir olur. Başka bir
sayfası olmayan tek kayıt "Robot reveal videoları": adresi hazır bir
YouTube araması.

## Yapı

```
index.html        sayfa iskeleti
styles.css        tüm görünüm; palet sunumdan (koyu yeşil, bal sarısı)
js/data.js        bütün içerik
js/slides.js      sunum sırası ve konuşmacı notları
js/main.js        sayfa davranışı: petek, arama, filtreler, görevler
js/present.js     sunum modu
js/art.js         SVG çizimler
js/awards.js      ödül haritası (sayfa ve sunum ortak)
js/icon.js        kart logosu yükleyici
assets/fonts/     Fraunces ve Instrument Sans (SIL Open Font License)
assets/photos/    fotoğraflar (adlar oradaki README'de)
assets/icons/     kart logoları (adlar oradaki README'de)
serve.mjs         yerel sunucu
```

Bağımlılık yok, derleme adımı yok, dışarıdan hiçbir şey yüklenmiyor. Sayfa
tamamen tarayıcıda çalışır; işaretlediğiniz görevler yalnızca kendi
tarayıcınızda kalır.

## Kaynak

İçerik, AG Robotik'in 12 Eylül 2026 sezon açılışı sunumundan uyarlanmıştır.
Yazı tipleri SIL Open Font License altındadır.
