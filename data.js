const urunler = [
  // Yeni eklenen ürünler
  // Mutfak / Solingen
  { id: 5, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Meyve Seti", fiyat: 300.00, kapakFoto: "img/urun_5.png" },
  { id: 6, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Micro Sebze Bıçağı", fiyat: 180.00, kapakFoto: "img/urun_6.png" },
  { id: 7, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Çapraz Bileme", fiyat: 280.00, kapakFoto: "img/urun_7.png" },
  { id: 8, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Rondo", fiyat: 400.00, kapakFoto: "img/urun_8.png" },
  { id: 9, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Rende", fiyat: 350.00, kapakFoto: "img/urun_9.png" },
  { id: 10, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Sebze Kurutucu", fiyat: 450.00, kapakFoto: "img/urun_10.png" },
  { id: 11, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Tel Çırpıcı", fiyat: 70.00, kapakFoto: "img/urun_11.png" },
  { id: 12, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Genel Kullanım Bıçak", fiyat: 520.00, kapakFoto: "img/urun_12.png" },
  { id: 13, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Düz Soyacak", fiyat: 150.00, kapakFoto: "img/urun_13.png" },
  { id: 1400, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Çift Taraflı Soyacak", fiyat: 100.00, kapakFoto: "img/urun_1400.png" },
  { id: 14, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Yan Soyacak", fiyat: 150.00, kapakFoto: "img/urun_14.png" },

  // Mutfak / Zwilling
  { id: 5603, kategori: "mutfak", altKategori: "Zwilling", baslik: "Zwilling 3'lü Bıçak Seti", fiyat: 5600.00, kapakFoto: "img/urun_5603.png" },
  { id: 5602, kategori: "mutfak", altKategori: "Zwilling", baslik: "Zwilling 2'li Satır Seti", fiyat: 5600.00, kapakFoto: "img/urun_5602.png" },

  // Mutfak / Tupperware
  { id: 101, kategori: "mutfak", altKategori: "Tupperware", baslik: "Tupperware Tereyağlık", fiyat: 750.00, kapakFoto: "img/urun_101.png" },
  { id: 102, kategori: "mutfak", altKategori: "Tupperware", baslik: "Tupperware 3'lü Saklama Kabı", fiyat: 800.00, kapakFoto: "img/urun_102.png" },
  { id: 103, kategori: "mutfak", altKategori: "Tupperware", baslik: "Tupperware 7.5LT Saklama Kabı", fiyat: 2000.00, kapakFoto: "img/urun_103.png" },
  { id: 104, kategori: "mutfak", altKategori: "Tupperware", baslik: "Tupperware Sebze Kurutucu", fiyat: 3000.00, kapakFoto: "img/urun_104.png" },
  { id: 105, kategori: "mutfak", altKategori: "Tupperware", baslik: "Tupperware Sera 6.1LT Saklama Kabı ", fiyat: 2000.00, kapakFoto: "img/urun_105.png" },
  
  // Mutfak / Diğer
  { id: 15, kategori: "mutfak", altKategori: "Diğer", baslik: "Ay-bi Kasap Seti 4'lü", fiyat: 850.00, kapakFoto: "img/urun_15.png" },
  { id: 16, kategori: "mutfak", altKategori: "Diğer", baslik: "Satır", fiyat: 600.00, kapakFoto: "img/urun_16.png" },
  { id: 24, kategori: "mutfak", altKategori: "Diğer", baslik: "Hamur Matı", fiyat: 180.00, kapakFoto: "img/urun_24.png" },
  { id: 25, kategori: "mutfak", altKategori: "Diğer", baslik: "Silpat", fiyat: 180.00, kapakFoto: "img/urun_25.png" },
  { id: 26, kategori: "mutfak", altKategori: "Diğer", baslik: "Mutfak Lavabo Matı", fiyat: 80.00, kapakFoto: "img/urun_26.png" },
  { id: 29, kategori: "mutfak", altKategori: "Diğer", baslik: "Tabak Bonesi", fiyat: 100.00, kapakFoto: "img/urun_29.png" },
  { id: 33, kategori: "mutfak", altKategori: "Diğer", baslik: "Deterjan Hazneli Fırça", fiyat: 50.00, kapakFoto: "img/urun_33.png" },
  { id: 34, kategori: "mutfak", altKategori: "Diğer", baslik: "Mutfak Makası", fiyat: 120.00, kapakFoto: "img/urun_34.png" },
  { id: 35, kategori: "mutfak", altKategori: "Diğer", baslik: "Dondurma Kaşığı", fiyat: 150.00, kapakFoto: "img/urun_35.png" },
  { id: 36, kategori: "mutfak", altKategori: "Diğer", baslik: "Dondurma Tepsisi", fiyat: 250.00, kapakFoto: "img/urun_36.png" },
  { id: 37, kategori: "mutfak", altKategori: "Diğer", baslik: "Patates Püre Aparatı", fiyat: 350.00, kapakFoto: "img/urun_37.png" },
  { id: 38, kategori: "mutfak", altKategori: "Diğer", baslik: "Gıda Termometresi", fiyat: 120.00, kapakFoto: "img/urun_38.png" },
  { id: 48, kategori: "mutfak", altKategori: "Diğer", baslik: "4'lü Çam Nihale", fiyat: 450.00, kapakFoto: "img/urun_48.png" },
  { id: 49, kategori: "mutfak", altKategori: "Diğer", baslik: "Şişe Açacak", fiyat: 100.00, kapakFoto: "img/urun_49.png" },
  { id: 52, kategori: "mutfak", altKategori: "Diğer", baslik: "Yoğurt Süzme Kabı", fiyat: 300.00, kapakFoto: "img/urun_52.png" },
  { id: 53, kategori: "mutfak", altKategori: "Diğer", baslik: "Ivory Sebze Dilimleme", fiyat: 750.00, kapakFoto: "img/urun_53.png" },
  { id: 58, kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Kesme Panosu", fiyat: 600.00, kapakFoto: "img/urun_58.png" },
  { id: 59, kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Kesme Orta", fiyat: 550.00, kapakFoto: "img/urun_59.png" },
  { id: 62, kategori: "mutfak", altKategori: "Diğer", baslik: "Yumurta Dublörü", fiyat: 100.00, kapakFoto: "img/urun_62.png" },
  { id: 63, kategori: "mutfak", altKategori: "Diğer", baslik: "Fresh Cup", fiyat: 100.00, kapakFoto: "img/urun_63.png" },
  { id: 65, kategori: "mutfak", altKategori: "Diğer", baslik: "İkili Burgu", fiyat: 850.00, kapakFoto: "img/urun_65.png" },
  { id: 605, kategori: "mutfak", altKategori: "Diğer", baslik: "Slikon Kepçe", fiyat: 120.00, kapakFoto: "img/urun_605.png" },
  { id: 607, kategori: "mutfak", altKategori: "Diğer", baslik: "Geniş Ağızlı Slikon Spatula", fiyat: 120.00, kapakFoto: "img/urun_607.png" },
  { id: 606, kategori: "mutfak", altKategori: "Diğer", baslik: "Düz Slikon Spatula", fiyat: 120.00, kapakFoto: "img/urun_606.png" },
  { id: 600, kategori: "mutfak", altKategori: "Diğer", baslik: "Slikon Pilav Kaşığı", fiyat: 120.00, kapakFoto: "img/urun_600.png" },
  { id: 601, kategori: "mutfak", altKategori: "Diğer", baslik: "Slikon Kaşık", fiyat: 120.00, kapakFoto: "img/urun_601.png" },
  { id: 602, kategori: "mutfak", altKategori: "Diğer", baslik: "Mini Slikon Kaşık", fiyat: 60.00, kapakFoto: "img/urun_602.png" },
  { id: 603, kategori: "mutfak", altKategori: "Diğer", baslik: "Jumbo Slikon Yumurta Fırçası", fiyat: 120.00, kapakFoto: "img/urun_603.png" },
  { id: 610 , kategori: "mutfak", altKategori: "Diğer", baslik: "Mini Slikon Yumurta Fırçası", fiyat: 60.00, kapakFoto: "img/urun_610.png" },
  { id: 611 , kategori: "mutfak", altKategori: "Diğer", baslik: "Bambu Saplı Slikon Mutfak Seti", fiyat: 850.00, kapakFoto: "img/urun_611.png" },
  { id: 612 , kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Hamur Spatulası", fiyat: 120.00, kapakFoto: "img/urun_612.png" },
  { id: 613 , kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Çırpıcı", fiyat: 100.00, kapakFoto: "img/urun_613.png" },
  { id: 614 , kategori: "mutfak", altKategori: "Diğer", baslik: "Sarımsak Ezici", fiyat: 150.00, kapakFoto: "img/urun_614.png" },


  // Ev ürünleri & Hijyen Temizlik / Diğer
  { id: 17, kategori: "temizlik", altKategori: "Diğer", baslik: "İlbays 3'lü Bez", fiyat: 250.00, kapakFoto: "img/urun_17.png" },
  { id: 18, kategori: "temizlik", altKategori: "Diğer", baslik: "Puff Bez 3'lü", fiyat: 100.00, kapakFoto: "img/urun_18.png" },
  { id: 19, kategori: "temizlik", altKategori: "Diğer", baslik: "Tel Bez", fiyat: 20.00, kapakFoto: "img/urun_19.png" },
  { id: 20, kategori: "temizlik", altKategori: "Diğer", baslik: "Tel Bez Yeni Inox", fiyat: 30.00, kapakFoto: "img/urun_20.png" },
  { id: 21, kategori: "temizlik", altKategori: "Diğer", baslik: "Telli Sünger", fiyat: 50.00, kapakFoto: "img/urun_21.png" },
  { id: 22, kategori: "temizlik", altKategori: "Diğer", baslik: "Üçlü Tel Fırça", fiyat: 50.00, kapakFoto: "img/urun_22.png" },
  { id: 23, kategori: "temizlik", altKategori: "Diğer", baslik: "Microtex Fiber Bez", fiyat: 200.00, kapakFoto: "img/urun_23.png" },
  { id: 30, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Süzgeci (10'lu)", fiyat: 90.00, kapakFoto: "img/urun_30.png" },
  { id: 31, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Süzgeci Silikon", fiyat: 100.00, kapakFoto: "img/urun_31.png" },
  { id: 32, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Koku Önleyici Silikon", fiyat: 100.00, kapakFoto: "img/urun_32.png" },
  { id: 40, kategori: "temizlik", altKategori: "Diğer", baslik: "WC Örtüsü (50'li)", fiyat: 150.00, kapakFoto: "img/urun_40.png" },
  { id: 41, kategori: "temizlik", altKategori: "Diğer", baslik: "Biber Gazı", fiyat: 250.00, kapakFoto: "img/urun_41.png" },
  { id: 42, kategori: "temizlik", altKategori: "Diğer", baslik: "Kabak Lifli Sabun", fiyat: 120.00, kapakFoto: "img/urun_42.png" },
  { id: 43, kategori: "temizlik", altKategori: "Diğer", baslik: "Fiber Kese", fiyat: 120.00, kapakFoto: "img/urun_43.png" },
  { id: 44, kategori: "temizlik", altKategori: "Diğer", baslik: "Kabak Lifli Kese", fiyat: 150.00, kapakFoto: "img/urun_44.png" },
  { id: 47, kategori: "temizlik", altKategori: "Diğer", baslik: "Tüy Toplayan Gırgır", fiyat: 100.00, kapakFoto: "img/urun_47.png" },
  { id: 61, kategori: "temizlik", altKategori: "Diğer", baslik: "Koku Topu", fiyat: 200.00, kapakFoto: "img/urun_61.png" },
  { id: 976, kategori: "temizlik", altKategori: "Diğer", baslik: "Fermuarlı 3'lü Çamaşır Filesi", fiyat: 130.00, kapakFoto: "img/urun_976.png" },
  { id: 978, kategori: "temizlik", altKategori: "Diğer", baslik: "Araç Süpürgesi", fiyat: 600.00, kapakFoto: "img/urun_978.png" },
  { id: 979, kategori: "temizlik", altKategori: "Diğer", baslik: "Sihirli Sabun", fiyat: 50.00, kapakFoto: "img/urun_979.png" },
  { id: 977, kategori: "temizlik", altKategori: "Diğer", baslik: "Araç Şemsiyesi", fiyat: 450.00, kapakFoto: "img/urun_977.png" },
  { id: 981, kategori: "temizlik", altKategori: "Diğer", baslik: "Stanley Termos 0.88 Litre", fiyat: 1900.00, kapakFoto: "img/urun_981.png" },

  // Ev ürünleri & Hijyen Temizlik / BioBellinda
  { id: 1101, kategori: "temizlik", altKategori: "BioBellinda", baslik: "BioBellinda 3x Ultra Konsantre Çamaşır Beyazlatıcı 750 ml", fiyat: 230.00, kapakFoto: "img/urun_1101.png" },
  { id: 1102, kategori: "temizlik", altKategori: "BioBellinda", baslik: "BioBellinda Wc & Banyo Temizleyici 750ML", fiyat: 230.00, kapakFoto: "img/urun_1102.png" },
  { id: 1103, kategori: "temizlik", altKategori: "BioBellinda", baslik: "BioBellinda Duşakabin Temizleyici", fiyat: 230.00, kapakFoto: "img/urun_1103.png" },  

  // Ev ürünleri & Hijyen Temizlik / Forscher
  { id: 54, kategori: "temizlik", altKategori: "Forscher", baslik: "Genel Temizlik Spreyi", fiyat: 150.00, kapakFoto: "img/urun_54.png" },
  { id: 154, kategori: "temizlik", altKategori: "Forscher", baslik: "Fırın & Izgara Temizleyici", fiyat: 150.00, kapakFoto: "img/urun_154.png" },
  { id: 155, kategori: "temizlik", altKategori: "Forscher", baslik: "Cam Temizleyici", fiyat: 150.00, kapakFoto: "img/urun_155.png" },

  // Ev ürünleri & Hijyen Temizlik / Mop
  { id: 60, kategori: "temizlik", altKategori: "Mop", baslik: "Mop Büyük Boy", fiyat: 650.00, kapakFoto: "img/urun_60.png" },
  { id: 374, kategori: "temizlik", altKategori: "Mop", baslik: "Cam Temizlik Mopu", fiyat: 150.00, kapakFoto: "img/urun_374.png" },
  { id: 375, kategori: "temizlik", altKategori: "Mop", baslik: "Mandallı Temizlik Mopu", fiyat: 200.00, kapakFoto: "img/urun_375.png" },
 
 // Ev ürünleri & Hijyen Temizlik / Diğer
  { id: 27, kategori: "temizlik", altKategori: "Diğer", baslik: "Nevresim İğnesi 4'lü", fiyat: 50.00, kapakFoto: "img/urun_27.png" },
  { id: 46, kategori: "temizlik", altKategori: "Diğer", baslik: "Kurutma Topu", fiyat: 250.00, kapakFoto: "img/urun_46.png" },
  { id: 308, kategori: "temizlik", altKategori: "Diğer", baslik: "Sabunluk", fiyat: 30.00, kapakFoto: "img/urun_308.png" },
  { id: 309, kategori: "temizlik", altKategori: "Diğer", baslik: "Mantar Masa Lambası", fiyat: 550.00, kapakFoto: "img/urun_309.png" },

  // Tekstil / Diğer
  { id: 28, kategori: "tekstil", altKategori: "Diğer", baslik: "Halı Kaydırmaz", fiyat: 40.00, kapakFoto: "img/urun_28.png" },
  { id: 39, kategori: "tekstil", altKategori: "Diğer", baslik: "Ütü Tabanlığı", fiyat: 120.00, kapakFoto: "img/urun_39.png" },
  { id: 56, kategori: "tekstil", altKategori: "Diğer", baslik: "Silikon Çorap", fiyat: 100.00, kapakFoto: "img/urun_56.png" },
  { id: 640, kategori: "tekstil", altKategori: "Diğer", baslik: "Piknik Matı (2m*1.2m)", fiyat: 350.00, kapakFoto: "img/urun_640.png" },

  // Tekstil / Giyim (yeni alt kategori)
  { id: 55, kategori: "tekstil", altKategori: "Giyim", baslik: "Yağmurluk", fiyat: 120.00, kapakFoto: "img/urun_55.png" },

  // Tekstil / Çamaşır
   { id: 841, kategori: "tekstil", altKategori: "Çamaşır", baslik: "Eros 3'lü Çamaşır", fiyat: 400.00, kapakFoto: "img/urun_841.png" },

  // Ayakkabı / Ayakkabı
  { id: 1800, kategori: "ayakkabı", altKategori: "Ayakkabı", baslik: "Dexter", fiyat: 1800.00, kapakFoto: "img/urun_1800.png" },
  { id: 1801, kategori: "ayakkabı", altKategori: "Ayakkabı", baslik: "Dexter", fiyat: 1800.00, kapakFoto: "img/urun_1801.png" },
  { id: 1802, kategori: "ayakkabı", altKategori: "Ayakkabı", baslik: "Dexter", fiyat: 1800.00, kapakFoto: "img/urun_1802.png" },
  { id: 1803, kategori: "ayakkabı", altKategori: "Ayakkabı", baslik: "Dexter", fiyat: 1800.00, kapakFoto: "img/urun_1803 .png" },

  // Seyahat / Diğer (yeni kategori)
  { id: 50, kategori: "seyahat", altKategori: "Diğer", baslik: "Seyahat Seti", fiyat: 130.00, kapakFoto: "img/urun_50.png" },
  { id: 51, kategori: "seyahat", altKategori: "Diğer", baslik: "Seyahat Seti Lüks", fiyat: 180.00, kapakFoto: "img/urun_51.png" },

  // Diğer / Ev Eşyası (yeni kategori)
  { id: 57, kategori: "diğer", altKategori: "Ev Eşyası", baslik: "Koltuk Sehpası", fiyat: 100.00, kapakFoto: "img/urun_57.png" },

  // Diğer / Aydınlatma (yeni alt kategori)
  { id: 64, kategori: "diğer", altKategori: "Aydınlatma", baslik: "Masa Lambası", fiyat: 550.00, kapakFoto: "img/urun_64.png" },

  // Hediyelik Eşya / Tümü
  { id: 150, kategori: "hediyelik", altKategori: "Tümü", baslik: "%100 Doğal Onyx Taşından Elma", fiyat: 150.00, kapakFoto: "img/urun_150.png" },
  { id: 151, kategori: "hediyelik", altKategori: "Tümü", baslik: "Kar Küresi", fiyat: 1200.00, kapakFoto: "img/urun_151.png" },
  { id: 152, kategori: "hediyelik", altKategori: "Tümü", baslik: "Sulu Mini Fan", fiyat: 450.00, kapakFoto: "img/urun_152.png" },
  { id: 153, kategori: "hediyelik", altKategori: "Tümü", baslik: "Mini Fan", fiyat: 300.00, kapakFoto: "img/urun_153.png" },
  { id: 164, kategori: "hediyelik", altKategori: "Tümü", baslik: "Konuşan Kaktüs", fiyat: 350.00, kapakFoto: "img/urun_165.png" },
  { id: 156, kategori: "hediyelik", altKategori: "Tümü", baslik: "Uyuyan Kedi", fiyat: 350.00, kapakFoto: "img/urun_156.png" },
  { id: 168, kategori: "hediyelik", altKategori: "Tümü", baslik: "Işıklı Küre", fiyat: 300.00, kapakFoto: "img/urun_168.png" },
  { id: 157, kategori: "hediyelik", altKategori: "Tümü", baslik: "Mini Cep Islak Mendil", fiyat: 10.00, kapakFoto: "img/urun_157.png" },
  { id: 158, kategori: "hediyelik", altKategori: "Tümü", baslik: "Mini Teneke Kutu Islak Mendil", fiyat: 50.00, kapakFoto: "img/urun_158.png" },
  { id: 159, kategori: "hediyelik", altKategori: "Tümü", baslik: "Çam Ağacı Mum", fiyat: 250.00, kapakFoto: "img/urun_159.png" },


 // ⭐KAMPANYA⭐ / Tünü
  { id: 2345, kategori: "kampanya", altKategori: "Tümü", baslik: "Temizlik Seti", fiyat: 750.00, kapakFoto: "img/urun_2345.png" }

]

