namespace Subjects {
  export interface Teacher extends Subjects.Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher for React";
      }
    }
  }
}
