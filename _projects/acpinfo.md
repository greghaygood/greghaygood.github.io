---
title: Atlanta Celebrates Photography
tags: react react-native ios wordpress
project_url: https://festivalguide2017.acpinfo.org
year: 2016
---

Atlanta Celebrates Photography is an annual fall festival supporting Atlanta's
photography scene. They have a platform that allows the venues, galleries, and
promoters to register their events, which then disseminates the information to
the city's arts patrons to allow them to experience everything.

I first got introduced to ACP in 2016 when they needed an updated mobile app.
They had an older iOS app, but after updating the back-end, a total rewrite was
required. I suggested React Native would be a good alternative, since their
content needs were straightforward, plus it would allow them to support both of
the major platforms with minimal additional effort.

Sadly, React Native was a little too new at the time, and the Android libraries
I needed weren't quite ready. The iOS app worked great, however.

In 2017, they allowed me to rewrite the back-end to better unify their overall
digital experience. I used WordPress as a familiar CMS platform plus its API
capabilities, plus React for the new registration system for the participating
venues. Then I quickly updated the existing React Native app for the new API
endpoints, along with the necessary fixes to deploy the app on Android.
