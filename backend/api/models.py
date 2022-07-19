from django.db import models


class Partner(models.Model):
    """Модель заявки партнера."""

    org_name = models.CharField(max_length=255, verbose_name="Название организации")
    full_name = models.CharField(max_length=255, verbose_name="ФИО ответственного")
    phone_number = models.CharField(max_length=255, verbose_name="Номер ответственного лица")
    org_email = models.EmailField(max_length=255, verbose_name="Эл. почта")
    org_employees = models.CharField(max_length=255, verbose_name="Кол-во сотрудников")
    date = models.DateTimeField(auto_now=True, verbose_name="Время отправки формы")

    def __str__(self):
        return f'{self.org_name} - {self.full_name}'

    class Meta:
        verbose_name = 'Заявка партнера'
        verbose_name_plural = 'Заявки партнеров'


class Card(models.Model):
    """Модель карточки"""

    title = models.CharField(max_length=255, verbose_name="Заголовок карточки")
    desc = models.TextField(verbose_name="Описание карточки")
    image = models.ImageField(upload_to='cards/', verbose_name="Иконка карточки")
    slug = models.CharField(max_length=255, blank=True, verbose_name="Опциональная ссылка на страницу")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Карточка статей'
        verbose_name_plural = 'Карточки статей'


class Article(models.Model):
    """Модель статьи"""

    title = models.CharField(max_length=255, verbose_name="Заголовок статьи")
    content = models.TextField(verbose_name="Содержимое статьи")
    card = models.ForeignKey(Card, on_delete=models.CASCADE, verbose_name="Карточка статьи")

    def __str__(self):
        return f'{self.card} {self.content[:25]}'

    class Meta:
        verbose_name = "Статья"
        verbose_name_plural = "Статьи"
