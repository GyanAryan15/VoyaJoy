import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Destinations");
  const [searchFocused, setSearchFocused] = useState(false);

  const links = ["Destinations", "Food", "Tourist Hub", "Family"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 20px 24px;
          background: transparent;
        }

        .navbar {
          width: 100%;
          max-width: 1280px;
          height: 64px;
          background: rgba(249, 246, 241, 0.80);
          backdrop-filter: blur(24px) saturate(1.8);
          -webkit-backdrop-filter: blur(24px) saturate(1.8);
          border: 1px solid rgba(255, 255, 255, 0.60);
          border-radius: 40px;
          box-shadow: 0 4px 32px rgba(26, 23, 20, 0.10);
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          transition: box-shadow 0.3s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .navbar:hover {
          box-shadow: 0 8px 48px rgba(26, 23, 20, 0.15);
        }

        /* LOGO */
        .logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 10.5px;
          color: #7a756e;
          letter-spacing: 0.05em;
        }
        .logo-main {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 20px;
          color: #1a1714;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .logo-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c8a96e;
          margin-bottom: 2px;
          flex-shrink: 0;
        }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin: 0;
          padding: 0;
        }
        .nav-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          color: #7a756e;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 7px 15px;
          border-radius: 24px;
          transition: color 0.2s, background 0.2s;
          position: relative;
          white-space: nowrap;
        }
        .nav-link-btn:hover {
          color: #1a1714;
          background: rgba(26, 23, 20, 0.07);
        }
        .nav-link-btn.active {
          color: #1a1714;
          background: rgba(200, 169, 110, 0.16);
          font-weight: 500;
        }
        .active-dot {
          position: absolute;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c8a96e;
        }

        /* RIGHT SECTION */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        /* SEARCH */
        .search-pill {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(26, 23, 20, 0.06);
          border: 1.5px solid ${searchFocused ? "rgba(200,169,110,0.55)" : "rgba(26,23,20,0.10)"};
          border-radius: 24px;
          padding: 7px 14px 7px 11px;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          box-shadow: ${searchFocused ? "0 0 0 3px rgba(200,169,110,0.12)" : "none"};
        }
        .search-pill:hover {
          background: rgba(26, 23, 20, 0.09);
        }
        .search-icon {
          width: 14px;
          height: 14px;
          stroke: #7a756e;
          flex-shrink: 0;
        }
        .search-input {
          background: none;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #1a1714;
          width: 120px;
          caret-color: #c8a96e;
        }
        .search-input::placeholder {
          color: #a09992;
        }

        /* PROFILE */
        .profile-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #1a1714;
          border: none;
          border-radius: 24px;
          padding: 6px 13px 6px 6px;
          cursor: pointer;
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
        }
        .profile-btn:hover {
          background: #2f2b27;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(26, 23, 20, 0.22);
        }
        .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c8a96e 0%, #e8c990 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 600;
          color: #1a1714;
          letter-spacing: 0.03em;
          flex-shrink: 0;
          font-family: 'DM Sans', sans-serif;
        }
        .profile-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #f9f6f1;
          letter-spacing: 0.02em;
        }
        .chevron-icon {
          width: 11px;
          height: 11px;
          stroke: rgba(249, 246, 241, 0.50);
          margin-left: 2px;
        }
      `}</style>

      <div className="nav-wrapper">
        <nav className="navbar">

         {/* Logo */}
          <a className="logo" href="#" >
            <img src="https://res.cloudinary.com/ddkp8aqly/image/upload/v1774085306/logo_fdfmbu.png" 
            style={{height:"35px"}}
            />
          </a>
          {/* Nav Links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link}>
                <button
                  className={`nav-link-btn${active === link ? " active" : ""}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                  {active === link && <span className="active-dot" />}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Search + Profile */}
          <div className="nav-right">
            <div className="search-pill">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                className="search-input"
                type="text"
                placeholder="Search places…"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            <button className="profile-btn">
              <div className="avatar">P</div>
              <span className="profile-name">Profile</span>
              <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

        </nav>
      </div>
    </>
  );
};

export default Navbar;