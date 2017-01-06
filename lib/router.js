FlowRouter.route('/update/:_id', {
    name: 'update',
    template: 'home',
    data : function () {
        return crud.findOne({_id:this.params._id});
    }
});