import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Precisa fazer reserva para almoçar no Sabor com Arte?',
    answer:
      'Não é obrigatório, mas recomendamos reserva para fins de semana e feriados, especialmente se quiser uma mesa no deck externo com vista para a Pedra do Baú. Reserve pelo WhatsApp: (12) 99671-7118.',
  },
  {
    question: 'Qual o horário de funcionamento do restaurante?',
    answer:
      'De segunda a quinta, das 11h às 17h. Sexta, sábado e domingo, das 11h às 23h. Feriados seguem o horário do fim de semana.',
  },
  {
    question: 'Quando é o buffet livre?',
    answer:
      'O buffet à vontade é servido nos sábados, domingos e feriados, das 12h às 16h. Inclui saladas, proteínas (com truta em destaque), acompanhamentos e sobremesas da casa como Petit Gateau, Fondue e Banana Flambada com sorvete.',
  },
  {
    question: 'Vocês fazem delivery para pousadas e chalés?',
    answer:
      'Sim! Fazemos delivery para hospedagens próximas, incluindo os chalés da Pousada Riacho Doce. Peça pelo WhatsApp: (12) 99671-7118.',
  },
  {
    question: 'Como chegar ao Restaurante Sabor com Arte?',
    answer:
      'Estamos no Km 5 da Rodovia Benedito Gomes de Souza, no Bairro do Paiol Grande, em São Bento do Sapucaí (SP). A 5 km do centro da cidade, com estacionamento privativo.',
  },
  {
    question: 'O restaurante é pet friendly?',
    answer:
      'Sim! Aceitamos animais de estimação em nossas áreas externas. Traga seu pet para curtir a serra conosco.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos cartões de débito e crédito das principais bandeiras, Pix e dinheiro. Consulte-nos sobre condições especiais.',
  },
  {
    question: 'Tem estacionamento?',
    answer:
      'Sim, temos estacionamento privativo gratuito para nossos clientes.',
  },
  {
    question: 'O restaurante tem Wi-Fi?',
    answer:
      'Sim, oferecemos Wi-Fi gratuito para nossos clientes em todos os ambientes.',
  },
  {
    question: 'Vocês têm opções para quem não come peixe?',
    answer:
      'Com certeza! Nosso cardápio conta com mais de 34 opções à la carte, incluindo carnes, aves, pizzas, panquecas, batatas recheadas e porções para todos os gostos.',
  },
];

const HomeFaq = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='container'>
        <h2 className='mb-8 md:mb-14 font-bold text-4xl xl:text-5xl max-w-5xl'>
          Perguntas Frequentes
        </h2>
        <Accordion type='single'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='mb-2 rounded-md border-b-0 bg-muted px-5 py-2 md:mb-4'
            >
              <AccordionTrigger className='text-left text-lg font-semibold'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export { HomeFaq };
