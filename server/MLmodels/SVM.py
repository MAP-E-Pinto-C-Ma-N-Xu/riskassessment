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
        self.class_weight = 'balanced'

    def add_confi(self, kernel, C, class_weight):
        self.kernel = kernel
        self.C = C
        self.class_weight = class_weight

    def train(self, x_train_, y_train_):

        x_train = np.copy(x_train_)
        y_train = np.copy(y_train_)

        if self.mode == 'noVI': 
            x_train = np.delete(x_train, 3, 1)
            test = np.delete(test, 3, 1)

        elif self.mode == 'noAW':
            x_train = np.delete(x_train, 6, 1)
            test = np.delete(test, 6, 1)

        elif self.mode == 'noBOTH':
            x_train = np.delete(x_train, [3,6], 1)
            test = np.delete(test, [3,6], 1)

        self.classifier = make_pipeline(StandardScaler(), svm.SVC(kernel=self.kernel, C = self.C, class_weight=self.class_weight))
        self.classifier.fit(x_train, y_train)
    
    def predict(self, test):
        
        if self.mode == 'noVI':
            test = np.delete(test, 3, 1)
        elif self.mode == 'noAW':
            test = np.delete(test, 6, 1)
        elif self.mode == 'noBOTH':
            test = np.delete(test, [3,6], 1)

        pred_result = self.classifier.predict(test)
        return pred_result
    
    def get_parameters(self):
        return self.kernel, self.C, self.class_weight