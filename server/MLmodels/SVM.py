import numpy as np
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler

def SVM_train(mode, x_train_, y_train_,test):
    
    x_train = np.copy(x_train_)
    y_train = np.copy(y_train_)

    if mode == 'all':
        classifier = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf',C = 20,cache_size =200))
        classifier.fit(x_train, y_train)

    if mode == 'noVI': 
        x_train = np.delete(x_train, 3, 1)
        test = np.delete(test, 3, 1)
        classifier = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf',C = 20,cache_size=200))
        classifier.fit(x_train, y_train)

    elif mode == 'noAW':
        x_train = np.delete(x_train, 6, 1)
        test = np.delete(test, 6, 1)
        classifier = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf',C = 20,cache_size=200))
        classifier.fit(x_train, y_train)

    elif mode == 'noBOTH':
        x_train = np.delete(x_train, [3,6], 1)
        test = np.delete(test, [3,6], 1)
        classifier = make_pipeline(StandardScaler(), svm.SVC(kernel='rbf',C = 20,cache_size=200))
        classifier.fit(x_train, y_train)
    
    pred_result = classifier.predict(test)

    return classifier, pred_result