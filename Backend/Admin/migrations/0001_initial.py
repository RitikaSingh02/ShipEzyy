# Generated by Django 2.2 on 2021-07-30 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='NULL', max_length=200)),
                ('password', models.CharField(default='NULL', max_length=200)),
                ('email', models.EmailField(default='NULL', max_length=200)),
                ('date_created', models.DateTimeField()),
            ],
        ),
    ]
