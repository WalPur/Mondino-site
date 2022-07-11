from rest_framework import generics


from api.serializers import PartnerSerializer
from api.models import Partner


class formPartner(generics.CreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer
