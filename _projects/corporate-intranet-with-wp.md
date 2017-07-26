---
title: Corporate Intranet in Wordpress 
tags: wordpress
year: 2017
---

I had a client that had an older .NET intranet that was working very well for
them. The previous development team had too much turnover for them to adequately
support this client, and so they asked for options. After reviewing the state of
the .NET code (which I kinda sorta can read, sometimes), it became clear that
the site had been over-engineered and was much more complex than it needed to
be. 

I advised the client that it would be faster and cheaper to replace what they had with WP and a few carefully selected plugins (for managing IT tickets, employee directory, etc). We also had to tie into their Active Directory system for authentication. That wasn't a problem, nor was running WP on a Windows server. The challenge was that all the employee directory plugins out there are disconnected from WP's built-in user management tools. That would prevent the client's staff from managing their own information, as well as create 2 records in WP for every employee. So I developed a custom plugin that created an employee directory from WP's user tables, tying it in with both AD and a custom office map tool so that everything was integrated in a way that made sense to the non-IT editing team: one employee = one place to manage access, birthday, office location, etc.

A huge win for the client's sanity and productivity!
