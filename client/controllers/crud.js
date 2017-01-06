Template.home.events({ // Listeners
    'submit form': function(e){
        e.preventDefault(); // Annule l'évènement s'il est annulable, sans stopper sa propagation. (pour ne pas réfraichir)
        let name = e.target.name.value;
        let lastname = e.target.lastname.value;
        let description = e.target.description.value;

        let obj = {
            name : name,
            lastname : lastname,
            description : description
        };
        if(this._id){
            Meteor.call('updateData', this._id, obj); // Appel de la method updateData dans server (server/crud.js)
        } else {
            Meteor.call('insertData', obj); // Appel de la method insertData dans server (server/crud.js)
        }
        //alert('Insertion validé');
    },
    'click #remove' : function(e){
        crud.remove(this._id); // supprime la donnée dans la mongoDB
    }
});

Template.home.helpers({ // Controllers
    // Obtient la donnée dans la mongoDB
    getData : function(){
        return crud.find();
    },
});