from django.db import models
from django.contrib.auth.models import User


# class User(models.Model):
#     user_name = models.CharField(max_length=255)
#     email = models.CharField(max_length=50)
    
#     def __str__(self):
#         return f"{self.user_name} {self.email}"

class Canyon_Details(models.Model):
    user = models.ManyToManyField(User, related_name='canyon')
    canyon_name = models.CharField(max_length=255)
    rating = models.CharField(max_length=8)
    length = models.CharField(max_length=15)
    gear = models.CharField(max_length=255)
    rappels = models.CharField(max_length=255)
    water = models.CharField(max_length=255)
    flashflood = models.CharField(max_length=255)
    access = models.CharField(max_length=10)
    description = models.TextField()
    latitude = models.CharField(max_length=10, default='')
    longitude = models.CharField(max_length=10, default='')

    def __str__(self):
        return f"{self.canyon_name} {self.rating} {self.length} {self.gear} {self.rappels} {self.water} {self.flashflood} {self.access} {self.description} {self.latitude} {self.longitude}"

