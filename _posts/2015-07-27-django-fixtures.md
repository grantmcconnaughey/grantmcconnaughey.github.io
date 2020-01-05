---
layout: post
title:  "Fixtures in Django 1.7+"
date:   2015-07-27 23:30:00
categories: django
comments: true
---
Django had support for loading initial data into a database before Django 1.7. It was simple: put a file called `initial_data.json` in the `fixtures` folder of one of your Django apps and it will be loaded into your database each time the application starts up. It looked a little something like this:

```json
[
  {
    "model": "location.state",
    "pk": 1,
    "fields": {
      "code": "MO",
      "name": "Missouri"
    }
  }
]
```

This would create a new entry into the database table for your `State` model. Easy, right?

Well, it was. It was also fragile. Any time you made model changes you had to update your fixtures. Not ideal.

Since the addition of migrations in Django 1.7 there is no longer support for automatic loading of data if your app uses migrations. The [Django documentation](https://docs.djangoproject.com/en/1.8/howto/initial-data/#automatically-loading-initial-data-fixtures) recommends creating a migration to load your initial data. There are two options for doing this.

## Option 1: Using loaddata the old fashioned way

If you are dead set on using your old `initial_data.json` files then know that you can still do that. Let's say you have an app called `location` and it has a model called `State`. Your fixture loads data for all 50 U.S. states.

First you will need to create a migration for your app. Run the following command: `python manage.py makemigrations --empty location`. This will create a new migration in your app's `migrations` folder. The migration will be pretty empty; it will probably look something like this:

```python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
    ]
```

Next, edit the migration so that it calls the `loaddata` command, passing your fixture's file name in the process.

```python
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
```

The fixture will be loaded when you run `python manage.py migrate`. After your fixture is loaded into the database it won't be loaded again.

## Option 2: Using the Django ORM

The second option is to use the Django ORM directly. It starts out very much like the first. Create an empty migration by running `python manage.py makemigrations --empty location`. Then update your newly created migration file to look like this:

```python
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.core.management import call_command
from django.db import models, migrations


def create_states(apps, schema_editor):
    pass


def remove_states(apps, schema_editor):
    State = apps.get_model("location", "State")
    State.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('location', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_states, reverse_code=remove_states),
    ]
```

When using `RunPython` your forward and reverse functions receive two arguments. The first is an instance of `django.apps.registry.Apps` and the second is an instance of `SchemaEditor`. We will really only need the first in order to get the `State` model class. Calling `apps.get_model("location", "State")` should do the trick. After that, use the Django ORM to create any of the database entries that you need. If we want entries for Missouri, New York, and California then the `create_states` function would look like this:

```python
def create_states(apps, schema_editor):
    State = apps.get_model("location", "State")
    State.objects.bulk_create([
        State(code="MO", name="Missouri"),
        State(code="NY", name="New York"),
        State(code="CA", name="California"),
    ])
```

This option is certainly easier if you only need to create a few records.