const SubTitle = (props) => {

    const { titulo } = props;
    return (
      <div className='container-separador'>
        <p className='my-20 py-1 text-center font-bold text-6xl text-slate-800'>{titulo}</p>
      </div>
  
    );
  };
  
  export default SubTitle;