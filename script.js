const urunler = [
  {
    id: 1,
    kategori: "aksesuar",
    baslik: "Doğal Taş Kolye",
    fiyat: "120₺",
    kapakFoto: "img/aksesuar1.jpg",
  },
  {
    id: 2,
    kategori: "temizlik",
    baslik: "Organik Limon Kolonyası",
    fiyat: "90₺",
    kapakFoto: "img/temizlik1.jpg",
  },
  {
    id: 3,
    kategori: "dekor",
    baslik: "Ahşap Duvar Süsü",
    fiyat: "150₺",
    kapakFoto: "img/dekor1.jpg",
  },
  {
    id: 4,
    kategori: "hediyelik",
    baslik: "Elde Örülmüş Kese",
    fiyat: "65₺",
    kapakFoto: "img/hediyelik1.jpg",
  },
  {
    id: 5,
    kategori: "temizlik",
    baslik: "Forscher",
    fiyat: "250₺",
    kapakFoto: "img/Forscher.jpg",
  },
  {
    id: 6,
    kategori: "aksesuar",
    baslik: "Solingen 6'lı Bıçak Seti",
    fiyat: "350₺",
    kapakFoto: "img/Solingen.jpg",
  },
  {
    id: 7,
    kategori: "dekor",
    baslik: "Dekoratif Elma",
    fiyat: "150₺",
    kapakFoto: "img/Elma.jpg",
  },
  {
    id: 8,
    kategori: "temizlik",
    baslik: "Mop",
    fiyat: "450₺",
    kapakFoto: "img/Mop.jpg",
  }
];

// Kategori seçildiğinde çalışan fonksiyon
function filtrele(kategori) {
  const container = document.getElementById("urunler");
  container.innerHTML = ""; // Önce boşalt

  // Seçilen kategoriye ait ürünleri filtrele
  const secilenUrunler = urunler.filter(u => u.kategori === kategori);

  if (secilenUrunler.length === 0) {
    container.innerHTML = "<p>Bu kategoride ürün bulunmamaktadır.</p>";
    return;
  }

  // Ürünleri DOM'a ekle
  secilenUrunler.forEach(urun => {
    const urunDiv = document.createElement("div");
    urunDiv.className = "product";

    urunDiv.innerHTML = `
      <img src="${urun.kapakFoto}" alt="${urun.baslik}" />
      <h3>${urun.baslik}</h3>
      <p>Fiyat: ${urun.fiyat}</p>
      <a href="urun.html?id=${urun.id}">
        <button>Detayları Gör</button>
      </a>
    `;

    container.appendChild(urunDiv);
  });
}
