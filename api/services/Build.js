var schema = new Schema({
  title: {
    type: String,
    default: "",
    required: true
  },
  description: {
    type: String,
    default: "",
    required: true
  },
  banner: {
    type: String,
    default: "",
    required: true
  },
  mobilebanner: {
    type: String,
    default: "",
    required: true
  }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Build', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

  getAll: function (callback) {
    this.find({}).exec(function (err, found) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else if (found && found.length > 0) {
        Project.find({}).select('thumbimage projectname').exec(function (err, proj) {
          if (proj) {
            var data = {
              build: found,
              project: proj
            }

            callback(null, data);
          } else {
            callback(err, null);
          }
        });
      } else {
        callback(null, []);
      }
    });
  },
  getOne: function (data, callback) {
    this.findOne({
      "_id": data._id
    }).exec(function (err, found) {
      if (err) {
        console.log(err);
        callback(err, null);
      } else if (found && Object.keys(found).length > 0) {
        Project.find({}).select('thumbimage projectname').exec(function (err, proj) {
          if (proj) {
            var data = {
              build: found,
              project: proj
            }

            callback(null, data);
          } else {
            callback(err, null);
          }
        });
      } else {
        callback(null, {});
      }
    });
  },
  findLimited: function (data, callback) {
    var newreturns = {};
    newreturns.data = [];
    var check = new RegExp(data.search, "i");
    data.pagenumber = parseInt(data.pagenumber);
    data.pagesize = parseInt(data.pagesize);
    async.parallel([
        function (callback) {
          Build.count({
            name: {
              '$regex': check
            }
          }).exec(function (err, number) {
            if (err) {
              console.log(err);
              callback(err, null);
            } else if (number && number !== "") {
              newreturns.total = number;
              newreturns.totalpages = Math.ceil(number / data.pagesize);
              callback(null, newreturns);
            } else {
              callback(null, newreturns);
            }
          });
        },
        function (callback) {
          Build.find({
            name: {
              '$regex': check
            }
          }).skip(data.pagesize * (data.pagenumber - 1)).limit(data.pagesize).exec(function (err, data2) {
            if (err) {
              console.log(err);
              callback(err, null);
            } else if (data2 && data2.length > 0) {
              newreturns.data = data2;
              callback(null, newreturns);
            } else {
              callback(null, newreturns);
            }
          });
        }
      ],
      function (err, data4) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else if (data4) {
          callback(null, newreturns);
        } else {
          callback(null, newreturns);
        }
      });
  }
};
module.exports = _.assign(module.exports, exports, model);