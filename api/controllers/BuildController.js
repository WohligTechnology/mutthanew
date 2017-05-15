module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {

    getOne: function (req, res) {
        if (req.body) {
            Build.getOne(req.body, res.callback);
        } else {
            res.json({
                message: {
                    data: "Invalid request!"
                }
            })
        }
    },

    getAll: function (req, res) {
        Build.getAll(res.callback);
    },

    findLimited: function (req, res) {
        if (req.body) {
            if (req.body.pagenumber && req.body.pagenumber !== "" && req.body.pagesize && req.body.pagesize !== "") {
                Build.findLimited(req.body, res.callback);
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
