var clickSound = document.createElement("audio");
clickSound.setAttribute("src", "audio/shooting-star.mp3");
var counter = 1;
var map;
function initMap(restLat, restLng, counter) {
    restLat = parseFloat(restLat);
    restLng = parseFloat(restLng);
    var myLatLng = {lat: restLat, lng: restLng};

    map = new google.maps.Map(document.getElementById('r' + counter++ + 'Map'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Restaurant Map'
    });
}

$("#submit").on("click", function(event) {
    event.preventDefault();

    clickSound.play();

    var zipCode = $("#zip").val().trim();
    var pricePoint = $("#pricePoint").val().trim();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
        method: "GET"
    }).then(function(response) {
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
        }).then(function(response) {
        
        
            var restaurants = response.restaurants;
            // console.log(restaurants)

            // const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.2);
            // console.log("filtered-ratings" , filteredRatings);

            const filteredPriceLow = restaurants.filter(restaurant => restaurant.restaurant.price_range === 1);
            console.log("price-range 1: " , filteredPriceLow)
            console.log(filteredPriceLow)

            const filteredPriceMid = restaurants.filter(restaurant => restaurant.restaurant.price_range === 2 || restaurant.restaurant.price_range === 3);
            console.log("price-range 2: " , filteredPriceMid);

            const filteredPriceHigh = restaurants.filter(restaurant => restaurant.restaurant.price_range === 4 || restaurant.restaurant.price_range === 5);
            console.log("price-range 3: " , filteredPriceHigh);
            //set variable for name for search purposes in google - do I need a for loop?

            
            // for (i=0; i<restaurants.length; i++) {


            //     var restName = restaurants[i].restaurant.name;
            //     var restAddress = restaurants[i].restaurant.location.address;
            //     var restCity = restaurants[i].restaurant.location.locality_verbose;
            //     var restLat = restaurants[i].restaurant.location.latitude;
            //     var restLng = restaurants[i].restaurant.location.longitude;
            //     console.log(restName , restLat , restLng);
            //     initMap(restLat, restLng, counter++);

            //     //How will we place each map in a separate div?
            // }

            if (pricePoint === "$") {
                for (j=0; j<filteredPriceLow.length; j++) {
                    var restName1 = filteredPriceLow[0].restaurant.name;
                    $("#resultsR1Name").html(restName1);
                    $("#r1Name").html(restName1);
                    var rest1Image = filteredPriceLow[0].restaurant.thumb;
                    $("#resultsR1Img").attr('src', rest1Image);
                    $("#r1Img").attr('src', rest1Image);
                    var rest1Address = filteredPriceLow[0].restaurant.location.address;
                    $("#r1Street").html(rest1Address);
                    var rest1City = filteredPriceLow[0].restaurant.location.locality_verbose;
                    $("#r1city").html(rest1City);
                    var rest1Rating = filteredPriceLow[0].restaurant.user_rating.aggregate_rating;
                    console.log(rest1Rating);
                    $("#r1Rating").text("Rating: " + rest1Rating);

                    var restName2 = filteredPriceLow[1].restaurant.name;
                    $("#resultsR2Name").html(restName2);
                    $("#r2Name").html(restName2);
                    var rest2Image = filteredPriceLow[1].restaurant.thumb;
                    $("#resultsR2Img").attr('src', rest2Image);
                    $("#r2Img").attr('src', rest2Image);
                    var rest2Address = filteredPriceLow[1].restaurant.location.address;
                    $("#r2Street").html(rest2Address);
                    var rest2City = filteredPriceLow[1].restaurant.location.locality_verbose;
                    $("#r2city").html(rest2City);
                    var rest2Rating = filteredPriceLow[1].restaurant.user_rating.aggregate_rating;
                    console.log(rest2Rating);
                    $("#r2Rating").text("Rating: " + rest2Rating);

                    var restName3 = filteredPriceLow[2].restaurant.name;
                    $("#resultsR3Name").html(restName3);
                    $("#r3Name").html(restName3);
                    var rest3Image = filteredPriceLow[2].restaurant.thumb;
                    $("#resultsR3Img").attr('src', rest3Image);
                    $("#r3Img").attr('src', rest3Image);
                    var rest3Address = filteredPriceLow[2].restaurant.location.address;
                    $("#r3Street").html(rest3Address);
                    var rest3City = filteredPriceLow[2].restaurant.location.locality_verbose;
                    $("#r3city").html(rest3City);
                    var rest3Rating = filteredPriceLow[2].restaurant.user_rating.aggregate_rating;
                    console.log(rest3Rating);
                    $("#r3Rating").text("Rating: " + rest3Rating);

                    var restName4 = filteredPriceLow[3].restaurant.name;
                    $("#resultsR4Name").html(restName4);
                    $("#r4Name").html(restName4);
                    var rest4Image = filteredPriceLow[3].restaurant.thumb;
                    $("#resultsR4Img").attr('src', rest4Image);
                    $("#r4Img").attr('src', rest4Image);
                    var rest4Address = filteredPriceLow[3].restaurant.location.address;
                    $("#r4Street").html(rest4Address);
                    var rest4City = filteredPriceLow[3].restaurant.location.locality_verbose;
                    $("#r4city").html(rest4City);
                    var rest4Rating = filteredPriceLow[3].restaurant.user_rating.aggregate_rating;
                    console.log(rest4Rating);
                    $("#r4Rating").text("Rating: " + rest4Rating);


                    // var restName = filteredPriceLow[j].restaurant.name;
                    // $('#r' + counter++ + 'Name').html(restName[j]);
                    // $("#resultsR" + counter++ + "Name").html(restName[j]);
                    // var restAddress = filteredPriceLow[j].restaurant.location.address;
                    // var restCity = filteredPriceLow[j].restaurant.location.locality_verbose;


                    var restLat = filteredPriceLow[j].restaurant.location.latitude;
                    var restLng = filteredPriceLow[j].restaurant.location.longitude;
                    // console.log(restName , restLng , counter++);
                    initMap(restLat, restLng, counter++);

                };
            }

            //ajax call to google for map!
        
        
            // for (var i=0; i<restaurants.length; i++) {
                
            //     function initMap() {

            //         // var restName= restaurants[i].restaurant.name;
            //         var restLat= restaurants[i].restaurant.location.latitude;
            //         var restLng = restaurants[i].restaurant.location.longitude;

            //         var myLatLng = restLat + restLng

            //         var map = new google.maps.Map(document.getElementById('map'), {
            //           zoom: 4,
            //           center: myLatLng
            //         });
            
            //         var marker = new google.maps.Marker({
            //           position: myLatLng,
            //           map: map,
            //           title: 'Hello World!'
            //         });
            


                
                
                // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
                // console.log(ratingsArray);
        
                // priceArray.push(restaurants[i].restaurant.price_range);
                // console.log(priceArray);
        
        
                
                // var restDiv = $("<div>").addClass("restDiv")
        
                // var restName = $("<h4>").text(restaurants[i].restaurant.name);
                // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
                // var image = $("<img>").attr('r1Img', restaurants[i].restaurant.thumb);
                // // r1Img 
        
                // restDiv.append(restName);
                // restDiv.append(rating);
                // restDiv.append(image);
        
                // $("#contentHere").append(restDiv);
            // }
           

        });
        //
    });

})





