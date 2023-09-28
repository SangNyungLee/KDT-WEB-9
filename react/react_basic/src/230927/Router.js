import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Redirect from "./Redirect";
import UserDetail from "./UserDetail";
import NotFound from "./404";
import App230927 from "./App230927";
import Error from "./Error";
import Comment from "./Comment";
import Student from "./Student";
import RouterPractice from "./RouterPractice";
import New from "./New";
//VeR.1
// export default function Router() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/redirect" element={<Redirect />} />
//           <Route path="/user/:userid" element={<UserDetail />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

//VeR2
// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App230927 />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//         errorElement: <Error />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "redirect",
//         element: <Redirect />,
//       },
//     ],
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/user",
//     element: <App230927 />,
//     children: [
//       {
//         path: "",
//         element: <User />,
//       },
//       {
//         path: ":userid",
//         element: <UserDetail />,
//         children: [
//           {
//             path: "comment",
//             element: <Comment />,
//           },
//         ],
//       },
//     ],
//   },
// ]);
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RouterPractice />,
    children: [
      // {
      //   path: "",
      //   element: <RouterPractice />,
      // },
      {
        path: "student/kdt",
        element: <Student />,
      },
      {
        path: "codingon",
        element: <Student />,
      },
      {
        path: "new",
        element: <New />,
      },
    ],
  },
]);
export default Router;
