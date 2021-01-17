import numpy as np
import pandas as pd
import nltk
nltk.download('punkt') # one time execution
import re
from newsCode import newsApiFrame as frame
import pandas as pd
Frame = frame()
df = Frame.returnMainFrame()
print(df["content"][0])
from nltk.tokenize import sent_tokenize
sentences = []
for s in df['content']:
  sentences.append(sent_tokenize(s))

sentences = [y for x in sentences for y in x] # flatten list