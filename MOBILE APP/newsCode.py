from newsapi import NewsApiClient
newsapi = NewsApiClient(api_key='c767f495a8724e6dbdb9a66ca65aca08')
import pandas as pd
class newsApiFrame():
    def __init__(self):
        self.top_headlines = newsapi.get_top_headlines(q='trump',
                                          category='business',
                                          language='en',
                                          country='us')
        all_articles = newsapi.get_everything(q='politics',
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      from_param='2021-01-01',
                                      to='2021-01-12',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)
    def returnMainframe(self):
        mainframe = pd.DataFrame(columns=["source",	"author",	"title",	"description",	"url",	"urlToImage",	"publishedAt",	"content"])
        print(self.top_headlines["articles"][0])
        data = self.top_headlines["articles"]
        i = 0
        sources = []
        authors = []
        titles = []
        descriptions = []
        url = []
        content = []
        imgs= []
        for article in self.top_headlines["articles"]:
            sources+= [article["source"]["name"]]
            authors+= [article["author"]]
            titles += [article["title"]]
            url += [article["url"]]
            content+=[article["content"]]
            descriptions+=[article["description"]]
            mainframe["source"] = sources
            mainframe["author"] = authors
            mainframe["title"] = titles
            mainframe["url"] = url
            mainframe["content"] = content
            mainframe["description"] = descriptions
            return mainframe