// var clickSound = document.createElement("audio");
// clickSound.setAttribute("src", "audio/shooting-star.mp3");
// var counter = 1;
// var map;
// function initMap(restLat, restLng, counter ) {
//     restLat = parseFloat(restLat);
//     restLng = parseFloat(restLng);
//     var myLatLng = {lat: restLat, lng: restLng};

//     map = new google.maps.Map(document.getElementById('r' + counter++ + 'Map'), {
//       zoom: 15,
//       center: myLatLng
//     });

//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: 'Restaurant Map'
//     });
// }

// $("#submit").on("click", function(event) {
//     event.preventDefault();

//     clickSound.play();

//     var zipCode = $("#zip").val().trim();
//     var pricePoint = $("#pricePoint").val();

//     $.ajax({
//         url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
//         method: "GET"
//     }).then(function(response) {
//         // console.log(response);
        
//         // console.log(response.results[0].geometry.location.lat);
//         // console.log(response.results[0].geometry.location.lng);
//         //set lat and long (response.......)
//         var lat = response.results[0].geometry.location.lat;
//         var lng = response.results[0].geometry.location.lng;

//         console.log(lat + ", " + lng)
//         //ajax call to the zomato api, plugging in values fo lat and long

//         $.ajax({
//             url: "http://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=" + lat + "&lon=" + lng + "&apikey=527733933cfc51b0f78491172626a1a3&count=all",
//             method: "POST",
//         }).then(function(response) {
        
        
//             var restaurants = response.restaurants;
//             // console.log(restaurants)

