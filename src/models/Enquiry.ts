export interface IEnquiry {
  _id?: string;
  name: string;
  email: string;
  company?: string;
  budget: string;
  service: string;
  message: string;
  status: "NEW" | "READ" | "REPLIED" | "ARCHIVED";
  createdAt: string;
}
