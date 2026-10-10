// Experience, newest first. The first entry is tagged LATEST.
export const changelog = [
  {
    version: 'v2.0',
    dates: 'Oct 2025 — present',
    title: 'DevOps Engineer · SurveySparrow',
    body: 'Took full ownership of SparrowPay and SparrowGenie in production. Moved Kubernetes releases to GitOps with Argo CD, upgraded clusters blue-green across data centers, brought HashiCorp Vault into a live cluster, upgraded Jenkins pipelines, and handled incident investigation and root-cause analysis.',
  },
  {
    version: 'v1.0',
    dates: 'Jul 2024 — Sep 2025',
    title: 'System Engineer · Rheo AI',
    body: 'Built GitHub Actions pipelines from Dev to Prod with deployment gates and security checks, Grafana and CloudWatch dashboards for health and cost, automated S3 backups, and Kubernetes resources with RBAC for video-processing workloads.',
  },
  {
    version: 'v0.1',
    dates: '2021 — 2025',
    title: 'B.E., Bannari Amman Institute of Technology',
    body: 'CGPA 9.1 · AWS Certified Cloud Practitioner (2024)',
  },
];

// Toolchain, shown as a lock file.
export const dependencies: [string, string][] = [
  ['cloud', 'aws [eks, vpc, rds, ecr, iam, s3, cloudwatch]'],
  ['iac', 'terraform'],
  ['runtime', 'kubernetes, docker, helm, kustomize'],
  ['delivery', 'argo-cd, jenkins, github-actions'],
  ['data', 'rds, clickhouse, redis, opensearch'],
  ['observe', 'prometheus, grafana, opensearch, cloudwatch'],
  ['secrets', 'hashicorp-vault'],
  ['scripting', 'bash, python'],
];
