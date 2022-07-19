from rest_framework import serializers

from api.models import Partner, Card, Article


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = (
            "id",
            "org_name",
            "full_name",
            "phone_number",
            "org_email",
            "org_employees"
        )

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = (
            "id",
            "title",
            "content",
            "card"
        )

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = (
            "id",
            "title",
            "desc",
            "image",
            "slug",
        )
    @staticmethod
    def get_articles(obj):
        return ArticleSerializer(Article.objects.filter(q=obj), many=True).data
