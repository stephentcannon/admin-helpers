AdminHelpers.isAdmin = function (userId){
  if(!userId){
    throw "Access denied.";
  }else{
    if( !Meteor.users.findOne({_id: userId}).admin ){
      throw "Access denied.";
    } else {
      return true;
    }
  }
};