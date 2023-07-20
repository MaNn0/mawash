function fetchData() {
  fetch("https://almawash.serveo.net/items")
    .then((response) => response.json())
    .then((data) => {
      const itemsList = document.querySelector(
        ".row.row-cols-1.row-cols-md-5.g-4.mb-4"
      );

      data.forEach((item) => {
        const col = document.createElement("div");
        col.className = "col text-center";

        col.innerHTML = `
            <div class="card h-100" style="border: 2px solid #c7a96b;">
              <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0"
                    class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${item.images[0]}" class="d-block w-100" alt="Image 1">
                  </div>
                  <div class="carousel-item">
                    <img src="${item.images[1]}" class="d-block w-100" alt="Image 2">
                  </div>
                  <div class="carousel-item">
                    <img src="${item.images[2]}" class="d-block w-100" alt="Image 3">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel1"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel1"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body">
                <h5 class="card-title" style="color: #212121 !important;">${item.name}</h5>
                <p class="card-text text-end text-muted">${item.price}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn" style="background-color: #c7a96b;">اشتري الأن</a>
              </div>
            </div>
          `;

        itemsList.appendChild(col);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
