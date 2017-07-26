---
title: Sports Betting Application
tags: rails ruby
year: 2015
---

This still-in-development app is a unique take on sports betting. It is for a
closed-community of friends who like to gamble on various sports, and the system
doesn't touch money in any form (so it's not illegal in the US!).

I wrote the app from scratch based on the business requirements given to me (which had been modeled on an offline process in use for a few years). The app is built in Rails since this was a customized application that would have no CMS needs. I used RSpec and TDD heavily, to the point that the app currently has 90.26% spec coverage of the 2.5K lines of code with 1306 (passing!) specs.

I got to use service and form objects (based on the <a href="http://trailblazer.to/">Trailblazer approach</a>) for
the first time in a large app, and it helped me develop a very clean
architecture. So much so point that even though we didn't originally plan to
provide a native mobile experience, I feel confident that with the built-in
Rails JSON responders and a few serializers, I can add one quickly.

The app was originally started in Rails 4.2, but has since been updated for Rails 5.1.
