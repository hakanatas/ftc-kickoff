/**
 * FTC kaynak haritası — bütün içerik burada.
 *
 * Sezon değişince yalnızca `kind: 'sezonluk'` işaretli kayıtlara dokunulur.
 * `url` alanı boş bırakılan kayıtlar sayfada "adres bekliyor" rozetiyle
 * görünür; adresi yazdığın anda kart tıklanabilir hâle gelir.
 */

export const LAYERS = {
  resmi: {
    no: '01',
    name: 'Resmî FIRST',
    short: 'Resmî',
    line: 'Kural gücü olan tek katman.',
    body: 'Manual, FTC Docs, Q&A, ödül tanımları. Bir tartışmayı bitiren yer burasıdır.',
    color: '#e0952f',
  },
  dokuman: {
    no: '02',
    name: 'Topluluk dokümanı',
    short: 'Doküman',
    line: "FTC'nin gerçek ders kitabı.",
    body: 'gm0, CTRL ALT FTC, kütüphane dokümanları. Sezon boyunca en çok zaman geçireceğiniz yer.',
    color: '#7fb093',
  },
  canli: {
    no: '03',
    name: 'Canlı topluluk',
    short: 'Topluluk',
    line: 'Yazılı olmayanın sorulduğu yer.',
    body: 'Discord, Chief Delphi, takım kanalları, portfolyo arşivleri. Cevabı yazılmamış sorular buraya gider.',
    color: '#8ab4d8',
  },
};

export const ROLES = {
  kural: 'Kural',
  yazilim: 'Yazılım',
  mekanik: 'Mekanik',
  elektronik: 'Elektronik',
  cad: 'CAD',
  tedarik: 'Tedarik',
  odul: 'Ödül & portfolyo',
  video: 'Video',
};

