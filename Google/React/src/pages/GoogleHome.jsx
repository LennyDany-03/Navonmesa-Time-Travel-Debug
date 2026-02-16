import React from "react";

const GoogleHome = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="http://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg"
        width="351"
        height="113"
        alt="Google"
      />

      <table
        border="0"
        width="90%"
        align="center"
        style={{ marginTop: "20px" }}
      >
        <tbody>
          {/* Search Section */}
          <tr>
            <td colSpan="3" style={{ backgroundColor: "#EEEEEE" }}>
              <p>Search the web using Google!</p>
              <input type="text" size="40" />
              <br />
              <a href="/search">
                <input type="button" value="Google Search" />
              </a>
              <input type="button" value="I'm feeling lucky" />
            </td>
          </tr>

          {/* Links Section */}
          <tr>
            <td width="37%" style={{ backgroundColor: "#7EE5DA" }}>
              <p>Special Searches</p>
              <a href="#">Stanford Search</a>
              <br />
              <a href="#">Linux Search</a>
            </td>

            <td style={{ backgroundColor: "#70CCC2" }}>
              <small>
                <a href="#">Help!</a>
                <br />
                <a href="#">About Google!</a>
                <br />
                <a href="#">Company Info</a>
                <br />
                <a href="#">Google! Logos</a>
              </small>
            </td>

            <td style={{ backgroundColor: "#62B3AA" }}>
              <small>
                Get Google!
                <br />
                updates monthly:
                <br />
                <input type="text" placeholder="your e-mail" />
                <br />
                <input type="button" value="Subscribe" />
                <br />
                <a href="#">Archive</a>
              </small>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ fontSize: "12px", marginTop: "20px" }}>
        Copyright ©1998 Google Inc.
      </p>
    </div>
  );
};

export default GoogleHome;
