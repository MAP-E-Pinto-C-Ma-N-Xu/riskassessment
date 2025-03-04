import numpy as np
import pandas as pd
from algorithms.RF import RF_train
from algorithms.SVM import SVM_train
from algorithms.NN import NN_train
import warnings

def main_model(model = 'rf', mode = 'all', confi = False, Para1 = 500, Para2 = None, Para3 = 2):

    train_set = pd.read_csv('./syndatasets/train_with_noise.csv')
    # test_set = pd.read_csv('syndatasets/test_with_noise.csv')
    
    train = train_set.values
    # test = test_set.values

    y_train = np.ravel(pd.read_csv('./syndatasets/train_label').values)
    # y_test = np.ravel(pd.read_csv('syndatasets/test_label').values)

    # build default models
    if model == 'rf':
        ML_model = RF_train (mode)
    elif model == 'svm': 
        ML_model = SVM_train (mode)
    elif model == 'nn':  
        ML_model = NN_train (mode)

    # add configuration 
    if confi == True:
        ML_model.add_confi(Para1,Para2,Para3)
    else: warnings.warn('You may want to add configurations, to do so, please set confi=True and add the parameters!')

    ML_model.train(train,y_train)
    # result = ML_model.predict(test)
    result = None

    return ML_model.get_model(), result
