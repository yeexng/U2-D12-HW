const fetchImages = () =>{
    fetch(`https://api.pexels.com/v1/search?query=dog`,{
        method:"GET",
        headers: {
            Authorization:
            "Bearer 563492ad6f91700001000001117b8f068eb4434c863699bc2f262446",
        },
    })
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        let photos = data.photos;
        renderImages(photos);
    })
    .catch((err) => console.log(err));
};

const renderImages = (photos) =>{
    let row = document.querySelector(".row-for-cards");
    for (let i = 0; i < photos.length; i++) {
        const image = photos[i];
        row.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${image.src.large}"
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >

          <div class="card-body">
            <p class="card-text">
              by ${image.photographer}
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" onclick="hideCard()"
                >
                  Hide
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  9 mins
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `
    }
};
const fetchImages2 = () =>{
    fetch(`https://api.pexels.com/v1/search?query=sunset`,{
        method:"GET",
        headers: {
            Authorization:
            "Bearer 563492ad6f91700001000001117b8f068eb4434c863699bc2f262446",
        },
    })
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data);
        let photos = data.photos;
        renderImages2(photos);
    })
    .catch((err) => console.log(err));
};

const renderImages2 = (photos) =>{
    let row = document.querySelector(".row-for-cards");
    for (let i = 0; i < photos.length; i++) {
        const image = photos[i];
        row.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${image.src.large}"
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Thumbnail"
          >

          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" onclick="hideCard()"
                >
                  Hide
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  9 mins
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `
    }
};

const hideCard = (elem) => {
    elem.closest(".card").remove()
}

window.onload = () =>{
    hideCard();
    fetchImages();
    fetchImages2();
}
