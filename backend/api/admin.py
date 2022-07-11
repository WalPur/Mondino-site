from django.contrib import admin

from .models import Partner


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['id', 'full_name', 'org_name']
    list_filter = ['date', 'org_employees']
    search_fields = ['org_name', 'full_name']
