import MoonLoader from 'react-spinners/MoonLoader';
import './Loader.scss';

export function Loader() {
    return (
      <div className='loader'>
          <MoonLoader color={'#1C94C4'} loading={true} size={70} />
      </div>
    );
}