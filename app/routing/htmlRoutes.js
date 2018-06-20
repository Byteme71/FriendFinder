$.get("/survey" + searchedCharacter, function (data) {
    console.log(data);
    if (data) {
        $("#stats").show();
        $("#name").text(data.name);
        $("#role").text(data.role);
        $("#age").text(data.age);
        $("#force-points").text(data.forcePoints);

        //display survey page
    }

});

///catch all route to home.html displays home page

