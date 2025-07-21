// Sepete ürün ekleme
function sepeteEkle(urunId, baslik, fiyat, kapakFoto) {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    const mevcutUrunIndex = sepet.findIndex(item => item.id === urunId);

    if (mevcutUrunIndex > -1) {
        sepet[mevcutUrunIndex].adet++;
    } else {
        sepet.push({ id: urunId, baslik: baslik, fiyat: parseFloat(fiyat), kapakFoto: kapakFoto, adet: 1 });
    }
    localStorage.setItem('sepet', JSON.stringify(sepet));
    guncelSepetSayisiniGoster(); // Sepet sayacını güncelle
    alert(`${baslik} sepete eklendi!`);
}

// Sepetten ürün silme
function sepettenSil(urunId) {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    sepet = sepet.filter(item => item.id !== urunId);
    localStorage.setItem('sepet', JSON.stringify(sepet));
    guncelSepetSayisiniGoster();
    // Eğer sepet sayfasındaysanız, sayfayı yenilemeniz veya sepeti tekrar yüklemeniz gerekebilir.
    if (window.location.pathname.includes('sepet.html')) {
        sepetiGoster();
    }
}

// Sepetteki ürün adetini artırma/azaltma (sepet.html için)
function adetGuncelle(urunId, miktar) {
    let sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    const urunIndex = sepet.findIndex(item => item.id === urunId);

    if (urunIndex > -1) {
        sepet[urunIndex].adet += miktar;
        if (sepet[urunIndex].adet <= 0) {
            sepet = sepet.filter(item => item.id !== urunId); // Adet 0 veya altına düşerse sil
        }
    }
    localStorage.setItem('sepet', JSON.stringify(sepet));
    guncelSepetSayisiniGoster();
    if (window.location.pathname.includes('sepet.html')) {
        sepetiGoster(); // Sepet sayfasını yeniden yükle
    }
}

// Sepetteki toplam ürün sayısını al (header'daki sayaç için)
function getSepetAdet() {
    const sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    return sepet.reduce((total, item) => total + item.adet, 0);
}

// Sepet sayacını güncelleyen fonksiyon
function guncelSepetSayisiniGoster() {
    const sepetSayacElement = document.getElementById('sepet-sayaci'); // Header'da böyle bir elementiniz olmalı
    if (sepetSayacElement) {
        sepetSayacElement.textContent = `(${getSepetAdet()})`;
    }
}

// Sepet sayfasında sepet içeriğini listeleme (sepet.html için)
function sepetiGoster() {
    const sepetContainer = document.getElementById('sepet-urunleri'); // sepet.html'de böyle bir div olmalı
    if (!sepetContainer) return;

    const sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    sepetContainer.innerHTML = ''; // Önceki içeriği temizle
    let toplamFiyat = 0;

    if (sepet.length === 0) {
        sepetContainer.innerHTML = '<p>Sepetinizde ürün bulunmamaktadır.</p>';
        const toplamFiyatElement = document.getElementById('sepet-toplam-fiyat');
        if (toplamFiyatElement) {
            toplamFiyatElement.textContent = `Toplam Fiyat: 0.00₺`;
        }
        return;
    }

    sepet.forEach(item => {
        const urunFiyat = item.fiyat; // Fiyat zaten sayı olarak saklanıyor
        toplamFiyat += urunFiyat * item.adet;

        const sepetItemDiv = document.createElement('div');
        sepetItemDiv.className = 'sepet-item';
        sepetItemDiv.innerHTML = `
            <img src="${item.kapakFoto}" alt="${item.baslik}" />
            <div>
                <h3>${item.baslik}</h3>
                <p>Fiyat: ${item.fiyat.toFixed(2)}₺</p>
                <p>Adet:
                    <button onclick="adetGuncelle(${item.id}, -1)">-</button>
                    <span>${item.adet}</span>
                    <button onclick="adetGuncelle(${item.id}, 1)">+</button>
                </p>
                <button onclick="sepettenSil(${item.id})" class="delete-item-btn">Sepetten Sil</button>
            </div>
        `;
        sepetContainer.appendChild(sepetItemDiv);
    });

    const toplamFiyatElement = document.getElementById('sepet-toplam-fiyat'); // Toplam fiyatı gösterecek element
    if (toplamFiyatElement) {
        toplamFiyatElement.textContent = `Toplam Fiyat: ${toplamFiyat.toFixed(2)}₺`;
    }
}

// Sayfa yüklendiğinde sepet sayacını başlat
document.addEventListener('DOMContentLoaded', guncelSepetSayisiniGoster);

// WhatsApp'tan Sipariş Verme fonksiyonu (sepet.html için)
function siparisVer() {
    const sepet = JSON.parse(localStorage.getItem('sepet')) || [];
    if (sepet.length === 0) {
        alert('Sepetinizde sipariş vermek istediğiniz ürün bulunmamaktadır!');
        return;
    }

    let siparisMetni = "Merhaba, Heybem Çarşıdan aşağıdaki ürünleri sipariş etmek istiyorum:\n\n";
    let toplamFiyat = 0;

    sepet.forEach(item => {
        toplamFiyat += item.fiyat * item.adet;
        siparisMetni += `- ${item.adet} adet x ${item.baslik} (${item.fiyat.toFixed(2)}₺)\n`;
    });

    siparisMetni += `\nToplam Fiyat: ${toplamFiyat.toFixed(2)}₺\n\n`;
    siparisMetni += "Lütfen siparişimin teslimatı için aşağıdaki bilgileri doldurunuz:\n";
    siparisMetni += "Adınız Soyadınız: \n";
    siparisMetni += "Telefon Numaranız: \n";
    siparisMetni += "Adresiniz: \n";
    siparisMetni += "Şehir/İlçe: \n";
    siparisMetni += "Ek Notlar (varsa): \n";


    // WhatsApp API URL'si
    // Kendi WhatsApp Business numaranızı buraya yazın: örn. 905XXXXXXXXX
    const whatsappNumarasi = "905541278746"; // Sizin verdiğiniz numara
    const whatsappLink = `https://wa.me/${whatsappNumarasi}?text=${encodeURIComponent(siparisMetni)}`;

    window.open(whatsappLink, '_blank');

    // Sipariş gönderildikten sonra sepeti temizleyebilirsiniz (isteğe bağlı)
    // localStorage.removeItem('sepet');
    // guncelSepetSayisiniGoster();
    // sepetiGoster();
}