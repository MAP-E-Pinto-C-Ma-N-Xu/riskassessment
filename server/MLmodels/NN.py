import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPClassifier
import pickle
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


def NN_train(mode, x_train_, y_train_,test):

    x_train = np.copy(x_train_)
    y_train = np.copy(y_train_)
    hls = (256, 256 ,256, 256, 64)
    act = 'relu'
    alpha = 0.0001
    lr = 'adaptive'
    solver = 'adam'

    if mode == 'noVI': 
        x_train = np.delete(x_train, 3, 1)
        test = np.delete(test, 3, 1)
        hls = (64, 256, 256, 48)
        act = 'relu'
        alpha = 0.05
        lr = 'adaptive'
        solver = 'adam'
    elif mode == 'noAW':
        x_train = np.delete(x_train, 6, 1)
        test = np.delete(test, 6, 1)
        hls = (64, 256, 256, 48)
        act = 'tanh'
        alpha = 0.0001
        lr = 'constant'
        solver = 'adam'
    elif mode == 'noBOTH':
        x_train = np.delete(x_train, [3,6], 1)
        test = np.delete(test, [3,6], 1)
        hls = (64, 256, 256, 48)
        act = 'tanh'
        alpha = 0.0001
        lr = 'adaptive'
        solver = 'adam'

    NN_noisy_tuned = make_pipeline(StandardScaler(),MLPClassifier(hidden_layer_sizes= hls, activation=act, alpha=alpha, learning_rate= lr, solver= solver, early_stopping=True, verbose = True ))
    NN_noisy_tuned.fit(x_train, y_train)
    pred_result = NN_noisy_tuned.predict(test)

    return NN_noisy_tuned, pred_result