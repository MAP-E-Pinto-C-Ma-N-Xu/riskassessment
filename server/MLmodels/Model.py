import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from Data_Preprocessor import Label_Processor
from Risk_Generator import Risk_ge
from RF import RF_train
from SVM import SVM_train
from NN import NN_train
import matplotlib.pyplot as plt

def main_model(model = 'rf', mode = 'all', Para1 = 500, Para2 = None, Para3 = 'balanced'):

    train_set = pd.read_csv('syndatasets/train_with_noise.csv')
    test_set = pd.read_csv('syndatasets/test_with_noise.csv')
    
    train = train_set.values
    test = test_set.values

    y_train = np.ravel(pd.read_csv('syndatasets/train_label').values)
    y_test = np.ravel(pd.read_csv('syndatasets/test_label').values)

    y_train, y_test = Label_Processor(y_train, y_test)
    
    if model == 'rf':
        ML_model = RF_train (mode)
    elif model == 'svm': 
        ML_model = SVM_train (mode)
    elif model == 'nn':  
        ML_model = NN_train (mode)

    ML_model.add_confi(Para1,Para2,Para3)
    ML_model.train(train,y_train)

    result = ML_model.predict(test)
    return result
    
    # l = []
    # for i,a in enumerate(result):
    #     if a == 0: l.append('Low')
    #     elif a == 1 : l.append('Medium')
    #     else: l.append('High')
    # print(l)
print(main_model('rf','all'))