/** name, layer, roles, kind, desc, url, owner */
export const RESOURCES = [
  // --- katman 1: resmî -----------------------------------------------------
  {
    name: 'Competition Manual',
    layer: 'resmi',
    roles: ['kural'],
    kind: 'sezonluk',
    star: true,
    desc: 'Oyun kuralları, puanlama, robot kısıtları. Sezonun anayasası; tartışma burada başlar ve burada biter.',
    url: 'https://ftc-resources.firstinspires.org/ftc/game',
  },
  {
    name: 'FTC Q&A',
    layer: 'resmi',
    roles: ['kural'],
    kind: 'sezonluk',
    star: true,
    desc: "Kural yorumunun sorulduğu resmî sistem. Cevapları Manual kadar bağlayıcı, çoğu takım varlığını bilmiyor.",
    url: 'https://ftc-qa.firstinspires.org',
  },
  {
    name: 'FTC Events',
    layer: 'resmi',
    roles: ['kural', 'odul'],
    kind: 'sezonluk',
    desc: 'Turnuva sonuçları, skorlar, sıralamalar. Scouting ve ittifak ortağı seçiminin başlangıç noktası.',
    url: 'https://ftc-events.firstinspires.org',
  },
  {
    name: 'BIOBUZZ Manual ön sürümü',
    layer: 'resmi',
    roles: ['kural', 'odul'],
    kind: 'sezonluk',
    desc: "Competition Manual'ın 29 Temmuz'da çıkan V0 sürümü ve değişiklik özeti: kuralın ruhu, evergreen kurallar, Initial Interview. Tam manual kickoff yayınından sonra.",
    url: 'https://community.firstinspires.org/biobuzz-cm-preview-release',
  },
  {
    name: 'Game Preview 2027',
    layer: 'resmi',
    roles: ['mekanik', 'yazilim'],
    kind: 'sezonluk',
    desc: "Pollen'in ölçüleri, dört üreticinin StarterBot'ları ve yedi Skill Builder mini oyunu. Oyun açıklanmadan önce intake denemeye başlamanın resmî yolu.",
    url: 'https://community.firstinspires.org/game-preview-field-elements',
  },
  {
    name: 'BIOBUZZ sezon tarihleri',
    layer: 'resmi',
    roles: ['kural'],
    kind: 'sezonluk',
    desc: 'Kickoff, SDK sürümü, Q&A açılışı, gönüllü eğitimi. Sezonun resmî takvimi tek sayfada.',
    url: 'https://community.firstinspires.org/key-upcoming-biobuzz-season-dates',
  },
  {
    name: 'FTC Docs',
    layer: 'resmi',
    roles: ['yazilim', 'elektronik', 'cad'],
    kind: 'kalici',
    star: true,
    desc: 'Teknik tarafın resmî evi: başlangıç rehberleri, kontrol sistemi, SDK, vision, kablolama, ESD, CAD. Çoğu yeni takımın hiç açmadan sezona girdiği kaynak.',
    url: 'https://ftc-docs.firstinspires.org',
  },
  {
    name: 'FTC Docs · Control System',
    layer: 'resmi',
    roles: ['elektronik'],
    kind: 'kalici',
    desc: 'Control Hub ve Expansion Hub konfigürasyonu, bağlantı şeması, self-inspection adımları. Sezon başında bir kez okunması sorulacak sorunun yarısını siliyor.',
    url: 'https://ftc-docs.firstinspires.org',
  },
  {
    name: 'FTC Docs · SDK',
    layer: 'resmi',
    roles: ['yazilim'],
    kind: 'sezonluk',
    desc: 'Robot Controller yazılımı, sürüm güncellemeleri, bilgisayar gereksinimleri. Sezon başında bir kez bakılır, sürüm uyuşmazlığı derdi biter.',
    url: 'https://ftc-docs.firstinspires.org',
  },
  {
    name: 'FTC Docs · CAD ve üretim',
    layer: 'resmi',
    roles: ['cad', 'mekanik'],
    kind: 'kalici',
    desc: 'Resmî tasarım kaynakları ve parça imalat teknikleri.',
    url: 'https://ftc-docs.firstinspires.org',
  },
  {
    name: 'FTC Docs · Vision',
    layer: 'resmi',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'VisionPortal, AprilTag, kamera kalibrasyonu, renk işleme. Otonom performansının belirleyicisi artık burada.',
    url: 'https://ftc-docs.firstinspires.org',
  },
  {
    name: 'Robot Wiring Guide',
    layer: 'resmi',
    roles: ['elektronik'],
    kind: 'kalici',
    desc: 'Kablo kesiti, konnektör seçimi, batarya ve güç dağıtımı. Resmî doküman; inceleme de buna göre yapılıyor.',
    url: '',
  },
  {
    name: 'ESD Mitigation analizi',
    layer: 'resmi',
    roles: ['elektronik'],
    kind: 'kalici',
    desc: 'Elektrostatik boşalmaya karşı koruma. Kuru kış aylarında saha kenarında kendiliğinden resetlenen robotların sebebi çoğu zaman bu.',
    url: '',
  },
  {
    name: 'FTC Türkiye',
    layer: 'resmi',
    roles: ['kural', 'tedarik', 'odul'],
    kind: 'kalici',
    star: true,
    desc: "Türkçe giriş katmanı: FTC'ye İlk Adım, takım kayıt kılavuzu, sezon kütüphanesi, Türkçe ödül tanımları, tedarikçi listesi, turnuva takvimi.",
    url: 'https://ftcturkiye.org',
  },

  // --- katman 2: topluluk dokümanı ----------------------------------------
  {
    name: 'Game Manual 0',
    layer: 'dokuman',
    roles: ['yazilim', 'mekanik', 'elektronik', 'tedarik'],
    kind: 'kalici',
    star: true,
    desc: "Tek bir link alacaksanız bu olsun. Açık kaynak, sürekli güncellenen, FTC'nin fiilî ders kitabı: takım kurma, kit rehberi, mekanik tasarım, yazılım kavramları.",
    url: 'https://gm0.org',
  },
  {
    name: 'gm0 · Useful Resources',
    layer: 'dokuman',
    roles: ['kural', 'yazilim', 'mekanik'],
    kind: 'kalici',
    desc: 'Tüm ekosistemin küratörlü link listesi. Bu sayfanın uzun hâli diyebilirsiniz.',
    url: 'https://gm0.org/en/latest/docs/useful-links.html',
  },
  {
    name: 'gm0 · Getting Started in FTC',
    layer: 'dokuman',
    roles: ['kural', 'odul'],
    kind: 'kalici',
    desc: 'Takım kurma, sezon akışı, roller. Bu haftanın ikinci ödevi tam olarak bu bölüm.',
    url: 'https://gm0.org/en/latest/docs/getting-started-in-ftc.html',
  },
  {
    name: 'gm0 · Mechanical Design',
    layer: 'dokuman',
    roles: ['mekanik'],
    kind: 'kalici',
    desc: 'Şasi tipleri, güç aktarımı, mekanizmalar. Mekanik ekibin ana okuma listesi.',
    url: 'https://gm0.org',
  },
  {
    name: 'gm0 · Software Concepts',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Programlama kavramları ve yapılar; kütüphaneye geçmeden önce okunacak bölüm.',
    url: 'https://gm0.org',
  },
  {
    name: 'gm0 · Kit and Hardware Guide',
    layer: 'dokuman',
    roles: ['mekanik', 'tedarik'],
    kind: 'kalici',
    desc: 'Yapı sistemlerini ve motorları tarafsız karşılaştıran bölüm. Marka seçmeden önce okunacak yer.',
    url: 'https://gm0.org',
  },
  {
    name: 'CTRL ALT FTC',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Kontrol teorisini FTC diline çeviren topluluk dokümanı. PID, feedforward, state-space.',
    url: 'https://www.ctrlaltftc.com',
  },
  {
    name: 'FTCSim',
    layer: 'dokuman',
    icon: 'ftcsim',
    roles: ['yazilim'],
    kind: 'kalici',
    star: true,
    desc: "FIRST Kanada'nın tarayıcı simülatörü. Blocks ya da OnBot Java ile sanal robotu sürersiniz. Robot elinizde yokken kod öğrenmenin en kısa yolu.",
    url: 'https://ftcsim.org',
  },
  {
    name: 'Learn Java for FTC',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: "Java'yı sıfırdan öğreten ücretsiz PDF kitap. Programlamaya yeni başlayan için ilk durak.",
    url: '',
  },
  {
    name: 'REV · Introduction to Programming',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Üreticinin kendi programlamaya giriş serisi. Control Hub ile birlikte ilerliyor.',
    url: '',
  },
  {
    name: 'FtcRobotController',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'sezonluk',
    desc: 'Resmî SDK deposu. Her sezon güncellenir; örnek OpMode\'lar burada.',
    url: 'https://github.com/FIRST-Tech-Challenge/FtcRobotController',
  },
  {
    name: 'FTCLib / SolversLib',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: "Komut tabanlı yapı ve donanım soyutlamaları. SolversLib, FTCLib'in aktif bakılan devamı: kütüphaneler yaşar ve ölür, seçmeden önce bakımına bakın.",
    url: '',
  },
  {
    name: 'Road Runner',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Otonom yol takibi. Matematiksel olarak sağlam, kurulumu emek ister.',
    url: '',
  },
  {
    name: 'Pedro Pathing',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Yol takibinde daha kolay ayarlanan, hızla yaygınlaşan alternatif.',
    url: '',
  },
  {
    name: 'NextFTC',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Modern komut/OpMode çatısı. Pedro Pathing eklentisiyle geliyor.',
    url: '',
  },
  {
    name: 'VisionPortal · EasyOpenCV',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Görüntü işleme: AprilTag okuma, renk tespiti, nesne takibi.',
    url: '',
  },
  {
    name: 'FTC Dashboard · Panels',
    layer: 'dokuman',
    roles: ['yazilim'],
    kind: 'kalici',
    desc: 'Canlı telemetri ve ayar arayüzü. Hata ayıklamanın bel kemiği.',
    url: '',
  },
  {
    name: 'ReCalc · EveryCalc',
    layer: 'dokuman',
    roles: ['mekanik'],
    kind: 'kalici',
    star: true,
    desc: "Şasi hızı, motor akımı, mekanizma yükü hesaplayıcıları. Mekanik ekibin ilk refleksi 'deneyip görelim' değil 'önce hesaplayalım' olmalı.",
    url: '',
  },
  {
    name: 'How Gears Work',
    layer: 'dokuman',
    roles: ['mekanik'],
    kind: 'kalici',
    desc: "Bartosz Ciechanowski'nin interaktif yazısı. Dişliyi anlatan muhtemelen en iyi tek sayfa.",
    url: 'https://ciechanow.ski/gears/',
  },
  {
    name: 'SDP-SI · KHK rehberleri',
    layer: 'dokuman',
    roles: ['mekanik'],
    kind: 'kalici',
    desc: 'Kayış-kasnak ve dişli tasarımının endüstriyel referans dokümanları.',
    url: '',
  },
  {
    name: 'FRC Mechanism Encyclopedia',
    layer: 'dokuman',
    roles: ['mekanik'],
    kind: 'kalici',
    desc: 'Mekanizma fikri ararken açılacak katalog. NASA RAP tasarım rehberi de aynı yerde.',
    url: '',
  },
  {
    name: '2901 Purple Gears · Onshape kütüphanesi',
    layer: 'dokuman',
    icon: 'onshape',
    roles: ['cad'],
    kind: 'kalici',
    desc: 'Hazır FTC parça kütüphanesi. Vidayı sıfırdan çizmek yerine sürükleyip montaja geçiyorsunuz.',
    url: '',
  },
  {
    name: '10650 Hazmat · GrabCAD arşivi',
    layer: 'dokuman',
    icon: 'grabcad',
    roles: ['cad'],
    kind: 'kalici',
    desc: 'Takım tarafından paylaşılan geniş parça arşivi.',
    url: 'https://grabcad.com',
  },
  {
    name: 'ServoCity CAD dosyaları',
    layer: 'dokuman',
    icon: 'servocity',
    roles: ['cad', 'tedarik'],
    kind: 'kalici',
    desc: 'Üreticinin resmî CAD dosyaları. Montajda ölçü tartışmasını bitiriyor.',
    url: 'https://www.servocity.com',
  },
  {
    name: 'Blender4FTC · Fusion render rehberleri',
    layer: 'dokuman',
    icon: 'blender',
    roles: ['cad', 'odul'],
    kind: 'kalici',
    desc: 'Robot görselini portfolyo kalitesinde üretmeyi öğreten rehberler. CAD ile ödül tarafını birleştiren köprü.',
    url: '',
  },

  // --- katman 3: canlı topluluk -------------------------------------------
  {
    name: 'FTC Discord',
    layer: 'canli',
    roles: ['yazilim', 'mekanik', 'kural'],
    kind: 'kalici',
    star: true,
    desc: 'Kod hatası, mekanizma fikri, kural yorumu için gerçek zamanlı yardım. En canlı kanal.',
    url: '',
  },
  {
    name: 'Chief Delphi',
    layer: 'canli',
    roles: ['yazilim', 'mekanik'],
    kind: 'kalici',
    desc: "FRC ve FTC'nin derin teknik tartışma arşivi. Aradığınız sorunun cevabı çoğu zaman zaten yazılmış.",
    url: 'https://www.chiefdelphi.com',
  },
  {
    name: 'Hivemind portfolyo arşivi',
    layer: 'canli',
    roles: ['odul'],
    kind: 'kalici',
    star: true,
    desc: "Yüzlerce takımın gerçek Engineering Portfolio'su açık. Portfolyoda iyi örnek görmek her anlatımdan etkili.",
    url: 'https://portfolios.hivemindrobotics.net',
  },
  {
    name: 'FTC Scout',
    layer: 'canli',
    roles: ['odul', 'kural'],
    kind: 'sezonluk',
    desc: 'Takım ve maç istatistikleri. Turnuva öncesi ittifak stratejisi burada kurulur.',
    url: '',
  },
  {
    name: 'FIRST Tech Challenge · YouTube',
    layer: 'canli',
    roles: ['video', 'kural'],
    kind: 'sezonluk',
    desc: 'Resmî kanal: sezon tanıtımı, oyun animasyonu, kural açıklama videoları, şampiyona yayınları.',
    url: '',
  },
  {
    name: 'REV Robotics · YouTube',
    layer: 'canli',
    roles: ['video', 'elektronik', 'yazilim'],
    kind: 'kalici',
    desc: 'Starter Bot yapım turu, Control Hub kurulumu, programlamaya giriş serisi.',
    url: '',
  },
  {
    name: 'goBILDA · YouTube',
    layer: 'canli',
    roles: ['video', 'mekanik'],
    kind: 'kalici',
    desc: 'Yapı sistemi anlatımları ve Robot-in-3-Days serisi. Sezon başında hızlı prototip için.',
    url: '',
  },
  {
    name: '8644 Brainstormers · Tips & Tricks',
    layer: 'canli',
    roles: ['video', 'mekanik'],
    kind: 'kalici',
    desc: 'FTC mekaniğini en derli toplu anlatan takım serisi.',
    url: '',
  },
  {
    name: '9794 Wizards.exe',
    layer: 'canli',
    roles: ['video', 'mekanik'],
    kind: 'kalici',
    desc: 'Mekanizma tasarımı ve robot tanıtımları; ileri seviye yapım detayları.',
    url: '',
  },
  {
    name: 'Robot reveal videoları',
    layer: 'canli',
    roles: ['video', 'mekanik'],
    kind: 'sezonluk',
    desc: 'Diğer takımların tasarımlarını görmenin en hızlı yolu. Sezon ortasında düzenli tarayın.',
    url: '',
  },

  // --- CAD programları -----------------------------------------------------
  {
    name: 'Onshape',
    layer: 'dokuman',
    icon: 'onshape',
    roles: ['cad'],
    kind: 'kalici',
    star: true,
    desc: "Tarayıcı tabanlı, kurulum yok, öğrenciye ücretsiz. FTC'de en yaygın tercih.",
    url: 'https://www.onshape.com',
  },
  {
    name: 'Autodesk Fusion · Inventor',
    layer: 'dokuman',
    icon: 'autodesk',
    roles: ['cad'],
    kind: 'kalici',
    desc: 'Eğitim hesabıyla ücretsiz tam sürüm.',
    url: 'https://www.autodesk.com/education',
  },
  {
    name: 'PTC Creo',
    layer: 'dokuman',
    icon: 'creo',
    roles: ['cad'],
    kind: 'kalici',
    desc: 'Eğitim lisansı ile tam sürüm erişimi.',
    url: '',
  },
  {
    name: 'SolidWorks',
    layer: 'dokuman',
    icon: 'solidworks',
    roles: ['cad'],
    kind: 'kalici',
    desc: 'Takım sponsorluk programı üzerinden başvuru.',
    url: '',
  },

  // --- yapı sistemleri -----------------------------------------------------
  {
    name: 'goBILDA',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik'],
    kind: 'kalici',
    desc: 'Kanal ve göbek sistemi, Yellow Jacket motorlar. Takımlara indirim programı var.',
    url: 'https://www.gobilda.com',
  },
  {
    name: 'REV Robotics',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik', 'elektronik'],
    kind: 'kalici',
    desc: "Ekstrüzyon tabanlı sistem. Control Hub'ın üreticisi olduğu için elektronikle bütünleşik.",
    url: 'https://www.revrobotics.com',
  },
  {
    name: 'TETRIX (Pitsco)',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik'],
    kind: 'kalici',
    desc: "Pitsco'nun kiti, TorqueNADO motorlar. Okul laboratuvarlarında yaygın.",
    url: 'https://www.pitsco.com',
  },
  {
    name: 'AndyMark',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik'],
    kind: 'kalici',
    desc: 'Robits yapı sistemi, NeveRest motorlar, mecanum ve compliant tekerlekler.',
    url: 'https://www.andymark.com',
  },
  {
    name: 'Studica',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik'],
    kind: 'kalici',
    desc: 'Kendi yapı sistemi ve navX IMU sensörü.',
    url: 'https://www.studica.com',
  },

  // --- Türkiye tedarik -----------------------------------------------------
  {
    name: 'NFR Products',
    layer: 'resmi',
    roles: ['tedarik'],
    kind: 'kalici',
    star: true,
    desc: "FRC ve FTC'ye özel üretim: swerve modül, lineer sürüş, mecanum, dişli, gövde elemanı, elektronik ve kit.",
    url: '',
    local: true,
  },
  {
    name: 'Robopiece',
    layer: 'resmi',
    roles: ['tedarik'],
    kind: 'kalici',
    desc: "FTC Türkiye'nin listelediği tedarikçilerden; yarışma parçaları üzerine.",
    url: '',
    local: true,
  },
  {
    name: 'Wattos Otomasyon',
    layer: 'resmi',
    roles: ['tedarik'],
    kind: 'kalici',
    desc: 'Motor, batarya, tekerlek, şasi ve hareket bileşenleri; sezona özel ürün grubu.',
    url: '',
    local: true,
  },
  {
    name: 'ServoCity · Actuonix · Axon',
    layer: 'dokuman',
    roles: ['tedarik', 'elektronik'],
    kind: 'kalici',
    desc: 'Servo ve hareket bileşenleri için yurt dışı adresleri.',
    url: 'https://www.servocity.com',
  },
  {
    name: 'McMaster-Carr · OnlineMetals · MiSUMi · Fastenal',
    layer: 'dokuman',
    roles: ['tedarik', 'mekanik'],
    kind: 'kalici',
    desc: 'Ham malzeme ve hırdavat. Ölçü ve teknik çizim kalitesiyle ayrı bir referans.',
    url: 'https://www.mcmaster.com',
  },
];

