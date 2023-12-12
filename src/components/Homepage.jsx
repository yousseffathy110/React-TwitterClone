// @ts-ignore
import Favicon from "../assets/TwitterFavIcon.png";
// @ts-ignore
import personalpic from "../assets/main-acc-img.jpg";
// @ts-ignore
import nabilpic from "../assets/nabil.jpg";
// @ts-ignore
import alaapic from "../assets/alaa.jpg";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

const Homepage = () => {
  const fontWeight = {
    fontWeight: "600",
  };
  const backgroundColor = {
    backgroundColor: "black",
  };
  const textStyle = {
    fontSize: "25px",
  };
  const textcolor = {
    color: "rgb(110, 118, 125)",
  };
  return (
    <>
      {" "}
      <header style={backgroundColor}>
        <nav className="navigation">
          <a href="home-page.html" className="icon">
            <img src={Favicon} alt="twitter-Icon" loading="lazy" width="60px" />
          </a>

          <a href="home-page.html">
            <i className="material-icons-outlined">home</i>
            <span>HOME</span>
          </a>

          <a href="">
            <i className="material-icons-outlined">tag</i>
            <span style={fontWeight}>EXPLORE</span>
          </a>
          <a href="">
            <i className="material-icons-outlined">notifications</i>
            <span>Notification</span>
          </a>
          <a href="">
            <i className="material-icons-outlined">email</i>
            <span>Messages</span>
          </a>
          <a href="">
            <i className="material-icons-outlined">bookmark_border</i>
            <span>Bookmarks</span>
          </a>
          <a href="">
            <i className="material-icons-outlined">list_alt</i>
            <span>Lists</span>
          </a>
          <a href="/profile-page.html">
            <i className="material-icons-outlined">person</i>
            <span>Profile</span>
          </a>
          <a href="">
            <i className="material-icons-outlined">more</i>
            <span>More</span>
          </a>
          <button className="tweet-btn">tweet</button>
        </nav>
        <div className="main-acc">
          <a href="/profile-page.html">
            <img
              src={personalpic}
              alt="main-acc-pic"
              loading="lazy"
              className="per-img"
            />

            <div className="details">
              <span className="name">yousef fathy</span>
              <span className="user-handle">@yousef134510</span>
            </div>

            <i className="material-icons-outlined">more_horiz</i>
          </a>
        </div>
      </header>
      <main style={backgroundColor}>
        <div className="container2">
          <div className="feed">
            <div className="bar">
              <span>home</span>
              <i className="material-icons-outlined" style={textStyle}>
                auto_awesome
              </i>
            </div>
            <div className="new-tweet">
              <div className="f-line">
                <Link to="/homepage">
                  <img
                    src={personalpic}
                    alt="personal image"
                    loading="lazy"
                    className="personal-img"
                  />
                </Link>
                <input
                  type="text"
                  placeholder="What's happening?"
                  className="tweet-content"
                />
              </div>
              <div className="s-line">
                <div className="icons">
                  <i className="material-icons-outlined">image</i>
                  <i className="material-icons-outlined">gif_box</i>
                  <i className="material-icons-outlined">poll</i>
                  <i className="material-icons-outlined" id="hidden2">
                    sentiment_satisfied
                  </i>
                  <i className="material-icons-outlined" id="hidden">
                    event
                  </i>
                </div>

                <button className="NewTweet-Btn">Tweet</button>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={nabilpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    Nabil salah
                    <span className="handle">@nabil187510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm Nabil and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={alaapic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    Ahmed alaa
                    <span className="handle">@ahmedala854</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm Ahmed and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
            <div className="feed-tweets">
              <img
                src={personalpic}
                alt="profile pic"
                loading="lazy"
                className="per-img"
              />
              <div className="tweet-details">
                <div className="user-details">
                  <a
                    href="/profile-page.html"
                    target="_blank"
                    className="username"
                  >
                    yousef fathy
                    <span className="handle">@yousef134510</span>
                  </a>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <div className="tweet-content">
                  <p>Hi, I'm yousef and This's Twitter Clone.</p>
                </div>
                <div className="tweet-engagments">
                  <i className="material-icons-outlined">chat_bubble_outline</i>
                  <i className="material-icons-outlined">restart_alt</i>
                  <i className="material-icons-outlined">favorite_border</i>
                  <i className="material-icons-outlined" id="hidden3">
                    upload
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="side-feed">
            <div className="search">
              <input
                type="text"
                placeholder="Search Twitter"
                className="search-bar"
              />
            </div>
            <div className="trending">
              <h1 className="heading">What's happening</h1>

              <div className="trending-content">
                <div className="trend-location">
                  <span>Trending in Egypt</span>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <p>Barcelona</p>
                <span style={textcolor}>2.3 million Tweets</span>
              </div>
              <div className="trending-content">
                <div className="trend-location">
                  <span>Trending in Earth</span>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <p>Zamalek</p>
                <span style={textcolor}>32K Tweets</span>
              </div>
              <div className="trending-content">
                <div className="trend-location">
                  <span>Trending in Earth</span>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <p>Harry poter</p>
                <span style={textcolor}>1.6 million Tweets</span>
              </div>
              <div className="trending-content">
                <div className="trend-location">
                  <span>Trending in Egypt</span>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <p>Amr Diab</p>
                <span style={textcolor}>500K Tweets</span>
              </div>
              <div className="trending-content">
                <div className="trend-location">
                  <span>Trending in Eurobe</span>
                  <i className="material-icons-outlined">more_horiz</i>
                </div>
                <p>UCL</p>
                <span style={textcolor}>7.7 million Tweets</span>
              </div>
              <a href="" className="show-more">
                Show more
              </a>
            </div>
            <div className="follow-list">
              <h1 className="heading">Who To Follow</h1>
              <div className="follow-sug">
                <img
                  src={personalpic}
                  alt="personal-img"
                  className="per-img"
                  loading="lazy"
                ></img>
                <div className="follow-details">
                  <a href="">Yousef fathy</a>
                  <span>
                    @yousef134510 _ <span id="special">Follows you</span>
                  </span>
                </div>
                <button className="tweet-btn2">Follow</button>
              </div>
              <div className="follow-sug">
                <img
                  src={personalpic}
                  alt="personal-img"
                  className="per-img"
                  loading="lazy"
                ></img>
                <div className="follow-details">
                  <a href="">Yousef fathy</a>
                  <span>
                    @yousef134510 _ <span id="special">Follows you</span>
                  </span>
                </div>
                <button className="tweet-btn2">Follow</button>
              </div>
              <a href="" className="show-more">
                Show more
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
