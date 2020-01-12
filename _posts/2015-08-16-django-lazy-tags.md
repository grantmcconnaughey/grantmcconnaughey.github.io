---
layout: post
title:  "Django Lazy Tags"
date:   2015-08-16 21:10:00
categories: django projects
comments: true
---
I work on a web application called [SideKick](https://sidekick.sidecarsinc.com). SideKick has several dashboards depending on the type of person logged in. The "type of person" could be an employee of SideCars (the company where I work), the owner of a car dealership, or a dealer's agent. Each dashboard has lots of handy widgets, as dashboards are wont to do. We contain the logic of each widget in a Django template tag so they can easily be resused. Here's an example of a widget:

<div style="text-align: center;">
    <img src="/images/django-lazy-tags/widget.png" alt="A SideKick dashboard widget" class="post-image-small" />
</div>

Imagine that on the back-end this widget calls some third party quote of the day API. You wouldn't want to slow down your page response just so you can send a request to the quotes API, receive the JSON response, parse it, and render the template tag. If the API is receiving an unusually large amount of requests then it will be very slow to respond to yours. If the API is having network issues then it will, again, be *slow*. Not cool.

That kind of issue is where Django lazy tags comes in.

## Enter Django Lazy Tags

[Django lazy tags](https://github.com/grantmcconnaughey/django-lazy-tags) strives to create an easy, reusable way to add AJAX to your template tags. In the quotes widget example I could use Django lazy tags to render the widget after the page has already loaded. This has the benefit of not blocking the response to the user.

To use the Django lazy tags, first install the package using [the instructions in the documentation](http://django-lazy-tags.readthedocs.org/en/latest/). Have you done that? Good. Now let's say you have a template tag called `quote_widget` in a tag library called `widget_tags`. All you need to do to make this a "lazy" tag is load the `lazy_tags` library and use the `lazy_tag` tag in your template:

{% highlight django %}
{% raw %}
{% load lazy_tags %}

{% lazy_tag 'widget_tags.quote_widget' %}
{# Notice the 'tag_library.tag_name' syntax #}
{% endraw %}
{% endhighlight %}

This will output a placeholder where the AJAX call will spit out the tag HTML after it has loaded. Speaking of which, we still need to put the lazy tag JavaScript on the page so that it will make the AJAX calls. To do that, call the `lazy_tags_js` tag.

{% highlight django %}
{% raw %}
{% lazy_tags_js %}
{% endraw %}
{% endhighlight %}

All done! The quote widget will now be blank when the page loads. Then when the page is finished loading, an AJAX call will be sent to your application, the tag HTML will be generated, and it will be sent back to the client. A nice loading spinner gif will even display while all of that is happening.

There are several settings I haven't mentioned, as well as a cool decorator syntax that turns your template tags into lazy tags with nothing more than a single decorator. To submit issues or pull requests for this package, check it out on [Github](https://github.com/grantmcconnaughey/django-lazy-tags). You can also read about the package on [PyPI](https://pypi.python.org/pypi/django-lazy-tags).
