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
    getOfficeDetails: function (callback) {
        OfficeDetails.findOne({}).exec(function (err, data) {
            if (err) {
                callback(err, null);
            } else if (data) {
                callback(null, data);
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