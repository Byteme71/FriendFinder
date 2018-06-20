$.get("/api/friends" + searchedCharacter, function (data) {
    console.log(data);
    if (data) {
        $("#stats").show();
        $("#name").text(data.name);
        $("#role").text(data.role);
        $("#age").text(data.age);
        $("#force-points").text(data.forcePoints);
    }
});

$("#add-btn").on("click", function (event) {
    event.preventDefault();
    var newCharacter = {
        name: $("#name").val().trim(),
        role: $("#role").val().trim(),
        age: $("#age").val().trim(),
        forcePoints: $("#force-points").val().trim()
    };
    $.post("/api/friends", newCharacter)
        .then(function (data) {
            console.log("add.html", data);
            alert("Adding character...");
            //incoming survey result and compatibility logic, save data to friends.js in an array of objects
        });
});