import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ItemsLayout from "./pages/items/Layout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  // 1º argumento: seu array de rotas (permanece igual)
  [{
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItems /> },
          { path: "new", element: <CreateItem /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> }
        ]
      }
    ]
  }],
  // 2º argumento: o objeto de configuração com o basename
  {
    basename: "/estoque/"
  }
);

export default router;