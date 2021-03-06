var schema = new Schema({
    title: {
        type: String,
        required: true,
        excel: {
            name: "Title"
        }
    },
    overview: {
        type: String,
        required: true,
        default: ""
    },
    banner: {
        type: String,
        default: "",
        required: true
    },
    mobilebanner: {
        type: String,
        default: "",
        required: true
    },
    management: [{
        name: String,
        image: String,
        description: String,
        order: Number,
        designation: String,
        status: String
    }],
    mission: String,
    philosophy: String
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Know', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getFooterInfo: function (callback) {
        Know.findOne({}, {
            'overview': 1
        }).exec(function (err, know) {
            if (err) {
                callback(err, null);
            } else if (know) {
                Project.find({}, {
                    'projectname': 1
                }).exec(function (err, projects) {
                    var data = {};
                    if (err) {
                        callback(err, null);
                    } else if (projects) {
                        data.know = know;
                        data.projects = projects;
                        callback(null, data);
                    } else {
                        callback({
                            message: {
                                data: "Data not found"
                            }
                        }, null);
                    }
                })
            } else {
                callback({
                    message: {
                        data: "Data not found"
                    }
                }, null);
            }
        });
    },

    getAll: function (callback) {
        Know.find({}).exec(function (err, found) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else if (found && found.length > 0) {
                callback(null, found);
            } else {
                callback({
                    message: {
                        data: "Invalid Credentials!"
                    }
                }, null);
            }
        });
    },

    getOne: function (data, callback) {
        Know.findOne({
            "_id": data._id
        }).exec(function (err, found) {
            if (err) {
                console.log(err);
                callback(err, null);
            } else if (found && Object.keys(found).length > 0) {
                callback(null, found);
            } else {
                callback({
                    message: {
                        data: "Invalid Credentials!"
                    }
                }, null);
            }
        });
    },

    findLimited: function (data, callback) {
        var newreturns = {};
        newreturns.data = [];
        var check = new RegExp(data.search, "i");
        data.pagenumber = parseInt(data.pagenumber);
        data.pagesize = parseInt(data.pagesize);
        async.parallel([
                function (callback) {
                    Know.count({
                        name: {
                            '$regex': check
                        }
                    }).exec(function (err, number) {
                        if (err) {
                            console.log(err);
                            callback(err, null);
                        } else if (number && number !== "") {
                            newreturns.total = number;
                            newreturns.totalpages = Math.ceil(number / data.pagesize);
                            callback(null, newreturns);
                        } else {
                            callback(null, newreturns);
                        }
                    });
                },
                function (callback) {
                    Know.find({
                        name: {
                            '$regex': check
                        }
                    }).skip(data.pagesize * (data.pagenumber - 1)).limit(data.pagesize).exec(function (err, data2) {
                        if (err) {
                            console.log(err);
                            callback(err, null);
                        } else if (data2 && data2.length > 0) {
                            newreturns.data = data2;
                            callback(null, newreturns);
                        } else {
                            callback(null, newreturns);
                        }
                    });
                }
            ],
            function (err, data4) {
                if (err) {
                    console.log(err);
                    callback(err, null);
                } else if (data4) {
                    callback(null, newreturns);
                } else {
                    callback(null, newreturns);
                }
            });
    }
};
module.exports = _.assign(module.exports, exports, model);