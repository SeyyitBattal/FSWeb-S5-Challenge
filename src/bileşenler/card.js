import axios from "axios";

const Card = (makale) => {
  const mainDiv = document.createElement("div");
  mainDiv.className = "card";

  const headDiv = document.createElement("div");
  headDiv.className = "headline";
  headDiv.textContent = makale.anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.className = "author";

  const imgDiv = document.createElement("div");
  imgDiv.className = "img-container";

  const imgsrc = document.createElement("img");
  imgsrc.setAttribute("src", makale.yazarFoto);

  const spanYazar = document.createElement("span");
  spanYazar.textContent = `${makale.yazarAdi} tarafından`;

  imgDiv.append(imgsrc);
  authorDiv.append(imgDiv, spanYazar);
  mainDiv.append(headDiv, authorDiv);

  // const imgClick = document.querySelector(".img-container");
  // imgClick.addEventListener("click", (event) => {
  //   console.log("You clicked image!", event);
  // });

  return mainDiv;
};

{
  /* // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div> */
}

const cardEkleyici = (secici) => {
  const cardInHere = document.querySelector(secici);

  async function cardLink() {
    await axios
      .get(`http://localhost:5001/api/makaleler`)
      .then(function (response) {
        console.log("Cardlar çıktısı: ", response.data.makaleler);
        const buyukobje = response.data.makaleler;

        const diziHali = Object.values(buyukobje);

        for (let i = 0; i < diziHali.length; i++) {
          for (let y = 0; y < diziHali[i].length; y++) {
            const sonHal = Card(diziHali[i][y]);
            cardInHere.append(sonHal);
          }
        }
      });
  }
  cardLink();
};

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

export { Card, cardEkleyici };
