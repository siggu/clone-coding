# Generated by Django 4.2.4 on 2023-09-03 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0002_room_name_alter_amenity_description'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='amenity',
            options={'verbose_name_plural': 'Amenities'},
        ),
    ]
