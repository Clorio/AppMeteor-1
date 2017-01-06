import { Meteor } from 'meteor/meteor';

Meteor.methods({
    insertData : function(obj){
        crud.insert(obj);
   },
    updateData : function(id, obj){
        crud.update({_id:id},{obj});
    }
});