from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('client.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls'))
]
