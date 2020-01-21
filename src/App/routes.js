import ExampleScreen from './modules/Example';

const ROUTERS = [
  {
    path: '/',
    Component: ExampleScreen,
    exact: true,
    isPrivate: false,
  },
];

export default ROUTERS;
