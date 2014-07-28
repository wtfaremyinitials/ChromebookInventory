Chromebooks = new Meteor.Collection('Chromebooks');

if (Meteor.isClient) {
  Template.home.chromebooks = function () {
    return Chromebooks.find({});
  };

  Template.home.count = function() {
      return Chromebooks.find({}).count();
  };

  Template.home.events({
    'keydown #inputs': function (event) {
        if(event.keyCode !== 13)
            return;


        if(document.getElementById('mac').value == '') {
            document.getElementById('mac').focus();
        } else {
            if(document.getElementById('mac').value.length !== 12)
                return;
            if(document.getElementById('serial').value.length !== 8)
                return;

            Chromebooks.insert({
                serial: document.getElementById('serial').value,
                mac:    document.getElementById('mac').value
            })
            document.getElementById('serial').value = '';
            document.getElementById('mac').value = '';
            document.getElementById('serial').focus();
        }
    }
  });
}
