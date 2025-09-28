export interface Certification {
  id: number;
  name: string;
  organization: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  orgLogo: string;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  certifications: Certification[];
}

export const companies: Company[] = [
  {
    id: 2,
    name: "Microsoft",
    logo: "src/Microsoft.svg",
    certifications: [
      {
        id: 3,
        name: "Introduction to Computers and Operating Systems and Security",
        organization: "Microsoft",
        issuedDate: "June 2025",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/certificate/PJTOG4E6RCHJ",
        orgLogo: "src/Microsoft.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Meta",
    logo: "src/Meta.svg",
    certifications: [
      {
        id: 4,
        name: "Meta Front-End Developer Professional Certificate",
        organization: "Meta",
        issuedDate: "December 2024",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/specialization/certificate/7TKVA1W3JTCN",
        orgLogo: "src/Meta.svg",
      },
    ],
  },
  {
    id: 5,
    name: "Amazon",
    logo: "src/aws-svg-logo.png",
    certifications: [
      {
        id: 6,
        name: "AWS Certified Solutions Architect – Associate",
        organization: "Amazon",
        issuedDate: "May 2025",
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/certificate/YY1VWKP5TM2M",
        orgLogo: "src/aws-svg-logo.png",
      },
    ],
  },
  {
    id: 4,
    name: "IBM",
    logo: "src/Ibm-Logo.png",
    certifications: [
      {
        id: 5,
        name: "Hands-on Introduction to Linux Commands and Shell Scripting",
        organization: "IBM",
        issuedDate: "June 2025",
        credentialUrl:
          "https://coursera.org/share/0b6060a4f529bef98e79a377b5b7174a",
        orgLogo: "src/Ibm-Logo.png",
      },
    ],
  },
];
