import numpy as np
import cv2
import pyautogui
import time
import itertools
import string
import os
from random import randint


templates = [
                cv2.imread('search.png', 0),
                cv2.imread('yt.png', 0)
            ]

threshold = 0.96

def find_button(sh, template):
    res = cv2.matchTemplate(sh, template, cv2.TM_CCOEFF_NORMED)
    loc = np.where(res >= threshold)
    if loc[0].size != 0:
        pyautogui.click(list(zip(*loc[::-1]))[0])
        return True
    return False


CHARSET = list(string.ascii_letters + string.digits + string.punctuation)

while True:
    time.sleep(3)
    sh = np.asarray(pyautogui.screenshot().convert(mode = 'L'))
    for template in templates:
        if find_button(sh, template):
            break
    
    URL = "watch?v="
    URL = URL + CHARSET[randint(0, 61)]  
    URL = URL + CHARSET[randint(0, 61)] 
    URL = URL + "QP6" 
    URL = URL + CHARSET[randint(0, 61)] 
    URL = URL + "tP2Rg"
    
    
    pyautogui.write("www.youtube.com")
    pyautogui.keyDown("shift")
    pyautogui.press("/")
    pyautogui.keyUp("shift")
    pyautogui.write(URL)
    pyautogui.press('enter')











