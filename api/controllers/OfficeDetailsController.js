module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getDetails: function (req, res) {
        OfficeDetails.getDetails(res.callback);
    }
};
module.exports = _.assign(module.exports, controller);
