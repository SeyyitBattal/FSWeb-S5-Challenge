import axios from "axios";

const Tablar = (konu) => {
  const firstDiv = document.createElement("div");
  firstDiv.className = "topics";

  konu.forEach((element) => {
    const secondDiv = document.createElement("div");
    secondDiv.textContent = element;
    secondDiv.className = "tab";
    firstDiv.append(secondDiv);
  });

  return firstDiv;
};

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

const tabEkleyici = (secici) => {
  const TabInHere = document.querySelector(secici);

  async function konularLink() {
    await axios
      .get(`http://localhost:5001/api/konular`)
      .then(function (response) {
        console.log("Alınan datalar: ", response.data.konular);
        const TabTab = Tablar(response.data.konular);
        TabInHere.append(TabTab);
      });
  }
  konularLink();
};

export { Tablar, tabEkleyici };
// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
