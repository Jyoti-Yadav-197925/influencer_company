import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.min';      // Import Bootstrap JS
import SideBarRoute from './RoutesSidebar'; // Adjust path based on your structure
// import Request from './pages/Dashbord/Request';        // Adjust path based on your structure

function App() {
  return (
    <div className="App">
      <SideBarRoute />
    </div>
  );
}

export default App;
