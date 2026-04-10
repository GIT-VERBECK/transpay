/** Données tickets — écran Figma « Ticket Digital Jaune avec QR Perso » (2:1079) */

export const TICKET_QR_ASSET =
  'https://www.figma.com/api/mcp/asset/100ff9a6-e0a9-47a5-ae29-3e1948946c06';

export const MOCK_TICKETS_DETAIL = {
  tk1: {
    id: 'tk1',
    passengerRole: 'Passager transit',
    heading: 'Ticket digital',
    fromLabel: 'De',
    from: 'Rond-Point BDGL',
    toLabel: 'À',
    to: 'Birere',
    passenger: 'Jean-Paul Goma',
    initials: 'JG',
    code: 'TKT-12345',
    qrUrl: TICKET_QR_ASSET,
    date: '24 oct. 2023',
    time: '14:35',
    type: 'Aller simple',
    price: '1 500',
    currency: 'CDF',
    note: 'Valable pour un trajet unique. Présentez le code à la montée.',
  },
  tk2: {
    id: 'tk2',
    passengerRole: 'Passager transit',
    heading: 'Ticket digital',
    fromLabel: 'De',
    from: 'Himbi',
    toLabel: 'À',
    to: 'Majengo',
    passenger: 'Marie Kabila',
    initials: 'MK',
    code: 'TKT-88291',
    qrUrl: TICKET_QR_ASSET,
    date: '8 avr. 2026',
    time: '17:05',
    type: 'Aller simple',
    price: '300',
    currency: 'FC',
    note: 'Ticket utilisé — conservé pour archive.',
    used: true,
  },
};

export function getTicketDetail(id) {
  return MOCK_TICKETS_DETAIL[id] ?? MOCK_TICKETS_DETAIL.tk1;
}
