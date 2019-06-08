$("#inputFormWrap").show();
$("#resultsWrap").show();


var clickSound = document.createElement("audio");
clickSound.setAttribute("src", "audio/shooting-star.mp3");

// $("#resultsWrap").hide();
// var counter = 1;
// var map;

// function initMap(restLat, restLng, counter) {
 
//     restLat = parseFloat(restLat);
//     restLng = parseFloat(restLng);
//     var myLatLng = {lat: restLat, lng: restLng};


//     map = new google.maps.Map(document.getElementById('r' + counter++ + 'Map'), {
//         zoom: 15,
//         center: myLatLng
//     });

//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'Hello World!'

//     });
// }

// $("r1ButtonMore.btn").on("click", function (event) {
//     event.preventDefault();
//     console.log("click");

//     var restName= $("#r1Name").val().trim();
//     var imgPhoto= $("#r1Img").val().trim();

//     var newRest = { 
//         name = restName,
//         img = imgPhoto,

//     };
// })

$("#submit").on("click", function (event) {
    event.preventDefault();


    clickSound.play();

    $("#resultsWrap.container").show();
    $("#firstForm").hide();

    var zipCode = $("#zip").val().trim();
    var pricePoint = $("#pricePoint").val();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
        method: "GET"
    }).then(function (response) {
        // console.log(response);

        // console.log(response.results[0].geometry.location.lat);
        // console.log(response.results[0].geometry.location.lng);
        //set lat and long (response.......)
        var lat = response.results[0].geometry.location.lat;
        var lng = response.results[0].geometry.location.lng;

        console.log(lat + ", " + lng)
        //ajax call to the zomato api, plugging in values fo lat and long

        $.ajax({
            url: "http://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=" + lat + "&lon=" + lng + "&apikey=527733933cfc51b0f78491172626a1a3&count=all",
            method: "POST",
        }).then(function (response) {


            var restaurants = response.restaurants;
            // console.log(restaurants)

            // const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.2);
            // console.log("filtered-ratings" , filteredRatings);

            const filteredPriceLow = restaurants.filter(restaurant => restaurant.restaurant.price_range === 1);
            console.log("price-range 1: ", filteredPriceLow)

            const filteredPriceMid = restaurants.filter(restaurant => restaurant.restaurant.price_range === 2 || restaurant.restaurant.price_range === 3);
            console.log("price-range 2: ", filteredPriceMid);

            const filteredPriceHigh = restaurants.filter(restaurant => restaurant.restaurant.price_range === 4 || restaurant.restaurant.price_range === 5);
            console.log("price-range 3: ", filteredPriceHigh);
            //set variable for name for search purposes in google - do I need a for loop?

            for (i = 0; i < restaurants.length; i++) {

                var restLat = restaurants[i].restaurant.location.latitude;
                var restLng = restaurants[i].restaurant.location.longitude;
                // console.log(restName , restLat , restLng);
                initMap(restLat, restLng, counter++);



                // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
                // console.log(ratingsArray);

                // priceArray.push(restaurants[i].restaurant.price_range);
                // // console.log(priceArray);



                // var restDiv = $("<div>").addClass("restDiv")

                // var restName = $("<h2>").text(restaurants[i].restaurant.name);

                // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
                // var image = $("<img>").attr('r1Img', restaurants[i].restaurant.thumb);


                // restDiv.append(restName);
                // restDiv.append(rating);
                // restDiv.append(image);

                // $("#contentHere").append(restDiv);
            }
        });
    });
})