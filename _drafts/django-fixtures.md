---
layout: post
title:  "Fixtures in Django 1.7+"
date:   2015-07-26 21:20:00
categories: django
---
Django had support for loading initial data into a database before Django 1.7. It was simple: put a file called `initial_data.json` in the `fixtures` folder of one of your Django apps and it will be loaded into your database each time the application starts up. It looked a little something like this:

{% highlight json %}
[
  {
    "model": "app_name.person",
    "pk": 1,
    "fields": {
      "first_name": "Grant",
      "last_name": "McConnaughey"
    }
  }
]
{% endhighlight %}

This would create a new entry into the database table for your `Person` model. Easy, right?

Well, it was.

Since the addition of migrations in Django 1.7 there is no longer support for automatic loading of data if your app uses migrations. The [Django documentation](https://docs.djangoproject.com/en/1.8/howto/initial-data/#automatically-loading-initial-data-fixtures) recommends creating a migration to load your initial data. So let's see how to do that.

## Option 1: Using loaddata the old fashioned way

If you are dead set on using your old `initial_data.json` files then know that you can still do that. Let's say the app is called `location` and it has a model called `State`. Your fixture loads data for all 50 U.S. states.

First you will need to create a migration for your app. Run the following command: `python manage.py makemigrations --empty location`. This will create a new migration in your app's `migrations` folder. The migration will be pretty empty; it will probably look something like this:

{% highlight python %}
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
    ]
{% endhighlight %}

Next, edit the migration so that it calls the `loaddata` command, passing your fixture's file name in the process.

{% highlight python %}
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.management import call_command
from django.db import models, migrations


def load_fixture(apps, schema_editor):
    call_command('loaddata', 'initial_data', app_label='location')


def unload_fixture(apps, schema_editor):
    State = apps.get_model("location", "State")
    State.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_fixture, reverse_code=unload_fixture),
    ]
{% endhighlight %}

The fixture will be loaded when you run `python manage.py migrate`. After your fixture is loaded into the database it won't be loaded again.

## Option 2: Using the Django ORM