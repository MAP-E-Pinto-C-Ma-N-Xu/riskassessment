import pickle
import pandas as pd
file = open('rf_all.pkl','rb')
model = pickle.load(file)
test = pd.read_csv('syndatasets/test_with_noise.csv').values
print(model.predict(test))