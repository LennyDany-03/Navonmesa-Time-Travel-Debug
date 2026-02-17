

export default function YouTubeClassic() {
  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="logo-section">
            <a href="#" className="youtube-logo">YouTube</a>
            <span className="tagline">Broadcast Yourself™</span>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="header-links">
            <a href="#" className="upload-btn">Upload</a>
            <a href="#">Sign Up</a>
            <a href="#">Log In</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <div className="nav-content">
          <a href="#" className="active">Home</a>
          <a href="#">Videos</a>
          <a href="#">Channels</a>
          <a href="#">Community</a>
        </div>
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Sidebar */}
        <div className="sidebar">
          {[
            {
              title: "Categories",
              items: [
                "Autos & Vehicles", "Comedy", "Education", "Entertainment",
                "Film & Animation", "Gaming", "Howto & Style", "Music",
                "News & Politics", "Nonprofits & Activism", "People & Blogs",
                "Pets & Animals", "Science & Technology", "Sports", "Travel & Events"
              ]
            },
            {
              title: "Videos",
              items: [
                "Most Viewed", "Most Discussed", "Top Favorites", "Top Rated",
                "Most Linked", "Recently Featured", "Most Responded", "Watch on Mobile"
              ]
            },
            {
              title: "Channels",
              items: [
                "Most Subscribed", "Most Viewed", "Directors", "Musicians",
                "Comedians", "Gurus", "Partners", "Sponsored"
              ]
            },
            {
              title: "Community",
              items: ["Groups", "Contests", "TestTube"]
            }
          ].map(section => (
            <div key={section.title} className="sidebar-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="main-content">
          {[
            {
              title: "Videos Being Watched Right Now",
              videos: [
                {
                  title: "Amazing Cat Compilation 2007",
                  user: "funnycats",
                  views: "125,432",
                  rating: "★★★★☆",
                  time: "3:24",
                  img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
                },
                {
                  title: "Epic Guitar Solo",
                  user: "rockstar123",
                  views: "89,234",
                  rating: "★★★★★",
                  time: "2:15",
                  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                },
                {
                  title: "How to Make Chocolate Cake",
                  user: "cookingwithsarah",
                  views: "45,123",
                  rating: "★★★★☆",
                  time: "5:42",
                  img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                },
                {
                  title: "Skateboard Trick Montage",
                  user: "sk8erboy",
                  views: "234,567",
                  rating: "★★★★★",
                  time: "1:33",
                  img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f"
                }
              ]
            }
          ].map(section => (
            <div key={section.title} className="featured-section">
              <div className="section-header">{section.title}</div>

              <div className="video-grid">
                {section.videos.map(video => (
                  <a key={video.title} href="#" className="video-item">
                    <div className="video-thumb">
                      <img src={`${video.img}?w=300&h=200&fit=crop`} alt="" />
                      <span className="video-duration">{video.time}</span>
                    </div>

                    <div className="video-title">{video.title}</div>

                    <div className="video-meta">
                      From: <a href="#">{video.user}</a>
                    </div>

                    <div className="video-stats">
                      <span className="rating-stars">{video.rating}</span> {video.views} views
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-links">
            {[
              "About", "Press", "Copyright", "Creators & Partners",
              "Advertising", "Developers", "Terms", "Privacy",
              "Safety", "Send Feedback", "Test New Features"
            ].map(link => (
              <a key={link} href="#">{link}</a>
            ))}
          </div>

          <div className="footer-text">© 2007 YouTube, LLC</div>
        </div>
      </div>
    </>
  );
}
