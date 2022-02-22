import Home from '../pages/Home/Index';
import Update from '../pages/updatestudent/Update';
import Login from '../pages/authentication/Login.js/Login';
import Courses from '../pages/courses/Courses';
const userRoutes = [
  {
    path: '/home',
    exact: true,
    main: () => <Home />,
  },
  {
    path: '/update',
    exact: true,
    main: () => <Update />,
  },
];
const authRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Login />,
  },
];

const coursesRoutes = [
  {
    path: '/courses',
    exact: true,
    main: () => <Courses />,
  },
];
export { userRoutes, authRoutes, coursesRoutes };
