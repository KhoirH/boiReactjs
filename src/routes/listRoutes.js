import First from '../App';
/**
 * path = url
 * component = component of page
 * private = middleware with token
 */

const LIST_ROUTES = [
  {
    path: '/',
    component: First,
    exact: true,
    middleware: ['IsPrivate'],
  },
];

export default LIST_ROUTES;