/** Sezonun açıldığı gün — slayt 2. */
export const KICKOFF = [
  { big: '12 Eyl', label: 'Oyun tanıtımı ve Competition Manual yayını' },
  { big: '19.00', label: 'Türkiye saatiyle kickoff yayın saati' },
  { big: '12 hafta', label: 'Aralık ilk haftasındaki ilk turnuvaya kalan süre' },
];

/** Yazılımın üç yolu — slayt 13. */
export const PATHS = [
  { no: '1', name: 'Blocks', line: 'Görsel bloklar, tarayıcıdan, sıfır kurulum.', when: 'İlk hafta · ortaokul' },
  { no: '2', name: 'OnBot Java', line: 'Tarayıcıdan gerçek Java. Kurulum yok, kod var.', when: "Blocks'tan Java'ya köprü" },
  { no: '3', name: 'Android Studio', line: 'Tam IDE: sürüm kontrolü, harici kütüphaneler.', when: 'Ciddi sezon yazılımı' },
];

/**
 * Ödüller ve karşılık geldikleri roller — slayt 21 ve sayfadaki Roller bölümü.
 * Yapı, BIOBUZZ Competition Manual ön sürümündeki ödül tablosuyla aynı:
 * Inspire ve Think tek başına; Team Attribute (TA) ve Machine, Creativity &
 * Innovation (MCI) grupları; Judges' Choice. Motivate, DECODE sezonundan
 * itibaren Reach ve Sustain olarak ikiye ayrıldı.
 */
