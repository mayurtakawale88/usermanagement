from django.db import models


class User(models.Model):
    username = models.CharField(max_length=255, unique=True, null=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    description = models.TextField()

    class Meta:
        db_table = 'user'


class Role(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    roles = models.TextField()

    class Meta:
        db_table = 'role'


class UserRoles(models.Model):
    user = models.ForeignKey(User, related_name='roles', on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.SET('NULL'))

    class Meta:
        db_table = 'user_roles'
        unique_together = ['user', 'role']

    def __str__(self):
        return '%d' % self.role_id

