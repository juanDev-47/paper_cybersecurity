import { useTranslation } from 'react-i18next';
import Separador from '../separador';
import EntitiesImg from '../../images/entities/entities.png';

const Entities = () => {
  const { t } = useTranslation();
  const items = [t('entity1'), t('entity2')];

  return (
    <div className='w-3/4 mx-auto mb-4'>
      <Separador titulo={t('entities')} />
      <div className='flex justify-center items-center gap-3'>
        <div>
          <ul className='list-disc'>
            {items.map((text, idx) => (
              <li key={idx} className='my-4'>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div>
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
