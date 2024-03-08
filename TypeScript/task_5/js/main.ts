// Define interfaces with brand property
interface MajorCredits {
  credits: number;
  readonly brand: "MajorCredits"; // Brand property for identification
}

interface MinorCredits {
  credits: number;
  readonly brand: "MinorCredits"; // Brand property for identification
}

// Functions to sum credits with brand specific return types
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MajorCredits" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "MinorCredits" };
}

