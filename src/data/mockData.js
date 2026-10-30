export const schemes = [
  {
    id: 'pm-kisan',
    name: 'PM Kisan Samman Nidhi',
    department: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture',
    eligibility: { occupation: ['Farmer'], incomeLimit: 200000, rural: true },
    benefits: '₹6,000 per year in three equal installments directly into bank accounts.',
    description: 'A central sector scheme with 100% funding from the Government of India to provide income support to all landholding farmers families.',
    deadline: '2026-12-31',
    documents: ['Aadhaar Card', 'Farmer Certificate', 'Land Records', 'Bank Passbook'],
    matchScore: 95
  },
  {
    id: 'ayushman-bharat',
    name: 'Ayushman Bharat (PM-JAY)',
    department: 'Ministry of Health and Family Welfare',
    category: 'Health',
    eligibility: { incomeLimit: 120000, caste: ['SC', 'ST', 'OBC', 'General'] },
    benefits: 'Health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.',
    description: 'The world\'s largest health insurance/assurance scheme fully financed by the government.',
    deadline: 'Ongoing',
    documents: ['Aadhaar Card', 'Ration Card', 'Income Certificate'],
    matchScore: 88
  },
  {
    id: 'national-scholarship',
    name: 'National Scholarship Portal (NSP)',
    department: 'Ministry of Education',
    category: 'Education',
    eligibility: { isStudent: true, incomeLimit: 250000 },
    benefits: 'Financial assistance to meritorious students from poor families to meet a part of their day-to-day expenses.',
    description: 'A dedicated online portal for various scholarship schemes of Central and State Governments.',
    deadline: '2026-10-15',
    documents: ['Aadhaar Card', 'Educational Certificate', 'Income Certificate', 'Community Certificate'],
    matchScore: 92
  },
  {
    id: 'pm-ujjwala',
    name: 'PM Ujjwala Yojana',
    department: 'Ministry of Petroleum and Natural Gas',
    category: 'Women Welfare',
    eligibility: { gender: ['Female'], incomeLimit: 100000 },
    benefits: 'LPG connection to women from Below Poverty Line (BPL) households.',
    description: 'Ensuring clean cooking fuel for everyone, specifically targeting women in rural areas.',
    deadline: '2026-08-30',
    documents: ['Aadhaar Card', 'Ration Card', 'BPL Certificate'],
    matchScore: 75
  },
  {
    id: 'mudra-loan',
    name: 'Pradhan Mantri Mudra Yojana',
    department: 'Ministry of Finance',
    category: 'Employment',
    eligibility: { occupation: ['Self Employed', 'Labourer', 'Weaver'] },
    benefits: 'Loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises.',
    description: 'Funding the unfunded - providing credit for business growth and job creation.',
    deadline: 'Ongoing',
    documents: ['Aadhaar Card', 'PAN Card', 'Business Plan', 'Bank Statement'],
    matchScore: 82
  },
  {
    id: 'pmay',
    name: 'Pradhan Mantri Awas Yojana (PMAY)',
    department: 'Ministry of Housing and Urban Affairs',
    category: 'Housing',
    eligibility: { incomeLimit: 300000 },
    benefits: 'Financial assistance up to ₹2.67 Lakh for construction of pucca houses.',
    description: 'Housing for All mission to provide affordable housing to the urban and rural poor by 2026.',
    deadline: '2026-09-30',
    documents: ['Aadhaar Card', 'Income Certificate', 'Land Records', 'Bank Passbook'],
    matchScore: 78
  },
  {
    id: 'widow-pension',
    name: 'Widow Pension Scheme',
    department: 'Ministry of Social Justice',
    category: 'Women Welfare',
    eligibility: { gender: ['Female'], incomeLimit: 150000 },
    benefits: '₹500 - ₹1,500 monthly pension for widows.',
    description: 'Financial support to destitute widows to help them maintain a basic standard of living.',
    deadline: 'Ongoing',
    documents: ['Aadhaar Card', 'Death Certificate of Husband', 'Income Certificate', 'Bank Passbook'],
    matchScore: 70
  },
  {
    id: 'old-age-pension',
    name: 'Old Age Pension Scheme',
    department: 'Ministry of Social Justice',
    category: 'Senior Citizen',
    eligibility: { incomeLimit: 150000 },
    benefits: '₹200 - ₹500 monthly pension for senior citizens above 60 years.',
    description: 'Under the National Social Assistance Programme (NSAP) providing pension to elderly citizens.',
    deadline: 'Ongoing',
    documents: ['Aadhaar Card', 'Age Proof', 'Income Certificate', 'Bank Passbook'],
    matchScore: 85
  },
  {
    id: 'skill-india',
    name: 'Skill India Mission',
    department: 'Ministry of Skill Development',
    category: 'Employment',
    eligibility: { incomeLimit: 300000 },
    benefits: 'Free skill training, certification, and placement assistance.',
    description: 'Train Indian youth with industry-relevant skills to enhance their employability and entrepreneurship.',
    deadline: '2026-11-30',
    documents: ['Aadhaar Card', 'Educational Certificate', 'Bank Passbook'],
    matchScore: 80
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma Yojana',
    department: 'Ministry of MSME',
    category: 'Employment',
    eligibility: { occupation: ['Weaver', 'Labourer', 'Self Employed'] },
    benefits: 'Collateral-free credit up to ₹3 Lakh, skill training, and toolkit incentive.',
    description: 'Supporting traditional artisans and craftspeople working with hands and tools.',
    deadline: '2026-07-31',
    documents: ['Aadhaar Card', 'Community Certificate', 'Artisan ID', 'Bank Passbook'],
    matchScore: 72
  },
  {
    id: 'state-farmer-welfare',
    name: 'State Farmer Welfare Scheme',
    department: 'State Agriculture Department',
    category: 'Agriculture',
    eligibility: { occupation: ['Farmer'], rural: true },
    benefits: 'Subsidized seeds, fertilizers, and equipment loans for small farmers.',
    description: 'State-level scheme to complement central schemes and boost agricultural productivity.',
    deadline: '2026-06-30',
    documents: ['Aadhaar Card', 'Farmer Certificate', 'Land Records'],
    matchScore: 90
  },
  {
    id: 'disability-pension',
    name: 'Disability Pension Scheme',
    department: 'Ministry of Social Justice',
    category: 'Health',
    eligibility: { incomeLimit: 200000 },
    benefits: '₹300 - ₹1,000 monthly pension for persons with disabilities.',
    description: 'Monthly pension for differently-abled individuals to support their day-to-day needs.',
    deadline: 'Ongoing',
    documents: ['Aadhaar Card', 'Disability Certificate', 'Income Certificate', 'Bank Passbook'],
    matchScore: 68
  },
];

