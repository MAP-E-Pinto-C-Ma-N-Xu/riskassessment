import numpy as np

def Label_Processor(y_train_, y_test_):
    y_train = np.copy(y_train_)
    y_test = np.copy(y_test_)

    y_train[y_train >= 0.4] = 2
    y_train[y_train <= 0.1] = 0
    y_train[np.logical_and(0 < y_train, y_train < 2)] = 1

    return y_train, y_test
    