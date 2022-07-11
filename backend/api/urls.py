from django.urls import path

from api.views import formPartner

urlpatterns = [
    path('partner/', formPartner.as_view(), name='partner-form'),
]
