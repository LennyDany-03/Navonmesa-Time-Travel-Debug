import React from "react";

const GoogleResults = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Top Search Bar */}
      <div>
        <img src="/google-img.jpg" alt="Google" width="120" />
        <input type="search" placeholder="Google" />
        <select>
          <option>10 Results</option>
          <option>30 Results</option>
          <option>100 Results</option>
        </select>
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
        <hr />
      </div>

      {/* Info */}
      <p>
        Showing results <b>1-10</b> of approximately <b>234,000</b>. Search took{" "}
        <b>0.06</b> seconds.
      </p>

      <a href="/">Take Me Back To The Present</a>

      <br />
      <br />

      {/* Result Block (Reusable Structure) */}
      <div>
        <a href="#"><b>Google (Google™)</b></a>
        <pre>
...the web using Google Try our special searches...
...web's Linux resources ©1998 Google Inc....
        </pre>
        <a href="#">www.google.com</a> | <a href="#">Cached</a>
      </div>

      <br />

      <div>
        <a href="#"><b>Google Search: (Linux)</b></a>
        <pre>
...Search the entire web from the Google home page...
        </pre>
        <a href="#">www.google.com/linux</a> | <a href="#">Cached</a>
      </div>

      <br />

      {/* Pagination */}
      <div>
        <b>Page Results:</b>{" "}
        {[1,2,3,4,5,6,7,8,9,10].map((n) => (
          <a key={n} href="#" style={{ margin: "0 5px" }}>
            {n}
          </a>
        ))}
        <a href="#" style={{ marginLeft: "10px" }}>Next Page</a>
      </div>

      <hr />

      {/* Footer */}
      <div>
        <p>
          Try your query on: AltaVista, Yahoo!, Lycos, Amazon, Open Directory
        </p>
        <small>Copyright ©1998 Google Inc.</small>
      </div>
    </div>
  );
};

export default GoogleResults;
