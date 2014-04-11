var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};

window.new_user_joined = function(name) {
    users_joined.unshift(name);
    console.log(users_joined);
}

//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");
    // var room = [chatrooms.west_side, chatrooms.east_side];
    for (var i =0; i <  users_joined.length; i++) {
        var user = users_joined.pop();
       // var key = i;

        if ( i % 2 == 0) {
            chatrooms.west_side[i] = user;
            $(".users1").append("<p ><button>" + user + "</button></p>" );
        }
        else {
            chatrooms.east_side[i] = user;
            $(".users2").append("<p ><button>" + user + "</button></p>" );
        }


    }


}
       //    use if  if else else to determine if one is longer
//
//  use object.keys to get all the keys in an object
        //    every 5 seconds when the assign to chatroom function is called  the last user in the users_joined array
        //    should be added to the first chatroom then the next chatroom until the arrray is empty