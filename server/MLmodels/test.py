import numpy as np
import pickle


float_features = [2.0,1.0,0.0,7.0,1.0,3.3,0.0,24.0,1.77]
features = [np.array(float_features)]

with open('svm_all.pkl',"rb") as f:
    svm_default = pickle.load(f)



print(svm_default.predict(features))


