import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider} from 'react-redux';

import store from './core/store';
import { Root } from './pages';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  </StrictMode>
);