export const AWARD_GROUPS = {
  ta: { name: 'Team Attribute Awards', short: 'TA', line: 'Takımın topluluğa dokunuşu' },
  mci: { name: 'Machine, Creativity & Innovation Awards', short: 'MCI', line: 'Robotun kendisi' },
};

export const AWARDS = [
  { name: 'Inspire', role: 'Hepsi birden', desc: 'Programın bütününü en iyi yansıtan takım. Bir üst seviyeye ilerlemenin ana yolu.', big: true, roleKey: 'odul' },
  { name: 'Think', role: 'Portfolyo & defter', desc: 'Mühendislik süreci ve mühendislik defteri.', roleKey: 'odul' },
  { name: 'Connect', group: 'ta', role: 'Dış ilişkiler', desc: 'STEM topluluğu ve mentör ağı.', roleKey: 'odul' },
  { name: 'Reach', group: 'ta', role: 'Tanıtım', desc: "FIRST'e yeni insan kazandıran erişim çalışması.", roleKey: 'odul', isNew: true, was: 'Motivate' },
  { name: 'Sustain', group: 'ta', role: 'Takım yönetimi', desc: 'Takımın uzun vadeli sürekliliği ve stratejik planı.', roleKey: 'odul', isNew: true, was: 'Motivate' },
  { name: 'Design', group: 'mci', role: 'Tasarım / CAD', desc: 'Endüstriyel tasarım dili.', roleKey: 'cad' },
  { name: 'Innovate', group: 'mci', role: 'Tasarım / CAD', desc: 'Özgün tasarım çözümü.', roleKey: 'cad' },
  { name: 'Control', group: 'mci', role: 'Yazılım', desc: 'Sensör, yazılım, otonom.', roleKey: 'yazilim' },
  { name: "Judges' Choice", role: 'Hepsi', desc: 'Başka kategoriye sığmayan ama jürinin görmezden gelemediği çaba.', roleKey: 'odul' },
];

