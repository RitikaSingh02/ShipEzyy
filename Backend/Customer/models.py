from django.db import models

class CustomerInfo(models.Model):
    name=models.CharField(max_length=200, default="NULL")
    email=models.EmailField(max_length=200, default="NULL")
    phone_no=models.BigIntegerField(unique=True , blank=False)
    password=models.CharField(max_length = 200 ,blank=False)

