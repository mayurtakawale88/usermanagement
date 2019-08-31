#from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import User, Role, UserRoles


class RoleListingField(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return int(value)


class UserSerializer(serializers.ModelSerializer):
    roles = RoleListingField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id','username', 'first_name', 'last_name', 'description', 'roles']


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'roles', 'description']


class UserRolesSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    role_id = serializers.IntegerField()

    class Meta:
        model = UserRoles
        fields = ['user_id', 'role_id']