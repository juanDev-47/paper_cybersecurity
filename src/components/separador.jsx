const Separador = (props) => {

  const { titulo } = props;
  return (
    <div className='container-separador'>
      <p className='my-6 py-1 text-center font-bold text-xl'>{titulo}</p>
    </div>

  );
};

export default Separador;