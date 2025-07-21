const urunler = [
  // Yeni eklenen ürünler
  // Mutfak / Solingen
  { id: 5, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Meyve Seti", fiyat: 300.00, kapakFoto: "img/urun_5.png" },
  { id: 6, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Micro Sebze Bıçağı", fiyat: 180.00, kapakFoto: "img/urun_6.png" },
  { id: 7, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Çapraz Bileme", fiyat: 280.00, kapakFoto: "img/urun_7.png" },
  { id: 8, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Rondo", fiyat: 400.00, kapakFoto: "img/urun_8.png" },
  { id: 9, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Rende", fiyat: 350.00, kapakFoto: "img/urun_9.png" },
  { id: 10, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Sebze Kurutucu", fiyat: 450.00, kapakFoto: "img/urun_10.png" },
  { id: 11, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Tel Çırpıcı", fiyat: 120.00, kapakFoto: "img/urun_11.png" },
  { id: 12, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Genel Kullanım Bıçak", fiyat: 220.00, kapakFoto: "img/urun_12.png" },
  { id: 13, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Soyacak", fiyat: 90.00, kapakFoto: "img/urun_13.png" },
  { id: 14, kategori: "mutfak", altKategori: "Solingen", baslik: "Solingen Çift Taraflı Soyacak", fiyat: 110.00, kapakFoto: "img/urun_14.png" },

  // Mutfak / Diğer
  { id: 15, kategori: "mutfak", altKategori: "Diğer", baslik: "Ay-bi Kasap Seti 4'lü", fiyat: 750.00, kapakFoto: "img/urun_15.png" },
  { id: 16, kategori: "mutfak", altKategori: "Diğer", baslik: "Satır", fiyat: 500.00, kapakFoto: "img/urun_16.png" },
  { id: 24, kategori: "mutfak", altKategori: "Diğer", baslik: "Hamur Matı", fiyat: 200.00, kapakFoto: "img/urun_24.png" },
  { id: 25, kategori: "mutfak", altKategori: "Diğer", baslik: "Silpat", fiyat: 180.00, kapakFoto: "img/urun_25.png" },
  { id: 26, kategori: "mutfak", altKategori: "Diğer", baslik: "Mutfak Lavabo Matı", fiyat: 150.00, kapakFoto: "img/urun_26.png" },
  { id: 29, kategori: "mutfak", altKategori: "Diğer", baslik: "Tabak Bonesi", fiyat: 80.00, kapakFoto: "img/urun_29.png" },
  { id: 33, kategori: "mutfak", altKategori: "Diğer", baslik: "Deterjan Hazneli Fırça", fiyat: 95.00, kapakFoto: "img/urun_33.png" },
  { id: 34, kategori: "mutfak", altKategori: "Diğer", baslik: "Mutfak Makası", fiyat: 140.00, kapakFoto: "img/urun_34.png" },
  { id: 35, kategori: "mutfak", altKategori: "Diğer", baslik: "Dondurma Kaşığı", fiyat: 110.00, kapakFoto: "img/urun_35.png" },
  { id: 36, kategori: "mutfak", altKategori: "Diğer", baslik: "Dondurma Tepsisi", fiyat: 300.00, kapakFoto: "img/urun_36.png" },
  { id: 37, kategori: "mutfak", altKategori: "Diğer", baslik: "Patates Püre Aparatı", fiyat: 130.00, kapakFoto: "img/urun_37.png" },
  { id: 38, kategori: "mutfak", altKategori: "Diğer", baslik: "Gıda Termometresi", fiyat: 220.00, kapakFoto: "img/urun_38.png" },
  { id: 48, kategori: "mutfak", altKategori: "Diğer", baslik: "4'lü Çam Nihale", fiyat: 160.00, kapakFoto: "img/urun_48.png" },
  { id: 49, kategori: "mutfak", altKategori: "Diğer", baslik: "Şişe Açacak", fiyat: 75.00, kapakFoto: "img/urun_49.png" },
  { id: 52, kategori: "mutfak", altKategori: "Diğer", baslik: "Yoğurt Süzme Kabı", fiyat: 250.00, kapakFoto: "img/urun_52.png" },
  { id: 53, kategori: "mutfak", altKategori: "Diğer", baslik: "Ivory Sebze Dilimleme", fiyat: 380.00, kapakFoto: "img/urun_53.png" },
  { id: 58, kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Kesme Panosu", fiyat: 600.00, kapakFoto: "img/urun_58.png" },
  { id: 59, kategori: "mutfak", altKategori: "Diğer", baslik: "Çelik Kesme Orta", fiyat: 550.00, kapakFoto: "img/urun_59.png" },
  { id: 62, kategori: "mutfak", altKategori: "Diğer", baslik: "Yumurta Dublörü", fiyat: 120.00, kapakFoto: "img/urun_62.png" },
  { id: 63, kategori: "mutfak", altKategori: "Diğer", baslik: "Fresh Cup", fiyat: 180.00, kapakFoto: "img/urun_63.png" },
  { id: 65, kategori: "mutfak", altKategori: "Diğer", baslik: "İkili Burgu", fiyat: 850.00, kapakFoto: "img/urun_65.png" },

  // Ev Hijyen & Temizlik / Diğer
  { id: 17, kategori: "temizlik", altKategori: "Diğer", baslik: "İlbays 3'lü Bez", fiyat: 100.00, kapakFoto: "img/urun_17.png" },
  { id: 18, kategori: "temizlik", altKategori: "Diğer", baslik: "Puff Bez 3'lü", fiyat: 80.00, kapakFoto: "img/urun_18.png" },
  { id: 19, kategori: "temizlik", altKategori: "Diğer", baslik: "Tel Bez", fiyat: 70.00, kapakFoto: "img/urun_19.png" },
  { id: 20, kategori: "temizlik", altKategori: "Diğer", baslik: "Tel Bez Yeni Inox", fiyat: 75.00, kapakFoto: "img/urun_20.png" },
  { id: 21, kategori: "temizlik", altKategori: "Diğer", baslik: "Telli Sünger", fiyat: 60.00, kapakFoto: "img/urun_21.png" },
  { id: 22, kategori: "temizlik", altKategori: "Diğer", baslik: "Üçlü Tel Fırça", fiyat: 110.00, kapakFoto: "img/urun_22.png" },
  { id: 23, kategori: "temizlik", altKategori: "Diğer", baslik: "Microtex Fiber Bez", fiyat: 90.00, kapakFoto: "img/urun_23.png" },
  { id: 30, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Süzgeci (10'lu)", fiyat: 120.00, kapakFoto: "img/urun_30.png" },
  { id: 31, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Süzgeci Silikon", fiyat: 85.00, kapakFoto: "img/urun_31.png" },
  { id: 32, kategori: "temizlik", altKategori: "Diğer", baslik: "Gider Koku Önleyici Silikon", fiyat: 90.00, kapakFoto: "img/urun_32.png" },
  { id: 40, kategori: "temizlik", altKategori: "Diğer", baslik: "WC Örtüsü (50'li)", fiyat: 150.00, kapakFoto: "img/urun_40.png" },
  { id: 41, kategori: "temizlik", altKategori: "Diğer", baslik: "Biber Gazı", fiyat: 200.00, kapakFoto: "img/urun_41.png" },
  { id: 42, kategori: "temizlik", altKategori: "Diğer", baslik: "Kabak Lifli Sabun", fiyat: 50.00, kapakFoto: "img/urun_42.png" },
  { id: 43, kategori: "temizlik", altKategori: "Diğer", baslik: "Fiber Kese", fiyat: 40.00, kapakFoto: "img/urun_43.png" },
  { id: 44, kategori: "temizlik", altKategori: "Diğer", baslik: "Kabak Lifli Kese", fiyat: 45.00, kapakFoto: "img/urun_44.png" },
  { id: 47, kategori: "temizlik", altKategori: "Diğer", baslik: "Tüy Toplayan Gırgır", fiyat: 130.00, kapakFoto: "img/urun_47.png" },
  { id: 61, kategori: "temizlik", altKategori: "Diğer", baslik: "Koku Topu", fiyat: 200.00, kapakFoto: "img/urun_61.png" },

  // Ev Hijyen & Temizlik / Forscher
  { id: 54, kategori: "temizlik", altKategori: "Forscher", baslik: "Amazing Temizlik Spreyi", fiyat: 190.00, kapakFoto: "img/urun_54.png" },

   // Ev Hijyen & Temizlik / Forscher
  { id: 154, kategori: "temizlik", altKategori: "Forscher", baslik: "Fırın & Izgara Temizleyici", fiyat: 190.00, kapakFoto: "img/urun_154.png" },
 
 // Ev Hijyen & Temizlik / Forscher
  { id: 155, kategori: "temizlik", altKategori: "Forscher", baslik: "Yağmur Giderici", fiyat: 190.00, kapakFoto: "img/urun_155.png" },

  // Ev Hijyen & Temizlik / Mop
  { id: 60, kategori: "temizlik", altKategori: "Mop", baslik: "Mop Büyük Boy", fiyat: 650.00, kapakFoto: "img/urun_60.png" },

  // Tekstil / Çamaşır
  { id: 27, kategori: "tekstil", altKategori: "Çamaşır", baslik: "Nevresim İğnesi 4'lü", fiyat: 50.00, kapakFoto: "img/urun_27.png" },
  { id: 46, kategori: "tekstil", altKategori: "Çamaşır", baslik: "Kurutma Topu", fiyat: 80.00, kapakFoto: "img/urun_46.png" },

  // Tekstil / Diğer
  { id: 28, kategori: "tekstil", altKategori: "Diğer", baslik: "Halı Kaydırmaz", fiyat: 180.00, kapakFoto: "img/urun_28.png" },
  { id: 39, kategori: "tekstil", altKategori: "Diğer", baslik: "Ütü Tabanlığı", fiyat: 100.00, kapakFoto: "img/urun_39.png" },

  // Tekstil / Giyim (yeni alt kategori)
  { id: 55, kategori: "tekstil", altKategori: "Giyim", baslik: "Yağmurluk", fiyat: 350.00, kapakFoto: "img/urun_55.png" },

  // Ayakkabı / Ayakkabı
  { id: 56, kategori: "ayakkabı", altKategori: "Ayakkabı", baslik: "Silikon Çorap", fiyat: 100.00, kapakFoto: "img/urun_56.png" },

  // Seyahat / Diğer (yeni kategori)
  { id: 50, kategori: "seyahat", altKategori: "Diğer", baslik: "Seyahat Seti", fiyat: 250.00, kapakFoto: "img/urun_50.png" },
  { id: 51, kategori: "seyahat", altKategori: "Diğer", baslik: "Seyahat Seti Lüks", fiyat: 400.00, kapakFoto: "img/urun_51.png" },

  // Diğer / Ev Eşyası (yeni kategori)
  { id: 57, kategori: "diğer", altKategori: "Ev Eşyası", baslik: "Koltuk Sehpası", fiyat: 100.00, kapakFoto: "img/urun_57.png" },

  // Diğer / Aydınlatma (yeni alt kategori)
  { id: 64, kategori: "diğer", altKategori: "Aydınlatma", baslik: "Masa Lambası", fiyat: 550.00, kapakFoto: "img/urun_64.png" }
];
