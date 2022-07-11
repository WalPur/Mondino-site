from django.db import models

class Partner(models.Model):
    """Модель заявки партнера."""

    org_name = models.CharField(max_length=255, verbose_name="Название организации")
    full_name = models.CharField(max_length=255, verbose_name="ФИО ответственного")
    org_email = models.EmailField(max_length=255, verbose_name="Эл. почта")
    org_employees = models.CharField(max_length=255, verbose_name="Кол-во сотрудников")
    date = models.DateTimeField(auto_now=True, verbose_name="Время отправки формы")

    def __str__(self):
        return f'{self.org_name} - {self.full_name}'

    class Meta:
        verbose_name = 'Заявка партнера'
        verbose_name_plural = 'Заявки партнеров'
