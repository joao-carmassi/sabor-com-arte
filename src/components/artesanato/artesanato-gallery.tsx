const ArtesanatoGallery = () => {
  const images = [
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg',
      alt: 'Chalé da Pousada Riacho Doce em São Bento do Sapucaí',
      height: '23rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg',
      alt: 'Vista do jardim com riacho na Pousada Riacho Doce',
      height: '28rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg',
      alt: 'Interior aconchegante do chalé da Pousada Riacho Doce',
      height: '12rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg',
      alt: 'Varanda do chalé com vista para a Serra da Mantiqueira',
      height: '13rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg',
      alt: 'Pousada Riacho Doce com a Pedra do Baú ao fundo',
      height: '32rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg',
      alt: 'Área externa com jardim florido da Pousada Riacho Doce',
      height: '18rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg',
      alt: 'Riacho que dá nome à Pousada Riacho Doce em São Bento do Sapucaí',
      height: '32rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg',
      alt: 'Chalé com decoração rústica e confortável',
      height: '32rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg',
      alt: 'Vista noturna da Pousada Riacho Doce iluminada',
      height: '13rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg',
      alt: 'Natureza exuberante ao redor da Pousada Riacho Doce',
      height: '22.5rem',
    },
    {
      src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg',
      alt: 'Área de convivência ao ar livre da Pousada Riacho Doce',
      height: '22rem',
    },
  ];

  return (
    <section>
      <div className='columns-1 md:columns-2 lg:columns-3 gap-4 container'>
        {images.map((image, index) => (
          <div key={index} className='mb-4'>
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-auto'
              style={{ height: image.height }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { ArtesanatoGallery };
