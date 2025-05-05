const express = require('express');
const router = express.Router();
const appController = require('../controllers/applicationController');

router.post('/', appController.submitApplication);
router.get('/:id', appController.getApplicationById);
router.get('/user/:userId', appController.getApplicationsByUser);
router.get('/job/:jobId', appController.getApplicationsByJob);
router.delete('/:id', appController.deleteApplication);

module.exports = router;
