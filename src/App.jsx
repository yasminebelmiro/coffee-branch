import React from "react";

import { AuthGoogleProvider } from "./context/authGoogle";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};

export default App;
