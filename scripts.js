const options = {
  method: "GET",
  headers: {
    Authorization: "563492ad6f91700001000001117b8f068eb4434c863699bc2f262446",
  },
};

const fetchImg = () => {
  fetch(`https://api.pexels.com/v1/search?query=cat`, options)
    .then((response) => response.json())
    .then((json) => {
      renderImg(json);
    })
    .catch((err) => renderError(err));
};

const renderImg = (json) => {
  let row = document.querySelector(".row-for-cards");
  for (let i = 0; i < 9; i++) {
    const img = json[i];
    row.innerHTML += `
    <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="${img}"
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
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
    `;
  }
  console.log(row);
};
