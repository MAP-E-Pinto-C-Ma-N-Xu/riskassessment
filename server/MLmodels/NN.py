import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPClassifier
import pickle


def NN_train(mode, x_train_, y_train_,test):
    x_train = np.copy(x_train_)
    y_train = np.copy(y_train_)

    if mode == 'noVI': 
        x_train = np.delete(x_train, 3, 1)
        test = np.delete(test, 3, 1)
    elif mode == 'noAW':
        x_train = np.delete(x_train, 6, 1)
        test = np.delete(test, 6, 1)
    elif mode == 'noBOTH':
        x_train = np.delete(x_train, [3,6], 1)
        test = np.delete(test, [3,6], 1)

    NN_noisy_normal_tuned = MLPClassifier(hidden_layer_sizes= (50, 100, 50), activation='tanh', alpha=0.05, learning_rate='constant', solver='adam')
    NN_noisy_normal_tuned.fit(x_train, y_train)
    result = NN_noisy_normal_tuned.predict(test)
    #pickle.dump(NN_noisy_normal_tuned, open("NN_model_default","wb"))
    return NN_noisy_normal_tuned, result