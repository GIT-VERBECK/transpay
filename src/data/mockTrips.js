export const MOCK_TRIPS = [
  {
    id: 't1',
    departLabel: 'Départ',
    depart: 'Rond-Point BDGL',
    arriveeLabel: 'Arrivée',
    arrivee: 'Birere, Goma',
    prix: 500,
    prixDevise: 'FC',
    duree: '12 min',
    places: '4 places',
    actionLabel: 'Réserver',
  },
  {
    id: 't2',
    departLabel: 'Départ',
    depart: 'Himbi',
    arriveeLabel: 'Arrivée',
    arrivee: 'Majengo',
    prix: 300,
    prixDevise: 'FC',
    duree: '8 min',
    places: '6 places',
    actionLabel: 'Réserver',
  },
  {
    id: 't3',
    departLabel: 'Départ',
    depart: 'Frontière Grande Barrière',
    arriveeLabel: 'Arrivée',
    arrivee: 'Lac Vert',
    prix: 800,
    prixDevise: 'FC',
    duree: '25 min',
    places: '3 places',
    actionLabel: 'Réserver',
  },
];

export function getTripById(id) {
  return MOCK_TRIPS.find((t) => t.id === id) ?? MOCK_TRIPS[0];
}
