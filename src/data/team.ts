export type TeamMember = {
  name: string;
  role: string;
  phone: string;
  email: string;
  isLead?: boolean;
  isDeputy?: boolean;
  imageUrl?: string;
};

export type Partner = {
  name: string;
  type: 'partner' | 'collaborator' | 'ally';
  description: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Obiokoye Chibueze Stella',
    role: 'Team Lead · Beadwork Artisan',
    phone: '08110445408',
    email: 'obiokoyechibueze@gmail.com',
    isLead: true,
    imageUrl: '/team/stella.jpg',
  },
  {
    name: 'Victor Ikechukwu Nwafor',
    role: 'Team Deputy · Millinery',
    phone: '09047921865',
    email: 'dixonsilverofficial@gmail.com',
    isDeputy: true,
    imageUrl: '/team/victor.jpg',
  },
  {
    name: 'Mgbabor Ugochukwu Cyrina',
    role: 'Crocheting',
    phone: '09122564908',
    email: 'Linamarcel288@gmail.com',
    imageUrl: '/team/cyrina.jpg',
  },
  {
    name: 'Ekwueme Richard Ikenna',
    role: 'Bead Making',
    phone: '08157017809',
    email: 'ekwuemeikennarich@gmail.com',
    imageUrl: '/team/ikenna.jpg',
  },
  {
    name: 'Onyeka Ifeoma Vera',
    role: 'Crocheting',
    phone: '09020773058',
    email: 'ifeomavera227@gmail.com',
    imageUrl: '/team/vera.jpg',
  },
  {
    name: 'Ezeagwula Adaeze Confidence',
    role: 'Soap Making · Millinery',
    phone: '09136633486',
    email: 'pearladaeze16@gmail.com',
    imageUrl: '/team/confidence.jpg',
  },
  {
    name: 'Ituma Virtuous Ogochukwu',
    role: 'Soap Making',
    phone: '08065043484',
    email: 'virtuousogochukwu@gmail.com',
    imageUrl: '/team/virtuous.jpg',
  },
];

export const PARTNERS: Partner[] = [
  {
    name: 'Ministry of Women Affairs, Ebonyi State',
    type: 'partner',
    description: 'Government partner providing institutional support and outreach.',
  },
  {
    name: 'Ebonyi State Vocational College, Abakaliki',
    type: 'partner',
    description: 'Provides accredited training facilities and instructors.',
  },
  {
    name: 'National Directorate of Employment',
    type: 'partner',
    description: 'Employment pathway and post-training referral support.',
  },
  {
    name: "Tory's Crochet",
    type: 'collaborator',
    description: 'Expert crocheting facilitator for participant training.',
  },
  {
    name: "Idinma's Handcraft",
    type: 'collaborator',
    description: 'Handcraft skills training for programme participants.',
  },
  {
    name: 'SMJ Beads',
    type: 'collaborator',
    description: 'Bead-making training and materials support.',
  },
  {
    name: 'Ekenyem Chioma',
    type: 'collaborator',
    description: 'Liquid soap making facilitator.',
  },
];

export const IMPACT_STATS = [
  { value: '30', label: 'Persons Trained' },
  { value: '25+', label: 'Now Selling Online' },
  { value: '4', label: 'Craft Disciplines' },
  { value: '100+', label: 'Community Members Reached' },
];
