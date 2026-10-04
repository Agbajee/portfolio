export const projects = [
  {
    number: '01',
    slug: 'gamified-short-form-video-backend',
    title: 'Swype — Short-Form Social Video Platform',
    stage: 'In Development',
    visualType: 'DEVHQ Product',
    summary: 'Developing Swype, a DEVHQ short-form social video application with a Flutter mobile client and Laravel backend, combining content discovery, social interactions, media processing, and wallet/reward functionality.',
    summarySecondary: 'The platform uses API-driven architecture, asynchronous processing, transactional safeguards, and cloud media delivery to support a responsive mobile-first experience.',
    tags: ['Flutter', 'Laravel', 'MySQL', 'REST APIs', 'AWS S3 / CDN'],
    metrics: [
      { value: 'App', label: 'Flutter Client' },
      { value: 'API', label: 'Laravel Backend' },
      { value: 'CDN', label: 'Media Delivery' }
    ],
    challenge: 'Connect content discovery and social interactions with media processing and wallet/reward workflows while validating account access and sensitive transactions.',
    solution: 'Developing a Flutter client connected to Laravel REST APIs, with queue-backed media processing, object storage, CDN delivery, and transaction-aware wallet services.',
    impact: [
      'Content feeds, search, comments, replies, and social interactions',
      'Account authentication, authorization, and request validation',
      'Wallet, reward, referral, and withdrawal workflows with payment/payout controls'
    ],
    architecture: [
      'Flutter mobile client connected to Laravel REST APIs',
      'Queue-backed video/image processing with AWS S3 object storage and CDN delivery',
      'Transaction-aware wallet services with validation, rate controls, and abuse-prevention safeguards',
      'MySQL query and feed/media delivery optimization'
    ]
  },
  {
    number: '02',
    slug: 'food-delivery-platform-api',
    title: 'Multi-Tenant Food Ordering & Delivery Platform',
    stage: 'Multi-Role Platform',
    visualType: 'Ordering & Delivery',
    summary: 'Developed a food ordering and delivery platform with customer, vendor/restaurant, rider, and administrator roles, supported by Laravel APIs and MySQL.',
    summarySecondary: 'Implemented order, payment, and delivery workflows with Monnify integration, responsive interfaces, and administrative dashboards.',
    tags: ['Laravel', 'MySQL', 'REST APIs', 'Monnify', 'Responsive UI'],
    metrics: [
      { value: '4', label: 'User Roles' },
      { value: 'API', label: 'Order Workflows' },
      { value: 'Pay', label: 'Monnify' }
    ],
    challenge: 'Support ordering and delivery across customers, restaurants, riders, and administrators with appropriate access boundaries and clear order states.',
    solution: 'Developed role-aware Laravel APIs, MySQL data models, payment integration, and responsive dashboards for ordering, delivery, and administration.',
    impact: [
      'Customer ordering and vendor/restaurant order management',
      'Payment workflows integrated with Monnify',
      'Delivery status tracking and administrative interfaces'
    ],
    architecture: [
      'Role-scoped API endpoints for customers, vendors, riders, and administrators',
      'Order-state transitions with request validation',
      'MySQL data models supporting orders, payments, delivery, and dashboards'
    ]
  },
  {
    number: '03',
    slug: 'authentication-and-security-systems',
    title: 'Authentication & Transaction Security',
    stage: 'Engineering Focus',
    visualType: 'Identity & Access',
    summary: 'Implemented Laravel Sanctum authentication, authorization, role-based access control, and OTP verification for web and mobile application workflows.',
    summarySecondary: 'Combined request validation and rate controls with idempotent processing and database transactions to protect sensitive operations and handle repeated transaction requests.',
    tags: ['Laravel', 'Sanctum', 'RBAC', 'MySQL', 'Idempotency'],
    metrics: [
      { value: 'OTP', label: 'User Checks' },
      { value: 'RBAC', label: 'Access Control' },
      { value: 'DB', label: 'Atomic Writes' }
    ],
    challenge: 'Validate user identity and permissions while handling sensitive operations and repeated transaction requests consistently.',
    solution: 'Implemented Sanctum authentication, role-based authorization, OTP verification, request validation, and transaction safeguards in Laravel applications.',
    impact: [
      'Authenticated access to protected application endpoints',
      'Role-based authorization and verification for sensitive operations',
      'Idempotent transaction handling for repeated requests'
    ],
    architecture: [
      'Laravel Sanctum authentication and role-based access checks',
      'OTP verification, request validation, and endpoint rate controls',
      'Database transactions and idempotent processing for transactional workflows'
    ]
  }
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
