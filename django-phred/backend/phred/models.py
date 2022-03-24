from django.db import models

# Create your models here.


class phred(models.Model):
    name = models.CharField(max_length=120)
    date = models.TextField()
    PH = models.TextField()
    Soil = models.TextField()
    Nitrate = models.TextField()
    Turbidity = models.TextField()
    Image = models.TextField()
    Online = models.BooleanField(default=False)

    def _str_(self):
        return self.title
