from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.serializers import PartnerSerializer, CardSerializer, ArticleSerializer
from api.models import Partner, Card, Article


class formPartner(generics.CreateAPIView):
    queryset = Partner.objects.all()
    serializer_class = PartnerSerializer


@api_view(['GET'])
def formCards(request):
    queryset = Card.objects.all()
    serializer_class = CardSerializer(queryset, many=True)
    return Response(serializer_class.data)


@api_view(['GET'])
def formCard(request, cardId):
    queryset = Article.objects.filter(card=cardId)
    serializer_class = ArticleSerializer(queryset, many=True)
    return Response(serializer_class.data)

@api_view(['GET'])
def formArticle(request, articleId):
    queryset = Article.objects.filter(id=articleId)
    serializer_class = ArticleSerializer(queryset, many=True)
    return Response(serializer_class.data)
