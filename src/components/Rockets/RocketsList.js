import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  bookRocket,
  cancelBooking,
  fetchRockets,
} from '../../store/rockets/rockets';
import './Rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  const availableRockets = rockets.length;
  useEffect(() => {
    if (!availableRockets) {
      dispatch(fetchRockets);
    }
  }, [availableRockets, dispatch]);

  const handleBooking = (id) => dispatch(bookRocket(id));
  const handleCancellation = (id) => dispatch(cancelBooking(id));

  return (
    <div className="">
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <div key={id} className="single-rocket">
          <div className="img-container">
            <img src={images} alt="rocket" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {description}
            </p>
            {reserved && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => handleCancellation(id)}
            >
              Cancel reservation
            </button>
            )}
            {!reserved && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleBooking(id)}
            >
              Reserve rocket
            </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
