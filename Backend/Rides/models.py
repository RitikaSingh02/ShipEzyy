from django.db import models
from Customer.models import CustomerInfo
from Vehicles.models import VehicleInfo
from Driver.models import DriverInfo

class RideInfo(models.Model):
    customer = models.ForeignKey( CustomerInfo, on_delete=models.CASCADE)
    driver = models.ForeignKey( DriverInfo, on_delete=models.CASCADE)
    vehicle = models.ForeignKey( VehicleInfo, on_delete=models.CASCADE)
    damage_points = models.IntegerField(blank=False)
    delivery_points = models.IntegerField(blank=False)
    time_points= models.IntegerField(blank=False)
