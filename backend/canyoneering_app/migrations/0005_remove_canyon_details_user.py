# Generated by Django 3.2.9 on 2021-12-20 21:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('canyoneering_app', '0004_auto_20211220_2155'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='canyon_details',
            name='user',
        ),
    ]
