- improve build performance on big sites using multiprocessing
- with lazy parsing of markdown modifiers are now a little less powerful, as they cannot access the page html without serious performance hits. Must rethink how the default classes are modified by users completely.
- add query language to better retrieve data without creating alternative indexes using modifiers
- add miners watchdog to rebuild the map only if the files have been changed instead of doing this in a loop.