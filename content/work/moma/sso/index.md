---
title: Single Sign On
description: Design and front-end development of a unifed login across all of MoMA’s digital properties
order: 1
span: 3
preview: 
  image: login.png
  title: moma.org single sign on, with a yellow background.
  type: screenshot
hero: 
  image: login.png
  type: screenshot
  title: moma.org single sign on, with a yellow background.
  caption: Single Sign On for [moma.org](https://www.moma.org/auth/login)
---

MoMA has three different digital properties (store, moma.org, and membership) with segmented user accounts. To prepare for upcoming product features for member-only content, we worked to tie all our accounts together under a unified single sign on.

We began with a product inception, where goals and antigoals were outlined. I presented analytics and behavioral data before facilitating a workshop on core user journeys.

{{< figure src="sso-board.png" screenshot="true" class="plain" mat="#eee" caption="FigJam inception document" >}}

[Stephanie Schapowal](https://stephanieschapowal.com/) and I laid out three user flows for accessing member specific content via existing authentication, via SSO, and a north star journey including yet to be completed product work.

{{< figure src="sso-journeys.png" screenshot="true" class="plain" mat="#eee" caption="Brief subset of high level user journeys for member specific content" >}}

From here, we dived deeper into core SSO user journeys. Untangling this was a challenge, as each property had different ways of authentication (retail had existing accounts and membership used an insecure authentication of member number and last name). We reviewed core user journeys and outlined both the happy paths, as well as the edge cases.

{{< figure src="sso-journeys-deep-1.png" screenshot="true" class="plain" mat="#eee" caption="Deep dive of various user journeys needed to be handled with SSO" >}}

{{< figure src="sso-journeys-deep-2.png" screenshot="true" class="plain" mat="#eee" caption="Some additional journeys needed to be handled with SSO" >}}


Of course we also had to design account creation, conversion flows, forgot password flows, and error states. After several rounds of user testing we arrived at a working prototype that I then worked with developers to translate into code.

{{< figure src="sso-prototype.png" screenshot="true" class="plain" mat="#eee" caption="Design comps for our user testing prototype" >}}

As we moved into design, our stakeholders in retail and membership both wanted their own brand expression. We had to balance that with a simple and recognizible interface across all surfaces. To do this, we created a custom Vue implementation interface that sat on top of our identity service provider, Auth0.

{{< figure src="sso-final.png" screenshot="true" class="plain" mat="#eee" caption="Final login screens for retail, members, and moma.org" >}}

Link

- [Log in](https://www.moma.org/auth/login)