# Generated by Django 3.2.12 on 2024-05-03 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0006_auto_20240412_1836'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermessage',
            name='room',
        ),
        migrations.DeleteModel(
            name='Room',
        ),
        migrations.DeleteModel(
            name='UserMessage',
        ),
    ]
