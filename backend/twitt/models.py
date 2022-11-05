from django.db import models

class TwitterUser(models.Model):
    username = models.CharField(max_length=256)

class Twitt(models.Model):
    url = models.URLField(max_length=200, unique=True)
    vector = models.CharField(max_length=8192)
    author = models.ForeignKey(TwitterUser, on_delete=models.CASCADE)

