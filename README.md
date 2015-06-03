steeve:admin-helpers
====================
just a bunch of admin helpers

isAdmin(userId) - returns true or throws error
==========================
Determines if Meteor.user().admin == true

Useful in publish and allow deny.

Available: Server

````
  try{
    var x =  isAdmin(378hshe8js);
    console.log(x);
    // true
  }catch(e){
    console.log(e);
  }

````
