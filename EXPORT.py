import pymongo
import pandas as pd
myclient = pymongo.MongoClient("mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/AuthTest?retryWrites=true&w=majority")
db=myclient.AuthTest
data=db.tensorschemas
data=[i for i in data.find()]
pd.DataFrame(data).to_csv("Export.csv",index=False)