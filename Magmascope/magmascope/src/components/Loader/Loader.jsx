import { useGlobeContext } from '../../context/GlobeContext';
import './Loader.css';

export default function Loader() {
  const { isLoaded } = useGlobeContext();
  return (
    <div className={`loader${isLoaded ? ' hidden' : ''}`} id="loader">
      <div className="loader-text">Initializing Observatory…</div>
    </div>
  );
}
