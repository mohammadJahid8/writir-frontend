const SiteTypeCard = ({ color, imageSrc, boldText = '', normalText = '' }) => {
  return (
    <div
      className='bg-white p-4 rounded col mt-md-0 mt-3 mb-4'
      style={{ borderTop: `8px solid ${color}` }}
    >
      <img className='w-50' src={imageSrc} alt='image_source' />
      <p className='mt-4'>
        <b>{boldText}</b> <span>{normalText}</span>
      </p>
    </div>
  );
};

export default SiteTypeCard;
