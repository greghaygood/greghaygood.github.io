---
layout: page
title: Projects
---

A few of the more notable projects I've worked on in recent years. Having worked
for mid-sized agencies for much of the last 20 years, there are plenty not worth
talking about (anymore). Enjoy!

{% assign sorted_projects = (site.projects | sort: 'year' | reverse ) %}

{% for project in sorted_projects %}
<ul class="no-bullet">
    {% include project-overview.html project=project %}
</ul>
{% endfor %}

