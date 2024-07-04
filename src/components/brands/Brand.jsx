import logo2 from '../../assets/loginLogo.png';

const Brand = () => {
  return (
    <div className='d-flex align-items-center'>
      <img
        src={logo2}
        alt='Rantir logo'
        style={{ height: '30px', width: 'auto', marginRight: '10px' }}
      />
      {/* <p className="font=inter"
      style={{
        fontSize: '24px',
        // Deep Blue
        fontWeight: 'bold',
        margin: '0',
      }}
    >
      Rantir
    </p> */}
    </div>
  );
};

export default Brand;
