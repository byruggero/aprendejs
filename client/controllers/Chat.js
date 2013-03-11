Template.chat.events({
    // logearse con twitter
    'click #login_btn': function (e, tpl) {
        Meteor.loginWithTwitter({
            requestPermisions: ['email', 'user_about_me', 'profile', 'user_likes']
        }, function (err) {
            if (err) {
                //handling login error
            } else {
                // console.log(arguments);
            }
        });
    },
    // salir
    'click #logout_btn': function (e, tpl) {
        Meteor.logout(function (err) {
            if (err) {
                //handling login error
            } else {
                //show alert
            }
        });
    },
    'keypress #chat_textfield': function (e, tpl) {
        var mesage = $('#chat_textfield').val();
        if (e.keyCode == 13) {
            Mesages.insert({
                userId: Meteor.userId(),
                mesage: mesage,
                userName:Meteor.user().profile.name,
                avatarUrl:'http://www.gravatar.com/avatar/8e88e4c70a9b1e682549d614a9512422?s=30'
            });
            $('#chat_textfield').val('');
        }
    }
});

Template.chat.mesages = function () {
    return Mesages.find({}, {
        sort: {
            score: -1,
            name: 1
        }
    });
};