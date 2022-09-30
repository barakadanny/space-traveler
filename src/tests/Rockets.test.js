import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets/RocketsList';

const mockStore = configureStore([]);

describe('Rockets', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      rockets: [
        {
          id: 1,
          name: 'Falcon 1',
          description:
            'First successful orbital launch vehicle in history, capable of delivering 13,450 kg to low Earth orbit. First successful orbital launch vehicle in history, capable of delivering 13,450 kg to low Earth orbit.',
          image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        },
        {
          id: 2,
          name: 'Falcon 9',
          description:
            'First successful orbital launch vehicle in history, capable of delivering 13,450 kg to low Earth orbit. First successful orbital launch vehicle in history, capable of delivering 13,450 kg to low Earth orbit.',
          image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        },
      ],
    });
    component = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
