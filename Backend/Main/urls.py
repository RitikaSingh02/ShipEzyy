from django.urls import path 
from .views import first

urlpatterns = [
    path('home' , first)
]