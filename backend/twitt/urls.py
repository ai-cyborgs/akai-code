
from django.urls import path
from .views import TwittSaveView, TwittCompareView

urlpatterns = [
     path('twittSave/', TwittSaveView.as_view(), name="twittSave"),
     path('twittCompare/', TwittCompareView.as_view(), name="twittCompare"),
]