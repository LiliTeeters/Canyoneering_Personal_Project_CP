# Generated by Django 3.2.9 on 2021-12-20 22:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('canyoneering_app', '0007_auto_20211220_2202'),
    ]

    operations = [
        migrations.AddField(
            model_name='canyon_details',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='canyon', to=settings.AUTH_USER_MODEL),
        ),
    ]
