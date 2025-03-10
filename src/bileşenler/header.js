/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Header = (baslik, tarih, yazi) => {
  const firstDiv = document.createElement("div");
  firstDiv.className = "header";

  const firstSpan = document.createElement("span");
  firstSpan.className = "date";
  firstSpan.textContent = tarih;

  const firstHeader = document.createElement("h1");
  firstHeader.textContent = baslik;

  const secondSpan = document.createElement("span");
  secondSpan.className = "temp";
  secondSpan.textContent = yazi;

  firstDiv.append(firstSpan, firstHeader, secondSpan);
  return firstDiv;
};

// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const headerEkleyici = (secici) => {
  const headerInThere = document.querySelector(secici);
  const newHeader = Header("TechnoNews", "28/07/2023", "Techno in here!");
  headerInThere.appendChild(newHeader);
};

export { Header, headerEkleyici };

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
