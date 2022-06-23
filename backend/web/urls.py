from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from web.views import index


urlpatterns = [
    path('', index),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)