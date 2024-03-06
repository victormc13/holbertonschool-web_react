interface Teacher {
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,

  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
  const firstLetterName = firstName.charAt(0).toUpperCase();
  return `${firstLetterName}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