/**
 * Bu sezon ne değişti — slayt 8 ve 20. Kaynak: BIOBUZZ Competition Manual
 * ön sürüm duyurusu (community.firstinspires.org/biobuzz-cm-preview-release).
 * Ayrıntı için tam manual'ı kickoff sonrası kontrol edin.
 */
export const CHANGES = {
  ruh: {
    tag: 'Kural felsefesi',
    title: 'Kuralın ruhu',
    who: 'Herkes',
    before: 'Manual her senaryoyu tek tek yazmaya çalışıyordu. Esneklik yoktu; tartışma, maddede boşluk aramaya dönüyordu.',
    after: '"Niyet edilen oyun" esas. Kural ruhunu anlatıyor, hakem ve gönüllü iyi niyetli karar veriyor. Her olayı tek tek tutanağa geçirmek yerine büyük resme bakılıyor.',
    note: 'FIRST bunun kalıcı bir yön olduğunu söylüyor: sonraki sezonlar da böyle yazılacak.',
  },
  evergreen: {
    tag: 'Manual biçimi',
    title: 'Evergreen kurallar',
    who: 'Herkes',
    before: 'Hangi kuralın her yıl aynı kaldığını ancak eski manual ile satır satır karşılaştırarak anlıyordunuz.',
    after: 'Kalın yeşil ve başında * olan kurallar "evergreen": yıldan yıla aynı, yalnızca oyuna özel detay değişir. Bir kez öğrenin, dört yıl kullanın.',
  },
  robot: {
    tag: 'Robot kuralları',
    title: 'Daha az kural, aynı sınırlar',
    who: 'Mekanik · elektronik',
    before: 'Yapım önerileri ve iyi uygulamalar kural gibi yazılıydı; benzer maddeler bölümün içinde dağınıktı.',
    after: 'Öneriler manual\'dan çıktı, eğitim kaynaklarına taşındı. Benzer kurallar birleştirildi, bölüm yeni Section 1\'e göre yeniden düzenlendi. Başlangıçta 18 inç küp aynen duruyor.',
  },
  inspection: {
    tag: 'Inspection',
    title: 'Prosedür kural değil, açıklama',
    who: 'Mekanik',
    before: 'Inspection\'ın nasıl yürütüleceği ayrı kural maddeleri olarak yazılıydı.',
    after: 'Bu maddeler kaldırıldı; süreç artık açıklama metninde anlatılıyor. Kontrol listesi tam manual ile geliyor.',
  },
  interview: {
    tag: 'Jüri',
    title: 'Structured → Initial Interview',
    who: 'Ödül & portfolyo',
    before: 'Structured Interview: her etkinlikte aynı kalıpta ilk jüri görüşmesi.',
    after: 'Adı Initial Interview oldu; bölgeye ve etkinliğe göre jüri deneyimi farklılaşabilir. Takım jüri ödülleri için Initial Interview\'a katılmak şart.',
  },
  portfolio: {
    tag: 'Portfolyo',
    title: 'Bazı ödüller portfolyo ister',
    who: 'Ödül & portfolyo',
    before: 'Engineering Portfolio jürinin ana belgesiydi; görüşmeyle birlikte değerlendirilirdi.',
    after: 'Manual açıkça söylüyor: bazı ödüller için PORTFOLIO teslimi ön koşul. Hangi ödüller olduğu ödül tablosunda; portfolyo ekibi bunu ilk hafta işaretlesin.',
  },
  awards: {
    tag: 'Ödüller · DECODE\'dan beri',
    title: 'Motivate gitti, Reach ve Sustain geldi',
    who: 'Ödül & portfolyo',
    before: 'Tek bir Motivate Award: takım kültürü, coşku ve tanıtım bir arada.',
    after: 'İkiye ayrıldı. Reach: FIRST\'e yeni insan kazandırma. Sustain: takımın uzun vadeli sürekliliği. Ödüller iki grupta: Team Attribute (Connect, Reach, Sustain) ve Machine, Creativity & Innovation (Design, Innovate, Control).',
  },
};

