let url = "http://www.omdbapi.com/";
let apiKey = "b3122f71";

// create main HTML structure
let body = document.body;
let conteiner = document.querySelector(".conteiner");
body.insertAdjacentHTML(
  "afterbegin", 
  `<div class="conteiner">
    <form>
      <input type="text" name="search" id="search" placeholder="Search..."/>
        <select name="type" id="type">
        <option value="">--type--</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
    <input type="submit" id="submit"/>
    </form>
    <div id="listFilms"></div>
    <div id="pagination"></div>
  </div>`);

  function apiRequest (options) {
    $.ajax(url, {
      type: "GET",
      data: {
          s: options.title,
          type: options.type,
          page: options.pageNumber,
          apikey: apiKey
      },
      success: function (data, status, xhr) {
        if (title !="") {
          innerMovies (data);
          console.log(data); // !!!!!
        } else {
          errorSearch (data);
        }
      },
    });
  }

  // go to search by click
$("#submit").on("click", function(event){
  event.preventDefault();

  // to clean from previous searches
  $("#listFilms").empty();

  // get current values from API data
  title = $("#search").val();
  type = $("#type").val();
  pageNumber = 1;

  apiRequest({
    title: title,
    type: type,
    pageNumber: pageNumber
  }) 
});

// inner data to HTML
function innerMovies (data) {
    let items = data.Search;
    let mainList = document.querySelector('#listFilms');

    // insert items from API data
    items.forEach(function (value) {
      mainList.insertAdjacentHTML(
            "afterbegin",
            `<div class="items">
                 <p class="title">${value.Title}</p>
                 <img class="poster" src="${value.Poster}"</img>
                 <button id="detailsBtn">Details</button>
                 <div id ="details__items"></div>
                  <!-- The Modal Window-->
                  <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="details-content">
                      <span class="close">&times;</span>
                      <p class="title">${value.Title}</p>
                      <p class="year">Year:${value.Year}</p>
                      <p class="year">Type:${value.Type}</p>
                      <img class="details-poster" src="${value.Poster}"</img>
                    </div>
                  </div>
            </div>`
        );
      
        // show if it was closed during No result
        $("#pagination").show(); 

        // get the modal for displey details
        let modal = document.querySelector("#myModal");
        let btn = document.querySelector("#detailsBtn");
        let span = document.getElementsByClassName("close")[0];

        // when the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        // when the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
        // when the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    });
    event.preventDefault();

    // pagination
    let itemsPages = $(".items");
    let numItems = itemsPages.length;
    let perPage = 10;
    
    itemsPages.slice(perPage).hide();
    if(numItems != 0){
      $("#pagination").pagination({
        itemsPages: numItems,
        itemsOnPage: perPage,
        cssStyle: "light-theme",
        onPageClick: function(pageNumber) { 
          apiRequest({
            title: title,
            type: type,
            pageNumber: pageNumber,
          })
          let showFrom = perPage * (pageNumber - 1);
          let showTo = showFrom + perPage;
          itemsPages.hide().slice(showFrom, showTo).show();
        }
      });
    }
    
    // allows to dynamically change how many items are rendered by the pagination (from OMDb docs)
    $(function() {
      $("#pagination").pagination('updateItems', 500);
  });

  // hide No result notification after new Search...
  $(".not-found").hide(); 
};

// if data hasn`t any result by request   !!!!!TODO click only one time needed
function errorSearch (data) {
  let conteiner = document.querySelector(".conteiner");
  conteiner.insertAdjacentHTML(
    "beforeend",
    `<div class="not-found">
         <p>Movie not found!</p>
         </div>`
  );
  // remove pagination if response error
  $("#pagination").hide(); 
};