from rest_framework import serializers

from api.models import Partner, Card, Article, TextLine, TextBlock


class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = "__all__"


class TextLineSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextLine
        fields = ("text", )

class TextBlockSerializer(serializers.ModelSerializer):
    lines = serializers.SerializerMethodField()
    class Meta:
        model = TextBlock
        fields = (
            "id",
            "title",
            "lines",
            "image"
        )
    @staticmethod
    def get_lines(obj):
        return TextLineSerializer(obj.lines.all(), many=True).data


class ArticleSerializer(serializers.ModelSerializer):
    blocks = serializers.SerializerMethodField()
    class Meta:
        model = Article
        fields = "__all__"
    @staticmethod
    def get_blocks(obj):
        return TextBlockSerializer(obj.blocks.all(), many=True).data


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = "__all__"

    @staticmethod
    def get_articles(obj):
        return ArticleSerializer(Article.objects.filter(q=obj), many=True).data


