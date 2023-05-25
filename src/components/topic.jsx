const SubTitle = (props) => {

    const { titulo } = props;
    return (
        <div className='w-4/5 md:w-full lg:w-4/5 py-5 mx-auto'>
            <p className='mt-10 font-bold text-2xl text-slate-800'>{titulo}</p>
        </div>

    );
};

export default SubTitle;