import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from Data_Preprocessor import Label_Processor
from Risk_Generator import Risk_ge
from RF import rf_train
from SVM import SVM_train
from NN import NN_train
import matplotlib.pyplot as plt

def main_model(model = 'rf', mode = 'all'):

    train_set = pd.read_csv('syndatasets/train_with_noise.csv')
    test_set = pd.read_csv('syndatasets/test_with_noise.csv')
    
    train = train_set.values
    test = test_set.values

    y_train = np.ravel(pd.read_csv('syndatasets/train_label').values)
    y_test = np.ravel(pd.read_csv('syndatasets/test_label').values)

    y_train, y_test = Label_Processor(y_train, y_test)
    
    if model == 'rf':
        result = rf_train (mode, train, y_train, test)
    elif model == 'svm': 
        result = SVM_train (mode, train, y_train, test)
    elif model == 'nn':  result = NN_train(mode, train, y_train, test)

    return result
    
    # l = []
    # for i,a in enumerate(result):
    #     if a == 0: l.append('Low')
    #     elif a == 1 : l.append('Medium')
    #     else: l.append('High')
    # print(l)
<<<<<<< HEAD
main_model('rf','all')
=======

    
>>>>>>> parent of 189b814 (risk noise + code correct)
