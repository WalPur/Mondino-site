from django.urls import path

from api.views import formPartner, formCards, formCard, formArticle

urlpatterns = [
    path('partner/', formPartner.as_view(), name='partner-form'),
    path('cards/', formCards, name='card-form'),
    path('card/<int:cardId>/', formCard, name='card-articles-form'),
    path('article/<int:articleId>/', formArticle, name="article-form")
]
