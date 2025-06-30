export interface QuestionType {
  typeid: number;
  typename: string;
  shortcode: string;
  positive: string;
  nagetive: string;
  partial: string;
}

export interface StdCourse {
  name: string;
  examoreder: number;
  icon: string;
  examid: number;
  label: string;
  questiontype: QuestionType[];
}

export interface Student {
  _id: string;
  stdName: string;
  stdEmail: string;
  stdMobileNo: string;
  stdPhoto: string;
  stdStatus: string;
  stdCity: string;
  stdYear: string;
  stdCampus: string;
  stdSection: string;
  stdSchool: string;
  stdInst: number;
  stdCourse: StdCourse[];
  stdAbout: string;
  stdSuc: string;
  parentName: string;
  admissionYear: string;
  premiumMember: boolean;
  createdAt: string;
  updatedAt: string;
  stdQualification: string;
}
