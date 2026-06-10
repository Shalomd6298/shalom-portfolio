// Single source of truth for site content — edit here, never in components.
export const profile = {
  name: "Shalom Daniel",
  role: "DevOps / Software Engineer",
  location: "Boston, MA",
  email: "shalomd498@gmail.com",
  tagline:
    "I build and run the platforms software teams ship on — Kubernetes, cloud infrastructure, CI/CD, and the observability to trust it all in production.",
  links: {
    github: "https://github.com/Shalomd6298",
    linkedin: "https://www.linkedin.com/in/shalom-daniel", // TODO: confirm handle
  },
  highlights: ["CKA — Certified Kubernetes Administrator", "MS CS @ Northeastern", "AWS · Azure · GCP"],
};

export const experience = [
  {
    company: "Proof (previously Notarize)",
    role: "DevOps Engineer Co-op",
    period: "Jan 2024 — Sept 2024",
    location: "Boston, USA",
    points: [
      "Optimized AWS infrastructure with Terraform & CDK — resolved 500+ deprecations and built a Groovy scanner that surfaces future ones as real-time Grafana alerts.",
      "Cut smoke-test execution time 30% by generating ignore-files that skip non-essential test paths.",
      "Built D.O.R.A. metrics tooling (Python/Groovy → Metabase) giving the org real delivery-performance insight.",
      "Led the migration from AWS access keys to IAM roles — tighter security, audit-ready governance.",
      "Linked test reporting into Azure Data Explorer with KQL analytics, unblocking QA bottlenecks.",
    ],
    tech: ["AWS", "Terraform", "CDK", "Groovy", "Grafana", "Python"],
  },
  {
    company: "Northeastern University",
    role: "Program & Lab Assistant",
    period: "Apr 2023 — Dec 2023",
    location: "Boston, USA",
    points: [
      "Supported 200+ students across Virtual Lab, MATLAB, and RDP environments.",
      "Automated software installs & environment setup with Shell/PowerShell, with published documentation.",
    ],
    tech: ["Shell", "PowerShell", "RDP"],
  },
  {
    company: "Johnson Controls",
    role: "Site Reliability Engineer",
    period: "May 2020 — Jul 2022",
    location: "Mumbai, India",
    points: [
      "Built CI/CD pipelines for monolith and microservice apps — Jenkins, SonarQube, JFrog, Consul, Vault, Docker, Kubernetes — to ISO/IEC 27001 compliance.",
      "Deployed centralized ELK logging/monitoring, cutting incident response times.",
      "Migrated Azure storage data across environments & regions via Jenkins + Azure CLI, halving manual effort.",
      "Carried 24/7 on-call for production reliability and availability.",
    ],
    tech: ["Jenkins", "Kubernetes", "Vault", "ELK", "Azure", "Docker"],
  },
];

export const projects = [
  {
    name: "GCP-Native Microservices Platform with AI-Powered Search",
    summary:
      "GKE-hosted microservices stack provisioned with Terraform, Helm, and Jenkins — Istio service mesh, TLS via Cert-Manager, ExternalDNS, and full observability (Prometheus, OpenTelemetry, Jaeger).",
    details: [
      "AI-powered semantic search over course reviews: GPT-4 + Pinecone + RAG, with Kafka batch-processing PDF ingestion.",
      "Secrets encrypted with Mozilla SOPS + GCP KMS.",
      "Custom Go-based Kubernetes operator automating database backups.",
    ],
    tech: ["GKE", "Terraform", "Helm", "Istio", "Go", "Kafka", "Pinecone", "OpenTelemetry"],
  },
  {
    name: "Scalable & Secure AWS Web App — CI/CD + Serverless",
    summary:
      "Two-tier Flask application on AWS, fully IaC'd with Terraform and shipped via GitHub Actions — RDS, KMS, Packer-built AMIs, EC2 auto-scaling behind an ALB, CloudWatch observability.",
    details: [
      "Serverless user-verification flow with Lambda, SNS, and SendGrid.",
      "DNS infrastructure on Route 53 across multiple subdomains.",
    ],
    tech: ["AWS", "Terraform", "GitHub Actions", "Packer", "Lambda", "Flask"],
  },
  {
    name: "This Website",
    summary:
      "Astro + Tailwind static site, containerized multi-arch (amd64/arm64) and served by Traefik from a 2-node k3s cluster I run at home — an HP mini-PC control plane and a Raspberry Pi worker.",
    details: [
      "Zero-JS static output, perfect Lighthouse scores by construction.",
      "CI/CD via GitHub Actions → GHCR → k3s.",
    ],
    tech: ["Astro", "Tailwind", "k3s", "Traefik", "Docker", "GitHub Actions"],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Go", "Bash", "Groovy", "Java", "JavaScript", "SQL"] },
  { group: "Containers & Orchestration", items: ["Kubernetes", "Docker", "Helm", "Istio"] },
  { group: "Infrastructure as Code", items: ["Terraform", "Packer", "CloudFormation", "ARM", "Ansible"] },
  { group: "CI / CD", items: ["Jenkins", "GitHub Actions", "AWS CodePipeline", "CodeBuild", "CodeDeploy"] },
  { group: "Observability", items: ["Prometheus", "Grafana", "OpenTelemetry", "Jaeger", "CloudWatch", "ELK"] },
  { group: "Cloud", items: ["AWS", "Azure", "GCP"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
];

export const education = [
  {
    school: "Northeastern University",
    degree: "MS, Computer Information Science",
    period: "2022 — 2025",
    note: "GPA 3.8 / 4.0",
  },
  {
    school: "Vishwakarma Institute of Technology",
    degree: "B.Tech, Electronics & Instrumentation",
    period: "2016 — 2020",
    note: "GPA 8.7 / 10",
  },
];

export const certifications = [{ name: "Certified Kubernetes Administrator (CKA)", org: "CNCF" }];