//             // const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.2);
//             // console.log("filtered-ratings" , filteredRatings);

//             const filteredPriceLow = restaurants.filter(restaurant => restaurant.restaurant.price_range === 1);
//             console.log("price-range 1: " , filteredPriceLow)

//             const filteredPriceMid = restaurants.filter(restaurant => restaurant.restaurant.price_range === 2 || restaurant.restaurant.price_range === 3);
//             console.log("price-range 2: " , filteredPriceMid);

//             const filteredPriceHigh = restaurants.filter(restaurant => restaurant.restaurant.price_range === 4 || restaurant.restaurant.price_range === 5);
//             console.log("price-range 3: " , filteredPriceHigh);
//             //set variable for name for search purposes in google - do I need a for loop?
//             for (i=0; i<restaurants.length; i++) {


//                 var restName = restaurants[i].restaurant.name;
//                 var restLat = restaurants[i].restaurant.location.latitude;
//                 var restLng = restaurants[i].restaurant.location.longitude;
//                 // console.log(restName , restLat , restLng);
//                 initMap(restLat, restLng, counter++);

//                 var restName1 = restaurants[0].restaurant.name;
//                 console.log(restName1)
//                 $("#r1Name").append(restName1);
//                 var restName2 = restaurants[1].restaurant.name;
//                 $("#r2Name").append(restName2);
//                 var restName3 = restaurants[2].restaurant.name;
//                 $("#r3Name").append(restName3)
//                 var restName4 = restaurants[3].restaurant.name;
//                 $("#r4Name").append(restName4);
//                 var restName5 = restaurants[4].restaurant.name;
//                 $("#r5Name").append(restName5);







//                 //How will we place each map in a separate div?
//             }

//             //ajax call to google for map!
        
        
//             // for (var i=0; i<restaurants.length; i++) {
                
//             //     function initMap() {

//             //         // var restName= restaurants[i].restaurant.name;
//             //         var restLat= restaurants[i].restaurant.location.latitude;
//             //         var restLng = restaurants[i].restaurant.location.longitude;

//             //         var myLatLng = restLat + restLng

//             //         var map = new google.maps.Map(document.getElementById('map'), {
//             //           zoom: 4,
//             //           center: myLatLng
//             //         });
            
//             //         var marker = new google.maps.Marker({
//             //           position: myLatLng,
//             //           map: map,
//             //           title: 'Hello World!'
//             //         });
            


                
                
//                 // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
//                 // console.log(ratingsArray);
        
//                 // priceArray.push(restaurants[i].restaurant.price_range);
//                 // console.log(priceArray);
        
        
                
//                 // var restDiv = $("<div>").addClass("restDiv")
        
//                 // var restName = $("<h4>").text(restaurants[i].restaurant.name);
//                 // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
//                 // var image = $("<img>").attr('r1Img', restaurants[i].restaurant.thumb);
//                 // // r1Img 
        
//                 // restDiv.append(restName);
//                 // restDiv.append(rating);
//                 // restDiv.append(image);
        
//                 // $("#contentHere").append(restDiv);
//             // }
           

//         });
//         //
//     });

// })

