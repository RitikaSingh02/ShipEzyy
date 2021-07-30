# Generated by Django 2.2 on 2021-07-30 15:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Vehicles', '0001_initial'),
        ('Customer', '0001_initial'),
        ('Driver', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='RideInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('damage_points', models.IntegerField()),
                ('delivery_points', models.IntegerField()),
                ('time_points', models.IntegerField()),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Customer.CustomerInfo')),
                ('driver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Driver.DriverInfo')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Vehicles.VehicleInfo')),
            ],
        ),
    ]
