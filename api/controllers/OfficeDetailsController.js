module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getOfficeDetails: function (req, res) {
        OfficeDetails.getOfficeDetails(res.callback);
    }
};
module.exports = _.assign(module.exports, controller);
