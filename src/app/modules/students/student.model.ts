import { Schema, model } from "mongoose";
import { Gurdian, LocalGurdian, Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccopation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccopation: { type: String, required: true },
  motherContact: { type: String, required: true },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occopations: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

// students schema 

const studentSchema = new Schema<Student>({
  id: { type: String, required: true },
  name: { userNameSchema },
  gender: ["female", "male"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emargencyNumber: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAdress: { type: String, required: true },
  permanentAdress: { type: String, required: true },
  guardian: { gurdianSchema },
  localGurdian: { localGurdianSchema },
  profileImg: { type: String },
  isActive: ["active", "inactive"],
});

// create a model

export const StudentModel = model<Student>('Student', studentSchema)