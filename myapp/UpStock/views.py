from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def index(req):
    print("Request arrived")

    return HttpResponse("Request arrived successfully!")


@csrf_exempt
def auth(req):
    username = req.POST.get('Username')
    password = req.POST.get('Password')
    print(username,password)


    return HttpResponse("User authenticated")

def user(req):

    print("request arrived")
    return render(req,'login.html')