# Generated by Django 3.2.9 on 2021-12-21 21:20

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('canyoneering_app', '0008_canyon_details_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='canyon_details',
            name='user',
        ),
        migrations.AddField(
            model_name='canyon_details',
            name='user',
            field=models.ManyToManyField(related_name='canyons', to=settings.AUTH_USER_MODEL),
        ),
    ]
