var schema = new Schema({
    image: {
        type: String,
        required: true,
        unique: true,
        excel: {
            name: "Image"
        }
    },
    order: Number,
    status: {
        type: String,
        default: "Enabled"
    },
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('HomeSlider', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAllEnabled: function (callback) {
        HomeSlider.find({
            status: 'Enabled'
        }).exec(function (err, sliderImages) {
            if (err) {
                callback(err, null);
            } else if (sliderImages) {
                callback(null, sliderImages);
            } else {
                callback({
                    message: {
                        data: "Invalid credentials!"
                    }
                }, null);
            }
        });
    }
};
module.exports = _.assign(module.exports, exports, model);