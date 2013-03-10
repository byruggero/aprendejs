Template.chat.events({
    // logearse con twitter
    'click #login_btn': function (e, tpl) {
        Meteor.loginWithTwitter({
            //requestPermisions: ['email', 'user_about_me', 'profile', 'user_likes']
        }, function (err) {
            if (err) {
                //handling login error
            } else {
                //show alert
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
    }
});