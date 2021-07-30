import json
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login , logout

def first(request):
    email = "ritika2002singh@gmail.com"
    password = make_password("KIET123@s")
    query = User.objects.create(username = "RitikaSingh02" , password = password , email = email)
    return JsonResponse("yes" , safe=False)


