import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routes";
import adminRoutes from "./admin.routes";
import instructorRoutes from "./instructor.routes";

const routes = createBrowserRouter([
  ...publicRoutes,
  ...adminRoutes,
  ...instructorRoutes,
]);

export default routes;
