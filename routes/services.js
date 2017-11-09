const all = function(req, res) {
  res.json({success: true, isUp: true, message: 'Ceph is experiencing issues'});
};

const ceph = function(req, res) {
  res.json({success: true, isUp: true, message: 'Kubernetes pod is down'});
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
    all: all,
    ceph: ceph,
    rgw: rgw,
    registry: registry,
    draft: draft,
};

module.exports = functions;
