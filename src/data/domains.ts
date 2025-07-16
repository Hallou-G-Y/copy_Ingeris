export interface Domain {
  id: string;
  title: string;
  imageUrl: string;
  linkUrl: string;
  description: string;
}

export const domains: Domain[] = [
  {
    id: 'commerce',
    title: 'Commerce',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    linkUrl: '/domains/commerce',
    description: 'Contrôle et certification pour les établissements commerciaux'
  },
  {
    id: 'esthetique',
    title: 'Esthétique',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    linkUrl: '/domains/esthetique',
    description: 'Contrôle et certification pour les instituts de beauté'
  },
  {
    id: 'industrie',
    title: 'Industrie',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    linkUrl: '/domains/industrie',
    description: 'Contrôle et certification pour les sites industriels'
  },
  {
    id: 'medical',
    title: 'Médical',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
    linkUrl: '/domains/medical',
    description: 'Contrôle et certification pour les établissements médicaux'
  },
  {
    id: 'essms',
    title: 'ESSMS',
    imageUrl: '/domains/essms.jpeg',
    linkUrl: '/domains/essms',
    description: 'Contrôle et certification pour les établissements sociaux et médico-sociaux'
  },
  {
    id: 'tertiaire',
    title: 'Tertiaire',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    linkUrl: '/domains/tertiaire',
    description: 'Contrôle et certification pour les bâtiments tertiaires'
  },
  {
    id: 'garage',
    title: 'Garage auto',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
    linkUrl: '/domains/garage',
    description: 'Contrôle et certification pour les garages automobiles'
  },
  {
    id: 'restauration',
    title: 'Restauration',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    linkUrl: '/domains/restauration',
    description: 'Contrôle et certification pour les établissements de restauration'
  },
  {
    id: 'hotellerie',
    title: 'Hôtellerie',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    linkUrl: '/domains/hotellerie',
    description: 'Contrôle et certification pour les établissements hôteliers'
  },
  {
    id: 'collectivites',
    title: 'Collectivités',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    linkUrl: '/domains/collectivites',
    description: 'Contrôle et certification pour les collectivités territoriales'
  }
]; 