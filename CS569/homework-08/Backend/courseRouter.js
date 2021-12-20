const express = require('express');
const router = express.Router();
const courseController = require('./courseController');

router.post('/',courseController.createCourse);
router.get('/',courseController.searchAllCourses)
router.get('/:course_id',courseController.searchCourseById)
router.put('/:course_id',courseController.updateCourse)
router.delete('/:course_id',courseController.deleteCourse)
router.get('/:course_id/students',courseController.searchAllStudents)
router.post('/:course_id/students',courseController.addStudent)
router.get('/:course_id/students/:student_id',courseController.searchStudentById)
router.put('/:course_id/students/:student_id',courseController.updateStudent)
router.delete('/:course_id/students/:student_id',courseController.deleteStudent)



module.exports = router;