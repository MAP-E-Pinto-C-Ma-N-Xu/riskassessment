import numpy as np
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

def SVM_train(mode, x_train_, y_train_,test):
    x_train = np.copy(x_train_)
    y_train = np.copy(y_train_)

    if mode == 'all':
        classifier = make_pipeline(StandardScaler(), svm.NuSVC(kernel='rbf',nu=0.01,cache_size=4000))
        classifier.fit(x_train, y_train)

    if mode == 'noVI': 
        x_train = np.delete(x_train, 3, 1)
        test = np.delete(test, 3, 1)
        classifier = make_pipeline(StandardScaler(), svm.NuSVC(kernel='rbf',nu=0.43,cache_size=4000))
        classifier.fit(x_train, y_train)

    elif mode == 'noAW':
        x_train = np.delete(x_train, 6, 1)
        test = np.delete(test, 6, 1)
        classifier = make_pipeline(StandardScaler(), svm.NuSVC(kernel='rbf',nu=0.15,cache_size=4000))
        classifier.fit(x_train, y_train)

    elif mode == 'noBOTH':
        x_train = np.delete(x_train, [3,6], 1)
        test = np.delete(test, [3,6], 1)
        classifier = svm.NuSVC(kernel='rbf',nu=0.6,cache_size=4000)
        classifier.fit(x_train, y_train)
    
    result = classifier.predict(test)

    return classifier