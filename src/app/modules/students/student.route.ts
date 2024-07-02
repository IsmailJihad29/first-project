import express from 'express';
import { StudentController } from './student.controller';


const router = express.Router();

// this route will call controller functions
router.post('/create-student', StudentController.createStudent)

// get sturents info route

router.get('/', StudentController.getAllStudents)

export const StudentRoutes = router