export const offices = [
  { id: 1, name: 'District Collector Office', type: 'District Collector Office', address: 'Civil Lines, District HQ, Coimbatore', contact: '+91 0422 2301200', distance: '2.5 km', lat: 11.0168, lng: 76.9558 },
  { id: 2, name: 'Taluk Revenue Office', type: 'Taluk Office', address: 'Main Road, RS Puram, Coimbatore', contact: '+91 0422 2541000', distance: '1.2 km', lat: 11.0050, lng: 76.9480 },
  { id: 3, name: 'Common Service Center (CSC)', type: 'CSC Center', address: 'Market Square, Ward 5, Ganapathy', contact: '+91 9876543210', distance: '0.5 km', lat: 11.0280, lng: 76.9600 },
  { id: 4, name: 'District Agriculture Office', type: 'Agriculture Office', address: 'Agriculture Complex, Avinashi Road', contact: '+91 0422 2445500', distance: '3.8 km', lat: 11.0250, lng: 76.9800 },
  { id: 5, name: 'Social Welfare Department', type: 'Social Welfare Office', address: 'Collectorate Complex, Block A', contact: '+91 0422 2300300', distance: '2.7 km', lat: 11.0170, lng: 76.9550 },
  { id: 6, name: 'Revenue Department Office', type: 'Revenue Department Office', address: 'Town Hall Road, Coimbatore', contact: '+91 0422 2390100', distance: '1.8 km', lat: 11.0010, lng: 76.9620 },
];

export const officers = [
  { id: 1, name: 'Dr. Rajesh Kumar', designation: 'Nodal Officer (Agriculture)', department: 'Agriculture', phone: '+91 9988776655', office: 'District Agriculture Office' },
  { id: 2, name: 'Ms. Priya Sharma', designation: 'Social Welfare Officer', department: 'Social Welfare', phone: '+91 8877665544', office: 'Collectorate Complex' },
  { id: 3, name: 'Mr. Suresh Babu', designation: 'Education Officer', department: 'Education', phone: '+91 7766554433', office: 'District Education Office' },
  { id: 4, name: 'Dr. Lakshmi Narayanan', designation: 'Chief Medical Officer', department: 'Health', phone: '+91 6655443322', office: 'District Health Centre' },
  { id: 5, name: 'Mr. Venkatesh Raman', designation: 'Revenue Inspector', department: 'Revenue', phone: '+91 5544332211', office: 'Sub Collector Office' },
  { id: 6, name: 'Ms. Kavitha Devi', designation: 'Employment Officer', department: 'Employment', phone: '+91 4433221100', office: 'District Employment Exchange' },
];

export const demoUser = {
  name: 'Ramesh Kumar',
  age: 42,
  gender: 'Male',
  maritalStatus: 'Married',
  mobile: '+91 98765 43210',
  aadhaar: '**** **** 9012',
  caste: 'OBC',
  state: 'Tamil Nadu',
  district: 'Coimbatore',
  village: 'Sulur',
  isRural: true,
  income: 85000,
  occupation: 'Farmer',
  isDifferentlyAbled: false,
  disabilityPercentage: 0,
  qualification: 'Higher Secondary',
};

export const familyMembers = [
  { id: 1, name: 'Sita Devi', age: 38, gender: 'Female', relationship: 'Spouse', occupation: 'Self Employed', income: 30000, caste: 'OBC', isRural: true, isDifferentlyAbled: false, isStudent: false },
  { id: 2, name: 'Aruna', age: 19, gender: 'Female', relationship: 'Daughter', occupation: 'Student', income: 0, caste: 'OBC', isRural: true, isDifferentlyAbled: false, isStudent: true },
  { id: 3, name: 'Rahul', age: 14, gender: 'Male', relationship: 'Son', occupation: 'Student', income: 0, caste: 'OBC', isRural: true, isDifferentlyAbled: false, isStudent: true },
];
