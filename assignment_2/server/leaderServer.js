var mongoose = require('mongoose'),
    assert = require('assert');

var Leaderships = require('../models/leadership');

// Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new dish
    Leaderships.create({
        name: "Peter Pan",
        image: "images/alberto.png",
        designation: "Chief Epicurious Officer",
        abbr: "CEO",
        description: "Our CEO, Peter, . . ."
    }, function (err, leadership) {
        if (err) throw err;
        console.log('leadership created!');
        console.log(leadership);

        var id = leadership._id;

        // get all the dishes
        setTimeout(function () {
            Leaderships.findByIdAndUpdate(id, {
                    $set: {
                        description: 'Updated Test'
                    }
                }, {
                    new: true
                })
                .exec(function (err, leadership) {
                    if (err) throw err;
                    console.log('Updated leadership!');
                    console.log(leadership);

                    db.collection('leaderships').drop(function () {
                        db.close();
                    });

                    // promotion.save(function (err, promotion) {
                    //     console.log('Updated Comments!');
                    //     console.log(promotion);
                    //
                    //     db.collection('promotions').drop(function () {
                    //         db.close();
                    //     });
                    // });
                });
        }, 3000);
    });
});
