from django.urls import path

from api.views import formPartner, formCards, formCard

urlpatterns = [
    path('partner/', formPartner.as_view(), name='partner-form'),
    path('cards/', formCards, name='card-form'),
    path('card/<int:cardId>/', formCard, name='card-articles-form')
]
