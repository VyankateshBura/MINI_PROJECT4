from . import views
from django.urls import path,include

urlpatterns=[
    path('uploadfile/',views.uploadfile,name="uploadfile")
]