/** Kickoff haftası ve sonrası — slayt 3. Tarihler resmî sezon takviminden. */
export const KICKOFF_WEEK = [
  { date: '2026-07-29', title: 'Competition Manual ön sürümü (V0)', line: 'Oyundan bağımsız bölümler yayınlandı; bu sunumdaki değişiklik slaytlarının kaynağı.' },
  { date: '2026-09-12', time: '19.00', title: 'Kickoff yayını', line: 'Oyun tanıtımı; tam Competition Manual yayından hemen sonra çıkıyor. ABD saatiyle 12.00 ET.' },
  { date: '2026-09-12', title: 'Scoring event configuration açılıyor', line: 'Turnuva skorlama sistemi sezona ayarlanıyor.' },
  { date: '2026-09-12', span: 'Kickoff haftası', title: 'SDK sürümü ve FTC Live ön izleme (beta)', line: 'Yazılım ekibi yeni SDK ile başlar; geçen sezonun sürümüyle kod yazmayın.' },
  { date: '2026-09-14', title: 'FIRST Leadership Award adaylıkları', line: 'Adaylık başvurusu açılıyor.' },
  { date: '2026-09-17', title: 'Gönüllü eğitimi', line: 'Hakem ve jüri eğitimleri açılıyor; mentörler için.' },
  { date: '2026-09-28', title: 'Team Q&A açılıyor', line: 'Kural sorularınızı yazabileceğiniz resmî sistem. Cevapları Manual kadar bağlayıcı.' },
];

