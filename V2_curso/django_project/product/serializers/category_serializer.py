from rest_framework import serializers

from product.models.category import Category


class CategorySeralizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'title',
            'slug',
            'description',
            'active'
        ]