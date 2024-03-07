namespace Subjects {
  export interface Teacher extends Subject.Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No availalbe teacher";
      }
    }
  }
}
