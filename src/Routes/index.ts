import type { JSX, ReactNode } from "react";
import About from "../Pages/About";
import Home from "../Pages/Home";
import ManageCourses from "../Pages/Admin/Courses";
import PublicLayout from "../Components/Layouts/DefaultLayout";
import PrivateLayout from "../Components/Layouts/PrivateLayout";
import CoursesPage from "../Pages/Courses";
import DetailCourse from "../Pages/Detail-Coures";
import ManageBlogs from "../Pages/Admin/Blog";
//Sử dụng để cho khách vãng lai
const publisRoutes: {
  path: string;
  component: () => JSX.Element;
  layout?: ({ children }: Readonly<{ children: ReactNode }>) => JSX.Element;
}[] = [
  { path: "/", component: Home, layout: PublicLayout },
  { path: "/about", component: About, layout: PublicLayout },
  { path: "/courses", component: CoursesPage, layout: PublicLayout },
  { path: "/courses/:id", component: DetailCourse, layout: PublicLayout },
];
//Sử dụng cho đăng nhập
const priviteRoutes: {
  path: string;
  component: () => Promise<JSX.Element> | JSX.Element;
  layout?: ({ children }: Readonly<{ children: ReactNode }>) => JSX.Element;
}[] = [
  { path: "/admin/courses", component: ManageCourses, layout: PrivateLayout },
  { path: "/admin/blogs", component: ManageBlogs, layout: PrivateLayout },
  { path: "/admin/account", component: ManageCourses, layout: PrivateLayout },
];

export { publisRoutes, priviteRoutes };
