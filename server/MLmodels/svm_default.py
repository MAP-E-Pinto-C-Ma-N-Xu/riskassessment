import pickle
import numpy as np
import pandas as pd
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from Data_Preprocessor import Label_Processor



train_set = pd.read_csv('syndatasets/train_with_noise.csv')
test_set = pd.read_csv('syndatasets/test_with_noise.csv')
    
train = train_set.values
test = test_set.values

y_train = np.ravel(pd.read_csv('syndatasets/train_label').values)
y_test = np.ravel(pd.read_csv('syndatasets/test_label').values)

y_train, y_test = Label_Processor(y_train, y_test)
x_train = np.copy(train)


classifier = make_pipeline(StandardScaler(), svm.NuSVC(kernel='rbf',nu=0.01,cache_size=4000))
classifier.fit(x_train, y_train)



float_features = [2.0,1.0,0.0,7.0,1.0,3.3,0.0,24.0,1.77]
features = [np.array(float_features)]


pickle.dump(classifier,open("svm_all.pkl","wb"))




