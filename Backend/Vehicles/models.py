from django.db import models
from Driver.models import DriverInfo

class VehicleInfo(models.Model):
    driver = models.ForeignKey( DriverInfo, on_delete=models.CASCADE)
    vehicle_registration = models.ImageField(upload_to='vehicle_registration/')
    vehicle_insurance = models.ImageField(upload_to='vehicle_insurance/')
    vehicle_permit = models.ImageField(upload_to='vehicle_permit/')
    vehicle_photo = models.ImageField(upload_to='vehicle_photo/')
