const getLibrary = async () => {
  try {
    let libreria = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET",
    });
    if (libreria.ok) {
      let libri = await libreria.json();

      console.log("libreria", libri);

      let row = document.getElementById("linaDelleCards");

      libri.forEach((element) => {
        row.innerHTML += `
    <div class="card p-0 col-sm-2 col-md-3 col-lg-4 mb-2">
    <img src="${element.img}" class="card-img-top" style="height: 65%" alt="...">
    <div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text"><span class="bold">Price</span>: ${element.price}</p>
    <p class="card-text"><span class="bold">Category</span>: ${element.category}</p>
    <a href="https://baconmockup.com/300/200" Target= “_blank” class="btn btn-primary bottone">Delete</a>
    </div>
    </div>
    `;
      });
    } else {
      throw "c'è stato un errore dentro l'if";
    }
  } catch (err) {
    console.log(err);
  }
};

getLibrary();
