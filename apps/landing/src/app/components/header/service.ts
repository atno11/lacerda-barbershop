import { send } from '@/app/services/whatsapp-api';

const PHONE = '5541988144877';

export const getMembershipUrl = () => {
  const text = [
    'Olá!\n',
    'Tenho interesse em contratar um plano e gostaria de saber valores, benefícios e como funciona a adesão.',
  ].join('\n');
  return send({ phone: PHONE, text });
};

export const getScheduleAsGuestUrl = () => {
  const text = [
    'Olá!\n',
    'Gostaria de agendar um horário com vocês.\n',
    'Poderiam me informar quais horários estão disponíveis?',
  ].join('\n');
  return send({ phone: PHONE, text });
};
