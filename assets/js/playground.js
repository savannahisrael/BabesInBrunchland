// $(document).ready(function () {
//     var audio = new Audio ("audio/shooting-star.mp3");

//     $("#button").on("click", function() {
//         event.preventDefault();
//         audio.play();
//         console.log("Audio should play");
//     })

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?q=brunch&lat=39.7392&lon=-104.9903&apikey=527733933cfc51b0f78491172626a1a3&count=all",
//     method: "POST",
// }).then(function(response) {
    
//     // console.log(response);    
//     // console.log(response.restaurants);

//     var restaurants = response.restaurants;
//     console.log(restaurants)

//     // var ratingsArray = [];
//     // var priceArray = [];
//     var lowPriceArray = [];
//     var midPriceArray = [];
//     var highPriceArray = [];



//     for (var i=0; i<restaurants.length; i++) {
//         // var ratingsArray = [];
        
        
//         // ratingsArray.push(restaurants[i].restaurant.user_rating.aggregate_rating);
//         // console.log(ratingsArray);

//         // priceArray.push(restaurants[i].restaurant.price_range);
//         // console.log(priceArray);

//         if (restaurants[i].restaurant.price_range === 1) {
//             lowPriceArray.push(restaurants[i]);
//             console.log(lowPriceArray);
//         }else if (restaurants[i].restaurant.price_range === 2 || restaurants[i].restaurant.price_range === 3) {
//             midPriceArray.push(restaurants[i]);
//             console.log(midPriceArray);
//         }else {
//             highPriceArray.push(restaurants[i]);
//             console.log(highPriceArray);
//         }

        
//         // var restDiv = $("<div>").addClass("restDiv")

//         // var restName = $("<h4>").text(restaurants[i].restaurant.name);
//         // var rating = $("<p>").text("Rating: " + restaurants[i].restaurant.user_rating.aggregate_rating);
//         // var image = $("<img>").attr('src', restaurants[i].restaurant.thumb);

//         // restDiv.append(restName);
//         // restDiv.append(rating);
//         // restDiv.append(image);

//         // $("#contentHere").append(restDiv);
//     }
   
//     const filteredRatings = restaurants.filter(restaurant => restaurant.restaurant.user_rating.aggregate_rating > 4.3);
//     console.log("array" , filteredRatings);
//     // console.log(filteredRatings);

//     // const filteredPrice = priceArray.filter(number => number < 2);
//     // console.log(filteredPrice);


    

    
//     // console.log(response.restaurants[0].restaurant.user_rating.aggregate_rating);
// });

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=" + zipCode + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8",
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// });

// //upon submit, we will take user input and store it in firebase
// //we will reference the zip code and plug it into the google API to get the lat and long
// //we will take the lat and long from the google api and plug it into an ajax call from zomato to get the 5 brunch spots
// //filter results by vegetarian options??
// //filter results by 





// //   Zomato API 527733933cfc51b0f78491172626a1a3

// // $(".modal").modal("hide");  
// // $(".modal-body").html("<h3>You bagged a win!</h3>")

// // $(".modal-body").html("<h3>You bagged a win!</h3>")

// // $(".modal-body").html("<h3>You bagged a win!</h3>");

// // $(".modal").modal("show");

// $.ajax({
//     url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/findplacefromtext/json?input="

//     + restName + "&key=AIzaSyBJdJBJ82riE78r65LwDdZ4RraI1bn2ES8&inputtype=textquery",
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// });



Claudia Playground 



