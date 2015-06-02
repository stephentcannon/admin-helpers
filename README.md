steeve:admin-helpers
====================
just a bunch of admin helpers

isAdmin(userId) - returns boolean
==========================
Determines if Meteor.user().admin == true

Useful in publish and allow deny.

Available: Server

````
  var x =  isAdmin(378hshe8js);
  console.log(x);

````
