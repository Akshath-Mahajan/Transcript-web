# Generated by Django 3.1.5 on 2021-04-30 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_marksheet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='marksheet',
            name='file',
            field=models.ImageField(blank=True, null=True, upload_to='marks'),
        ),
    ]
