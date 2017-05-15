module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    getOne: function (req, res) {
        Client.getOne(res.callback);
    },

    getAll: function (req, res) {
        Client.getAll(res.callback);
    },

    findLimited: function (req, res) {
        if (req.body) {
            if (req.body.pagenumber && req.body.pagenumber !== "" && req.body.pagesize && req.body.pagesize !== "") {
                Client.findLimited(req.body, res.callback);
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
