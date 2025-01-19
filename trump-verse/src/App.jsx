import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import { StaffProvider } from './contexts/StaffContext';
import AppRouting from './routing/AppRouting';

function Navbar() {
  /*Navigerings-bar komponent*/ 
  return (
    <nav 
    className="navbar navbar-expand-lg navbar-dark bg-dark" 
    aria-label="Main Navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-home" 
        to="/" 
        aria-label="Go to homepage"
        >
          HOME
        </Link>

        {/* Navigasjonslenker */}
        <div className="navbar-links" 
        role="navigation"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" 
              to="/staff" 
              aria-label="View staff list"
              >
                STAFF
              </Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link" 
              to="/create" 
              aria-label="Add new staff member"
              >
                ADD STAFF
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
  
// App-komponent som setter opp kontekst og routing
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="content" tabIndex="-1" aria-live="polite">
        <StaffProvider>
          <AppRouting />
        </StaffProvider>
      </main>
    </BrowserRouter>
  );
}


export default App;
