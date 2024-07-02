

export type UserName ={
    firstName: string;
    middleName: string;
    lastName: string;
};
export type Gurdian ={
    fatherName: string;
    fatherOccopation: string;
    fatherContact: string;
    motherName: string;
    motherOccopation: string;
    motherContact: string;
}
export type LocalGurdian ={
    name: string;
    occopations: string;
    contactNumber: string;
    address: string;
}

export type Student = {
    id: string;
    name: UserName;
    gender: "male" | "female";
    dateOfBirth?: string;
    email: string;
    contactNumber: string;
    emargencyNumber: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAdress: string;
    permanentAdress: string;
    guardian: Gurdian;
    localGurdian: LocalGurdian;
    profileImg?: string;
    isActive?: "active" | "inactive" 
  }