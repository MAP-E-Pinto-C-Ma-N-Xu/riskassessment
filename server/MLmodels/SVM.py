import numpy as np
from sklearn import svm
from sklearn import metrics
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


class SVM_train:

    def __init__(self, mode):

        self.mode = mode
        self.kernel = 'rbf'
        self.C = 20
        self.gamma = 'scale'

    def add_confi(self, kernel, C, gamma):

        if not kernel in ['linear', 'poly', 'rbf', 'sigmoid', 'precomputed']: raise TypeError("For kernel function, Please choose from 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed' ")
        self.kernel = kernel

        if not (isinstance(C, float) and ( C <= 100)): raise Warning('Please choose a valid number for Regularization parameter')
        self.C = C

        if not(0<gamma<10): raise Warning("For gamma, Please choose from 0-10 ")
        self.gamma = gamma

    def train(self, x_train_, y_train_):

        x_train = np.copy(x_train_)
        y_train = np.copy(y_train_)

        if self.mode == 'noVI': 
            x_train = np.delete(x_train, 3, 1)

        elif self.mode == 'noAW':
            x_train = np.delete(x_train, 6, 1)

        elif self.mode == 'noBOTH':
            x_train = np.delete(x_train, [3,6], 1)

        self.classifier = make_pipeline(StandardScaler(), svm.SVC(kernel=self.kernel, C = self.C, class_weight='balanced',gamma=self.gamma))
        self.classifier.fit(x_train, y_train)
    
    def predict(self, test):
        
        # if self.mode == 'noVI':
        #     test = np.delete(test, 3, 1)
        # elif self.mode == 'noAW':
        #     test = np.delete(test, 6, 1)
        # elif self.mode == 'noBOTH':
        #     test = np.delete(test, [3,6], 1)

        pred_result = self.classifier.predict(test)
        return pred_result
    
    def get_parameters(self):
        return self.kernel, self.C, self.gamma

    def get_model(self):
        return self.classifier