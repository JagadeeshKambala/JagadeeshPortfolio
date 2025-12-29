import awsCCP from "../assets/certifications/aws-technical-essentials.png";
import awsSAA from "../assets/certifications/meta-frontend-developer.png";
import ga4 from "../assets/certifications/networking.png";
import salesforceAgentforce from "../assets/certifications/SalesforceSpecialist.png";

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  link: string;
  image: string;
}

export const certifications: Certification[] = [
  {
    title: "Salesforce Agentforce Specialist",
    issuer: "Salesforce",
    date: "Dec 2024",
    duration: "Credential",
    link: "",
    image: salesforceAgentforce,
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    duration: "Valid for 3 years",
    link: "",
    image: awsCCP,
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "Jan 2024",
    duration: "Valid for 3 years",
    link: "",
    image: awsSAA,
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    date: "Mar 2024",
    duration: "Credential",
    link: "",
    image: ga4,
  },
];
