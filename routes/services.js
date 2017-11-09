const ceph = function(req, res) {
  res.json({success: true, isUp: true});
};

const rgw = function(req, res) {
  res.json({success: true, isUp: true});
};

const registry = function(req, res) {
  res.json({success: true, isUp: true});
};

const draft = function(req, res) {
  res.json({success: true, isUp: true});
};

var functions = {
    ceph: ceph,
    rgw: rgw,
    registry: registry,
    draft: draft,
};

module.exports = functions;
