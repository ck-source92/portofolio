/**
 * Portfolio Data Master Configuration for Dwi Candra
 * Combines modular data sources:
 *   - js/data/profile.js               (Profile, bio, avatar, socials)
 *   - js/data/projects.js              (Portfolio projects)
 *   - js/data/posts/*.js               (Individual articles / dev logs)
 *
 * This modular architecture keeps each post isolated in its own file,
 * making the blog easy to maintain, scale, and update.
 */

const portfolioData = {
  get profile() {
    return window.profileData || {};
  },
  get projects() {
    return window.projectsData || [];
  },
  get archives() {
    return window.posts || [];
  }
};
