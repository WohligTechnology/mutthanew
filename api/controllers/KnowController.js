module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getFooterInfo: function (req, res) {
        Know.getFooterInfo(res.callback);
    },

    getOne: function (req, res) {
        if (req.body)
            Know.getOne(req.body, res.callback);
        else
            res.json({
                message: {
                    data: "Invalid request!"
                }
            })
    },

    getAll: function (req, res) {
        Know.getAll(res.callback);
    },

    findLimited: function (req, res) {
        if (req.body) {
            if (req.body.pagenumber && req.body.pagenumber !== "" && req.body.pagesize && req.body.pagesize !== "") {
                Know.findLimited(req.body, res.callback);
            } else {
                res.json({
                    value: false,
                    data: "Please provide parameters"
                });
            }
        } else {
            res.json({
                value: false,
                data: "Invalid Request"
            });
        }
    }
};
module.exports = _.assign(module.exports, controller);
