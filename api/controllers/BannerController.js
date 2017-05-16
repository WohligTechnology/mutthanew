module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getEnabledBannerByPage: function (req, res) {
        if (req.body)
            Banner.getEnabledBannerByPage(req.body, res.callback);
        else
            res.json({
                value: false,
                data: "Invalid request"
            })
    }
};
module.exports = _.assign(module.exports, controller);
