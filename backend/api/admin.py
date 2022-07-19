from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Partner, Card, Article


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'org_name']
    list_filter = ['date', 'org_employees']
    search_fields = ['org_name', 'full_name']

@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
    search_fields = ['title', 'desc']

@admin.register(Article)
class CardAdmin(SummernoteModelAdmin):
    list_display = ['id', 'content']
    search_fields = ['content',]