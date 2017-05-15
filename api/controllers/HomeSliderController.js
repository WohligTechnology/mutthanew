module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getAllEnabled: function (req, res) {
        HomeSlider.getAllEnabled(res.callback);
    }
};
module.exports = _.assign(module.exports, controller);
