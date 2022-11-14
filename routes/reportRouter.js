const express = require('express');
const Router = express.Router();
const ReportController = require('../controllers/reportController');

Router.get('/',ReportController.getAllReports);
Router.post('/',ReportController.addReport);
Router
    .route('/:reportId')
    .get(ReportController.getReportById)
    .delete(ReportController.deleteReport);

module.exports = Router;