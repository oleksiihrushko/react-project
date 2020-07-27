import { lazy } from 'react';

// };
export default [
  {
    path: '/',
    label: 'HomePage',
    exact: true,
    // component: lazy(() => import('./components/homePage/HomePage')),
    private: false,
    restricted: true,
  },
  {
    path: '/operations',
    label: 'Operations',
    exact: false,
    // component: lazy(() => import('./components/operations/Operations')),
    private: true,
    restricted: false,
  },
  {
    path: '/statistic',
    label: 'Statistic',
    exact: false,
    // component: lazy(() => import('./components/statistic/Statistic')),
    private: true,
    restricted: false,
  },
  {
    path: '/team',
    label: 'Team',
    exact: false,
    // component: lazy(() => import('./components/operations/Operations')),
    private: false,
    restricted: false,
  },
];
