from django.urls import path


from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'),
    path('user/',views.user,name = 'user'),
    path('auth/',views.auth, name='auth')
]