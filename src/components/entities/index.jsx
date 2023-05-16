import { useTranslation } from 'react-i18next';
import EntitiesImg from '../../images/entities/entities.png';
import SubTitle from '../subTitle';

const Entities = () => {
  const { t } = useTranslation();
  const items = [t('entity1'), t('entity2')];

  return (
    <div className='w-3/4 max-w-[1200px] mx-auto mb-4'>
      <SubTitle titulo={t('entities')} />
      <div className='flex justify-center items-center gap-3'>
        <div>
          <ul className='list-none'>
            {items.map((text, idx) => (
              <li key={idx} className='my-4 text-xl'>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden md:block'>
          <img
            src={EntitiesImg}
            alt='Imagen entes'
            className='rounded-lg border'
          />
        </div>
      </div>
    </div>
  );
};
export default Entities;
