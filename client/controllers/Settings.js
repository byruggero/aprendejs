Template.header.streaming = function () {
    var setting = Settings.findOne();
    return setting && setting.streaming;
};
Template.container.streaming = function () {
    var setting = Settings.findOne();
    return setting && setting.streaming;
};
Template.teaser.streaming = function () {
    var setting = Settings.findOne();
    return setting && setting.streaming;
};

Template.header.events({
    // logearse con twitter
    'click #start_streaming': function (e, tpl) {
         Settings.insert({
                userId: Meteor.userId(),
                streaming: true
        });
    },
    // salir
    'click #stop_streaming': function (e, tpl) {
        Settings.remove({});
    }
});