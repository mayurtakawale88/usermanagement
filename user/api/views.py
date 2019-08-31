from .serializers import UserSerializer, RoleSerializer, UserRolesSerializer
from .models import User, Role, UserRoles
from rest_framework import generics, mixins


class UserAll(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        userid = instance.id
        for i in self.request.data['roles']:
            roles = {
                'user_id': userid,
                'role_id': i
            }
            queryset = UserRolesSerializer(data=roles)

            if queryset.is_valid():
                queryset.save()


class UserView(generics.RetrieveUpdateDestroyAPIView, mixins.RetrieveModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
        userid = instance.id
        queryset = UserRoles.objects.filter(user_id=userid)
        queryset.delete()
        for i in self.request.data['roles']:
            roles = {
                'user_id': userid,
                'role_id': i
            }
            queryset = UserRolesSerializer(data=roles)

            if queryset.is_valid():
                queryset.save()


class RolesView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

