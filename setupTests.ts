
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });