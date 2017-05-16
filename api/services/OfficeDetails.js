var schema = new Schema({
    officeAddr: {
        type: String,
        default: ""
    },
    officeTel: {
        type: String,
        default: ""
    },
    officeFax: {
        type: String,
        default: ""
    },
    officeEmail: {
        type: String,
        default: ""
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('OfficeDetails', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getDetails: function (callback) {
        OfficeDetails.findOne({}).exec(function (err, data) {
            if (err) {
                callback(err, null);
            } else if (data) {
                Banner.getEnabledBannerByPage({
                    name: 'contact'
                }, function (err, banner) {
                    if (err) {
                        callback(err, null);
                    } else if (banner) {
                        var details = {
                            officeDetails: data,
                            banner: banner
                        }
                        callback(null, details);
                    } else {
                        callback({
                            message: {
                                data: "Invalid credentials!"
                            }
                        }, null);
                    }
                });
            } else {
                callback({
                    message: {
                        data: "Invalid credentials!"
                    }
                }, null);
            }
        })
    }
};
module.exports = _.assign(module.exports, exports, model);