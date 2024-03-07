namespace Subjects {
  export interface Teacher extends Subjects.Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
