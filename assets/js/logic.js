var clickSound = document.createElement("audio");
clickSound.setAttribute("src", "assets/audio/shooting-star.mp3");


var filteredPriceLow;
var filteredPriceMid;
var filteredPriceHigh;

$("#resultsWrap").addClass("hide");

function initMap(restLat, restLng) {
    console.log(restLat);
    console.log(restLng);
    restLat = parseFloat(restLat);
    restLng = parseFloat(restLng);
    var myLatLng = { lat: restLat, lng: restLng };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Restaurant Map'
    });
}


$("#submitSearch").on("click", function (event) {
    event.preventDefault();
    $("#firstForm").addClass("hide");
    console.log("click")


    clickSound.play();

    var zipCode = $("#zip").val().trim();
    var pricePoint = $("#pricePoint").val().trim();

    $("#loader").removeClass("hide");

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
        method: "GET"
    }).then(function (gmRes) {

        if (gmRes.results.length > 0) {
            var lat = gmRes.results[0].geometry.location.lat;
            var lng = gmRes.results[0].geometry.location.lng;

            console.log(lat + ", " + lng)
            //ajax call to the zomato api, plugging in values fo lat and long

            $.ajax({
                url: "http://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=" + lat + "&lon=" + lng + "&apikey=527733933cfc51b0f78491172626a1a3&count=all",
                method: "POST",
            }).then(function (response) {
                console.log(response)
                $("#loader").addClass("hide");

                // make suere there is value that comes back otherwise add text to .alter-msg and remove class hide from #alert to give the user feedback
                if (response.restaurants.length > 0) {
                    var restaurants = response.restaurants;
                    filteredPriceLow = restaurants.filter(restaurant => restaurant.restaurant.price_range === 1);
                    filteredPriceMid = restaurants.filter(restaurant => restaurant.restaurant.price_range === 2 || restaurant.restaurant.price_range === 3);
                    filteredPriceHigh = restaurants.filter(restaurant => restaurant.restaurant.price_range === 4 || restaurant.restaurant.price_range === 5);

                    switch (pricePoint) {
                        case "$":
                            createBrunchHTML(filteredPriceLow, "filteredPriceLow");
                            break;
                        case "$$":
                            createBrunchHTML(filteredPriceMid, "filteredPriceMid");
                            break;
                        case "$$$":
                            createBrunchHTML(filteredPriceHigh, "filteredPriceHigh");
                            break;
                        default:

                    }


                } else {
                    $(".alert-msg").text("")
                    $(".alert-msg").text("sorry no brunch for you.")
                    $("#alert").removeClass("hide");
                }


            });
        } else {
            $("#loader").addClass("hide");
            $(".alert-msg").text("")
            $(".alert-msg").text("sorry there was an issue with the zipcode provided. Please check the input and try again.")
            $("#alert").removeClass("hide");
        }
    });
})



function createBrunchHTML(pricePointFilter, pricePoint) {

    pricePointFilter.forEach(function (result, i) {
        var brunchSpotName = result.restaurant.name;
        var brunchSpotImage = result.restaurant.thumb;

        var brunchWrap = $("<div>").addClass("card mb-3 center").attr("id", "brunchSpot-" + i).attr("data-index", i);

        var row = $("<div>").addClass("row no-gutters");

        var col1 = $("<div>").addClass("col-md-4").attr("id", "brunchImg-" + i);
        var img = $("<img>").attr("src", brunchSpotImage).attr("alt", "brunch spot");
        $(col1).append(img);

        var col2 = $("<div>").addClass("col-md-4 text-center")
        var content = $("<div>").addClass("card-body");
        var h2 = $("<h2>").addClass("card-title").attr("id", "brunchName-" + i).text(brunchSpotName);
        var btn = $("<button>").attr("type", "button").addClass("btn btn-primary bellhop").attr("data-index", i).attr("id", "ButtonMore-" + i).attr("data-price", pricePoint).text("Tell Me More")
        $(content).append(h2, btn)
        $(col2).append(content);

        $(row).append(col1, col2);

        $(brunchWrap).append(row)

        $("#resultsWrap").append(brunchWrap);
        $("#resultsWrap").slideDown('slow')
    });

}

// $("#resetBtn").on("click", function(event) {
//     $("#firstForm").removeClass("hide");
//     $("#resultsWrap").addClass("hide");

//   })



$("#alert-btn").click(function () {
    $("#alert").slideUp("slow")
    $(".alert-msg").text("")
})

$(document).on("click", ".bellhop", function () {
    var index = parseInt($(this).data("index"));
    var pricePoint = $(this).data("price");


    if (pricePoint === "filteredPriceLow") {
        var result = filteredPriceLow[index];

        var brunchSpotName = result.restaurant.name;
        $("#rName").html(brunchSpotName);
        var brunchSpotImage = result.restaurant.thumb;
        $("#rImg").attr("src", brunchSpotImage)

        var brunchSpotAddress = result.restaurant.location.address;
        $("#rStreet").html(brunchSpotAddress);
        var brunchSpotCity = result.restaurant.location.locality_verbose;
        $("#rCity").html(brunchSpotCity)
        var brunchSpotRating = result.restaurant.user_rating.aggregate_rating;
        $("#rRating").text("Rating: " + brunchSpotRating);

        var restLat = result.restaurant.location.latitude;
        var restLng = result.restaurant.location.longitude;




        initMap(restLat, restLng);
        $("#resultsModal").modal("show");

    } else if (pricePoint === "filteredPriceMid") {
        var result = filteredPriceMid[index];

        var brunchSpotName = result.restaurant.name;
        $("#rName").html(brunchSpotName);
        var brunchSpotImage = result.restaurant.thumb;
        $("#rImg").attr("src", brunchSpotImage)

        var brunchSpotAddress = result.restaurant.location.address;
        $("#rStreet").html(brunchSpotAddress);
        var brunchSpotCity = result.restaurant.location.locality_verbose;
        $("#rCity").html(brunchSpotCity)
        var brunchSpotRating = result.restaurant.user_rating.aggregate_rating;
        $("#rRating").text("Rating: " + brunchSpotRating);

        var restLat = result.restaurant.location.latitude;
        var restLng = result.restaurant.location.longitude;



        initMap(restLat, restLng);
        $("#resultsModal").modal("show");
    } else {
        (pricePoint === "filteredPriceHigh")
        var result = filteredPriceHigh[index];

        var brunchSpotName = result.restaurant.name;
        $("#rName").html(brunchSpotName);
        var brunchSpotImage = result.restaurant.thumb;
        $("#rImg").attr("src", brunchSpotImage)

        var brunchSpotAddress = result.restaurant.location.address;
        $("#rStreet").html(brunchSpotAddress);
        var brunchSpotCity = result.restaurant.location.locality_verbose;
        $("#rCity").html(brunchSpotCity)
        var brunchSpotRating = result.restaurant.user_rating.aggregate_rating;
        $("#rRating").text("Rating: " + brunchSpotRating);

        var restLat = result.restaurant.location.latitude;
        var restLng = result.restaurant.location.longitude;

        initMap(restLat, restLng);
        $("#resultsModal").modal("show");
    }
});