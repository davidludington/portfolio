export type Skill = {
  name: string;
  icon: string;
};

/** Rendered under "Frameworks" on /work. */
export const frameworks: Skill[] = [
  { name: 'Selenium', icon: 'selenium.png' },
  { name: 'Appium', icon: 'appium.jpeg' },
  { name: 'Playwright', icon: 'playwright.png' },
  { name: 'Pytest', icon: 'pytest.png' },
];

/** Rendered under "Languages" on /work. */
export const languages: Skill[] = [
  { name: 'Python', icon: 'pylogo.png' },
  { name: 'Java', icon: 'java_logo.png' },
  { name: 'C/C++', icon: 'c_logo.png' },
  { name: 'Git', icon: 'git_logo.png' },
  { name: 'HTML', icon: 'HTML_logo.png' },
  { name: 'CSS', icon: 'css_logo.png' },
  { name: 'JavaScript', icon: 'javascript_logo.png' },
];