/** Pollen ve saha ön izlemesi — slayt 9. Kaynak: Game Preview 2027. */
export const POLLEN = {
  diameterIn: 2.8,
  diameterCm: 7.1,
  weightLb: 0.055,
  weightG: 25,
  vendors: ['AndyMark', 'goBILDA', 'REV Robotics', 'Studica'],
  skillBuilders: 7,
};

/** Bu haftanın görevleri — slayt 25. */
export const TASKS = [
  { id: 't1', text: "Competition Manual'ın ilk bölümünü okuyun. Kuralları değil, yapıyı anlamak için.", hint: 'Competition Manual' },
  { id: 't2', text: 'gm0.org → Getting Started in FTC bölümünü baştan sona okuyun.', hint: 'Game Manual 0' },
  { id: 't3', text: "FTC Discord'a katılın ve takım kanalımızı takibe alın.", hint: 'FTC Discord' },
  { id: 't4', text: 'Onshape eğitim hesabı açın ve ilk parçanızı çizin.', hint: 'Onshape' },
  { id: 't5', text: 'Bir Engineering Portfolio örneği açıp inceleyin ve hangi bölümde çalışmak istediğinize karar verin.', hint: 'Hivemind portfolyo arşivi' },
];

/** Sipariş penceresi — slayt 16'daki uyarının sayısal hâli. */
export const SUPPLY = [
  { max: 2, verdict: 'Sadece elimizdeki parça', tone: 'bad', line: 'İki hafta kala yeni parça beklemek plan değil, umut. Elinizdeki stokla ve yerel hırdavatla çözün.' },
  { max: 4, verdict: 'Türkiye tedarikçisi', tone: 'warn', line: 'Yurt içi sipariş bu pencereye sığar. Yurt dışı sipariş gümrükte kalırsa turnuvaya yetişmez.' },
  { max: 8, verdict: 'Türkiye rahat, yurt dışı riskli', tone: 'ok', line: 'Kritik parçayı yurt içinden alın. Yurt dışı siparişi ancak alternatifi varsa verin.' },
  { max: 99, verdict: 'Her ikisi de açık', tone: 'ok', line: 'Yurt dışı sipariş için doğru zaman burası. Gümrük ve kargo süresini şimdiden takvime yazın.' },
];
