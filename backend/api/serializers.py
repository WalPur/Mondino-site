from rest_framework import serializers

from api.models import Partner


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
