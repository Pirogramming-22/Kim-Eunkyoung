# Generated by Django 5.1.2 on 2025-01-20 22:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("comments", "0001_initial"),
        ("pirostagram", "0002_alter_post_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="comment",
            name="content",
            field=models.TextField(verbose_name="댓글 내용"),
        ),
        migrations.AlterField(
            model_name="comment",
            name="post",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="comments",
                to="pirostagram.post",
            ),
        ),
    ]
