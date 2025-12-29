import ProjectCard from "./ProjectCard";

import dataLakeImg from "./projectimages/DataLake.png";
import portfolioImg from "./projectimages/Portfolio.png";
import secureVPCImg from "./projectimages/SecureVPC.png";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-12 gap-4 auto-rows-fr">
      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="Multi-AZ AWS VPC Architecture"
        description="Production-grade AWS VPC architecture with secure networking, monitoring.
Focused on network isolation, least-privilege access, and end-to-end observability."
        link="https://github.com/JagadeeshKambala/SecureVPCArchitecture.git"
        tags={["VPC", "EC2", "RDS", "IAM", "Security"]}
        previewImage={secureVPCImg}
      />

      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="Jagadeesh Kambala — Portfolio"
        description="A thoughtfully crafted portfolio project demonstrating my technical skills, real-world projects, and the use of AI to elevate visual design and usability."
        link="https://github.com/JagadeeshKambala/MyPortfolio.git"
        tags={["React", "UI", "TypeScript", "TailwindCSS"]}
        previewImage={portfolioImg}
      />

      <ProjectCard
        className="col-span-12 md:col-span-4"
        title="Automated Serverless Data Lake & Analytics Platform"
        description="Designed and implemented a serverless data lake and analytics platform on AWS using S3, Lambda, Glue, Glue Data Catalog, Athena, and IAM."
        link="https://github.com/JagadeeshKambala/AutomatedServerlessDataLakeAnalyticsPlatform.git"
        tags={["EC2", "S3", "Lambda", "Glue", "Athena"]}
        previewImage={dataLakeImg}
      />
    </div>
  );
}
