from django.contrib import admin

from django.contrib import admin
from .models import phred


class phredAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "date",
        "PH",
        "Soil",
        "Nitrate",
        "Turbidity",
        "Image",
        "Online",
    )


# Register your models here.

admin.site.register(phred, phredAdmin)
