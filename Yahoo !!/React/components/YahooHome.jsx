

export default function YahooHome() {
  return (
    <>
      {/* Top Icons Bar */}
      <div className="top-icons">
        <div className="top-icons-content">
          {[
            { name: "Finance", img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=80&h=80&fit=crop" },
            { name: "Music", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=80&h=80&fit=crop" },
            { name: "Travel", img: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=80&h=80&fit=crop" },
            { name: "Mail", img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=80&h=80&fit=crop" },
            { name: "My Yahoo!", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=80&h=80&fit=crop" },
            { name: "Messenger", img: "https://images.unsplash.com/photo-1611746869696-d09bce200020?w=80&h=80&fit=crop" },
          ].map((item) => (
            <a key={item.name} href="#" className="icon-item">
              <img src={item.img} alt={item.name} />
              <div>{item.name}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="yahoo-logo">
            <svg viewBox="0 0 300 80">
              <text
                x="0"
                y="60"
                fontFamily="Arial Black, sans-serif"
                fontSize="70"
                fontWeight="900"
                fill="#720E9E"
              >
                YAHOO!
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-row">
          <label>Search for:</label>
          <input type="text" />
          <select>
            <option>on the Web</option>
            <option>in Images</option>
            <option>in News</option>
            <option>in Shopping</option>
          </select>
          <button className="search-btn">Yahoo! Search</button>
        </div>

        <div className="search-links">
          <a href="#"><strong>• Advanced</strong></a>
          <a href="#">
            <strong>• My Web</strong> <span className="beta-badge">BETA</span>
          </a>
        </div>

        <div className="popular-terms">
          <strong>Yahoo! Search</strong> - Popular terms:
          <a href="#"> Danica Patrick</a>,
          <a href="#"> Big Brother 6</a>,
          <a href="#"> Airline Tickets</a>,
          <a href="#"> Maria Sharapova</a>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Left Column */}
        <div className="left-column">
          {[
            ["Autos", "Chat", "Finance", "Games", "GeoCities", "Groups", "Health"],
            ["Horoscopes", "HotJobs", "Kids", "Mail", "Maps", "Messenger", "Mobile"],
            ["Movies", "Music", "My Yahoo!", "News", "People Search", "Personals", "Photos"],
            ["Real Estate", "Shopping", "Sports", "Travel", "TV", "Yellow Pages"],
          ].map((group, i) => (
            <div key={i} className="nav-section">
              <ul>
                {group.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
                {i === 3 && (
                  <li><a href="#"><strong>All Y! Services...</strong></a></li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className="middle-column">
          <div
            style={{
              backgroundColor: "#E8F0FF",
              padding: "8px",
              marginBottom: "15px",
              border: "1px solid #6699CC",
              textAlign: "center",
              fontSize: "12px",
            }}
          >
            <strong>Check your mail status: <a href="#">Sign In</a></strong>
            &nbsp;&nbsp;&nbsp;
            <strong>Free mail: <a href="#">Sign Up</a></strong>
          </div>

          {/* Movies */}
          <div className="featured-box">
            <div className="featured-header">
              Yahoo! Movies
              <span style={{ float: "right", fontSize: "11px" }}>
                <a href="#" style={{ color: "#000" }}>Showtimes & Tickets</a> |{" "}
                <a href="#" style={{ color: "#000" }}>Trailers</a>
              </span>
            </div>

            <div className="featured-content">
              <h4 style={{ color: "#C00" }}>Now in Theaters:</h4>

              <div className="movie-showcase">
                <div className="movie-poster">
                  <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200" alt="Movie" />
                </div>
                <div className="movie-info">
                  <ul>
                    {["Must Love Dogs", "Sky High", "The Island", "Stealth", "Chocolate Factory"].map((m) => (
                      <li key={m}><a href="#">{m}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          <div className="side-box">
            <div className="side-header news-header">In the News</div>
            <div className="side-content">
              {[
                "U.K. police: Terrorists still pose threat",
                "Saddam warned about 1991 Shiite crackdown",
                "Officials: Bush plans to install Bolton",
                "Video games industry eyeing record year",
              ].map((news) => (
                <div key={news} className="news-item">
                  <span className="news-bullet">•</span>
                  <a href="#">{news}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <a href="#">Company Info</a> | <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms</a> | <a href="#">Help</a>
        </div>
        <div>© 2005 Yahoo! Inc. All rights reserved.</div>
      </div>
    </>
  );
}
