const config = {
  siteTitle: "Chevallier", // Site title.
  siteTitleShort: "chevallier.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Pierre Chevallier dev website", // Alternative site title for SEO.
  siteLogo: "/logos/logo-48.png", // Logo used for SEO and manifest.
  siteUrl: "https://chevallier.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/netlify-advanced", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A personal website for blogging and keeping a portfolio.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Pierre Chevallier", // Username to display in the author segment.
  userEmail: "pierre@chevallier.dev", // Email used for RSS feed's author segment
  userTwitter: "PixelCheval", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Prague, Czech Republic", // User location to display in the author segment.
  userAvatar: "https://avatars3.githubusercontent.com/u/32485496?s=460&v=4", // User avatar to display in the author segment.
  userDescription:
    "I love my wife and what I do in life, from enjoying nature, practicing archery or writing about technology and programming. I have a dog too, his name is Babar and he is an awesome friend.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/pierrechevallier/netlify-advanced",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/PixelCheval",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:pierre@chevallier.dev",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: `Copyright © ${new Date().getFullYear()}. Pierre Chevallier`, // Copyright string for the footer of the website and RSS feed. ${new Date().getFullYear()}
  themeColor: "#F07369", // Used for setting manifest and progress theme colors.
  backgroundColor: "#F2F4EE" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
