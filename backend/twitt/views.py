from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from numpy import dot
from numpy.linalg import norm
from random import random, choice
import tweepy as tw
from .models import TwitterUser, Twitt

b_token = 'AAAAAAAAAAAAAAAAAAAAAEfNiwEAAAAAG35ciH%2FeCqpqlpkB8%2BWkIHQmWw0%3DHQ99wLt1dMUKErsZH36gorK3rcMZJDHrG940Fn3g5461dj9tRI'


class TokenizerMock:
    def __call__(self, text):
        return [choice([-1, 1]) * random() for _ in range(100)]

class SimilarityFunction:
    def __call__(self, a, b):
        return dot(a, b)/(norm(a)*norm(b))

class TwittSaveView(APIView):

    def post(self, request):
        url = request.data.get('url')
        if url:
            tweet_id = url.split('/')[-1]
            client = tw.Client(bearer_token=b_token)
            tweet = client.get_tweet(id=tweet_id,expansions='author_id')
            username = tweet.includes['users'][0]['username']
            twitterUser = TwitterUser(username=username)
            twitterUser.save()
            tokenizer = TokenizerMock()
            vector = tokenizer(text=tweet.data['text'])
            vector_string = ' '.join(str(e) for e in vector)
            twitt = Twitt(url=url, vector=vector_string, author=twitterUser)
            twitt.save()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class TwittCompareView(APIView):

    def get(self, request):
        url = self.request.GET.get('url')
        if url:
            n = 3
            tweet_id = url.split('/')[-1]
            client = tw.Client(bearer_token=b_token)
            tweet = client.get_tweet(id=tweet_id,expansions='author_id')
            tokenizer = TokenizerMock()
            vector = tokenizer(text=tweet.data['text'])
            
            sim_fun = SimilarityFunction()
            Twitt_list = Twitt.objects.all()
            top = []
            def sort_top(e):
                return e[1]
            for twitt in Twitt_list:
                vect = list(map(float, twitt.vector.split()))
                similarity = sim_fun(vect, vector)
                if len(top) < n:
                    top.append([twitt.url,similarity])
                else:
                    top.sort(key=sort_top)
                    for e in top:
                        if similarity > e[1]:
                            e[0] = twitt.url
                            e[1] = similarity
                            break
            data = [e[0] for e in top]
            return Response(data=data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)
            