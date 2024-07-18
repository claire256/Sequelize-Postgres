const { authentication, restrictTo } = require('../controller/authController');
const { createProject, getAllProject, getProjectById, UpdateProject, deleteProject } = require('../controller/projectController')

const router = require('express').Router()

router.route('/').post(authentication, restrictTo('1'), createProject);

router.route('/').get(authentication, restrictTo('1'), getAllProject);

router.route('/:id').get(authentication, restrictTo('1'), getProjectById);

router.route('/:id').patch(authentication,restrictTo('1'), UpdateProject);

router.route('/:id').delete(authentication, restrictTo('1'), deleteProject);


module.exports = router