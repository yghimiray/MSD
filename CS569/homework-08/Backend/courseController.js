const courseCollection = require('./course');
// const jwt = require('jsonwebtoken');

exports.createCourse = async (req, res, next) => {
    try {
        const course = await courseCollection(req.body).save()
        res.status(200).json(course);
    } catch (error) {
        next(error)
    }
}

exports.searchCourseById = async (req, res, next) => {
    try {
        const course_id = req.params.course_id;
        res.status(200).json(await courseCollection.findOne({ _id: course_id }))
    } catch (error) {
        next(error)
    }
}


exports.updateCourse = async (req, res, next) => {
    try {
        const course_id = req.params.course_id
        const course = req.body;
        res.status(200).json(await courseCollection.updateOne({ _id: course_id }, { $set: {'name':course.name,'code':course.code} }))
    } catch (error) {
        next(error)
    }
}



exports.searchAllCourses = async (req, res, next) => {
    try {
        res.status(200).json(await courseCollection.find())
    } catch (error) {
        next(error)
    }
}


exports.deleteCourse = async (req, res, next) => {
    try {
        const course_id = req.params.course_id;
        res.status(200).json(await courseCollection.deleteOne({ _id: course_id }))
    } catch (error) {
        next(error)
    }
}


//.............................................//

exports.addStudent = async (req, res, next) => {
    try {
        const course_id = req.params.course_id
        const student = req.body;
        res.status(200).json(await courseCollection.updateOne({ _id: course_id }, { 
            $push: {students:student} }))
    } catch (error) {
        next(error)
    }

}

exports.searchStudentById = async (req, res, next) => {
    try {
        const course_id = req.params.course_id;
        const student_id = req.params.student_id;
        res.status(200).json(await courseCollection.findOne({ _id: course_id },{students:{student_id:student_id}}))
    } catch (error) {
        next(error)
    }
}


exports.updateStudent = async (req, res, next) => {
    try {
        const course_id = req.params.course_id
        const student_id = req.params.student_id;
        const student = req.body;
        res.status(200).json(await courseCollection.updateOne({ _id: course_id, "students.student_id":student_id}, { $set: {"students.$.fullname": student.fullname} }))
    } catch (error) {
        next(error)
    }
}



exports.searchAllStudents = async (req, res, next) => {
    try {
        const course_id = req.params.course_id;
        const course = await courseCollection.findOne({ _id: course_id })
        res.status(200).json(course.students)
    } catch (error) {
        next(error)
    }
}


exports.deleteStudent = async (req, res, next) => {
    try {
        const course_id = req.params.course_id
        const student_id = req.params.student_id;
        res.status(200).json(await courseCollection.updateOne({ _id: course_id}, { $pull: {"students.student_id":student_id} }))
    } catch (error) {
        next(error)
    }
}
