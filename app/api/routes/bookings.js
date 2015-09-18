var express = require('express'),
    mongoose = require('mongoose'),
    needle = require('needle');
_ = require('lodash');

var jwt = require('jsonwebtoken');


module.exports = function(app) {
    app.route('/api/bookings').post(function(req, res) {
        var data = req.body;
        needle.post('public.api.hotels.ng/api/api.php?cmd=make_booking', data, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

    app.route('/api/countryList').get(function(req, res) {
        needle.get('public.api.hotels.ng/api/api.php?cmd=get_countries', function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

    app.route('/api/stateList').get(function(req, res) {
        needle.get('public.api.hotels.ng/api/api.php?cmd=get_all_states', function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });
    app.route('/api/cityList').get(function(req, res) {
        needle.get('public.api.hotels.ng/api/api.php?cmd=get_all_cities', function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

    app.route('/api/getAllHotels').get(function(req, res) {
        // var parameters= JSON.stringify({
        //   'statename': 'Lagos'
        // });

        needle.get('public.api.hotels.ng/api/api.php?cmd=get_all_hotels', function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });


    app.route('/api/getAllStateCities/:stateId').get(function(req, res) {
        var id = req.params.stateId;
     // public.api.hotels.ng/api/api.php?cmd=get_cities_by_state    get_all_cities
        var url = 'public.api.hotels.ng/api/api.php?cmd=get_cities_by_state&state_id=' + id;
        console.log(url, 'url');
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

      app.route('/api/hotelsInLagos').get(function(req, res) {
      
        var id = 25;
     
        var url = 'public.api.hotels.ng/api/api.php?cmd=get_cities_by_state&state_id=' + id;
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

     app.route('/api/hotelsInAbuja').get(function(req, res) {
      
        var id = 1;
     
        var url = 'public.api.hotels.ng/api/api.php?cmd=get_cities_by_state&state_id=' + id;
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

     app.route('/api/hotelsInCrossRivers').get(function(req, res) {
      
        var id = 11;
     
        var url = 'public.api.hotels.ng/api/api.php?cmd=get_cities_by_state&state_id=' + id;
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });

     app.route('/api/hotelsInPlateau').get(function(req, res) {
      
        var id = 32;
     
        var url = 'public.api.hotels.ng/api/api.php?cmd=get_cities_by_state&state_id=' + id;
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body);
                res.json({
                    data: responseObj
                });
            }
        });
    });


         //http://public.api.hotels.ng/api/api.php?cmd=get_hotel_details&hotel_id=99374
//for all hotels
    // app.route('/api/getHotelDetails').get(function(req, res) {
    //     needle.get('public.api.hotels.ng/api/api.php?cmd=get_hotel_details', function(error, response) {
    //         if (error) {
    //             res.send({
    //                 message: error
    //             });
    //         }
    //         if (!error && response.statusCode == 200) {
    //             var responseObj = JSON.parse(response.body);
    //             res.json({
    //                 data: responseObj
    //             });
    //         }
    //     });
    // });


    //for hotels in a state 
   
      app.route('/api/getHotelDetails/:statename').get(function(req, res) {

          var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': statename});
                res.json({
                    data: obj
                });

            }
        });
    });


     app.route('/api/getHotelDetails/Lagos').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Lagos'});
                res.json({
                    data: obj
                });

            }
        });
    });

      app.route('/api/getHotelDetails/Abuja').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Abuja'});
                res.json({
                    data: obj
                });

            }
        });
    });


      app.route('/api/getHotelDetails/Oyo').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Oyo'});
                res.json({
                    data: obj
                });

            }
        });
    });

       app.route('/api/getHotelDetails/CrossRiver').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Cross River'});
                res.json({
                    data: obj
                });

            }
        });
    });

        app.route('/api/getHotelDetails/Kano').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Kano'});
                res.json({
                    data: obj
                });

            }
        });
    });


         app.route('/api/getHotelDetails/Kaduna').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Kaduna'});
                res.json({
                    data: obj
                });

            }
        });
    });


//no ogun state
    //  app.route('/api/getHotelDetails/Ogun').get(function(req, res) {

    //       // var statename = req.params.statename;
    //        var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
    //     needle.get(url, function(error, response) {
    //         if (error) {
    //             res.send({
    //                 message: error
    //             });
    //         }
    //         if (!error && response.statusCode == 200) {
    //             var responseObj = JSON.parse(response.body).data;
    //             var obj = _.findWhere(responseObj, { 'statename': 'Ogun'});
    //             res.json({
    //                 data: obj
    //             });

    //         }
    //     });
    // });

      app.route('/api/getHotelDetails/Plateau').get(function(req, res) {

          // var statename = req.params.statename;
           var url = 'public.api.hotels.ng/api/api.php?cmd=get_all_hotels';
        needle.get(url, function(error, response) {
            if (error) {
                res.send({
                    message: error
                });
            }
            if (!error && response.statusCode == 200) {
                var responseObj = JSON.parse(response.body).data;
                var obj = _.findWhere(responseObj, { 'statename': 'Plateau'});
                res.json({
                    data: obj
                });

            }
        });
    });
     //get hotels in a city
     //I may have to query get all hotels end endpoint
     //
     //pick a single one
     //
     //http://public.api.hotels.ng/api/api.php?cmd=get_hotel_details&hotel_id=99374
     //
     
     //then book
     //search by name
};