import numpy as np
from sklearn.ensemble import RandomForestClassifier

def rf_train(mode, x_train_, y_train_,test):
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

    clf = RandomForestClassifier(random_state=2)
    clf.fit(x_train, y_train)
    result = clf.predict(test)

    return clf,  result
