from django.db import models

class AdminInfo(models.Model):
    username = models.CharField(max_length=200, blank = False, default="NULL")
    password =models.CharField(max_length=200, blank = False, default="NULL")
    email = models.EmailField(max_length=200, default="NULL")
    date_created = models.DateTimeField()
