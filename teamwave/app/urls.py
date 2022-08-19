import imp
from .views import search
from django.urls import path
urlpatterns = [
    path('', search.as_view()),
]
