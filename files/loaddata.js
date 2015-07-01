Meteor.startup(function() {
  if (Customers.find().count() === 0) {
    var data = [
      {"name":"Essie Vaill","phone":"907-345-0962","email":"essie@vaill.com","note":"http://www.essievaill.com","active":true},
      {"name":"Cruz Roudabush","phone":"602-252-4827","email":"cruz@roudabush.com","note":"http://www.cruzroudabush.com","active":true},
      {"name":"Billie Tinnes","phone":"212-889-5775","email":"billie@tinnes.com","note":"http://www.billietinnes.com","active":true},
      {"name":"Rosemarie Fifield","phone":"808-836-8966","email":"rosemarie@fifield.com","note":"http://www.rosemariefifield.com","active":true},
      {"name":"Bernard Laboy","phone":"815-467-0487","email":"bernard@laboy.com","note":"http://www.bernardlaboy.com","active":true},
      {"name":"Sue Haakinson","phone":"602-953-2753","email":"sue@haakinson.com","note":"http://www.suehaakinson.com","active":true},
      {"name":"Billie Tinnes","phone":"212-889-5775","email":"billie@tinnes.com","note":"http://www.billietinnes.com","active":true},
      {"name":"Rosie Fifi","phone":"808-836-8966","email":"rosie@fifi.com","note":"http://www.rosemariefifi.com","active":false},
      {"name":"Bernard Lab","phone":"815-467-0487","email":"bernard@lab.com","note":"http://www.bernardlab.com","active":false},
      {"name":"Sue Haakin","phone":"602-953-2753","email":"sue@haakin.com","note":"http://www.suehaakin.com","active":false},
      {"name":"Val Pou","phone":"610-395-8743","email":"val@pou.com","note":"http://www.valpou.com","active":false},
      {"name":"Lasy Hasty","phone":"626-960-6738","email":"lasy@hasty.com","note":"http://www.lasyhasty.com","active":false},
    ];

    _.each(data, function(item) {
       Customers.insert(item);

    });
  }
});
