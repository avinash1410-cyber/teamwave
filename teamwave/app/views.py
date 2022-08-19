import re
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
import requests
# Create your views here.
# https://api.stackexchange.com/2.3/search/advanced?page=2&pagesize=2&order=desc&sort=activity&site=stackoverflow
from rest_framework.throttling import ScopedRateThrottle





class search(APIView):
    throttle_scope = 'search'
    throttle_classes = (ScopedRateThrottle,)
    def post(self, request):
        #we have to create a link there
        base_url="https://api.stackexchange.com/2.3/search/advanced?"
        i=0
        res=""
        for key in request.data:
            if(request.data[key]):
                if i==0:
                    res=res+key+"="+request.data[key]
                    i=1
                else:
                    res=res+"&"+key+"="+request.data[key]
        url=base_url+res
        print(url)
        return Response(url)