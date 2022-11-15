import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPClassifier
import pickle
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

class NN_train: 
    """""
    The NN trainner 
    Para1: hidden layer
    Para2: activation function
    Para3: learning rate
    """""
    def __init__(self, mode) -> None:
        self.mode = mode
        if mode == 'noVI':
            self.hls = (64, 256, 256, 48)
            self.act = 'relu'
            self.alpha = 0.05

        elif mode == 'noAW':
            self.hls = (64, 256, 256, 48)
            self.act = 'relu'
            self.alpha = 0.0001

        elif mode == 'noBOTH':
            self.hls = (64, 256, 256, 48)
            self.act = 'tanh'
            self.alpha = 0.0001

        self.hls = (256, 256 ,256, 256, 64)
        self.act = 'relu'
        self.alpha = 0.0001

    def add_confi(self, hls, act, alpha):

        self.hls = hls
        self.act = act
        self.alpha = alpha

    def train(self, x_train_, y_train_):

        x_train = np.copy(x_train_)
        y_train = np.copy(y_train_)

        if self.mode == 'noVI':
            x_train = np.delete(x_train, 3, 1)
  
        elif self.mode == 'noAW':
            x_train = np.delete(x_train, 6, 1)
            
        elif self.mode == 'noBOTH':
            x_train = np.delete(x_train, [3,6], 1)

        self.clf = make_pipeline(StandardScaler(),MLPClassifier(hidden_layer_sizes= self.hls, activation=self.act, alpha=self.alpha, learning_rate= 'adaptive', solver= 'adam', early_stopping=True))
        self.clf.fit(x_train, y_train)

    def predict(self, test):
        
        if self.mode == 'noVI':
            test = np.delete(test, 3, 1)
        elif self.mode == 'noAW':
            test = np.delete(test, 6, 1)
        elif self.mode == 'noBOTH':
            test = np.delete(test, [3,6], 1)

        pred_result = self.clf.predict(test)
        return pred_result
    
    def get_parameters(self):
        return self.hls, self.act, self.alpha