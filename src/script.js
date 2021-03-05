import { strings } from './strings.js';

if (document.getElementById('index')) {
  document.getElementById('about_p1').innerHTML = strings.about.p1;
  document.getElementById('about_p2').innerHTML = strings.about.p2;
}

if (document.getElementById('contact')) {
  let githubIcon = document.createElement('img');
  githubIcon.src = strings.media.icons.github;
  document.getElementById('github').appendChild(githubIcon);
  let gmailIcon = document.createElement('img');
  gmailIcon.src = strings.media.icons.gmail;
  document.getElementById('gmail').appendChild(gmailIcon);
  let twitterIcon = document.createElement('img');
  twitterIcon.src = strings.media.icons.twitter;
  document.getElementById('twitter').appendChild(twitterIcon);
}
