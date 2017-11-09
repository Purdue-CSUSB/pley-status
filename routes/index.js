var router      = require('express').Router();

/* Services */
const services = require('./services');
// Rook/Ceph
router.get('/services/ceph', services.ceph);
// ceph rgw (s3 api)
router.get('/services/rgw', services.rgw);
// Cluster registry
router.get('/services/registry', services.registry);
// Draft
router.get('/services/draft', services.draft);

module.exports = router;
