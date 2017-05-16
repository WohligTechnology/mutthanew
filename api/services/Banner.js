var schema = new Schema({
    banner: {
        type: String,
        required: true,
        unique: true,
        excel: {
            name: "Banner"
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        excel: {
            name: "mobile"
        }
    },
    order: Number,
    page: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true
    },
    status: {
        type: String,
        default: 'Enabled'
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Banner', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAll: function (callback) {
        Banner.find({}).exec(function (err, data) {
            if (err) {
                callback(err, null);
            } else if (data) {
                callback(null, data);
            } else {
                callback({
                    message: {
                        data: "Invaid credentials!"
                    }
                });
            }
        });
    },

    getEnabledBannerByPage: function (data, callback) {
        if (!data || !data.name)
            callback({
                message: {
                    data: "Invalid parameters"
                }
            }, null);
        else {
            Banner.find({
                $and: [{
                    'page': data.name,
                }, {
                    'status': 'Enabled'
                }]
            }).exec(function (err, data) {
                if (err) {
                    callback(err, null);
                } else if (data) {
                    callback(null, data);
                } else {
                    callback({
                        message: {
                            data: "Invaid credentials!"
                        }
                    });
                }
            });
        }
    }
};
module.exports = _.assign(module.exports, exports, model);