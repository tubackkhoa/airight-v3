import { withTranslation } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';

// import { ConfigProvider } from 'antd';
import { router } from 'routes';
// import { customTheme } from 'theme';

function App() {
  return (
    // <ConfigProvider theme={customTheme}>
    <RouterProvider router={router} />
    // </ConfigProvider>
  );
}

export default withTranslation()(App);
