// "Services I own" — one entry per product. Shown as tabs.
export interface Layer {
  layer: string;
  what: string;
}

export interface Service {
  id: string;
  name: string;
  kind: string;
  since: string;
  summary: string;
  role: string;
  layers: Layer[];
}

export const services: Service[] = [
  {
    id: 'sparrowpay',
    name: 'SparrowPay',
    kind: 'payment platform · production',
    since: 'Oct 2025',
    summary:
      "SparrowPay is SurveySparrow's payment platform. I built its infrastructure from scratch and run the whole application in production: every release, every config change, every incident.",
    role: 'Payments leave no room for drift, open access or surprise downtime, so every layer is defined in code, reviewed and recoverable.',
    layers: [
      { layer: 'Application', what: 'Run the SparrowPay services in production: deployments, configuration, scaling, rollbacks and release coordination.' },
      { layer: 'Delivery', what: 'CI/CD pipelines and GitOps releases, so every change to the platform is versioned and reversible.' },
      { layer: 'Platform', what: 'Kubernetes cluster, isolated network and the access controls that payment workloads need.' },
      { layer: 'Data', what: 'The payment database: backups, scaling and performance tuning.' },
      { layer: 'Security', what: 'Least-privilege access and managed secrets for payment services.' },
      { layer: 'Reliability', what: 'Monitoring, incident response and root-cause analysis when something goes wrong.' },
    ],
  },
  {
    id: 'sparrowgenie',
    name: 'SparrowGenie',
    kind: 'ai product · production',
    since: 'Oct 2025',
    summary:
      "SparrowGenie is SurveySparrow's AI product. I built the complete platform it runs on and operate the application end to end, including a heavy data layer of search, analytics and caching.",
    role: 'One owner from network to database: when SparrowGenie is slow or down, the trail leads to me, and I fix it.',
    layers: [
      { layer: 'Application', what: 'Deploy and operate SparrowGenie services: releases, configuration, scaling and production troubleshooting.' },
      { layer: 'Delivery', what: 'GitOps releases through Argo CD and CI pipelines for every service.' },
      { layer: 'Platform', what: 'Network, Kubernetes cluster and access, all built as code.' },
      { layer: 'Search', what: 'OpenSearch: provisioning, scaling and tuning.' },
      { layer: 'Analytics', what: 'ClickHouse: provisioning, backups and query performance.' },
      { layer: 'Cache & DB', what: 'Redis and RDS: availability, backups and scaling.' },
      { layer: 'Reliability', what: 'Monitoring, alerting, log analysis and root-cause analysis.' },
    ],
  },
  {
    id: 'sparrowdesk',
    name: 'SparrowDesk',
    kind: 'support product · infra & tooling',
    since: '2025',
    summary:
      "Infrastructure and deployment layers for SparrowDesk's CSAT and Help Center, plus internal tooling that keeps customer issues moving.",
    role: 'Built internal debugging tools that help customer-facing teams investigate issues faster, without waiting on engineering.',
    layers: [
      { layer: 'Deployments', what: 'Deployment layers for CSAT and Help Center.' },
      { layer: 'Config', what: 'Standardised Kustomize manifests across environments.' },
      { layer: 'Tooling', what: 'Internal debugging tools for customer-facing teams.' },
    ],
  },
];
