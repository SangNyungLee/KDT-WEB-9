interface Stundent {
  name: string;
  grade: number;
  isPassed: boolean;
}

const studentName: Stundent = {
  name: "gildong",
  grade: 2,
  isPassed: false,
};

/* --------------------------- */
type Gender = "female" | "male" | "boy" | "girl";
const gender: Gender = "boy";
