from django.db import models

class DriverInfo(models.Model):
    name = models.CharField(max_length=200, default="NULL")
    photoid = models.ImageField(upload_to='photoid/')
    driving_license = models.ImageField(upload_to='licenses/')
    phone_no = models.BigIntegerField(unique=True , blank=False)
    gender = models.CharField(max_length = 200 ,blank=False)
    age = models.IntegerField(blank=False)
    profile_pic = models.ImageField(upload_to='profiles/')

