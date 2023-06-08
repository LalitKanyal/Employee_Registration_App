from django.contrib import admin
from .models import Employee

class EmployeeAdmin(admin.ModelAdmin):
    list_display=['full_name','contact','email','address']
admin.site.register(Employee, EmployeeAdmin)