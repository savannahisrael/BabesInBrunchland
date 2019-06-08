$("#floralInvite").show();
$("#foodieInvite").hide();
$("#modernInvite").hide();
$("#bloodyInvite").hide();
$("#bubblyInvite").hide();

$("#submit").on("click", function (event) {
    event.preventDefault();

    var hostName = $("#hostNameForm").val().trim();
    var eventDate = $("#eventDateForm").val().trim();
    var eventTime = $("#eventTimeForm").val().trim();
    var customMessage = $("#customMessageForm").val().trim();

    console.log(hostName);
    console.log(eventDate);
    console.log(eventTime);
    console.log(customMessage);

    $("#hostName").html(hostName);
    $("#eventDate").html(eventDate);
    $("#eventTime").html(eventTime);
    $("#customMessage").html(customMessage);

    $("#hostNameFoodie").html(hostName);
    $("#eventDateFoodie").html(eventDate);
    $("#eventTimeFoodie").html(eventTime);
    $("#customMessageFoodie").html(customMessage);

    $("#hostNameModern").html(hostName);
    $("#eventDateModern").html(eventDate);
    $("#eventTimeModern").html(eventTime);
    $("#customMessageModern").html(customMessage);

    $("#hostNameBloody").html(hostName);
    $("#eventDateBloody").html(eventDate);
    $("#eventTimeBloody").html(eventTime);
    $("#customMessageBloody").html(customMessage);

    $("#hostNameBubbly").html(hostName);
    $("#eventDateBubbly").html(eventDate);
    $("#eventTimeBubbly").html(eventTime);
    $("#customMessageBubbly").html(customMessage);
})

$("#floralButton").on("click", function (event) {
    event.preventDefault();
    $("#floralInvite").show();
    $("#foodieInvite").hide();
    $("#modernInvite").hide();
$("#bloodyInvite").hide();
$("#bubblyInvite").hide();
});

$("#foodieButton").on("click", function (event) {
    event.preventDefault();
    $("#floralInvite").hide();
    $("#foodieInvite").show();
    $("#modernInvite").hide();
$("#bloodyInvite").hide();
$("#bubblyInvite").hide();
});

$("#modernButton").on("click", function (event) {
    event.preventDefault();
    $("#floralInvite").hide();
    $("#foodieInvite").hide();
    $("#modernInvite").show();
$("#bloodyInvite").hide();
$("#bubblyInvite").hide();
});

$("#bloodyButton").on("click", function (event) {
    event.preventDefault();
    $("#floralInvite").hide();
    $("#foodieInvite").hide();
    $("#modernInvite").hide();
$("#bloodyInvite").show();
$("#bubblyInvite").hide();
});

$("#bubblyButton").on("click", function (event) {
    event.preventDefault();
    $("#floralInvite").hide();
    $("#foodieInvite").hide();
    $("#modernInvite").hide();
$("#bloodyInvite").hide();
$("#bubblyInvite").show();
});
