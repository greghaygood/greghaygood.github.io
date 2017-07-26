---
layout: page
title: Jobs
---

Like any good developer, I spread my expertise amongst a few organizations. That
gives me the opportunity to work with different groups, using a variety of
technologies to help them solve problems (and keep my brain in high gear!). 

Here's an overview of my current positions. For more details and past positions,
check out my <a
href="https://www.linkedin.com/in/greghaygood/">LinkedIn profile</a>.

{% assign sorted_jobs = (site.jobs | sort: 'order' | reverse ) %}

{% for j in sorted_jobs %}
<ul class="no-bullet">
    {% include job-overview.html job=j %}
</ul>
{% endfor %}

